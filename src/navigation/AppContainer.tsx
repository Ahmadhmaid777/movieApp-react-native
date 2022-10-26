import {View, Text} from 'react-native';
import React, {useState} from 'react';
import AppNavigation from './AppNavigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {QueryClientProvider} from '@tanstack/react-query';
import {queryClient} from 'utils';
import 'utils/axiosConfig';
import {StoreProvider} from 'store/Store';
const AppContainer = () => {
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
