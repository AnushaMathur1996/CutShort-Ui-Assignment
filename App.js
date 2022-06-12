import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from './src/features/HomeScreen/MainView';
import { Intro } from './src/features/SplashScreen/MainView'
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SearchFriend } from './src/features/SearchFriend/MainView';
import { SendMoneyScreen } from './src/features/SendMoneyScreen/MainView';

const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      }}>
        <Stack.Screen name="Intro" component={Intro} options={{
          headerShown: false,
        }} />

        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{
          headerShown: false,
        }} />

        <Stack.Screen name="SendMoney" component={SendMoneyScreen} options={{
          headerShown: false,
        }} />

        <Stack.Screen name="SearchFriend" component={SearchFriend} options={{
          headerShown: false,
        }} />

      </Stack.Navigator>
    </NavigationContainer>
  )
};



export default App;
