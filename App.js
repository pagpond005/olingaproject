/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  useColorScheme,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>{
      <SafeAreaView style={backgroundStyle}>

      </SafeAreaView>
    }</NavigationContainer>
  );
};

export default App;
