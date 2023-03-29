import {Button} from 'react-native-paper';

import styled from 'styled-components';

import {CalcButtonProps} from './CalcButton';

export const CalcBtn = styled(Button)<CalcButtonProps>`
  border-radius: 0;
  background-color: ${props =>
    props.model === 'normal'
      ? '#106bda'
      : props.model === 'disabled'
      ? '#9c9da4'
      : props.model === 'danger'
      ? 'tomato'
      : '#106bda'};
`;
