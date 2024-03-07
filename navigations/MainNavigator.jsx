// MainNavigator.js
import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createStackNavigator } from '@react-navigation/stack';
import TopNav from './TopNav';
// import BottomNavigator from './BottomNavigator';

const Tab = createBottomTabNavigator();
// const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Top" component={TopNav} />
      {/* <Tab.Screen name="Bottom" component={BottomNavigator} /> */}
    </Tab.Navigator>
  );
};

export default MainNavigator;
