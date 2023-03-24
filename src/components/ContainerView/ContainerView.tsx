import React from 'react';

import * as styles from './styles';

import {KeyboardAvoidingView, StyleSheet} from 'react-native';

import {useSafeAreaInsets} from 'react-native-safe-area-context';

export interface ContainerViewProps {
  children: React.ReactNode;
  model: 'light' | 'dark';
}

const ContainerView = ({children, model}: ContainerViewProps) => {
  const insets = useSafeAreaInsets();
  return (
    <styles.BackgroundSafeAreaView
      style={stylesDefault.container}
      model={model}>
      <KeyboardAvoidingView
        style={stylesDefault.container}
        behavior="padding"
        enabled>
        <styles.CustomScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={stylesDefault.scrollView}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            paddingTop: insets.top + 20,
            paddingRight: 20,
            paddingLeft: 20,
            paddingBottom: 20,
          }}>
          {children}
        </styles.CustomScrollView>
      </KeyboardAvoidingView>
    </styles.BackgroundSafeAreaView>
  );
};

const stylesDefault = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    padding: 0,
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ContainerView;
