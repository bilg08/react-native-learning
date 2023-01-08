import React from 'react';
import {View, TextInput} from 'react-native';
import {
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
} from 'react-native-heroicons/solid';
function Search() {
  const [input, setInput] = React.useState('');
  return (
    <View className="flex-row items-center space-x-2 pb-2 mx-4">
      <View className="flex-row items-center bg-gray-200 space-x-2 flex-1">
        <MagnifyingGlassIcon size={20} color="gray" />
        <TextInput
          placeholder="Restaurant and cuisines"
          keyboardType="default"
          value={input}
          onChange={e => setInput(e.target.value)}
        />
      </View>
      <AdjustmentsHorizontalIcon color="#00bbcc" />
    </View>
  );
}

export default Search;
