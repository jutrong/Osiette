import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import { SafeAreaView } from '../styles/common';

const Entry = () => {
  return (
    <SafeAreaView>
      <LogoWrapper>
        <Text style={{ color: 'white' }}>로고</Text>
      </LogoWrapper>
      <ButtonWrapper>
        <LoginButton>
          <Text>구글 로그인</Text>
        </LoginButton>
      </ButtonWrapper>
    </SafeAreaView>
  );
};

const LogoWrapper = styled.View`
  flex: 6;
  justify-content: center;
  align-items: center;
`;
const LoginButton = styled.Pressable`
  width: 70%;
  height: 50px;
  background-color: white;
  color: ${({ theme }) => theme.colors.black};
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;
const ButtonWrapper = styled.View`
  flex: 5;
  justify-content: center;
  align-items: center;
`;

export default Entry;
