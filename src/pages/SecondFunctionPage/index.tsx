import React, {useState} from 'react';

import * as styles from './styles';

import ROUTES from '../../constants/routes';

import {TouchableWithoutFeedback, Keyboard} from 'react-native';

const backgroundImage = require('../../assets/agro-machine.png');

const eraserIcon = require('../../assets/eraser.png');

let SecondFunctionPage = ({navigation}: any) => {
  const [numberOne, setNumberOne] = useState(0);

  const [numberTwo, setNumberTwo] = useState(0);

  const [numberThree, setNumberThree] = useState(0);

  const [numberFour, setNumberFour] = useState(0);

  const [result, setResult] = useState(0);

  let calcResult = (num1: number, num2: number, num3: number, num4: number) => {
    return (num1 * num2 * num3 * 1000) / (2400 * num4);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <styles.Container>
        <styles.ContainerBackground source={backgroundImage} resizeMode="cover">
          <styles.ViewBackground>
            <styles.PrincipalTitle>Segunda máquina</styles.PrincipalTitle>
            <styles.BackBtn
              onPress={() => {
                navigation.navigate(ROUTES.FUNCTIONSPAGE);
              }}>
              <styles.BtnText>Voltar</styles.BtnText>
            </styles.BackBtn>
            <styles.Title>Número 1</styles.Title>
            <styles.ContainerInput>
              <styles.TInput
                onChangeText={text => setNumberOne(+text)}
                placeholder="Número 1"
                keyboardType="numeric"
              />
            </styles.ContainerInput>
            <styles.Title>Número 2</styles.Title>
            <styles.ContainerInput>
              <styles.TInput
                onChangeText={text => setNumberTwo(+text)}
                placeholder="Número 2"
                keyboardType="numeric"
              />
            </styles.ContainerInput>
            <styles.Title>Número 3</styles.Title>
            <styles.ContainerInput>
              <styles.TInput
                onChangeText={text => setNumberThree(+text)}
                placeholder="Número 3"
                keyboardType="numeric"
              />
            </styles.ContainerInput>
            <styles.Title>Número 4</styles.Title>
            <styles.ContainerInput>
              <styles.TInput
                onChangeText={text => setNumberFour(+text)}
                placeholder="Número 4"
                keyboardType="numeric"
              />
            </styles.ContainerInput>
            <styles.Title>{result}</styles.Title>
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
          </styles.ViewBackground>
        </styles.ContainerBackground>
      </styles.Container>
    </TouchableWithoutFeedback>
  );
};

export default SecondFunctionPage;
