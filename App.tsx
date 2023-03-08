import React from 'react';

import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

import PagesNavigation from './src/navigation/PagesNavigation';

import 'react-native-gesture-handler';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <StatusBar />
        <PagesNavigation />
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
