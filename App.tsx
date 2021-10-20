import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView } from 'react-native';

import PersonalInfo from './components/PersonalInfo';

import Styles from './components/Styles';

export default function App() {
  return (
    <SafeAreaView style={Styles.container}>
      <PersonalInfo />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
