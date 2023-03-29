import styled from 'styled-components';

import {Button} from 'react-native-paper';

import {RFValue} from 'react-native-responsive-fontsize';

import {ButtonElementProps} from './ButtonElement';

export const CustomButton = styled(Button)<ButtonElementProps>`
  width: 100%;
  height: ${RFValue(50)}px;
  border-radius: 0;
  justify-content: center;
  margin-top: ${props => (props.marginTop === true ? `${RFValue(20)}px` : 0)};
  background-color: ${props =>
    props.model === 'black'
      ? '#111c22'
      : props.model === 'white'
      ? '#fafafa'
      : '#111c22'};
`;
