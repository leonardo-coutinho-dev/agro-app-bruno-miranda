import React from 'react';

import * as styles from './styles';

import {KeyboardAvoidingView, Platform, StyleSheet} from 'react-native';

import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {ScrollView} from 'react-native';

export interface ContainerScrollViewProps {
  children: React.ReactNode;
  model: 'light' | 'dark';
}

const ContainerScrollView = ({children, model}: ContainerScrollViewProps) => {
  const insets = useSafeAreaInsets();
  return (
    <styles.BackgroundSafeAreaView
      style={stylesDefault.container}
      model={model}>
      <KeyboardAvoidingView
        style={stylesDefault.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        enabled>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            flexGrow: 1,
            paddingTop: insets.top,
            paddingRight: 20,
            paddingLeft: 20,
            paddingBottom: 20,
          }}>
          {children}
        </ScrollView>
      </KeyboardAvoidingView>
    </styles.BackgroundSafeAreaView>
  );
};

const stylesDefault = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ContainerScrollView;
