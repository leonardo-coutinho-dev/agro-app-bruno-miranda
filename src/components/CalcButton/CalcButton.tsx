import React from 'react';

import {ButtonProps} from 'react-native-paper';

import * as styles from './styles';

export interface CalcButtonProps extends ButtonProps {
  children: React.ReactNode;
  model?: 'disabled' | 'normal' | 'danger';
  onPress?: () => void;
}

const CalcButton = ({children, ...props}: CalcButtonProps) => {
  return <styles.CalcBtn {...props}>{children}</styles.CalcBtn>;
};

export default CalcButton;
