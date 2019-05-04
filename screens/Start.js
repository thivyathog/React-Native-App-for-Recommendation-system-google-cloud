import React, {Component} from 'react'
import {StyleSheet,Text,View,Image} from 'react-native'

export default class Start extends Component{

    
    render(){
        return(
            <View style={styles.container}>
            
            <Image source={require('/Users/Tvia/Desktop/plsWork2/images/loading.gif')} style={styles.loading}/>
            
            </View>
        )}}

const styles= StyleSheet.create({
    container:{
        backgroundColor:'#e0e0e0',
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
   
    loading:{
        marginTop:10,
        width:400,
        height:262,
    }
})