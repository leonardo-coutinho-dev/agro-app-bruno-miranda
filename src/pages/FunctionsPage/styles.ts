import styled from 'styled-components';

import {View, TouchableOpacity, Text, ImageBackground} from 'react-native';

export const Container = styled(View)`
  flex: 1;
`;

export const ContainerBackground = styled(ImageBackground)`
  width: 100%;
  height: 100%;
`;

export const ViewBackground = styled(View)`
  background-color: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerButton = styled(View)`
  height: 150px;
  justify-content: space-between;
`;

export const OpacityButton = styled(TouchableOpacity)`
  height: 60px;
  width: 200px;
  margin-top: 8px;
  align-items: center;
  justify-content: center;
  background-color: #88ffc3;
`;

export const OpacityText = styled(Text)`
  color: #262626;
  font-weight: bold;
  font-size: 18px;
  line-height: 23px;
`;
