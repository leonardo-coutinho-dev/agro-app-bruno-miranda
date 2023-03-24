import styled from 'styled-components';

import {View, Image} from 'react-native';

export const BodyContainer = styled(View)`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled(Image)`
  height: 55px;
  width: 76px;
`;

export const BtnContainer = styled(View)`
  width: 100%;
  margin: 32px 0 16px;
  flex-direction: row;
  justify-content: space-between;
`;

export const BackArrow = styled(Image)`
  height: 32px;
  width: 32px;
`;
