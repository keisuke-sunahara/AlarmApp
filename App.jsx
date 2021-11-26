import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { StyleSheet, Text, View } from 'react-native';
import AlarmListScreen from './src/screens/AlarmListScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="AlarmList"
      >
        <Stack.Screen name="AlarmList" component={AlarmListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
