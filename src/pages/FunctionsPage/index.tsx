import React from 'react';

import * as styles from './styles';

import ROUTES from '../../constants/routes';

const backgroundImage = require('../../assets/logo.png');

let FunctionsPage = ({navigation}: any) => {
  return (
    <styles.Container>
      <styles.Logo source={backgroundImage} />
      <styles.ContainerButton>
        <styles.OpacityButton
          onPress={() => {
            navigation.navigate(ROUTES.FIRSTFUNCTIONPAGE);
          }}>
          <styles.OpacityText>Pulverizador sem voluta</styles.OpacityText>
        </styles.OpacityButton>
        <styles.OpacityButton
          onPress={() => {
            navigation.navigate(ROUTES.SECONDFUNCTIONPAGE);
          }}>
          <styles.OpacityText>Pulverizador com voluta</styles.OpacityText>
        </styles.OpacityButton>
      </styles.ContainerButton>
    </styles.Container>
  );
};

export default FunctionsPage;
