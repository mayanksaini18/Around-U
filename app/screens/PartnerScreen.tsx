import React, { useState } from 'react';
import {
  View, Text, StyleSheet, TextInput, TouchableOpacity,
  Alert, ActivityIndicator, ScrollView, StatusBar,
} from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from "@expo/vector-icons";

export default function PartnerScreen() {
  const insets = useSafeAreaInsets();
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

  const renderInput = (icon: any, placeholder: string, value: string, key: keyof typeof form, keyboardType: any = "default") => (
    <View style={styles.inputWrapper}>
      <Ionicons name={icon} size={18} color="#888" />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#555"
        keyboardType={keyboardType}
        value={value}
        onChangeText={(text) => setForm({ ...form, [key]: text })}
      />
    </View>
  );

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <StatusBar barStyle="light-content" />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        {/* Massive Header */}
        <View style={styles.header}>
          <Text style={styles.title}>BECOME A{"\n"}PARTNER.</Text>
          <Text style={styles.subtitle}>
            MONETIZE YOUR SKILLS ON THE AROUNDU NETWORK.
          </Text>
        </View>

        {/* Form Section */}
        <View style={styles.formContainer}>
          {renderInput("person-outline", "FULL NAME", form.name, "name")}
          {renderInput("call-outline", "PHONE NUMBER", form.phone, "phone", "phone-pad")}
          {renderInput("construct-outline", "SERVICE (E.G. PLUMBER)", form.service, "service")}
          {renderInput("location-outline", "PINCODE", form.pincode, "pincode", "numeric")}
          {renderInput("business-outline", "AREA / LOCATION", form.location, "location")}
          {renderInput("map-outline", "CITY", form.city, "city")}

          <TouchableOpacity
            style={styles.submitButton}
            onPress={handleSubmit}
            disabled={loading}
            activeOpacity={0.8}
          >
            {loading ? (
              <ActivityIndicator color="#000" />
            ) : (
              <Text style={styles.submitText}>APPLY NOW</Text>
            )}
          </TouchableOpacity>
        </View>

        {/* Trust Badge */}
        <View style={styles.trustSection}>
          <Ionicons name="shield-checkmark" size={20} color="#FFF" />
          <Text style={styles.trustText}>VERIFIED PROFESSIONALS ONLY.</Text>
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000" },
  scrollContent: { padding: 25 },
  header: { marginBottom: 40 },
  title: {
    fontSize: 48,
    fontWeight: "900",
    color: "#FFF",
    lineHeight: 46,
    letterSpacing: -2,
  },
  subtitle: {
    fontSize: 14,
    color: "#888",
    fontWeight: "700",
    marginTop: 15,
    letterSpacing: 1,
  },
  formContainer: { marginTop: 10 },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1A1A1A",
    borderRadius: 16,
    paddingHorizontal: 18,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#333",
  },
  input: {
    flex: 1,
    paddingVertical: 18,
    marginLeft: 12,
    fontSize: 14,
    color: "#FFF",
    fontWeight: "600",
  },
  submitButton: {
    backgroundColor: "#FFF",
    padding: 20,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  submitText: {
    color: "#000",
    fontWeight: "900",
    fontSize: 16,
    letterSpacing: 1,
  },
  trustSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    paddingBottom: 40,
  },
  trustText: {
    marginLeft: 10,
    fontSize: 12,
    color: "#FFF",
    fontWeight: "800",
    letterSpacing: 0.5,
  },
});