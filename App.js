
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

import {store} from './store';
import MapScreen from './screens/MapScreen';
import HomeScreen from './screens/HomeScreen';

const Stack = createStackNavigator()

export default function App() {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator>
            <Stack.Screen name='Home' component={HomeScreen} options={{headerShown: false}}/>
            <Stack.Screen name='Map' component={MapScreen} options={{headerShown: false}}/>
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
