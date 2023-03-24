import React from 'react';

import {StatusBar} from 'react-native';

import {SafeAreaProvider} from 'react-native-safe-area-context';

import {NavigationContainer} from '@react-navigation/native';

import PagesNavigation from './src/navigation/PagesNavigation';

import 'react-native-gesture-handler';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <StatusBar />
        <PagesNavigation />
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

export default App;
