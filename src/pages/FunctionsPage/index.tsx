import React from 'react';

import * as styles from './styles';

import ROUTES from '../../constants/routes';

import Text from '../../components/Text/Text';

import ButtonElement from '../../components/ButtonElement/ButtonElement';

import ContainerView from '../../components/ContainerView/ContainerView';

import ContainerLogo from '../../components/ContainerLogo/ContainerLogo';

const backgroundImage = require('../../assets/logo.png');

let FunctionsPage = ({navigation}: any) => {
  return (
    <ContainerView model="light">
      <ContainerLogo shadow={'dark'} marginBottom={true} size={'big'}>
        <styles.Logo source={backgroundImage} />
      </ContainerLogo>
      <ButtonElement
        model="black"
        onPress={() => {
          navigation.navigate(ROUTES.FIRSTFUNCTIONPAGE);
        }}>
        <Text model="white" size="small">
          Pulverizador sem voluta
        </Text>
      </ButtonElement>
      <ButtonElement
        model="black"
        marginTop={true}
        onPress={() => {
          navigation.navigate(ROUTES.SECONDFUNCTIONPAGE);
        }}>
        <Text model="white" size="small">
          Pulverizador com voluta
        </Text>
      </ButtonElement>
    </ContainerView>
  );
};

export default FunctionsPage;
