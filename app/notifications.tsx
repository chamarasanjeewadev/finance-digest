import * as Notifications from 'expo-notifications';
import { Stack, useRouter } from 'expo-router';
import React from 'react';
import { View, TouchableOpacity } from 'react-native';

import { TalkSvg } from '~/components/atoms';
import { Text } from '~/components/atoms/Text';

export default function NotificationsView() {
  const router = useRouter();

  const requestNotificationPermission = async () => {
    const { status } = await Notifications.requestPermissionsAsync();
    if (status === 'granted') {
      console.log('Notification permissions granted.');
      router.push('/list');
    }
  };

  return (
    <View className="flex-1 bg-white">
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
      <View className="flex-1  justify-between px-4 pb-8">
        <View className="flex-1 items-center justify-center">
          <View className="mb-6 items-center">
            <View className="bg-gray-200  mb-4 h-16 w-16 items-center justify-center rounded-2xl">
              <TalkSvg {...{ props: { props: {} } }} />
            </View>
            <View className="mt-6 items-center">
              <Text variant="bold" className=" mb-2 text-black" size="xl">
                Get the most out of Blott ✅
              </Text>
              <Text className="text-center">
                Allow notifications to stay in the loop with your payments, requests and groups.
              </Text>
            </View>
          </View>
        </View>
        <View>
          <TouchableOpacity
            className="w-full  rounded-full bg-primary py-4"
            onPress={requestNotificationPermission}>
            <Text variant="semibold" size="xl" className="text-center text-white">
              Continue
            </Text>
          </TouchableOpacity>
        </View>
        <View className="h-8" />
      </View>
    </View>
  );
}
