import React, {useState} from 'react';

import * as styles from './styles';

import ROUTES from '../../constants/routes';

import Text from '../../components/Text/Text';

import ContainerScrollView from '../../components/ContainerScrollView/ContainerScrollView';

import Input from '../../components/Input/Input';

import ButtonElement from '../../components/ButtonElement/ButtonElement';

import CalcButton from '../../components/CalcButton/CalcButton';

import {Card} from 'react-native-paper';

import {StyleSheet} from 'react-native';

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
    <ContainerScrollView model={'dark'}>
      <ButtonElement
        marginTop={true}
        icon="arrow-left-circle"
        labelStyle={{color: '#1d1d1d'}}
        model={'white'}
        children={
          <Text model={'green'} size={'small'}>
            Voltar
          </Text>
        }
        onPress={() => {
          navigation.navigate(ROUTES.FUNCTIONSPAGE);
        }}
      />
      <Card style={stylesDefault.card}>
        <Card.Title
          title={
            <Text model={'green'} size={'big'} marginTop={false}>
              Cambuhy Agrícola Ltda.
            </Text>
          }
          subtitle={
            <Text model={'green'} size={'medium'} marginTop={false}>
              Pulverizador sem voluta
            </Text>
          }
        />
      </Card>
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
        {isNaN(result)
          ? 'Por favor, insira os números corretamente!'
          : `${result} mL`}
      </Text>
      <styles.BtnContainer>
        {isNaN(numberOne) ||
        isNaN(numberTwo) ||
        isNaN(numberThree) ||
        isNaN(numberFour) ? (
          <CalcButton
            model={'disabled'}
            children={
              <Text model={'disabled'} size={'medium'}>
                No. inválido
              </Text>
            }
          />
        ) : (
          <CalcButton
            icon="calculator"
            labelStyle={{color: '#fff'}}
            children={
              <Text model={'white'} size={'medium'} marginTop={false}>
                Calcular
              </Text>
            }
            onPress={() => {
              let resultCalc = calcResult(
                numberOne,
                numberTwo,
                numberThree,
                numberFour,
              );
              let finalValue = parseFloat(resultCalc.toFixed(2));
              setResult(finalValue);
            }}
          />
        )}
        <CalcButton
          model={'danger'}
          icon="delete"
          labelStyle={{color: '#fff'}}
          children={
            <Text model={'white'} size={'medium'} marginTop={false}>
              Zerar
            </Text>
          }
          onPress={() => {
            setResult(0);
          }}
        />
      </styles.BtnContainer>
    </ContainerScrollView>
  );
};

export const stylesDefault = StyleSheet.create({
  card: {
    width: '100%',
    borderRadius: 0,
  },
  cardTitle: {
    textAlign: 'center',
  },
});

export default FirstFunctionPage;
