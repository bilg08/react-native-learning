import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import {ArrowLeftIcon} from 'react-native-heroicons/solid';

function Restaurantscreen() {
  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      short_description,
      dishes,
      long,
      lat,
    },
  } = useRoute();
  return (
    <ScrollView>
      <View className="relative">
        <Image source={{uri: imgUrl}} className="w-full h-56 bg-gray-300 p-4" />
        <TouchableOpacity className="absolute top-5s left-5 p-2 bg-gray-100 rounded-full">
          <ArrowLeftIcon size={20} color="#00ccbb" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

export default Restaurantscreen;
