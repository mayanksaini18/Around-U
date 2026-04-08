import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { useWindowDimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import FindHelpScreen from "../screens/FindHelpScreen";
import PartnerScreen from "../screens/PartnerScreen";
import { theme } from "../theme";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const compact = width < 380;
  const tabBarHeight = (compact ? 66 : 62) + insets.bottom;

  return (
   
      <Tab.Navigator
       screenOptions={({ route }) => ({
         headerShown: false,
         tabBarActiveTintColor: theme.colors.accent,
         tabBarInactiveTintColor: theme.colors.inkMuted,
         tabBarStyle: {
           backgroundColor: theme.colors.cardDark,
           borderTopWidth: 1,
           borderTopColor: '#1F1F1F',
           height: tabBarHeight,
           paddingBottom: Math.max(insets.bottom, 10),
           paddingTop: compact ? 8 : 10,
         },
         tabBarLabelStyle: {
           fontFamily: 'Outfit-Bold',
           fontSize: compact ? 9 : 10,
           letterSpacing: 1,
         },
         tabBarIcon: ({ color, size }) => {
           let iconName;

           if (route.name === "Find Help") {
             iconName = "search";
           } else if (route.name === "Partner") {
             iconName = "people";
           }

           return <Ionicons name={iconName as any} size={compact ? 22 : 24} color={color} />;
         },
       })}
     >
        <Tab.Screen name="Find Help" component={FindHelpScreen} />
        <Tab.Screen name="Partner" component={PartnerScreen} />
      </Tab.Navigator>
    
  );
}
