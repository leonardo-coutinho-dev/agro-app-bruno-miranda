import {View} from 'react-native';

import {RFValue} from 'react-native-responsive-fontsize';

import styled from 'styled-components';

import {ContainerViewProps} from './ContainerView';

export const BackgroundView = styled(View)<ContainerViewProps>`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: ${RFValue(20)}px;
  background-color: ${props =>
    props.model === 'light'
      ? '#E4DEAE'
      : props.model === 'dark'
      ? '#111c22'
      : '#E4DEAE'};
`;
