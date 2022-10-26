import {KeyboardAvoidingView, ScrollView, StyleSheet, View} from 'react-native';
import React, {ReactNode} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

type WrapperProps = {
  children: ReactNode;
  scrollEnable?: boolean;
};
const Wrapper = ({children, scrollEnable}: WrapperProps) => {
  return (
    <KeyboardAvoidingView style={styles.flex}>
      <ScrollView scrollEnabled={scrollEnable}>
        <SafeAreaView>
          <View>{children}</View>
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});
export default Wrapper;
