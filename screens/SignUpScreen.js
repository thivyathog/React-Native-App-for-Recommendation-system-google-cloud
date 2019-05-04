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
    Button,Alert
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
            password:'',
            password2:'',
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
                    value={this.state.name}
                    returnKeyType='next'
                    onSubmitEditing={() => { this.mailInput.focus(); }}/>



              <Icon name={'ios-mail'} size={25} color={'rgba(255, 255, 255, 0.7)'}
                    style={styles.mailIcon} />

                <TextInput
                    ref={(input) => { this.mailInput = input; }}
                    style={styles.mailInput}
                    placeholder={"Email"}
                    placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                    underlineColorAndroid='transparent'
                    keyboardType='email-address'
                    onChangeText={(email) => this.setState({ email })}
                    value={this.state.email}
                    returnKeyType='next'
                    onSubmitEditing={() => { this.mobileInput.focus(); }} />

<Icon name={'ios-call'} size={25} color={'rgba(255, 255, 255, 0.7)'}
                    style={styles.callIcon} />

                <TextInput
                    ref={(input) => { this.mobileInput = input; }}
                    style={styles.callInput}
                    placeholder={"Mobile Number"}
                    placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                    underlineColorAndroid='transparent'
                    keyboardType='number-pad'
                    onChangeText={(mobile) => this.setState({ mobile })}
                    value={this.state.mobile}
                    returnKeyType='next'
                    onSubmitEditing={() => { this.passwordInput.focus(); }} />

                <Icon name={'ios-lock'} size={25} color={'rgba(255, 255, 255, 0.7)'}
                      style={styles.lockIcon} />

                <TextInput
                    ref={(input) => { this.passwordInput = input; }}
                    style={styles.lockInput}
                    placeholder={"Password"}
                    placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                    underlineColorAndroid='transparent'
                    secureTextEntry={true}
                    onChangeText={(password) => this.setState({ password })}
                    value={this.state.password}
                    returnKeyType='next'
                    onSubmitEditing={() => { this.reEnterPasswordInput.focus(); }} />

                <Text style={styles.hint}>Password must be 8 characters</Text>

                <Icon name={'ios-lock'} size={25} color={'rgba(255, 255, 255, 0.7)'}
                      style={styles.relockIcon} />

                <TextInput
                    ref={(input) => { this.reEnterPasswordInput = input; }}
                    style={styles.relockInput}
                    placeholder={"Re-Enter Password"}
                    placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                    underlineColorAndroid='transparent'
                    secureTextEntry={true}
                    onChangeText={(password2) => this.setState({ password2 })}
                    value={this.state.password2}/>

                <TouchableOpacity style={styles.signupButton}
                                  onPress={this._postData}>
                    <Text style={styles.signupText} onPress={this._postData} style={styles.signupText}>Signup</Text>
                </TouchableOpacity>

                <Text>{this.state.result}</Text>
            </ImageBackground>
        )
    }

     _postData = async () => {

         if (this.state.name.trim()!=='' || this.state.email!==''|| this.state.mobile.trim()!==''||this.state.Password!==''){
             if (this.state.password===this.state.password2) {
                 console.log("ENTERRRRRRRRRRRRRRss")
                 console.log(this.state.email)
                 console.log(this.state.mobile)
                 console.log(this.state.Password)
                 let formData = new FormData();
                 formData.append('name', this.state.name);
                 formData.append('email', this.state.email);
                 formData.append('mobile', this.state.mobile);
                 formData.append('password', this.state.password);

                 fetch('http://35.238.205.249/newapp/registration', {
                     method: 'POST',
                     body: formData
                 }).then((response) => response.json())
                     .then((responseJson) => {
                         this.setState({result: responseJson.status})
                         console.log(responseJson)
                         console.log("S_"+responseJson.status)

                     })
                 console.log("----->"+this.state.result)
                 console.log("hi"+this.state.result)
             }
             else{
                 Alert.alert("Password does not match")
                /* ToastAndroid.showWithGravity(
                     'Password does not match',
                     ToastAndroid.SHORT,
                 );*/
             }


             if(this.state.result=="success"){
                 Alert.alert("User already registered")

             }else{

                 this.props.navigation.navigate('PreferenceScreen')
                /* ToastAndroid.showWithGravity(
                     'User already registered',
                     ToastAndroid.SHORT,
                 );*/
             }



         }else{

             Alert.alert("Please Fill All Fields")



         }}
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
