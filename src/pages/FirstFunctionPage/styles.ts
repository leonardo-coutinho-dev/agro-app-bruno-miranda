import styled from 'styled-components';

import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ImageBackground,
  Image,
} from 'react-native';

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

export const ContainerInput = styled(View)`
  padding: 0 15px;
  width: 200px;
  height: 46px;
  margin-top: 8px;
  border-radius: 4px;
  background-color: #262626;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const PrincipalTitle = styled(Text)`
  margin-bottom: 16px;
  font-size: 20px;
  line-height: 25px;
  font-weight: bold;
  color: #fafafa;
`;

export const Title = styled(Text)`
  margin-top: 8px;
  font-size: 15px;
  line-height: 20px;
  font-weight: bold;
  color: #fafafa;
`;

export const TInput = styled(TextInput)`
  flex: 1;
  font-size: 12px;
  margin-left: 4px;
  color: #fafafa;
`;

export const BtnContainer = styled(View)`
  margin-top: 16px;
  flex-direction: row;
`;

export const BackBtn = styled(TouchableOpacity)`
  height: 60px;
  width: 200px;
  align-items: center;
  justify-content: center;
  background-color: #88ffc3;
`;

export const CalcBtn = styled(TouchableOpacity)`
  height: 60px;
  width: 160px;
  align-items: center;
  justify-content: center;
  background-color: #88ffc3;
`;

export const BtnText = styled(Text)`
  color: #262626;
  font-weight: bold;
  font-size: 18px;
  line-height: 23px;
`;

export const ClearBtn = styled(TouchableOpacity)`
  height: 60px;
  width: 40px;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.6);
`;

export const EraseIcon = styled(Image)`
  height: 30px;
  width: 30px;
`;
