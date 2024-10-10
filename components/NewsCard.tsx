import React from 'react';
import { View, Image, TouchableOpacity, Linking } from 'react-native';

import { Text } from '~/components/atoms/Text';
import { MarketNews } from '~/types/news';

const NewsCard: React.FC<{ news: MarketNews }> = ({ news }) => {
  const handlePress = () => {
    // TODO: Add error handling
    Linking.openURL(news.url);
  };

  return (
    <View className="flex gap-5">
      <TouchableOpacity onPress={handlePress} className="m-2 gap-2">
        <View className="flex-row gap-2 ">
          <Image source={{ uri: news.thumbnail }} className="h-24 w-24" resizeMode="cover" />
          <View className="flex-1 gap-1">
            <View className="mt-auto flex-row justify-between">
              <Text className="font-rubik text-lg text-white">{news.source}</Text>
              <Text className="font-rubik text-lg text-white">{news.date ?? ''}</Text>
            </View>
            <Text className="font-roboto  text-2xl font-bold text-white" numberOfLines={2}>
              {news.title}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default NewsCard;
