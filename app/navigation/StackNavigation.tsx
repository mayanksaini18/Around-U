import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";

import TabNavigation from "../navigation/Tabnavigation";

const Stack = createNativeStackNavigator();

export default function StackNavigation(){
    return (
        <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="MainTabs" component={TabNavigation} />
      </Stack.Navigator>
        </NavigationContainer>
    )
}