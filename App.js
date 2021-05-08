import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import 'bootstrap/dist/css/bootstrap.min.css';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MobileVerification from './MobileVerification';
import VerificationCode from './VerificationCode';
import VerificationSuccess from './VerificationSuccess';
import VerificationFail from './VerificationFail';
import UserDetails from './UserDetails';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="verification"
            component={MobileVerification}
          />
          <Stack.Screen
            name="verification-code"
            component={VerificationCode}
          />
          <Stack.Screen
            name="verification-success"
            component={VerificationSuccess}
          />
          <Stack.Screen
            name="verification-fail"
            component={VerificationFail}
          />
          <Stack.Screen
            name="user-details"
            component={UserDetails}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#52bf9c',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
