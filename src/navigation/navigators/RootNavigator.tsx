import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';
import {RootStackParamList} from 'navigation/types';

const RootStack = createNativeStackNavigator<RootStackParamList>();
const RootNavigator = () => {
  const isUserLogin = true;
  return (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
      {isUserLogin ? (
        <RootStack.Screen name={'main'} component={AppNavigator} />
      ) : (
        <RootStack.Screen name={'auth'} component={AuthNavigator} />
      )}
    </RootStack.Navigator>
  );
};

export default RootNavigator;
