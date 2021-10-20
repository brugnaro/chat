import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';

import PersonalInfo from './components/PersonalInfo';
import Chat from './components/Chat';

import Styles from './components/Styles';

export default function App() {

  const [username, setUsername] = useState("");
  const [image, setImage] = useState("");

  const onPersonalInfoClosed = (name: string, image: string) => {
    setUsername(name);
    setImage(image);
  }

  let activeComponent = username != "" ? (
    <Chat username={username} image={image} />
  ) : (
    <PersonalInfo onClosed={onPersonalInfoClosed} />
  )

  return (
    <SafeAreaView style={Styles.container}>
      {activeComponent}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
