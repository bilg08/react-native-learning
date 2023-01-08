import React from 'react';
import {ScrollView} from 'react-native';
import CategoryCard from './CategoryCard';
function Categories() {
  return (
    <ScrollView
      // eslint-disable-next-line react-native/no-inline-styles
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}>
      {[1, 2, 4, 5, 6].map((category, index) => (
        <CategoryCard
          key={category.title + index}
          title="Sushi"
          imageUrl="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
        />
      ))}
    </ScrollView>
  );
}

export default Categories;
