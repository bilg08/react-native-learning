import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Homescreen from './screens/Homescreen';
import Restaurantscreen from './screens/Restaurantscreen';

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShow: false}}>
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={Homescreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Restaurant"
          component={Restaurantscreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
