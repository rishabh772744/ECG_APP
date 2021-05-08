import { StatusBar } from 'expo-status-bar';
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/main.css';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './Home';
import Location from './Location';
import EmergencyContacts from './EmergencyContacts';
import Profile from './Profile';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Location" component={Location} />
        <Tab.Screen name="EmergencyContacts" component={EmergencyContacts} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
  );
}

