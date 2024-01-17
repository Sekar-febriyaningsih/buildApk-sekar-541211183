import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from './components/Login';
import RegisterScreen from './components/Register';
import Portofolio from'./components/Portofolio';

const App = () =>{
  const Stack = createStackNavigator();
  return (
  <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Portofolio" component={Portofolio} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;