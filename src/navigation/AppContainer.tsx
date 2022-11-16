import {View, Text, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import AppNavigation from './AppNavigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {QueryClientProvider} from '@tanstack/react-query';
import {queryClient} from 'utils';
import 'utils/axiosConfig';
import {StoreProvider} from 'store/Store';
import messaging from '@react-native-firebase/messaging';
async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log(enabled);

    console.log('Authorization status:', authStatus);
  }
}

const checkToken = async () => {
  const fcmToken = await messaging().getToken();
  if (fcmToken) {
    console.log(fcmToken);
  }
};
const AppContainer = () => {
  requestUserPermission();

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
      return unsubscribe;
    });
    return unsubscribe;
  }, []);

  checkToken();
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <StoreProvider>
          <AppNavigation />
        </StoreProvider>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
};

export default AppContainer;
