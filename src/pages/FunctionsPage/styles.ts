import styled from 'styled-components';

import {View, TouchableOpacity, Text, Image} from 'react-native';

export const Container = styled(View)`
  flex: 1;
  padding: 20px;
  align-items: center;
  justify-content: center;
  background-color: #829485;
`;

export const Logo = styled(Image)`
  margin-bottom: 20px;
  height: 150px;
  width: 210px;
`;

export const ContainerButton = styled(View)`
  height: 150px;
  justify-content: space-between;
`;

export const OpacityButton = styled(TouchableOpacity)`
  height: 60px;
  width: 300px;
  margin-top: 8px;
  align-items: center;
  justify-content: center;
  background-color: #007676;
`;

export const OpacityText = styled(Text)`
  color: #fafafa;
  font-weight: bold;
  font-size: 18px;
  line-height: 23px;
`;
