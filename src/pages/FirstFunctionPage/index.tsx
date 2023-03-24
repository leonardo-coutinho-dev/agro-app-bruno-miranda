import React, {useState} from 'react';

import * as styles from './styles';

import ROUTES from '../../constants/routes';

import Text from '../../components/Text/Text';

import ContainerView from '../../components/ContainerView/ContainerView';

import ContainerLogo from '../../components/ContainerLogo/ContainerLogo';

import Input from '../../components/Input/Input';

import ButtonElement from '../../components/ButtonElement/ButtonElement';

import CalcButton from '../../components/CalcButton/CalcButton';

const backgroundImage = require('../../assets/logo.png');

const chevronIcon = require('../../assets/chevron.png');

let FirstFunctionPage = ({navigation}: any) => {
  const [numberOne, setNumberOne] = useState(0);

  const [numberTwo, setNumberTwo] = useState(0);

  const [numberThree, setNumberThree] = useState(0);

  const [numberFour, setNumberFour] = useState(0);

  const [result, setResult] = useState(0);

  let calcResult = (num1: number, num2: number, num3: number, num4: number) => {
    return (num1 * num2 * num3 * 1000) / (1200 * num4);
  };

  return (
    <ContainerView model={'dark'}>
      <ButtonElement
        model={'white'}
        onPress={() => {
          navigation.navigate(ROUTES.FUNCTIONSPAGE);
        }}>
        <styles.BackArrow source={chevronIcon} />
      </ButtonElement>
      <styles.BodyContainer>
        <ContainerLogo shadow={'light'} size={'small'} marginBottom={true}>
          <styles.Logo source={backgroundImage} />
          <Text model={'green'} size={'small'} marginTop={true}>
            Pulverizador sem voluta
          </Text>
        </ContainerLogo>
        <Input
          model={isNaN(numberOne) ? 'danger' : 'normal'}
          label={
            isNaN(numberOne) ? 'Número inválido' : 'Taxa de Aplicação (L/ha)'
          }
          onChangeText={text => setNumberOne(+text.replace(/,/g, '.'))}
        />
        <Input
          model={isNaN(numberTwo) ? 'danger' : 'normal'}
          label={isNaN(numberTwo) ? 'Número inválido' : 'Velocidade (km/h)'}
          onChangeText={text => setNumberTwo(+text.replace(/,/g, '.'))}
        />
        <Input
          model={isNaN(numberThree) ? 'danger' : 'normal'}
          label={
            isNaN(numberThree) ? 'Número inválido' : 'Espaçamento da quadra (m)'
          }
          onChangeText={text => setNumberThree(+text.replace(/,/g, '.'))}
        />
        <Input
          model={isNaN(numberFour) ? 'danger' : 'normal'}
          label={isNaN(numberFour) ? 'Número inválido' : 'Número de bicos'}
          onChangeText={text => setNumberFour(+text.replace(/,/g, '.'))}
        />
        <Text model={'white'} size={'small'} marginTop={true}>
          Coletar em 30 segundos (mL):
        </Text>
        <Text model={'white'} size={'small'} marginTop={true}>
          {result} mL
        </Text>
        <styles.BtnContainer>
          {isNaN(numberOne) ||
          isNaN(numberTwo) ||
          isNaN(numberThree) ||
          isNaN(numberFour) ? (
            <CalcButton model={'disabled'}>
              <Text model={'green'} size={'medium'}>
                No. inválido
              </Text>
            </CalcButton>
          ) : (
            <CalcButton
              onPress={() => {
                let resultCalc = calcResult(
                  numberOne,
                  numberTwo,
                  numberThree,
                  numberFour,
                );
                let finalValue = parseFloat(resultCalc.toFixed(2));
                setResult(finalValue);
              }}>
              <Text model={'white'} size={'medium'}>
                Calcular
              </Text>
            </CalcButton>
          )}
          <CalcButton
            model={'danger'}
            onPress={() => {
              setResult(0);
            }}>
            <Text model={'white'} size={'medium'}>
              Zerar
            </Text>
          </CalcButton>
        </styles.BtnContainer>
      </styles.BodyContainer>
    </ContainerView>
  );
};

export default FirstFunctionPage;
