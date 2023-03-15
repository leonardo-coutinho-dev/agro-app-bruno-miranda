import styled from 'styled-components';

import {Text, TextInput, TouchableOpacity, View, Image} from 'react-native';

export const Container = styled(View)`
  flex: 1;
  padding: 20px;
  align-items: center;
  justify-content: space-between;
  background-color: #829485;
`;

export const BodyContainer = styled(View)`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const ContainerInput = styled(View)`
  padding: 0 15px;
  width: 100%;
  height: 46px;
  margin-top: 8px;
  border-radius: 4px;
  background-color: #007676;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled(Image)`
  margin-bottom: 8px;
  height: 75px;
  width: 105px;
`;

export const PrincipalTitle = styled(Text)`
  margin: 8px 0;
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
  width: 100%;
  padding: 8px;
  align-items: flex-start;
  justify-content: center;
  background-color: #1d1d1d;
  border-radius: 8px;
`;

export const BackIcon = styled(Image)`
  height: 32px;
  width: 32px;
`;

export const CalcBtn = styled(TouchableOpacity)`
  height: 60px;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #007676;
`;

export const BtnText = styled(Text)`
  color: #fafafa;
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
