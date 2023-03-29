import React, {useEffect} from 'react';

import {StatusBar} from 'react-native';

import {SafeAreaProvider} from 'react-native-safe-area-context';

import {NavigationContainer} from '@react-navigation/native';

import PagesNavigation from './src/navigation/PagesNavigation';

import SplashScreen from 'react-native-splash-screen';

import 'react-native-gesture-handler';

function App(): JSX.Element {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 5000);
  }, []);
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
