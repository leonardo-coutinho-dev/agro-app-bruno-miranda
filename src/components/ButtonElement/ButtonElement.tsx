import React from 'react';

import * as styles from './styles';

export interface ButtonElementProps {
  children: React.ReactNode;
  model: 'black' | 'white';
  marginTop?: boolean;
  onPress: () => void;
}

const ButtonElement = ({
  children,
  model,
  onPress,
  marginTop,
}: ButtonElementProps) => {
  return (
    <styles.CustomButton onPress={onPress} model={model} marginTop={marginTop}>
      {children}
    </styles.CustomButton>
  );
};

export default ButtonElement;
