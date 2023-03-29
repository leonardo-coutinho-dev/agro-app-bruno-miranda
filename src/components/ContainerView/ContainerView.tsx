import React from 'react';

import * as styles from './styles';

export interface ContainerViewProps {
  children: React.ReactNode;
  model: 'light' | 'dark';
}

const ContainerScrollView = ({children, model}: ContainerViewProps) => {
  return (
    <styles.BackgroundView model={model}>{children}</styles.BackgroundView>
  );
};

export default ContainerScrollView;
