import React from 'react';
import { View, FlatList, Text, ActivityIndicator } from 'react-native';

import NewsCard from './NewsCard';
import { useMarketNews } from '../hooks/useMarketNews';

const ItemSeparator = () => <View className="h-4" />;

export default function NewsList() {
  const { data: news, isLoading, isError } = useMarketNews('general');

  if (isLoading) {
    return (
      <View className=" flex-1 items-center justify-center">
        <ActivityIndicator size="large" color="white" />
      </View>
    );
  }

  if (isError) {
    return (
      <View className="flex-1 items-center ">
        <Text className="text-gray-600 font-rubik  text-center text-xl text-white">
          Something went wrong. Please try again later.
        </Text>
      </View>
    );
  }

  return (
    <FlatList
      data={news}
      renderItem={({ item }) => <NewsCard news={item} />}
      keyExtractor={(item) => item.id.toString()}
      ItemSeparatorComponent={ItemSeparator} // Add this line
      contentContainerStyle={{ paddingVertical: 16 }} // Add this line for top and bottom padding
    />
  );
}
