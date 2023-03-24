import React from 'react';

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
    <styles.CustomView shadow={shadow} marginBottom={marginBottom} size={size}>
      {children}
    </styles.CustomView>
  );
};

export default ContainerLogo;
