import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import AuthStackNavigator from './src/navigation/AuthStackNavigator';
import { ThemeProvider } from 'styled-components';
import theme from './src/styles/theme';


function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AuthStackNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
