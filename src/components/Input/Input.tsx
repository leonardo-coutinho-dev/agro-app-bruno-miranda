import React from 'react';

import {TextInputProps} from 'react-native-paper';

import * as styles from './styles';

export interface InputProps extends TextInputProps {
  model?: 'normal' | 'danger';
}

const Input = ({...props}: InputProps) => {
  return (
    <styles.CustomInput
      {...props}
      mode={'flat'}
      keyboardType="numeric"
      selectionColor={
        props.model === 'danger'
          ? 'tomato'
          : props.model === 'normal'
          ? '#829485'
          : '#829485'
      }
      underlineColor={
        props.model === 'danger'
          ? 'tomato'
          : props.model === 'normal'
          ? '#fafafa'
          : '#fafafa'
      }
      activeUnderlineColor={
        props.model === 'danger'
          ? 'tomato'
          : props.model === 'normal'
          ? '#fafafa'
          : '#fafafa'
      }
      outlineColor={
        props.model === 'danger'
          ? 'tomato'
          : props.model === 'normal'
          ? '#829485'
          : '#829485'
      }
      activeOutlineColor={
        props.model === 'danger'
          ? 'tomato'
          : props.model === 'normal'
          ? '#829485'
          : '#829485'
      }
      textColor={
        props.model === 'danger'
          ? 'tomato'
          : props.model === 'normal'
          ? '#fafafa'
          : '#fafafa'
      }
    />
  );
};

export default Input;
