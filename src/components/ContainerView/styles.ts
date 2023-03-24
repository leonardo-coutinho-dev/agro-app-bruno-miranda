import styled from 'styled-components';

import {ContainerViewProps} from './ContainerView';

import {ScrollView} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';

export const BackgroundSafeAreaView = styled(SafeAreaView)<ContainerViewProps>`
  background-color: ${props =>
    props.model === 'light'
      ? '#eddccc'
      : props.model === 'dark'
      ? '#111c22'
      : '#eddccc'};
`;

export const CustomScrollView = styled(ScrollView)`
  flex: 1;
`;
