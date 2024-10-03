import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../views/Splash';
import Home from '../views/Home';
import authNavigations from '../constants';

export type AuthStackParamList = {
  [authNavigations.SPLASH]: undefined;
  [authNavigations.HOME]: undefined;
}

const AuthStackNavigator = () => {
  const Stack = createNativeStackNavigator<AuthStackParamList>();

  return (
    <Stack.Navigator>
      <Stack.Screen name={authNavigations.SPLASH} component={Splash} />
      <Stack.Screen name={authNavigations.HOME} component={Home} />
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
