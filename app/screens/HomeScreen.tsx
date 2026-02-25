import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
export default function HomeScreen({ navigation }: any) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Text style={styles.massiveTitle}>AROUND</Text>
          <Text style={[styles.massiveTitle, styles.outlineText]}>U.</Text>
          <Text style={styles.subtitle}>
            HYPERLOCAL SERVICES {"\n"}ON DEMAND.
          </Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.replace("MainTabs")}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>FIND HELP NOW</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000", // High contrast black
  },
  content: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: "space-between",
    paddingVertical: 60,
  },
  textContainer: {
    marginTop: 40,
  },
  massiveTitle: {
    fontSize: 72, // Massive typography
    fontWeight: "900",
    color: "white",
    lineHeight: 80,
    letterSpacing: -5,
  },
  outlineText: {
    color: "transparent",
    borderWidth: 1, // Note: standard Text doesn't support outline well, 
    // for production use a library like react-native-svg or shadowed text
    textShadowColor: 'white',
    textShadowRadius: 1,
    textShadowOffset: { width: 1, height: 1 },
  },
  subtitle: {
    fontSize: 18,
    color: "#888",
    fontWeight: "600",
    marginTop: 20,
    letterSpacing: 1,
  },
  button: {
    backgroundColor: "white",
    paddingVertical: 20,
    borderRadius: 12, // More modern "squircle" or sharp edge
    alignItems: "center",
  },
  buttonText: {
    color: "black",
    fontWeight: "900",
    fontSize: 18,
    textTransform: "uppercase",
  },
});