import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get('window');

export default function HomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#000', '#001529', '#002B5B']}
        style={StyleSheet.absoluteFill}
      />
      
      {/* Decorative Blur Circles */}
      <View style={[styles.blurCircle, { top: -100, right: -100, backgroundColor: '#0070F322' }]} />
      <View style={[styles.blurCircle, { bottom: -100, left: -100, backgroundColor: '#00D4FF11' }]} />

      <SafeAreaView style={styles.safeArea}>
        <View style={styles.content}>
          <Animated.View 
            entering={FadeInDown.duration(1000).springify()}
            style={styles.textContainer}
          >
            <View style={styles.badge}>
              <Ionicons name="sparkles" size={14} color="#0070F3" />
              <Text style={styles.badgeText}>HYPERLOCAL INFRASTRUCTURE</Text>
            </View>
            
            <Text style={styles.massiveTitle}>AROUND</Text>
            <Text style={[styles.massiveTitle, styles.blueText]}>U.</Text>
            
            <Text style={styles.subtitle}>
              Any task. Any moment. {"\n"}Verified experts at your door.
            </Text>
          </Animated.View>

          <Animated.View 
            entering={FadeInUp.delay(500).duration(1000).springify()}
            style={styles.bottomContainer}
          >
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.replace("MainTabs")}
              activeOpacity={0.9}
            >
              <LinearGradient
                colors={['#0070F3', '#00D4FF']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.buttonGradient}
              >
                <Text style={styles.buttonText}>GET STARTED</Text>
                <Ionicons name="arrow-forward" size={20} color="white" style={{ marginLeft: 8 }} />
              </LinearGradient>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.secondaryButton}>
               <Text style={styles.secondaryButtonText}>BECOME A PARTNER</Text>
            </TouchableOpacity>

            <Text style={styles.footerText}>TRUSTED BY 5,000+ NEIGHBORS</Text>
          </Animated.View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  blurCircle: {
    position: 'absolute',
    width: 300,
    height: 300,
    borderRadius: 150,
  },
  content: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: "space-between",
    paddingVertical: 50,
  },
  textContainer: {
    marginTop: 40,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0070F315',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    alignSelf: 'flex-start',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#0070F333',
  },
  badgeText: {
    color: '#0070F3',
    fontSize: 10,
    fontWeight: '900',
    marginLeft: 6,
    letterSpacing: 2,
  },
  massiveTitle: {
    fontSize: width * 0.22,
    fontFamily: 'Outfit-Black',
    color: "white",
    lineHeight: width * 0.20,
    letterSpacing: -5,
  },
  blueText: {
    color: "#0070F3",
    textShadowColor: '#0070F3',
    textShadowRadius: 20,
  },
  subtitle: {
    fontSize: 20,
    color: "#888",
    fontFamily: 'Inter-SemiBold',
    marginTop: 20,
    lineHeight: 28,
  },
  bottomContainer: {
    width: '100%',
    gap: 16,
  },
  button: {
    width: '100%',
    shadowColor: '#0070F3',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 5,
  },
  buttonGradient: {
    flexDirection: 'row',
    paddingVertical: 22,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: 'center',
  },
  buttonText: {
    color: "white",
    fontFamily: 'Outfit-Black',
    fontSize: 18,
    letterSpacing: 1,
  },
  secondaryButton: {
    paddingVertical: 15,
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: '#888',
    fontFamily: 'Outfit-Bold',
    fontSize: 14,
    letterSpacing: 1,
  },
  footerText: {
    color: '#444',
    fontSize: 10,
    fontFamily: 'Outfit-Black',
    textAlign: 'center',
    marginTop: 10,
    letterSpacing: 2,
  }
});