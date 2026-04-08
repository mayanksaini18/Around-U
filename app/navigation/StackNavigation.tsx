import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import TabNavigation from "../navigation/Tabnavigation";
import { theme } from "../theme";

const Stack = createNativeStackNavigator();

export default function StackNavigation(){
    return (
        <NavigationContainer
          theme={{
            dark: false,
            colors: {
              primary: theme.colors.accent,
              background: theme.colors.background,
              card: theme.colors.surface,
              text: theme.colors.ink,
              border: theme.colors.border,
              notification: theme.colors.accent,
            },
            fonts: {
              regular: { fontFamily: 'Inter-Regular', fontWeight: '400' },
              medium: { fontFamily: 'Inter-SemiBold', fontWeight: '600' },
              bold: { fontFamily: 'Outfit-Bold', fontWeight: '700' },
              heavy: { fontFamily: 'Outfit-Black', fontWeight: '900' },
            },
          }}
        >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="MainTabs" component={TabNavigation} />
      </Stack.Navigator>
        </NavigationContainer>
    )
}
