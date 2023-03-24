import {TextInput} from 'react-native-paper';

import styled from 'styled-components';

import {RFValue} from 'react-native-responsive-fontsize';

export const CustomInput = styled(TextInput)`
  width: 100%;
  margin-top: ${RFValue(12)}px;
  background-color: rgba(0, 0, 0, 0.5);
`;
