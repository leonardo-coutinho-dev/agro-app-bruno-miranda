import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import FunctionsPage from '../pages/FunctionsPage';

import FirstFunctionPage from '../pages/FirstFunctionPage';

import SecondFunctionPage from '../pages/SecondFunctionPage';

import ROUTES from '../constants/routes';

const Stack = createStackNavigator();

let PagesNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={ROUTES.FUNCTIONSPAGE}>
      <Stack.Screen
        name={ROUTES.FUNCTIONSPAGE}
        component={FunctionsPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={ROUTES.FIRSTFUNCTIONPAGE}
        component={FirstFunctionPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={ROUTES.SECONDFUNCTIONPAGE}
        component={SecondFunctionPage}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default PagesNavigation;
