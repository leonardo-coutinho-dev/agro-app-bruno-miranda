import styled from 'styled-components';

import {ContainerScrollViewProps} from './ContainerScrollView';

import {SafeAreaView} from 'react-native-safe-area-context';

export const BackgroundSafeAreaView = styled(
  SafeAreaView,
)<ContainerScrollViewProps>`
  background-color: ${props =>
    props.model === 'light'
      ? '#eddccc'
      : props.model === 'dark'
      ? '#111c22'
      : '#eddccc'};
`;
