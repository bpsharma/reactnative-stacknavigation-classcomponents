//Login.js
import * as React from 'react';
import {View,Text,TextInput, Button} from 'react-native';

export default class Login extends React.Component {
    constructor({navigation}){
        super(navigation);
    }
    render(){
    return (
      <View> 
        <Text>Login</Text>
        <TextInput placeholder="User ID"/>
        <TextInput placeholder="Password" secureTextEntry/> 
        <Button
            title="Login"
            onPress={() =>alert("Write the login logic here")}
        />    
        <Button
            title="Signup"
            onPress={() =>
                this.props.navigation.navigate('Signup')
            }
        />
      </View>
    );
  }
}