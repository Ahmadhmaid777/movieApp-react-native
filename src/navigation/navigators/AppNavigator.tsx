import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabStack from './BottomTabNavigator';
import {MovieDetailsScreen} from 'screens';
import {MainStackParamsList} from 'navigation/types';
import {ScreenOptions} from './NavigatorOptions';

const StackMain = createNativeStackNavigator<MainStackParamsList>();
const AppNavigator = () => {
  return (
    <StackMain.Navigator screenOptions={ScreenOptions}>
      <StackMain.Screen name={'Home'} component={BottomTabStack} />
      <StackMain.Screen name={'MovieDetails'} component={MovieDetailsScreen} />
    </StackMain.Navigator>
  );
};

export default AppNavigator;
