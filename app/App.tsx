import StackNavigator from './navigation/StackNavigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts, Outfit_400Regular, Outfit_700Bold, Outfit_900Black } from '@expo-google-fonts/outfit';
import { Inter_400Regular, Inter_600SemiBold } from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Outfit-Regular': Outfit_400Regular,
    'Outfit-Bold': Outfit_700Bold,
    'Outfit-Black': Outfit_900Black,
    'Inter-Regular': Inter_400Regular,
    'Inter-SemiBold': Inter_600SemiBold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <StackNavigator />
    </SafeAreaProvider>
  );
}