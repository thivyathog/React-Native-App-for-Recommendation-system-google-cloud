import React, { Component } from 'react'
import {
    StyleSheet,
    Alert,
    TouchableHighlight,
    TouchableOpacity,
    Text,
    Image,
    ImageBackground,
    TextInput,
    Dimensions,
    Button,
    Animated
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import SignUpScreen from "./SignUpScreen";


const { width: WIDTH } = Dimensions.get('window')

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            vRs:'',
            result2:'',
            showPass: true,
            press: false,
            password: '',
            result: ''
        }
    }

state={
        hi:""
}

    _postData = async () => {

        if (this.state.email != '' &&this.state.password != '') {
            console.log("ENTER LOGIN")
            let formData = new FormData();
            formData.append('email', this.state.email);
            formData.append('password', this.state.password);

            await fetch('http://35.238.205.249/newapp/login', {
                method: 'POST',
                body: formData
            }).then((response) => response.json())
                .then((responseJson) => {
                    this.setState({ hi: responseJson.status })
                    console.log(responseJson)
                    if(responseJson.status==='success')
                        this.props.navigation.navigate("Home",{userId:this.state.email})

                    else
                        Alert.alert("Invalid CREDENTIALS").toUpperCase()
                }).catch(error=>console.log(error));


        } else {
            Alert("please fill all fields");
        }

    }
    showPass = () => {
        if (this.state.press === false) {
            this.setState({ showPass: false, press: true })
        } else {
            this.setState({ showPass: true, press: false })
        }
    }


    render() {

        return (
            <ImageBackground
                source={require('/Users/Tvia/Desktop/plsWork2/images/login_background.jpg')}
                style={styles.container}>

                <Image
                    source={require('/Users/Tvia/Desktop/plsWork2/images/logo.png')}
                    style={styles.logo} />

                <Icon name={'ios-mail'} size={25} color={'rgba(255, 255, 255, 0.7)'}
                      style={styles.mailIcon} />

                <TextInput
                    style={styles.mailInput}
                    placeholder={"Email"}
                    placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                    underlineColorAndroid='transparent'
                    keyboardType='email-address'
                    returnKeyType='next'
                    onSubmitEditing={() => { this.passwordInput.focus(); }}
                    onChangeText={(email) => this.setState({ email })}
                    value={this.state.email}
                />

                <Icon name={'ios-lock'} size={28} color={'rgba(255, 255, 255, 0.7)'}
                      style={styles.passwordIcon} />
                <TextInput
                    ref={(input) => { this.passwordInput = input; }}
                    style={styles.passwordInput}
                    placeholder={"Password"}
                    placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                    underlineColorAndroid='transparent'

                    onChangeText={(password) => this.setState({ password })}
                    value={this.state.password}
                    secureTextEntry={this.state.showPass}
                />
                <TouchableOpacity style={styles.btnEye}
                                  onPress={this.showPass.bind(this)}>

                    <Icon name={this.state.press === false ? 'ios-eye' : 'ios-eye-off'} size={26} color={'rgba(255, 255, 255, 0.7)'} />

                </TouchableOpacity>

                <TouchableOpacity onPress={this._postData}
                                  style={styles.loginButton} >
                    <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>


                <Text onPress={() => { this.props.navigation.navigate('SignUpScreen') }} style={styles.signupText}>Don't have an account yet?Sign up</Text>


                <TouchableOpacity>
                    <Text style={styles.signButtonText}>HIIIIIIIIII {this.state.hi}</Text>
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

    logo: {
        position: 'absolute',
        top: 50,
        width: 300,
        height: 230,
    },

    mailInput: {
        position: 'absolute',
        top: 350,
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

    mailIcon: {
        position: 'absolute',
        left: 45,
        top: 362
    },

    passwordInput: {
        position: 'absolute',
        top: 450,
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

    passwordIcon: {
        position: 'absolute',
        left: 45,
        top: 458
    },

    eyeIcon: {
        left: 150,
        top: 145
    },

    loginButton: {
        position: 'absolute',
        top: 550,
        backgroundColor: '#D00D1B',
        width: 300,
        height: 50,
        borderRadius: 45
    },
    loginText: {
        position: 'absolute',
        top: 7,
        left: 120,
        color: '#FFFFFF',
        fontSize: 24,
        fontWeight: 'bold'

    },

    signupText: {
        position: 'absolute',
        top: 630,
        bottom: 10,
        color: 'rgba(255, 255, 255, 0.7)'
    },


    signupButtonText: {
        position: 'absolute',
        color: '#FFFFFF',
        top: 300,

        left: 90,
        fontWeight: 'bold'
    }



})

