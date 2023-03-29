import {View} from 'react-native';

import {RFValue} from 'react-native-responsive-fontsize';

import styled from 'styled-components';

import {ContainerLogoProps} from './ContainerLogo';

export const CustomView = styled(View)<ContainerLogoProps>`
  width: 100%;
  padding: ${props =>
      props.size === 'big'
        ? `${RFValue(40)}px`
        : props.size === 'small'
        ? `${RFValue(10)}px`
        : `${RFValue(40)}px`}
    0;
  margin-bottom: ${props =>
    props.marginBottom === true ? `${RFValue(12)}px` : 0};
  background-color: transparent;
  box-shadow: 4px 4px
    ${props =>
      props.shadow === 'light'
        ? 'rgba(255, 255, 255, 0.5)'
        : props.shadow === 'dark'
        ? 'rgba(0, 0, 0, 0.5)'
        : 'rgba(0, 0, 0, 0.5)'};
  align-items: center;
  justify-content: center;
`;
