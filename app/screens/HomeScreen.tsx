import { View, Text, StyleSheet, TouchableOpacity, useWindowDimensions, ScrollView } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';
import { Ionicons } from "@expo/vector-icons";
import { fonts, theme } from "../theme";

export default function HomeScreen({ navigation }: any) {
  const { width, height } = useWindowDimensions();
  const compact = width < 380;
  const wide = width >= 768;
  const titleSize = wide ? 92 : compact ? width * 0.16 : Math.min(width * 0.18, 78);
  const titleLineHeight = wide ? 84 : compact ? titleSize * 0.9 : titleSize * 0.92;
  const contentMaxWidth = wide ? 680 : 520;

  return (
    <View style={styles.container}>
      <View style={styles.gridBackground} />
      <View
        style={[
          styles.accentOrb,
          {
            top: wide ? 140 : compact ? 92 : 110,
            right: wide ? 40 : -40,
            width: wide ? 240 : compact ? 140 : 180,
            height: wide ? 240 : compact ? 140 : 180,
            borderRadius: wide ? 120 : compact ? 70 : 90,
          },
        ]}
      />

      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[
            styles.content,
            {
              minHeight: height - 24,
              paddingHorizontal: wide ? 40 : compact ? 18 : theme.spacing.screen,
              paddingTop: compact ? 14 : 24,
              paddingBottom: compact ? 22 : 34,
              maxWidth: contentMaxWidth,
              alignSelf: 'center',
              width: '100%',
            },
          ]}
        >
          <Animated.View
            entering={FadeInDown.duration(900).springify()}
            style={[styles.textContainer, { marginTop: compact ? 10 : wide ? 36 : 24 }]}
          >
            <View style={[styles.badge, { marginBottom: compact ? 18 : 24 }]}>
              <View style={styles.badgeDot} />
              <Text style={styles.badgeText}>HYPERLOCAL INFRASTRUCTURE</Text>
            </View>

            <Text style={[styles.massiveTitle, { fontSize: titleSize, lineHeight: titleLineHeight }]}>ANY TASK.</Text>
            <Text style={[styles.massiveTitle, { fontSize: titleSize, lineHeight: titleLineHeight }]}>ANY</Text>
            <Text style={[styles.massiveTitle, styles.accentText, { fontSize: titleSize, lineHeight: titleLineHeight }]}>MOMENT.</Text>

            <Text
              style={[
                styles.subtitle,
                {
                  marginTop: compact ? 16 : 22,
                  fontSize: wide ? 20 : compact ? 16 : 18,
                  lineHeight: wide ? 30 : compact ? 24 : 28,
                  maxWidth: wide ? 420 : 320,
                },
              ]}
            >
              The mobile layer of Around-U: verified neighborhood help with a cleaner, calmer interface.
            </Text>
          </Animated.View>

          <Animated.View
            entering={FadeInUp.delay(250).duration(900).springify()}
            style={[styles.bottomContainer, { gap: compact ? 12 : 14 }]}
          >
            <View style={[styles.heroCard, { padding: wide ? 28 : compact ? 18 : 22 }]}>
              <Text style={[styles.heroCardTitle, { fontSize: compact ? 16 : 18 }]}>Trusted by local neighbors</Text>
              <Text style={[styles.heroCardText, { fontSize: compact ? 13 : 14 }]}>
                Find verified workers fast, or join the network as a partner.
              </Text>
            </View>

            <TouchableOpacity
              style={[styles.button, { paddingVertical: compact ? 17 : 20 }]}
              onPress={() => navigation.replace("MainTabs")}
              activeOpacity={0.92}
            >
              <Text style={[styles.buttonText, { fontSize: compact ? 15 : 17 }]}>GET STARTED</Text>
              <Ionicons name="arrow-forward" size={20} color={theme.colors.white} />
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.secondaryButton, { paddingVertical: compact ? 16 : 18 }]}
              activeOpacity={0.85}
            >
              <Text style={styles.secondaryButtonText}>BECOME A PARTNER</Text>
            </TouchableOpacity>

            <Text style={styles.footerText}>WHITE. BLACK. GREEN. NOTHING EXTRA.</Text>
          </Animated.View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  safeArea: {
    flex: 1,
  },
  gridBackground: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: theme.colors.background,
    opacity: 0.55,
  },
  accentOrb: {
    position: 'absolute',
    backgroundColor: '#24A14822',
  },
  content: {
    flex: 1,
    paddingHorizontal: theme.spacing.screen,
    paddingTop: 24,
    paddingBottom: 34,
    justifyContent: "space-between",
  },
  textContainer: {
    marginTop: 24,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radius.pill,
    borderWidth: 1,
    borderColor: theme.colors.border,
    paddingHorizontal: 14,
    paddingVertical: 8,
    marginBottom: 24,
  },
  badgeDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: theme.colors.accent,
    marginRight: 8,
  },
  badgeText: {
    color: theme.colors.ink,
    fontFamily: fonts.heading,
    fontSize: 10,
    letterSpacing: 1.6,
  },
  massiveTitle: {
    fontFamily: fonts.display,
    color: theme.colors.ink,
    letterSpacing: -3.5,
  },
  accentText: {
    color: theme.colors.accent,
  },
  subtitle: {
    marginTop: 22,
    maxWidth: 320,
    fontSize: 18,
    lineHeight: 28,
    color: theme.colors.inkSoft,
    fontFamily: fonts.bodyStrong,
  },
  bottomContainer: {
    gap: 14,
  },
  heroCard: {
    backgroundColor: theme.colors.cardDark,
    borderRadius: theme.radius.lg,
    padding: 22,
  },
  heroCardTitle: {
    color: theme.colors.white,
    fontSize: 18,
    fontFamily: fonts.heading,
    marginBottom: 8,
  },
  heroCardText: {
    color: '#CFCFCF',
    fontSize: 14,
    lineHeight: 22,
    fontFamily: fonts.body,
  },
  button: {
    backgroundColor: theme.colors.accent,
    borderRadius: theme.radius.md,
    paddingVertical: 20,
    paddingHorizontal: 22,
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'center',
    gap: 8,
  },
  buttonText: {
    color: theme.colors.white,
    fontFamily: fonts.display,
    fontSize: 17,
    letterSpacing: 1,
  },
  secondaryButton: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radius.md,
    borderWidth: 1,
    borderColor: theme.colors.border,
    paddingVertical: 18,
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: theme.colors.ink,
    fontFamily: fonts.heading,
    fontSize: 14,
    letterSpacing: 1,
  },
  footerText: {
    color: theme.colors.inkMuted,
    fontSize: 10,
    fontFamily: fonts.heading,
    textAlign: 'center',
    marginTop: 8,
    letterSpacing: 2,
  },
});
