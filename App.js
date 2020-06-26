//App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';

const Stack = createStackNavigator();

export default class App extends React.Component {
  render(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Home Page' }}
        />
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ title: 'Login Page' }}
        />
        <Stack.Screen 
          name="Signup" 
          component={Signup} 
          options={{ title: 'Signup Page' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
 }
}
