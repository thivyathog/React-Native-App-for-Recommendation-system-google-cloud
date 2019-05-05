import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    AppRegistry,
    Button,
    ImageBackground,
    TouchableOpacity,
    Text,
    View,
    Alert,
    ActivityIndicator
} from 'react-native';
import { Divider, Header, Icon, Image, Rating} from 'react-native-elements';
import DraggableFlatList from 'react-native-draggable-flatlist'



const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

type Props = {};
class PreferenceScreen extends Component<Props> {
    state = {
        /*  data: [...Array(3)].map((d, index) => ({
              key: `item-${index}`,
              label: ["index","lol","ok"],
              backgroundColor: `rgb(${Math.floor(Math.random() * 255)}, ${index * 5}, ${132})`,
          }))*/

        data:[],
        userID:"",

        dataSource2:[]
    }

    renderItem = ({ item, index, move, moveEnd, isActive }) => {
        return (
            <TouchableOpacity
                style={{
                    height: 90,
                    borderRadius:10,
                    //   backgroundColor: isActive ? 'navy' : item.backgroundColor,
                    alignItems: 'center',
                    justifyContent: 'center'

                }}
                onLongPress={move}
                onPressOut={moveEnd}
            >
                <Divider style={{ backgroundColor: 'white' }} />
                <Text underlineColorAndroid='transparent' style={styles.item} >{item}</Text>
                <Divider style={{ backgroundColor: 'white' }} />
            </TouchableOpacity>
        )

    }


    componentWillMount(): void {
        console.log("enter");
        this.state.userID=this.props.navigation.state.params.userId;
        console.log("prefId"+this.state.userID);
        fetch('http://35.238.205.249/newapp/retUPref/'+this.state.userID, {
            method: 'GET'
        }).then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    loading: false,
                    data: responseJson.pref
                })
                console.log(responseJson);
                console.log(JSON.stringify({

                        pref:this.state.data
                    })
                )
            })
            .catch((error) => {
                console.error(error);
            });

    }

    render() {
        if (this.state.loading) {
            return (
                <ActivityIndicator
                    animating={true}
                    style={styles.indicator}
                    size="large"
                />
            );
        }
        const onPressLearnMore =()=>{

            console.log("enter");
            fetch('http://35.238.205.249/newapp/preferences', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: this.state.userID,
                    pref:this.state.data
                }),
            }).then((response) => response.json())
                .then((responseJson) => {
                    this.setState({
                        loading: false,
                        data: responseJson.pref
                    })

                })
                .catch((error) => {
                    console.error(error);
                });

            this.props.navigation.navigate('Home')
        }


        return (


            <View  style={styles.container}>

                <View>

                    <TouchableOpacity
                        style={styles.button2}
                        onPress={() => this.props.navigation.navigate('Home')}
                    >
                        <Text /*onPress={() => this.props.navigation.navigate('Login')} */style={{color:'white',fontWeight: 'bold'}}> SKIP </Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <Text style={{color:'white',fontWeight: 'bold',
                        fontSize: 22,
                        alignItems: 'center', textAlign: 'center',
                    }}>
                        Almost there!

                    </Text>
                    <Text style={{color:'white',fontWeight: 'bold',
                        alignItems: 'center', textAlign: 'center',
                        paddingBottom:10
                    }}>

                        Please rearrange the factors below to suit your preference(The top most is your highest priority)
                    </Text>
                </View>
                <DraggableFlatList
                    data={this.state.data}

                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => `itemdragged-${item}`}

                    scrollPercent={5}
                    onMoveEnd={({ data}) => this.setState({ data })}

                />

                <Button
                    onPress={onPressLearnMore}
                    title="SUBMIT PREFERENCE"
                    color="#D00D1B"

                    accessibilityLabel="To submit preference"

                />




            </View>
        )


    }
}

export default PreferenceScreen;
const styles = StyleSheet.create({
        container: {
            flex: 1,
            // paddingTop: 22,
            backgroundColor: "#2a2b2d",

            // height: Dimensions.get("window").height * 0.25
        }, button: {
            alignItems: 'center',
            backgroundColor: '#D00D1B',
            padding: 10,
            borderRadius:45
        },button2:{

            alignSelf: 'flex-end',
            borderRadius:45,
            backgroundColor: '#D00D1B',
            padding: 10
        },
        item: {

            padding: 10,

            fontSize: 22,
            height: 73.5,
            color:"white",
            width:200,
            backgroundColor: 'rgba(0,0,0,0.8)',
            borderRadius:50,
            textAlign: 'center',

        },
    })
;
