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
         tabBarActiveTintColor: "#0070F3",
         tabBarInactiveTintColor: "#888",
         tabBarStyle: {
           backgroundColor: '#000',
           borderTopWidth: 0,
           height: 90,
           paddingBottom: 30,
           paddingTop: 10,
         },
         tabBarLabelStyle: {
           fontFamily: 'Outfit-Bold',
           fontSize: 10,
           letterSpacing: 1,
         },
         tabBarIcon: ({ color, size }) => {
           let iconName;

           if (route.name === "Find Help") {
             iconName = "search";
           } else if (route.name === "Partner") {
             iconName = "people";
           }

           return <Ionicons name={iconName as any} size={24} color={color} />;
         },
       })}
     >
        <Tab.Screen name="Find Help" component={FindHelpScreen} />
        <Tab.Screen name="Partner" component={PartnerScreen} />
      </Tab.Navigator>
    
  );
}