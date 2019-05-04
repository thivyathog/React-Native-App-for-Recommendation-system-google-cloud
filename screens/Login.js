import React, { Component } from 'react'
import {StyleSheet,TouchableHighlight, TouchableOpacity, Text, Image, ImageBackground, TextInput, Dimensions, Button} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import SignUpScreen from "./SignUpScreen";


const { width: WIDTH } = Dimensions.get('window')

 class Login extends Component {
    constructor(){
        super();
        this.state = {
            showPass: true,
            press: false
        }
    }
    showPass =() =>{
        if(this.state.press === false){
            this.setState({showPass: false, press: true})
        }else{
            this.setState({showPass: true, press: false})
        }
    }

    render() {

        return (
                <ImageBackground
                    source={require('/Users/Tvia/Desktop/plsWork2/images/login_background.jpg')}
                    style={styles.container}>

                    <Image
                        source={require('/Users/Tvia/Desktop/plsWork2/images/logo.png')}
                        style={styles.logo}/>

                    <Icon name={'ios-mail'} size={25} color={'rgba(255, 255, 255, 0.7)'}
                        style={styles.mailIcon} />

                    <TextInput
    style={styles.mailInput}
    placeholder={"Email"}
    placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
    underlineColorAndroid='transparent'
    keyboardType='email-address'
    />

                    <Icon name={'ios-lock'} size={28} color={'rgba(255, 255, 255, 0.7)'}
                        style={styles.passwordIcon} />
                    <TextInput
    style={styles.passwordInput}
    placeholder={"Password"}
    placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
    underlineColorAndroid='transparent'
    secureTextEntry={this.state.showPass}
    />
                    <TouchableOpacity style={styles.btnEye}
                                      onPress={this.showPass.bind(this)}>
                        <Icon name={this.state.press == false ? 'ios-eye-outline' : 'ios-eye-off-outline' } size={26} color={'rgba(255, 255, 255, 0.7)'}/>
                    </TouchableOpacity>

    <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')} style={styles.loginButton} >
                        <Text  style={styles.loginText}>Login</Text>
                    </TouchableOpacity>


                     <Text onPress={() => this.props.navigation.navigate('SignUpScreen')} style={styles.signupText}>Don't have an account yet?Sign up</Text>


                     <TouchableOpacity>
                        <Text style={styles.signButtonText}  >Signup</Text>
                    </TouchableOpacity>
                </ImageBackground>

        )
    }
}

export default Login;
const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',

    },

    logo:{
        position:'absolute',
        top:50,
        width: 300,
        height: 230,
    },  btnEye: {
        position: 'absolute',
        top: 330,
        right: 37
    },

    mailInput:{
        position: 'absolute',
        top: 260    ,
        bottom: 0,
        width: WIDTH - 55,
        height: 50,
        borderRadius: 40,
        borderColor: '#FFFFFF',
        borderWidth: 1,
        fontSize: 16,
        paddingLeft: 45,
        color: '#FFFFFF',
    },

    mailIcon:{
        position: 'absolute',
        left:45,
        top:272,
    },

    passwordInput:{
        position: 'absolute',
        top: 330,
        bottom: 0,
        width: WIDTH - 55,
        height: 50,
        borderRadius: 40,
        borderColor: '#FFFFFF',
        borderWidth: 1,
        fontSize: 16,
        paddingLeft: 45,
        color: '#FFFFFF',
    },

    passwordIcon:{
        position: 'absolute',
        left:45,
        top:338
    },

    eyeIcon:{
        left:150,
        top:145
    },

    loginButton:{
        position: 'absolute',
        top:400,
        backgroundColor:'#D00D1B',
        width:300,
        height:50,
        borderRadius:45
    },
    loginText:{
        position:'absolute',
        top:5,
        left:120,
        color:'#FFFFFF',
        fontSize:24,
        fontWeight:'bold'
    
    },

    signupText:{
        position:'absolute',
        fontSize:10,
        top:450,
        bottom:10,
        color:'rgba(255, 255, 255, 0.7)'
    },


    signButtonText:{
        position:'absolute',
        color:'white',
        top:350,
        bottom:10,
        fontWeight:'bold'
    }


  
})