import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import FindHelpScreen from "../screens/FindHelpScreen";
import PartnerScreen from "../screens/PartnerScreen";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
   
     <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#16A34A",
        tabBarInactiveTintColor: "gray",
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Find Help") {
            iconName = "search";
          } else if (route.name === "Partner") {
            iconName = "people";
          }

          return <Ionicons name={iconName as any} size={22} color={color} />;
        },
      })}
    >
        <Tab.Screen name="Find Help" component={FindHelpScreen} />
        <Tab.Screen name="Partner" component={PartnerScreen} />
      </Tab.Navigator>
    
  );
}