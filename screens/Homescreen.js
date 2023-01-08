import {SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
function Homescreen() {
  return (
    <SafeAreaView className="bg-white pt-5">
      <Header />
      <Search />
      {/*Body  */}
      <ScrollView
        className="bg-gray-100"
        // eslint-disable-next-line react-native/no-inline-styles
        contentContainerStyle={{
          paddingBottom: 100,
        }}>
        {/* Categories */}
        <Categories />

        <FeaturedRow
          id="1"
          title="Featured"
          description="Paid placements from our partner"
        />
        <FeaturedRow
          id="2"
          title="Tasty Discounts"
          description="Everyone's been enjoying these juicy discounts!"
        />
        <FeaturedRow
          id="3"
          title="Offer near you"
          description="Why not support your local restaurant tonight"
        />
      </ScrollView>
    </SafeAreaView>
  );
}

export default Homescreen;
