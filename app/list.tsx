import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';

import { useUserStore } from '../store/useUserStore';

import NewsList from '~/components/NewsList';
import { Container } from '~/components/molecules/Container';

export default function ListView() {
  const firstName = useUserStore((state) => state.firstName);

  return (
    <Container className="bg-darkBackground pl-1">
      <StatusBar style="light" />
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: () => (
            <View className="flex-1 items-start justify-center">
              <Text className="font-raleway text-3xl font-bold text-white">Hey {firstName}</Text>
            </View>
          ),
          headerStyle: {
            backgroundColor: '#05021B',
          },
          headerTintColor: 'white',
          headerBackTitle: ' ',
          headerBackTitleVisible: false,
          headerTitleAlign: 'left',
        }}
      />
      <NewsList />
    </Container>
  );
}
