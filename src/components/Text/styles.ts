import styled from 'styled-components';

import {Text} from 'react-native-paper';

import {TextElementProps} from './Text';

import {RFValue} from 'react-native-responsive-fontsize';

export const TextElement = styled(Text)<TextElementProps>`
  font-size: ${props =>
    props.size === 'big'
      ? `${RFValue(20)}px`
      : props.size === 'medium'
      ? `${RFValue(15)}px`
      : props.size === 'small'
      ? `${RFValue(12)}px`
      : `${RFValue(20)}px`};
  line-height: ${props =>
    props.size === 'big'
      ? `${RFValue(25)}px`
      : props.size === 'medium'
      ? `${RFValue(20)}px`
      : props.size === 'small'
      ? `${RFValue(17)}px`
      : `${RFValue(25)}px`};
  color: ${props =>
    props.model === 'white'
      ? '#fafafa'
      : props.model === 'green'
      ? '#829485'
      : props.model === 'disabled'
      ? '#4b4c58'
      : '#fafafa'};
  margin-top: ${props => (props.marginTop === true ? `${RFValue(20)}px` : 0)};
  font-weight: bold;
`;
