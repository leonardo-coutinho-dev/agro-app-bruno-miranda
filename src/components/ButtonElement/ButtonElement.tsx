import React from 'react';

import {ButtonProps} from 'react-native-paper';

import * as styles from './styles';

export interface ButtonElementProps extends ButtonProps {
  children: React.ReactNode;
  model: 'black' | 'white';
  marginTop?: boolean;
  onPress?: () => void;
}

const ButtonElement = ({children, ...props}: ButtonElementProps) => {
  return <styles.CustomButton {...props}>{children}</styles.CustomButton>;
};

export default ButtonElement;
