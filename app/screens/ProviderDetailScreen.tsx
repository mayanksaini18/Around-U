import { useState } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, ScrollView,
  Linking, ActivityIndicator, StatusBar, Alert, TextInput,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { fonts, theme } from '../theme';

export default function ProviderDetailScreen({ route, navigation }: any) {
  const { provider } = route.params;
  const insets = useSafeAreaInsets();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleReview = async () => {
    if (rating === 0) {
      Alert.alert('RATING REQUIRED', 'Please tap a star before submitting.');
      return;
    }
    try {
      setSubmitting(true);
      const res = await fetch(
        `https://around-u-ma5e.onrender.com/api/review/${provider._id}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ rating, comment: comment.trim() || undefined }),
        }
      );
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      Alert.alert('THANK YOU', `New rating: ${data.rating.toFixed(1)} (${data.reviewCount} reviews)`);
      setRating(0);
      setComment('');
    } catch (err: any) {
      Alert.alert('ERROR', err.message || 'Could not submit review.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={22} color={theme.colors.ink} />
        </TouchableOpacity>
        <Text style={styles.topBarTitle} numberOfLines={1}>{provider.name}</Text>
        <View style={{ width: 38 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        {/* Avatar + name */}
        <View style={styles.avatarRow}>
          <View style={styles.avatar}>
            <Text style={styles.avatarLetter}>{provider.name?.[0]?.toUpperCase() ?? '?'}</Text>
            {provider.verified && (
              <View style={styles.verifiedBadge}>
                <Ionicons name="shield-checkmark" size={12} color={theme.colors.white} />
              </View>
            )}
          </View>
          <View style={styles.nameBlock}>
            <Text style={styles.serviceBadge}>{provider.service?.toUpperCase()}</Text>
            <Text style={styles.name}>{provider.name}</Text>
            {provider.rating > 0 && (
              <View style={styles.ratingRow}>
                <Ionicons name="star" size={14} color={theme.colors.warning} />
                <Text style={styles.ratingText}>
                  {provider.rating.toFixed(1)} ({provider.reviewCount || 0})
                </Text>
              </View>
            )}
          </View>
        </View>

        {/* Info card */}
        <View style={styles.infoCard}>
          <InfoRow icon="location-outline" text={`${provider.location}, ${provider.city} — ${provider.pincode}`} />
          {provider.price && <InfoRow icon="pricetag-outline" text={provider.price} />}
          <InfoRow icon="call-outline" text={provider.phone} />
          {provider.available === false && (
            <InfoRow icon="close-circle-outline" text="Currently unavailable" color={theme.colors.warning} />
          )}
        </View>

        {/* Bio */}
        {provider.bio && (
          <View style={styles.bioCard}>
            <Text style={styles.bioQuote}>"{provider.bio}"</Text>
          </View>
        )}

        {/* Call CTA */}
        <TouchableOpacity
          style={styles.callButton}
          onPress={() => Linking.openURL(`tel:${provider.phone}`)}
          activeOpacity={0.88}
        >
          <Ionicons name="call" size={20} color={theme.colors.white} />
          <Text style={styles.callButtonText}>CALL {provider.name.split(' ')[0].toUpperCase()}</Text>
        </TouchableOpacity>

        {/* Review section */}
        <View style={styles.reviewSection}>
          <Text style={styles.reviewTitle}>LEAVE A REVIEW</Text>

          <View style={styles.starsRow}>
            {[1, 2, 3, 4, 5].map((s) => (
              <TouchableOpacity key={s} onPress={() => setRating(s)}>
                <Ionicons
                  name={s <= rating ? 'star' : 'star-outline'}
                  size={32}
                  color={s <= rating ? theme.colors.warning : theme.colors.border}
                />
              </TouchableOpacity>
            ))}
          </View>

          <TextInput
            style={styles.commentInput}
            placeholder="Great work, very professional... (optional)"
            placeholderTextColor={theme.colors.inkMuted}
            value={comment}
            onChangeText={(t) => setComment(t.slice(0, 500))}
            multiline
            maxLength={500}
          />

          <TouchableOpacity
            style={[styles.submitButton, rating === 0 && styles.submitDisabled]}
            onPress={handleReview}
            disabled={submitting || rating === 0}
            activeOpacity={0.88}
          >
            {submitting
              ? <ActivityIndicator color={theme.colors.white} />
              : <Text style={styles.submitText}>SUBMIT REVIEW</Text>
            }
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

function InfoRow({ icon, text, color }: { icon: any; text: string; color?: string }) {
  return (
    <View style={styles.infoRow}>
      <Ionicons name={icon} size={16} color={color ?? theme.colors.inkSoft} />
      <Text style={[styles.infoText, color ? { color } : {}]}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.background },
  topBar: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    paddingHorizontal: 16, paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: theme.colors.border,
    backgroundColor: theme.colors.surface,
  },
  backButton: { width: 38, height: 38, borderRadius: 19, backgroundColor: theme.colors.surfaceMuted, alignItems: 'center', justifyContent: 'center' },
  topBarTitle: { flex: 1, textAlign: 'center', fontFamily: fonts.heading, fontSize: 16, color: theme.colors.ink, marginHorizontal: 8 },
  content: { padding: 20, paddingBottom: 40 },
  avatarRow: { flexDirection: 'row', gap: 16, marginBottom: 20, alignItems: 'center' },
  avatar: { width: 72, height: 72, borderRadius: 22, backgroundColor: theme.colors.cardDark, alignItems: 'center', justifyContent: 'center' },
  avatarLetter: { color: theme.colors.white, fontSize: 28, fontFamily: fonts.display },
  verifiedBadge: { position: 'absolute', bottom: -4, right: -4, backgroundColor: theme.colors.accent, borderRadius: 10, padding: 2 },
  nameBlock: { flex: 1 },
  serviceBadge: { color: theme.colors.accentDark, fontFamily: fonts.heading, fontSize: 10, letterSpacing: 1.4, marginBottom: 4 },
  name: { color: theme.colors.ink, fontFamily: fonts.display, fontSize: 24, letterSpacing: -0.5 },
  ratingRow: { flexDirection: 'row', alignItems: 'center', marginTop: 6, gap: 4 },
  ratingText: { color: theme.colors.ink, fontFamily: fonts.bodyStrong, fontSize: 13 },
  infoCard: { backgroundColor: theme.colors.surface, borderRadius: theme.radius.lg, padding: 18, borderWidth: 1, borderColor: theme.colors.border, marginBottom: 14, gap: 12 },
  infoRow: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  infoText: { color: theme.colors.inkSoft, fontFamily: fonts.body, fontSize: 14, flex: 1 },
  bioCard: { backgroundColor: theme.colors.accentSoft, borderRadius: theme.radius.md, padding: 16, marginBottom: 20, borderWidth: 1, borderColor: '#CBE9D2' },
  bioQuote: { color: theme.colors.accentDark, fontFamily: fonts.body, fontSize: 14, lineHeight: 22, fontStyle: 'italic' },
  callButton: { backgroundColor: theme.colors.accent, borderRadius: theme.radius.md, padding: 18, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 28 },
  callButtonText: { color: theme.colors.white, fontFamily: fonts.heading, fontSize: 16, letterSpacing: 1 },
  reviewSection: { backgroundColor: theme.colors.surface, borderRadius: theme.radius.lg, padding: 20, borderWidth: 1, borderColor: theme.colors.border },
  reviewTitle: { color: theme.colors.ink, fontFamily: fonts.heading, fontSize: 13, letterSpacing: 1.4, marginBottom: 16 },
  starsRow: { flexDirection: 'row', gap: 8, marginBottom: 16 },
  commentInput: { backgroundColor: theme.colors.surfaceMuted, borderRadius: 14, padding: 14, color: theme.colors.ink, fontFamily: fonts.body, fontSize: 14, minHeight: 80, textAlignVertical: 'top', borderWidth: 1, borderColor: theme.colors.border, marginBottom: 14 },
  submitButton: { backgroundColor: theme.colors.cardDark, padding: 16, borderRadius: 16, alignItems: 'center' },
  submitDisabled: { opacity: 0.4 },
  submitText: { color: theme.colors.white, fontFamily: fonts.heading, fontSize: 14, letterSpacing: 1 },
});
