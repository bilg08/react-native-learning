import React from 'react';
import {Text, Image, TouchableOpacity} from 'react-native';
function CategoryCard({title, imageUrl}) {
  return (
    <TouchableOpacity className="relative mr-2">
      <Image
        source={{
          uri: imageUrl,
        }}
        className="h-20 w-20 rounded"
      />
      <Text className="absolute bottom-1 text-white font-bold">{title}</Text>
    </TouchableOpacity>
  );
}

export default CategoryCard;
