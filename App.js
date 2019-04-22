
import React, {Component} from 'react';
import {
  Platform, 
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TextInput,
  Dimensions,
  Button
  } from 'react-native';

import bgImage from './image/bg1.jpg'
import logo from './image/logo.png'


const { width: WIDTH} =Dimensions.get('window')

export default class login extends Component {
  render() {
    return (
    <ImageBackground source={bgImage} style={styles.background}>
    <View style={styles.loginbox}>
        <View style={styles.logincontainer}>
          <Image source={logo}  style={styles.logo}>
          </Image>
          <Text style={styles.logintext}></Text>
        </View>
        <View>
          <TextInput
          style={styles.inputemail}
          placeholder={'Email'}
          placeholderTextColor={'grey'}
          underlineColorAndroid='transparent'
          ></TextInput>
          <TextInput
          secureTextEntry
          style={styles.inputpass}
          placeholder={'Password'}
          placeholderTextColor={'grey'}
          underlineColorAndroid='transparent'
          ></TextInput>
        
        </View>
      </View>
      <View >
        <Text style={styles.forgotpass}>Forgot Password?</Text>
      </View>
      <View style={styles.buttonarea}>
      <Button 
        style={styles.signinbutton}
        title="Sign in"
        color="#673AB7"
      />
      </View>
    </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
    background: {
    flex: 1,
    width : null,
    height : null,
    justifyContent: 'center',
    alignItems: 'center',
    },
    loginbox:{
      backgroundColor:'white',
      shadowColor: 'grey',
      shadowOffset: {width:0,height:5},
      shadowOpacity: 0.2,
      shadowRadius: 10,
      elevation:5,
      borderRadius:20,
      paddingTop: 40,
      paddingBottom: 40,
    },
    logincontainer:{
      alignItems:'center'
    },
    logo:{
      height : 80,
      width :80
    },
    logintext:{
      color:'black',
      fontSize: 20,
      fontWeight: '500',
      marginTop: 10,
      opacity:0.5
    },
    inputemail:{
      width: WIDTH - 100,
      height:45,
      borderRadius: 15,
      fontSize:16,
      paddingLeft: 15,
      backgroundColor:'#c5c9cc79',
      color:'black',
      marginHorizontal: 25,
    },
    inputpass:{
      width: WIDTH - 100,
      height:45,
      borderRadius: 15,
      fontSize:16,
      paddingLeft: 15,
      backgroundColor:'#c5c9cc79',
      color:'black',
      marginHorizontal: 25,
      marginTop:20
    },
    forgotpass:{
      marginTop:20,
      marginLeft:120,
      borderBottomWidth: 1,
    },
    buttonarea:{
      marginTop:30
    },
    
  

});
