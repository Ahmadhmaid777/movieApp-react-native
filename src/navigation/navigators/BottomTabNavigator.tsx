import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen, WatchListScreen} from 'screens';
import {spacing} from 'theme';
import {BookmarkTabIcon, MoviesTabIcon} from 'assets/icons';
import {HomeTapParamsList} from 'navigation/types';
const Tap = createBottomTabNavigator<HomeTapParamsList>();
const BottomTabNavigator = () => {
  return (
    <Tap.Navigator
      initialRouteName="Movies"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          paddingVertical: spacing.medium,
        },
        tabBarShowLabel: false,
      }}>
      <Tap.Screen
        options={{
          tabBarIcon: ({focused}) => {
            return <MoviesTabIcon fouced={focused} />;
          },
        }}
        name={'Movies'}
        component={HomeScreen}
      />
      <Tap.Screen
        options={{
          tabBarIcon: ({focused}) => {
            return <BookmarkTabIcon fouced={focused} />;
          },
        }}
        name={'WatchList'}
        component={WatchListScreen}
      />
    </Tap.Navigator>
  );
};

export default BottomTabNavigator;
