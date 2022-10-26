import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from '../styles';
import {ActionMenuIcon, ArrowLeftIcon} from 'assets/icons';
import {useNavigation} from '@react-navigation/native';
import {MainStackScreenProps} from 'navigation/types';

const Header = () => {
  let navigation =
    useNavigation<MainStackScreenProps<'MovieDetails'>['navigation']>();
  const onPressBackArrow = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={onPressBackArrow}>
        <ArrowLeftIcon />
      </TouchableOpacity>
      <ActionMenuIcon />
    </View>
  );
};

export default Header;
