import {View, Text} from 'react-native';
import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen} from 'screens';
import {AuthStackParamsList} from 'navigation/types';
const Stack = createNativeStackNavigator<AuthStackParamsList>();
const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'Login'} component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
