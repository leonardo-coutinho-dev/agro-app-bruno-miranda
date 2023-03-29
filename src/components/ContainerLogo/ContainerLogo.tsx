import React from 'react';

import {StyleSheet} from 'react-native';

import * as styles from './styles';

export interface ContainerLogoProps {
  children: React.ReactNode;
  shadow: 'light' | 'dark';
  marginBottom?: boolean;
  size: 'big' | 'small';
}

const ContainerLogo = ({
  children,
  shadow,
  marginBottom,
  size,
}: ContainerLogoProps) => {
  return (
    <styles.CustomView
      shadow={shadow}
      marginBottom={marginBottom}
      size={size}
      style={stylesDefault.shadow}>
      {children}
    </styles.CustomView>
  );
};

const stylesDefault = StyleSheet.create({
  shadow: {
    elevation: 2,
    shadowOffset: {width: 10, height: 10},
    shadowColor: '#fafafa',
    shadowOpacity: 1,
    // background color must be set
  },
});

export default ContainerLogo;
