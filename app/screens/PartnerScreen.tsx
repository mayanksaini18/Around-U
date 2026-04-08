import React, { useState } from 'react';
import {
  View, Text, StyleSheet, TextInput, TouchableOpacity,
  Alert, ActivityIndicator, ScrollView, StatusBar, useWindowDimensions,
} from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from "@expo/vector-icons";
import { fonts, theme } from "../theme";

export default function PartnerScreen() {
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const compact = width < 380;
  const wide = width >= 768;
  const contentWidth = wide ? 720 : 520;
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "", phone: "", service: "", pincode: "", location: "", city: "",
  });

  const handleSubmit = async () => {
    if (Object.values(form).some(value => !value)) {
      Alert.alert("MISSING INFO", "Please fill all fields to join the network.");
      return;
    }

    try {
      setLoading(true);
      const response = await fetch("https://around-u-ma5e.onrender.com/api/worker/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          service: form.service.toLowerCase(),
          pincode: form.pincode.trim(),
        }),
      });

      if (response.ok) {
        Alert.alert("WELCOME ABOARD", "We'll verify your skills and contact you shortly.");
        setForm({ name: "", phone: "", service: "", pincode: "", location: "", city: "" });
      } else {
        Alert.alert("ERROR", "Submission failed. Please try again.");
      }
    } catch (error) {
      Alert.alert("NETWORK ERROR", "Check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  const renderInput = (
    icon: any,
    placeholder: string,
    value: string,
    key: keyof typeof form,
    keyboardType: any = "default"
  ) => (
    <View style={styles.inputWrapper}>
      <Ionicons name={icon} size={18} color={theme.colors.inkSoft} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={theme.colors.inkMuted}
        keyboardType={keyboardType}
        value={value}
        onChangeText={(text) => setForm({ ...form, [key]: text })}
      />
    </View>
  );

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <StatusBar barStyle="dark-content" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.scrollContent,
          {
            paddingHorizontal: wide ? 32 : compact ? 16 : theme.spacing.screen,
            maxWidth: contentWidth,
            alignSelf: 'center',
            width: '100%',
          },
        ]}
      >
        <View style={styles.header}>
          <View style={styles.kickerRow}>
            <View style={styles.kickerDot} />
            <Text style={styles.kicker}>PARTNER NETWORK</Text>
          </View>
          <Text
            style={[
              styles.title,
              {
                fontSize: wide ? 58 : compact ? 36 : 46,
                lineHeight: wide ? 64 : compact ? 42 : 52,
              },
            ]}
          >
            WORK LOCAL.{"\n"}EARN TRUST.
          </Text>
          <Text
            style={[
              styles.subtitle,
              {
                fontSize: compact ? 15 : 16,
                lineHeight: compact ? 22 : 24,
                maxWidth: wide ? 430 : 320,
              },
            ]}
          >
            Bring your skills into the Around-U network with a cleaner, more credible onboarding flow.
          </Text>
        </View>

        <View style={[styles.formContainer, { padding: compact ? 14 : 18 }]}>
          {renderInput("person-outline", "FULL NAME", form.name, "name")}
          {renderInput("call-outline", "PHONE NUMBER", form.phone, "phone", "phone-pad")}
          {renderInput("construct-outline", "SERVICE", form.service, "service")}
          {renderInput("location-outline", "PINCODE", form.pincode, "pincode", "numeric")}
          {renderInput("business-outline", "AREA / LOCATION", form.location, "location")}
          {renderInput("map-outline", "CITY", form.city, "city")}

          <TouchableOpacity
            style={[styles.submitButton, { padding: compact ? 17 : 19 }]}
            onPress={handleSubmit}
            disabled={loading}
            activeOpacity={0.88}
          >
            {loading ? (
              <ActivityIndicator color={theme.colors.white} />
            ) : (
              <Text style={styles.submitText}>APPLY NOW</Text>
            )}
          </TouchableOpacity>
        </View>

        <View style={[styles.trustCard, { padding: compact ? 16 : 18 }]}>
          <Ionicons name="shield-checkmark" size={20} color={theme.colors.accent} />
          <Text style={styles.trustTitle}>VERIFIED PROFESSIONALS ONLY</Text>
          <Text style={styles.trustText}>
            Every application is reviewed before we onboard workers into the neighborhood network.
          </Text>
        </View>
      </ScrollView>
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
    paddingBottom: 36,
  },
  header: {
    marginBottom: 28,
    paddingTop: 24,
  },
  kickerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  kickerDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: theme.colors.accent,
    marginRight: 8,
  },
  kicker: {
    color: theme.colors.accentDark,
    fontFamily: fonts.heading,
    fontSize: 12,
    letterSpacing: 1.5,
  },
  title: {
    fontSize: 46,
    lineHeight: 52,
    color: theme.colors.ink,
    fontFamily: fonts.display,
    letterSpacing: -2,
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 24,
    color: theme.colors.inkSoft,
    fontFamily: fonts.bodyStrong,
    marginTop: 14,
    maxWidth: 320,
  },
  formContainer: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radius.lg,
    padding: 18,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.colors.surfaceMuted,
    borderRadius: 16,
    paddingHorizontal: 18,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  input: {
    flex: 1,
    paddingVertical: 17,
    marginLeft: 12,
    fontSize: 14,
    color: theme.colors.ink,
    fontFamily: fonts.bodyStrong,
  },
  submitButton: {
    backgroundColor: theme.colors.cardDark,
    padding: 19,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  submitText: {
    color: theme.colors.white,
    fontFamily: fonts.heading,
    fontSize: 15,
    letterSpacing: 1,
  },
  trustCard: {
    marginTop: 22,
    backgroundColor: theme.colors.accentSoft,
    borderRadius: theme.radius.md,
    padding: 18,
    borderWidth: 1,
    borderColor: '#CBE9D2',
  },
  trustTitle: {
    marginTop: 12,
    color: theme.colors.ink,
    fontFamily: fonts.heading,
    fontSize: 14,
    letterSpacing: 1,
  },
  trustText: {
    marginTop: 8,
    color: theme.colors.accentDark,
    fontFamily: fonts.body,
    fontSize: 14,
    lineHeight: 22,
  },
});
