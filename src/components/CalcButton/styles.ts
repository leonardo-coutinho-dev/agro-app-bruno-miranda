import {Button} from 'react-native-paper';

import {RFValue} from 'react-native-responsive-fontsize';

import styled from 'styled-components';

import {CalcButtonProps} from './CalcButton';

export const CalcBtn = styled(Button)<CalcButtonProps>`
  height: ${RFValue(50)}px;
  border-radius: 0;
  justify-content: center;
  background-color: ${props =>
    props.model === 'normal'
      ? '#106bda'
      : props.model === 'disabled'
      ? '#EBEBE4'
      : props.model === 'danger'
      ? 'tomato'
      : '#106bda'};
`;
