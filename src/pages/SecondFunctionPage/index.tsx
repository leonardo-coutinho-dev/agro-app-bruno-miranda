import React, {useState} from 'react';

import * as styles from './styles';

import ROUTES from '../../constants/routes';

import {TouchableWithoutFeedback, Keyboard} from 'react-native';

const backgroundImage = require('../../assets/logo.png');

const eraserIcon = require('../../assets/eraser.png');

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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <styles.Container>
        <styles.BackBtn
          onPress={() => {
            navigation.navigate(ROUTES.FUNCTIONSPAGE);
          }}>
          <styles.BackIcon source={chevronIcon} />
        </styles.BackBtn>
        <styles.BodyContainer>
          <styles.Logo source={backgroundImage} />
          <styles.PrincipalTitle>Pulverizador com voluta</styles.PrincipalTitle>
          <styles.Title>Taxa de Aplicação (L/ha)</styles.Title>
          <styles.ContainerInput>
            <styles.TInput
              onChangeText={text => setNumberOne(+text)}
              placeholder="Taxa de Aplicação (L/ha)"
              keyboardType="numeric"
            />
          </styles.ContainerInput>
          <styles.Title>Velocidade (km/h)</styles.Title>
          <styles.ContainerInput>
            <styles.TInput
              onChangeText={text => setNumberTwo(+text)}
              placeholder="Velocidade (km/h)"
              keyboardType="numeric"
            />
          </styles.ContainerInput>
          <styles.Title>Espaçamento da quadra (m)</styles.Title>
          <styles.ContainerInput>
            <styles.TInput
              onChangeText={text => setNumberThree(+text)}
              placeholder="Espaçamento da quadra (m)"
              keyboardType="numeric"
            />
          </styles.ContainerInput>
          <styles.Title>Número de bicos</styles.Title>
          <styles.ContainerInput>
            <styles.TInput
              onChangeText={text => setNumberFour(+text)}
              placeholder="Número de bicos"
              keyboardType="numeric"
            />
          </styles.ContainerInput>
          <styles.Title>Coletar em 30 segundos (mL):</styles.Title>
          <styles.Title>{result} mL</styles.Title>
          <styles.BtnContainer>
            <styles.CalcBtn
              onPress={() => {
                let resultCalc = calcResult(
                  numberOne,
                  numberTwo,
                  numberThree,
                  numberFour,
                );
                setResult(resultCalc);
              }}>
              <styles.BtnText>Calcular</styles.BtnText>
            </styles.CalcBtn>
            <styles.ClearBtn
              onPress={() => {
                setResult(0);
              }}>
              <styles.EraseIcon source={eraserIcon} />
            </styles.ClearBtn>
          </styles.BtnContainer>
        </styles.BodyContainer>
      </styles.Container>
    </TouchableWithoutFeedback>
  );
};

export default FirstFunctionPage;
