import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Start } from './src/screens/Start';
import { Home } from './src/screens/Home';
import { Result } from './src/screens/Result';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator > 
        <Stack.Screen name='Start' component={Start} options={{headerShown: false}}/>
        <Stack.Screen name='Home' component={Home} options={{headerShown: false}}/>
        <Stack.Screen name='Result' component={Result} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


