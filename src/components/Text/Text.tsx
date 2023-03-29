import React from 'react';

import * as styles from './styles';

export interface TextElementProps {
  children: React.ReactNode;
  model: 'white' | 'green' | 'disabled';
  size: 'big' | 'medium' | 'small';
  marginTop?: boolean;
}

const Text = ({children, model, size, marginTop}: TextElementProps) => {
  return (
    <styles.TextElement size={size} model={model} marginTop={marginTop}>
      {children}
    </styles.TextElement>
  );
};

export default Text;
