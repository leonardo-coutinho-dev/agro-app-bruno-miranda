import React from 'react';

import ROUTES from '../../constants/routes';

import Text from '../../components/Text/Text';

import ButtonElement from '../../components/ButtonElement/ButtonElement';

import ContainerView from '../../components/ContainerView/ContainerView';

import {Card} from 'react-native-paper';

import {StyleSheet} from 'react-native';

const backgroundImage = require('../../assets/logo.png');

let FunctionsPage = ({navigation}: any) => {
  return (
    <ContainerView model="light">
      <Card style={styles.card} mode="elevated">
        <Card.Cover source={backgroundImage} style={styles.cardCover} />
        <Card.Actions>
          <ButtonElement
            model="black"
            onPress={() => {
              navigation.navigate(ROUTES.FIRSTFUNCTIONPAGE);
            }}>
            <Text model="white" size="small">
              Pulverizador sem voluta
            </Text>
          </ButtonElement>
        </Card.Actions>
        <Card.Actions>
          <ButtonElement
            model="black"
            onPress={() => {
              navigation.navigate(ROUTES.SECONDFUNCTIONPAGE);
            }}>
            <Text model="white" size="small">
              Pulverizador com voluta
            </Text>
          </ButtonElement>
        </Card.Actions>
      </Card>
    </ContainerView>
  );
};

export const styles = StyleSheet.create({
  card: {
    borderRadius: 0,
  },
  cardCover: {
    padding: 10,
    height: 235,
    borderRadius: 0,
  },
});

export default FunctionsPage;
