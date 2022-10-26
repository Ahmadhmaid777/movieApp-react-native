import {View, Text, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import {observer} from 'mobx-react-lite';
import {FlashList} from '@shopify/flash-list';
import {useStore} from 'store/Store';
import {PopularMoviesItem} from 'components';
import {SafeAreaView} from 'react-native-safe-area-context';

const WatchListScreen = () => {
  const {
    createWatchListStore: {watchListData},
  } = useStore();

  if (watchListData.length === 0) {
    return null;
  }
  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        data={watchListData}
        contentContainerStyle={styles.listStyle}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <PopularMoviesItem movie={item} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  listStyle: {},
});

export default observer(WatchListScreen);
