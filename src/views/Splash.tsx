import React from 'react';
import { Pressable, SafeAreaView, Text } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { AuthStackParamList } from '../navigation/AuthStackNavigator';
import authNavigations from '../constants';

type SplashScreenProps = StackScreenProps<AuthStackParamList, typeof authNavigations.SPLASH>;

const Splash = ({ navigation }: SplashScreenProps) => {
  return (
    <SafeAreaView>
      <Pressable onPress={() => navigation.navigate('Home')}>
        <Text>
          홈화면 이동
        </Text>
      </Pressable>

    </SafeAreaView>
  );
};

export default Splash;
