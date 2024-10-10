import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

import UserNameForm from '../components/UserNameForm';

export default function Home() {
  return (
    <>
      <StatusBar />
      <Stack.Screen
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: 'black',
          headerBackTitle: ' ',
          headerBackTitleVisible: false,
          headerShadowVisible: false,
          headerTitle: '',
        }}
      />
      <UserNameForm />
    </>
  );
}
