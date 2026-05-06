import { useState, useMemo } from 'react';
import {
  View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity,
  StatusBar, ActivityIndicator, Linking, useWindowDimensions
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { fonts, theme } from "../theme";

const CATEGORIES = [
  { id: '1', name: 'ELECTRICIAN', size: 'large', icon: 'flash-outline' },
  { id: '2', name: 'PLUMBER', size: 'small', icon: 'construct-outline' },
  { id: '3', name: 'CLEANER', size: 'small', icon: 'water-outline' },
  { id: '4', name: 'CARPENTER', size: 'large', icon: 'hammer-outline' },
  { id: '5', name: 'PAINTER', size: 'small', icon: 'color-palette-outline' },
  { id: '6', name: 'TUTOR', size: 'small', icon: 'book-outline' },
  { id: '7', name: 'AC REPAIR', size: 'large', icon: 'snow-outline' },
  { id: '8', name: 'MECHANIC', size: 'small', icon: 'car-outline' },
  { id: '9', name: 'GARDENER', size: 'small', icon: 'leaf-outline' },
];

export default function DiscoveryScreen({ navigation }: any) {
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const compact = width < 380;
  const wide = width >= 768;
  const contentWidth = wide ? 720 : 520;
  const smallTileWidth = wide ? '49%' : compact ? '100%' : '48%';
  const largeTileHeight = wide ? 190 : compact ? 144 : 160;
  const smallTileHeight = wide ? 190 : compact ? 136 : 160;
  const [service, setService] = useState("");
  const [pincode, setPincode] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);

  const handleSearch = async (manualService?: string, pg = 1) => {
    const searchService = manualService || service;
    if (!searchService || !pincode) return;

    try {
      pg === 1 ? setLoading(true) : setLoadingMore(true);
      if (pg === 1) setHasSearched(true);
      const url = `https://around-u-ma5e.onrender.com/api/search/?service=${searchService}&pincode=${pincode}&page=${pg}&limit=10`;
      const response = await fetch(url);
      const data = await response.json();
      const newResults = data.data || [];
      if (pg === 1) {
        setResults(newResults);
      } else {
        setResults(prev => [...prev, ...newResults]);
      }
      setPage(pg);
      setHasMore(newResults.length === 10);
    } catch (error) {
      console.error("Search error:", error);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };

  const HeaderComponent = useMemo(() => {
    return (
      <View>
        <View style={styles.heroBlock}>
          <Text style={styles.kicker}>FIND HELP</Text>
          <Text
            style={[
              styles.header,
              {
                fontSize: wide ? 58 : compact ? 36 : 46,
                lineHeight: wide ? 64 : compact ? 42 : 52,
              },
            ]}
          >
            VERIFIED{"\n"}LOCAL DOERS.
          </Text>
          <Text
            style={[
              styles.headerCopy,
              {
                fontSize: compact ? 15 : 16,
                lineHeight: compact ? 22 : 24,
                maxWidth: wide ? 430 : 320,
              },
            ]}
          >
            Search by service and pincode to find trusted professionals near you.
          </Text>
        </View>

        <View style={[styles.searchCard, { padding: compact ? 14 : 18 }]}>
          <View style={styles.inputWrapper}>
            <Ionicons name="construct-outline" size={18} color={theme.colors.inkSoft} />
            <TextInput
              style={styles.input}
              placeholder="What service?"
              placeholderTextColor={theme.colors.inkMuted}
              value={service}
              onChangeText={setService}
            />
          </View>

          <View style={styles.inputWrapper}>
            <Ionicons name="location-outline" size={18} color={theme.colors.inkSoft} />
            <TextInput
              style={styles.input}
              placeholder="Enter pincode"
              placeholderTextColor={theme.colors.inkMuted}
              keyboardType="numeric"
              value={pincode}
              onChangeText={setPincode}
            />
          </View>

          <TouchableOpacity style={styles.searchButton} onPress={() => handleSearch()}>
            {loading ? (
              <ActivityIndicator color={theme.colors.white} />
            ) : (
              <Text style={styles.searchButtonText}>SEARCH</Text>
            )}
          </TouchableOpacity>
        </View>

        {!hasSearched && (
          <View style={styles.grid}>
            {CATEGORIES.map((item) => (
              <TouchableOpacity
                key={item.id}
                onPress={() => {
                  setService(item.name);
                  handleSearch(item.name);
                }}
                style={[
                  styles.tile,
                  item.size === 'large' ? styles.tileLarge : styles.tileSmall,
                  item.size === 'large'
                    ? { height: largeTileHeight }
                    : { width: smallTileWidth as any, height: smallTileHeight },
                ]}
              >
                <Ionicons
                  name={item.icon as any}
                  size={24}
                  color={item.size === 'large' ? theme.colors.white : theme.colors.accentDark}
                  style={styles.tileIcon}
                />
                <Text style={[
                  styles.tileEyebrow,
                  item.size === 'large' ? styles.tileEyebrowDark : styles.tileEyebrowLight,
                ]}>
                  QUICK PICK
                </Text>
                <Text style={[
                  styles.tileText,
                  item.size === 'large' ? styles.tileTextDark : styles.tileTextLight,
                ]}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>
    );
  }, [service, pincode, loading, hasSearched]);

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <StatusBar barStyle="dark-content" />
      <FlatList
        data={results}
        ListHeaderComponent={HeaderComponent}
        contentContainerStyle={[
          styles.scrollContent,
          {
            paddingHorizontal: wide ? 32 : compact ? 16 : theme.spacing.screen,
            maxWidth: contentWidth,
            alignSelf: 'center',
            width: '100%',
          },
        ]}
        keyExtractor={(item) => item._id}
        keyboardShouldPersistTaps="handled"
        renderItem={({ item }) => (
          <View style={[styles.resultCard, { padding: compact ? 16 : 18 }]}>
            <View style={styles.resultCopy}>
              <Text style={styles.resName}>{item.name}</Text>
              <View style={styles.ratingRow}>
                <Ionicons name="star" size={14} color={theme.colors.warning} />
                <Text style={styles.resRating}>
                  {item.rating?.toFixed(1) || "0.0"} ({item.reviewCount || 0})
                </Text>
              </View>
              <Text style={styles.resService}>{item.service} • {item.location}</Text>
              {item.bio ? <Text style={styles.resBio} numberOfLines={2}>"{item.bio}"</Text> : null}
              <Text style={styles.resLocation}>{item.city} • {item.pincode}</Text>
            </View>
            <View style={styles.cardActions}>
              <TouchableOpacity
                style={styles.callButton}
                onPress={() => Linking.openURL(`tel:${item.phone}`)}
              >
                <Ionicons name="call" size={20} color={theme.colors.white} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.profileButton}
                onPress={() => navigation.navigate('ProviderDetail', { provider: item })}
              >
                <Ionicons name="arrow-forward" size={18} color={theme.colors.ink} />
              </TouchableOpacity>
            </View>
          </View>
        )}
        ListEmptyComponent={
          hasSearched && !loading ? (
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>No professionals found in this area.</Text>
            </View>
          ) : null
        }
        ListFooterComponent={
          hasMore ? (
            <TouchableOpacity
              style={styles.loadMoreButton}
              onPress={() => handleSearch(service, page + 1)}
              disabled={loadingMore}
            >
              {loadingMore
                ? <ActivityIndicator color={theme.colors.white} />
                : <Text style={styles.loadMoreText}>LOAD MORE</Text>
              }
            </TouchableOpacity>
          ) : null
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  scrollContent: {
    paddingHorizontal: theme.spacing.screen,
    paddingBottom: 28,
  },
  heroBlock: {
    paddingTop: 24,
    marginBottom: 20,
  },
  kicker: {
    color: theme.colors.accentDark,
    fontFamily: fonts.heading,
    fontSize: 12,
    letterSpacing: 1.6,
    marginBottom: 10,
  },
  header: {
    fontSize: 46,
    lineHeight: 52,
    color: theme.colors.ink,
    fontFamily: fonts.display,
    letterSpacing: -2,
    marginBottom: 14,
  },
  headerCopy: {
    color: theme.colors.inkSoft,
    fontSize: 16,
    lineHeight: 24,
    fontFamily: fonts.bodyStrong,
    maxWidth: 320,
  },
  searchCard: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radius.lg,
    borderWidth: 1,
    borderColor: theme.colors.border,
    padding: 18,
    marginBottom: 28,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.colors.surfaceMuted,
    borderRadius: 16,
    paddingHorizontal: 15,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  input: {
    flex: 1,
    paddingVertical: 15,
    marginLeft: 10,
    color: theme.colors.ink,
    fontFamily: fonts.bodyStrong,
  },
  searchButton: {
    backgroundColor: theme.colors.cardDark,
    padding: 17,
    borderRadius: 16,
    alignItems: 'center',
  },
  searchButtonText: {
    fontFamily: fonts.heading,
    color: theme.colors.white,
    fontSize: 15,
    letterSpacing: 1,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  tile: {
    borderRadius: theme.radius.lg,
    padding: 20,
    marginBottom: 15,
    justifyContent: 'flex-end',
    overflow: 'hidden',
  },
  tileSmall: {
    backgroundColor: theme.colors.accentSoft,
    borderWidth: 1,
    borderColor: '#CBE9D2',
  },
  tileLarge: {
    width: '100%',
    backgroundColor: theme.colors.cardDark,
  },
  tileIcon: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  tileEyebrow: {
    fontFamily: fonts.heading,
    fontSize: 10,
    letterSpacing: 1.4,
    marginBottom: 8,
  },
  tileEyebrowDark: {
    color: '#A9A9A9',
  },
  tileEyebrowLight: {
    color: theme.colors.accentDark,
  },
  tileText: {
    fontSize: 20,
    fontFamily: fonts.heading,
  },
  tileTextDark: {
    color: theme.colors.white,
  },
  tileTextLight: {
    color: theme.colors.ink,
  },
  resultCard: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radius.md,
    borderWidth: 1,
    borderColor: theme.colors.border,
    padding: 18,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  resultCopy: {
    flex: 1,
  },
  resName: {
    color: theme.colors.ink,
    fontSize: 18,
    fontFamily: fonts.heading,
  },
  resService: {
    color: theme.colors.inkSoft,
    fontSize: 14,
    marginTop: 4,
    textTransform: 'capitalize',
    fontFamily: fonts.body,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  resRating: {
    color: theme.colors.ink,
    fontSize: 14,
    fontFamily: fonts.bodyStrong,
    marginLeft: 4,
  },
  resBio: {
    color: theme.colors.inkSoft,
    fontSize: 13,
    marginTop: 6,
    fontStyle: 'italic',
    fontFamily: fonts.body,
  },
  resLocation: {
    color: theme.colors.inkMuted,
    fontSize: 12,
    marginTop: 4,
    fontFamily: fonts.body,
  },
  cardActions: {
    flexDirection: 'column',
    gap: 8,
  },
  callButton: {
    backgroundColor: theme.colors.accent,
    padding: 14,
    borderRadius: 14,
  },
  profileButton: {
    backgroundColor: theme.colors.surfaceMuted,
    padding: 14,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: theme.colors.border,
    alignItems: 'center',
  },
  emptyContainer: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  emptyText: {
    color: theme.colors.inkMuted,
    fontFamily: fonts.bodyStrong,
  },
  loadMoreButton: {
    backgroundColor: theme.colors.cardDark,
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 8,
  },
  loadMoreText: {
    color: theme.colors.white,
    fontFamily: fonts.heading,
    fontSize: 14,
    letterSpacing: 1,
  },
});
