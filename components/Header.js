import React from 'react';
import {Image, Text, View} from 'react-native';
import {ChevronDownIcon, UserIcon} from 'react-native-heroicons/solid';
function Header() {
  return (
    <View className="flex-row pb-3 items-center  mx-4 space-x-2">
      <Image
        source={{
          uri: 'https://images.pexels.com/photos/459203/pexels-photo-459203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        }}
        className="h-7 w-7 rounded-full bg-gray-500"
      />
      <View className="flex-1">
        <Text className="font-bold text-gray-400 text-xs">DeliverNow</Text>
        <Text className="font-bold text-black text-xl">
          Current Location
          <ChevronDownIcon size={20} color="#00ccbb" />
        </Text>
      </View>
      <UserIcon size={35} color="#00ccbb" />
    </View>
  );
}
export default Header;
