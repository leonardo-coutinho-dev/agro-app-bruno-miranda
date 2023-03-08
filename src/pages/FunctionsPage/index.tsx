import React from 'react';

import * as styles from './styles';

import ROUTES from '../../constants/routes';

const backgroundImage = require('../../assets/agro-machine.png');

let FunctionsPage = ({navigation}: any) => {
  return (
    <styles.Container>
      <styles.ContainerBackground source={backgroundImage} resizeMode="cover">
        <styles.ViewBackground>
          <styles.ContainerButton>
            <styles.OpacityButton
              onPress={() => {
                navigation.navigate(ROUTES.FIRSTFUNCTIONPAGE);
              }}>
              <styles.OpacityText>Primeira máquina</styles.OpacityText>
            </styles.OpacityButton>
            <styles.OpacityButton
              onPress={() => {
                navigation.navigate(ROUTES.SECONDFUNCTIONPAGE);
              }}>
              <styles.OpacityText>Segunda máquina</styles.OpacityText>
            </styles.OpacityButton>
          </styles.ContainerButton>
        </styles.ViewBackground>
      </styles.ContainerBackground>
    </styles.Container>
  );
};

export default FunctionsPage;
