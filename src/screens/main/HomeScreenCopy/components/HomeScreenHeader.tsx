import {View, StyleSheet} from 'react-native';
import React from 'react';
import {MenuIcon, NotificationIcon} from 'assets/icons';
import {Text} from 'components';

const HomeScreenHeader = () => {
  return (
    <View style={styles.container}>
      <MenuIcon />
      <Text variant="mediumMedium" tx="FilmKu" />
      <NotificationIcon />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 20,
  },
});
export default HomeScreenHeader;
