import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../views/Splash';
import Home from '../views/Home';
import authNavigations from '../constants';
import Entry from '../views/Entry';

export type AuthStackParamList = {
  [authNavigations.SPLASH]: undefined;
  [authNavigations.HOME]: undefined;
  [authNavigations.ENTRY]: undefined;
}

const AuthStackNavigator = () => {
  const Stack = createNativeStackNavigator<AuthStackParamList>();

  return (
    <Stack.Navigator initialRouteName={authNavigations.SPLASH}>
      <Stack.Screen name={authNavigations.SPLASH} component={Splash} options={{ headerShown: false }} />
      <Stack.Screen name={authNavigations.HOME} component={Home} options={{ headerShown: false }} />
      <Stack.Screen name={authNavigations.ENTRY} component={Entry} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
