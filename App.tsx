/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Home} from './components/Home';
import {PaperProvider} from 'react-native-paper';
import { Toast } from 'react-native-toast-message/lib/src/Toast';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <PaperProvider>
      <Toast />
      <NavigationContainer>
          <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>

  );
}

export default App;
