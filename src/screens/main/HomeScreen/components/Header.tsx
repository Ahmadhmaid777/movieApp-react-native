import {
  View,
  StyleSheet,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
} from 'react-native';
import React, {ReactNode} from 'react';
import {colors, spacing} from 'theme';
import {MenuIcon, NotificationIcon} from 'assets/icons';
import {Text} from 'components';

type HeaderProps = {
  style?: ViewStyle;
  rightComponent?: ReactNode;
  leftComponent?: ReactNode;
  title: string;
  titleStyle?: TextStyle;
  onPressRightComponent?: () => void;
  onPressLeftComponent?: () => void;
};

const Header = ({
  style,
  title,
  titleStyle: overrideTitleStyle,
  onPressLeftComponent,
  onPressRightComponent,
}: HeaderProps) => {
  return (
    <View style={[styles.headerContainer, style]}>
      <TouchableOpacity onPress={onPressLeftComponent}>
        <MenuIcon />
      </TouchableOpacity>
      <Text
        style={styles.titleView}
        txStyle={overrideTitleStyle}
        color={colors.gray[900]}
        tx={title}
        variant="mediumLarge"
      />
      <TouchableOpacity onPress={onPressRightComponent}>
        <NotificationIcon />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.xlarge,
  },
  titleView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Header;
