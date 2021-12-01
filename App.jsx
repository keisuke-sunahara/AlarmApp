import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { StyleSheet, Text, View } from 'react-native';
import AlarmListScreen from './src/screens/AlarmListScreen';
import AlarmCreateScreen from './src/screens/AlarmCreateScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="AlarmCreate"
      >
        <Stack.Screen name="AlarmList" component={AlarmListScreen} />
        <Stack.Screen name="AlarmCreate" component={AlarmCreateScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
