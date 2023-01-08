import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {ArrowRightIcon} from 'react-native-heroicons/solid';
import RestaurantCard from './RestaurantCard';
function FeaturedRow({id, title, description}) {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00ccbb" />
      </View>

      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView
        horizontal
        // eslint-disable-next-line react-native/no-inline-styles
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4">
        {[1, 2, 3, 4].map(res => (
          <RestaurantCard
            id="10"
            imgUrl="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
            title="Hello World"
            rating={10}
            genre="Asian"
            address="Ub New Horizon Tower 5th floor"
            short_description="We can do it"
            dishes={[]}
            long={10}
            lat={20}
          />
        ))}
      </ScrollView>
    </View>
  );
}

export default FeaturedRow;
