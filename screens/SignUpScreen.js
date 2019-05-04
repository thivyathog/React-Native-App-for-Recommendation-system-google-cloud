import React, { Component } from 'react'
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    Image,
    ImageBackground,
    TextInput,
    Dimensions,
    Button
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import HomeScreen from "./HomeScreen";

const { width: WIDTH } = Dimensions.get('window')

 class SignUpScreen extends Component {
    constructor(){
        super()
        this.state={name:'',
            email:'',
            mobile:'',
            Password:'',
            result:''
        }
    }
    
    render() {
        return (
            <ImageBackground
                source={require('/Users/Tvia/Desktop/plsWork2/images/login_background.jpg')}
                style={styles.container}>

                <Image source={require('/Users/Tvia/Desktop/plsWork2/images/logo.png')}
                    style={styles.logo} />

                <Icon name={'ios-person'} size={25} color={'rgba(255, 255, 255, 0.7)'}
                    style={styles.personIcon} />

                <TextInput
                    style={styles.nameInput}
                    placeholder={"Fullname"}
                    placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                    underlineColorAndroid='transparent'
                    onChangeText={(name) => this.setState({ name })}
                    value={this.state.name}/>

            

              <Icon name={'ios-mail'} size={25} color={'rgba(255, 255, 255, 0.7)'}
                    style={styles.mailIcon} />

                <TextInput
                    style={styles.mailInput}
                    placeholder={"Email"}
                    placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                    underlineColorAndroid='transparent'
                    keyboardType='email-address'
                    onChangeText={(mail) => this.setState({ mail })}
                    value={this.state.mail}/>

<Icon name={'ios-call'} size={25} color={'rgba(255, 255, 255, 0.7)'}
                    style={styles.callIcon} />

                <TextInput
                    style={styles.callInput}
                    placeholder={"Mobile Number"}
                    placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                    underlineColorAndroid='transparent'
                    keyboardType='number-pad'
                    onChangeText={(mobile) => this.setState({ mobile })}
                    value={this.state.mobile}/>

<Icon name={'ios-lock'} size={25} color={'rgba(255, 255, 255, 0.7)'}
                    style={styles.lockIcon} />

                <TextInput
                    style={styles.lockInput}
                    placeholder={"Password"}
                    placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                    underlineColorAndroid='transparent'
                    secureTextEntry={true}
                    onChangeText={(password) => this.setState({ password })}
                    value={this.state.password}/>

                    <Text style={styles.hint}>Password must be 8 characters</Text>

<Icon name={'ios-lock'} size={25} color={'rgba(255, 255, 255, 0.7)'}
                    style={styles.relockIcon} />

                <TextInput
                    style={styles.relockInput}
                    placeholder={"Re-Enter Password"}
                    placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                    underlineColorAndroid='transparent'
                    secureTextEntry={true}/>

                <TouchableOpacity style={styles.signupButton}
                onPress={this._postData}>
                    <Text  onPress={() => this.props.navigation.navigate('Home')} style={styles.signupText}>Signup</Text>
                </TouchableOpacity>

                <Text>{this.state.result}</Text>
            </ImageBackground>
        )
    }

    _postData = async () => {
        
        fetch('http://35.238.205.249/newapp/registration',{
            method: 'POST',
            body: JSON.stringify({
                first:this.state.name,
                second:this.state.mail,
                third:this.state.mobile,
                fourth:this.state.Password
            })
        }).then(response => response.json())
        .then((responseJson)=> {
            this.setState({
                result: responseJson
            })
        })
    }


    
}

export default SignUpScreen;
const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',

    },

    logo: {
        position: 'absolute',
        top: 15,
        bottom: 0,

        width: 280,
        height: 200,

    },

    nameInput: {
        position: 'absolute',
        top: 220,
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
    personIcon:{
        position: 'absolute',
       left:45,
       top:230
    },
    mailInput: {
        position: 'absolute',
        top: 295,
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
       top:307
    },

    callInput: {
        position: 'absolute',
        top: 370,
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
    callIcon:{
        position: 'absolute',
       left:45,
       top:382
    },

    lockInput: {
        position: 'absolute',
        top: 445,
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
    lockIcon:{
        position: 'absolute',
       left:45,
       top:455
    },

    hint:{
        color:'rgba(255, 255, 255, 0.7)',
        position:'absolute',
        top:495,
        left:45
    },

    relockInput: {
        position: 'absolute',
        top: 530,
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
    relockIcon:{
        position: 'absolute',
       left:45,
       top:539
    },

    signupButton:{
        position: 'absolute',
        top:595,
        backgroundColor:'#D00D1B',
        width:300,
        height:50,
        borderRadius:45
    },
    signupText:{
        position:'absolute',
        top:8,
        left:111,
        color:'#FFFFFF',
        fontSize:24,
        fontWeight:'bold'
    
    }

})
 