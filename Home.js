//Home.js
import * as React from 'react';
import {View,Text,Button} from 'react-native';
export default class Home extends React.Component {
    constructor({navigation}){
        super(navigation);
    }
    render(){
    return (
    <View>
    <Text style={{color:'red',fontSize:24}}>Welcome to Home Page</Text>
      <Button
        title="Login"
        onPress={() =>
          this.props.navigation.navigate('Login')
        }
      />
    </View>
    );
  }
}