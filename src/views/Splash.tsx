import React, { useEffect } from 'react';
import { Pressable, Text } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { AuthStackParamList } from '../navigation/AuthStackNavigator';
import authNavigations from '../constants';

type SplashScreenProps = StackScreenProps<AuthStackParamList, typeof authNavigations.SPLASH>;

const Splash = ({ navigation }: SplashScreenProps) => {

  useEffect(() => {
    navigation.navigate(authNavigations.ENTRY);
  }, [navigation]);

  return (
    <Pressable onPress={() => navigation.navigate('Home')}>
      <Text>
        홈화면 이동
      </Text>
    </Pressable>

  );
};

export default Splash;
