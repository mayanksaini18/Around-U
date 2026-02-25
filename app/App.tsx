import StackNavigator from './navigation/StackNavigation';

import TabNavigator from './navigation/Tabnavigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';


export default function App() {
  return(
 <SafeAreaProvider>
   <StackNavigator />
 </SafeAreaProvider>
  )
  
}