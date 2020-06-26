//Signup.js
import * as React from 'react';
import {View,Text,TextInput, Button} from 'react-native';

export default class Signup extends React.Component {
    render(){
    return (
      <View> 
      <Text>Login</Text>
      <TextInput placeholder="User ID"/>
      <TextInput placeholder="Password" secureTextEntry/> 
      <Button
        title="Register"
        onPress={() =>alert('Registration logic goes here')}
      />    
      </View>
    );
  }
}