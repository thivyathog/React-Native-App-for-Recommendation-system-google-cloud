import React, { Component } from "react";
import {
    View,
    Text,
    Alert,
    ListView,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Platform,
    StatusBar,
    ScrollView,
    Image,
    Dimensions,
    Animated,
    TouchableOpacity,
    ActivityIndicator,
    Modal,
    TouchableHighlight, Button,
    FlatList
} from "react-native";
import MapView from "react-native-maps";
import {Icon} from "native-base";

import Category from './Category'

const { height, WIDTHL } = Dimensions.get('window');

//type Props = {};

function onPressShow() {


    fetch("http://35.238.205.249/newapp/sendhome")
        .then(response => response.json())
        .then((responseJson)=> {
            this.setState({

                dataSource1:responseJson.popular

                //data: responseJson.pref
            });


            /*  console.log("pred"+responseJson.popular[0].id)
              console.log("pred"+responseJson.popular[0].name)
              console.log("pred"+responseJson.popular[0].img)
              console.log("pred"+responseJson.popular[0].cost)
              console.log("APP@---------"+responseJson.popular[1].name)
              console.log("pred"+responseJson.popular[1].img)
              console.log("pred"+responseJson.popular[0].id)
              console.log("pred"+responseJson.popular[1].cost)*/
            console.log("prerecccd"+responseJson.personalrecc[0].id);

            console.log("pred"+responseJson.newApart[0].id)
        })
        .catch(error=>console.log(error));

    //    console.log("WORK"+JSON.parse(this.state.dataSource.name))



}
class HomeScreen extends Component {



    setModalVisible(visible) {
        this.setState({modalVisible: visible});

    }

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            modalVisible: false,
            dataSource1: [],
            dataSource2: [],
            dataSource3: [],
            selectedApp: [],
            userId2:"",
            selectedId:"",
            modalVisible2: false,

        };

    }
    setModalVisible2(visible) {
        this.setState({modalVisible2: visible});
    }
    /*constructor(props) {
        super(props);
        this.state = {
            loading: true,
            dataSource:[]
        };
    }
    componentDidMount() {
        fetch("http://35.238.205.249/newapp/imagedetail")
            .then(response => response.json())
            .then((responseJson) => {
                this.setState({
                    loading: false,
                    dataSource: responseJson
                })
            })
            .catch(error => console.log(error))
        //to catch the errors if any
    }
    GetListViewItem (name) {
        Alert.alert(name);
    }
    SearchFilterFunction(text){
        const newData = this.dataSource.filter(function(item){
            const itemData = item.name.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1
        });
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(newData),
            text: text
        })
    }
    ListViewItemSeparator = () => {
        return (
            <View
                style={{
                    height: .5,
                    width: "100%",
                    backgroundColor: "#000",
                }}
            />
        );
    }
  */

    componentWillMount() {
        this.state.userId2=this.props.navigation.state.params.userId;
        console.log("HomeScreenId"+this.state.userId2);
        fetch("http://35.238.205.249/newapp/sendhome")
            .then(response => response.json())
            .then((responseJson)=> {
                this.setState({

                    dataSource1:responseJson.popular,
                    loading:false,
                    dataSource2:responseJson.personalrecc,
                    dataSource3:responseJson.newApart
                    //data: responseJson.pref
                });

                console.log("prerecccd"+responseJson.personalrecc[0].id);

                console.log("pred"+responseJson.newApart[0].id)
            })
            .catch(error=>console.log(error));
        this.scrollY = new Animated.Value(0);

        this.startHeaderHeight = 80;
        this.endHeaderHeight = 50;
        if (Platform.OS == 'android') {
            this.startHeaderHeight = 100 + StatusBar.currentHeight;
            this.endHeaderHeight = 70 + StatusBar.currentHeight
        }

        this.animatedHeaderHeight = this.scrollY.interpolate({
            inputRange: [0, 50],
            outputRange: [this.startHeaderHeight, this.endHeaderHeight],
            extrapolate: 'clamp'
        });

        this.animatedOpacity = this.animatedHeaderHeight.interpolate({
            inputRange: [this.endHeaderHeight, this.startHeaderHeight],
            outputRange: [0, 1],
            extrapolate: 'clamp'
        });
        this.animatedTagTop = this.animatedHeaderHeight.interpolate({
            inputRange: [this.endHeaderHeight, this.startHeaderHeight],
            outputRange: [-30, 10],
            extrapolate: 'clamp'
        });
        this.animatedMarginTop = this.animatedHeaderHeight.interpolate({
            inputRange: [this.endHeaderHeight, this.startHeaderHeight],
            outputRange: [50, 30],
            extrapolate: 'clamp'
        })


    }
    /*renderItem=(data)=>
        <TouchableOpacity style={styles.list}>
            <Text>{data.item.name}</Text>
            <Text >{data.item.address}</Text>
            <Text >{data.item.price}</Text>
            <Text >{data.item.company.name}</Text></TouchableOpacity>*/
    /* constructor() {
         super()
         this.state = {
             dataSource : [],
             isLoading: true
         }
     }
     renderItem = (item) => {
         return(
             <TouchableHighlight
                 onPress={() => {
                     this.setModalVisible(true);
                 }}>
                 <Category source={{uri: item.url}}
                           name={item.name}
                           price={20000}
                           id={item.id}
                 />
             </TouchableHighlight>
         )
     }
     componentDidMount() {
         const url = 'http://35.238.205.249/newapp/imagedetail'
         fetch(url)
             .then(response => response.json())
             .then((responseJson) => {
                 this.setState({
                     dataSource: responseJson,
                     isLoading: false
                 })
             })
             .catch(error => console.log(error))
         //to catch the errors if any
     }*/

    render() {
        const onPressLearnMore =()=>{

            console.log("enter");
            fetch('http://35.238.205.249/newapp/retUPref', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: "t.thivya@hotmail.com",

                }),
            }).then((response) => response.json())
                .then((responseJson) => {
                    this.setState({
                        loading: false,
                        data: responseJson.pref
                    })
                    console.log(responseJson);
                    console.log(JSON.stringify({
                            id: "t.thivya@hotmail.com",
                            pref:this.state.data
                        })
                    )
                })
                .catch((error) => {
                    console.error(error);
                });

        }
        if (this.state.loading) {
            return (
                <ActivityIndicator
                    animating={true}
                    style={styles.indicator}
                    size="large"
                />
            );
        }
        return (

            <SafeAreaView style={{flex: 1, backgroundColor: '#2a2b2d'}}>
                <View style={{flex: 1, backgroundColor: '#2a2b2d'}}>
                    <Animated.View style={{
                        height: this.animatedHeaderHeight, backgroundColor: '#2a2b2d',
                        borderBottomWidth: 1, borderBottomColor: '#dddddd'
                    }}>
                        <View style={{
                            flexDirection: 'row', padding: 10,
                            backgroundColor: 'white', marginHorizontal: 20,
                            shadowOffset: {width: 0, height: 0},
                            shadowColor: 'black',
                            shadowOpacity: 0.2,
                            elevation: 1,
                            marginTop: Platform.OS == 'android' ? 30 : null
                        }}>
                            <Icon active name="search"/>
                            <TextInput
                                //   onChangeText={(text) => this.SearchFilterFunction(text)}
                                // value={this.state.text}
                                underlineColorAndroid="transparent"
                                placeholder="Search"
                                placeholderTextColor="grey"
                                style={{flex: 1, fontWeight: '700', backgroundColor: 'white', alignItems: 'center'}}
                            />



                        </View>
                        <Button title={"Update Preference"} color="#D00D1B" onPress={() => this.props.navigation.navigate('Preference',{ userId:this.state.userId2 })}/>
                    </Animated.View>
                    <ScrollView
                        scrollEventThrottle={16}
                        onScroll={Animated.event(
                            [
                                {nativeEvent: {contentOffset: {y: this.scrollY}}}
                            ]
                        )}
                    >
                        <View style={{flex: 1, backgroundColor: 'white', paddingTop: 20}}>
                            <Text style={{fontSize: 24, fontWeight: '700', paddingHorizontal: 20}}>
                                Recommended Apartments

                            </Text>
                            <Text style={{fontWeight: '300', marginTop: 10, paddingHorizontal: 20}}>
                                The Top most recommended selection of homes verified for quality & comfort depending on your preference
                            </Text>
                            <View style={{height: 250, marginTop: 20}}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >


                                    <TouchableHighlight
                                        onPress={() => {
                                            this.setModalVisible(true);
                                        }}>

                                        <Category source={{uri: this.state.dataSource2[0].img}}
                                                  name={this.state.dataSource2[0].name.toUpperCase()}
                                                  price={this.state.dataSource2[0].cost.toUpperCase()}
                                                  id={this.state.dataSource2[0].id}

                                        />
                                    </TouchableHighlight>

                                    <TouchableHighlight
                                        onPress={() => {
                                            this.setModalVisible(true);
                                        }}>
                                        <Category source={{uri: this.state.dataSource2[1].img}}
                                                  name={this.state.dataSource2[1].name.toUpperCase()}
                                                  price={this.state.dataSource2[1].cost.toUpperCase()}
                                                  id={this.state.dataSource2[1].id}

                                        />
                                    </TouchableHighlight>

                                    <TouchableHighlight
                                        onPress={() => {
                                            this.setModalVisible(true);
                                        }}>
                                        <Category source={{uri: this.state.dataSource2[2].img}}
                                                  name={this.state.dataSource2[2].name.toUpperCase()}
                                                  price={this.state.dataSource2[2].cost.toUpperCase()}
                                                  id={this.state.dataSource2[2].id}

                                        />
                                    </TouchableHighlight>

                                    <TouchableHighlight
                                        onPress={() => {
                                            this.setModalVisible(true);
                                        }}>
                                        <Category source={{uri: this.state.dataSource2[3].img}}
                                                  name={this.state.dataSource2[3].name.toUpperCase()}
                                                  price={this.state.dataSource2[3].cost.toUpperCase()}
                                                  id={this.state.dataSource2[3].id}

                                        />
                                    </TouchableHighlight>

                                    <TouchableHighlight
                                        onPress={() => {
                                            this.setModalVisible(true);
                                        }}>
                                        <Category source={{uri: this.state.dataSource2[4].img}}
                                                  name={this.state.dataSource2[4].name.toUpperCase()}
                                                  price={this.state.dataSource2[4].cost.toUpperCase()}
                                                  id={this.state.dataSource2[4].id}

                                        />
                                    </TouchableHighlight>

                                    <TouchableHighlight
                                        onPress={() => {
                                            this.setModalVisible(true);
                                        }}>
                                        <Category source={{uri: this.state.dataSource2[5].img}}
                                                  name={this.state.dataSource2[5].name.toUpperCase()}
                                                  price={this.state.dataSource2[5].cost.toUpperCase()}
                                                  id={this.state.dataSource2[5].id}

                                        />
                                    </TouchableHighlight>
                                </ScrollView>
                            </View>
                            <View style={{marginTop: 40}}>
                                <Text style={{fontSize: 24, fontWeight: '700', paddingHorizontal: 20}}>
                                    Popular Apartments
                                </Text>
                                <Text style={{fontWeight: '300', marginTop: 10, paddingHorizontal: 20}}>
                                    The most popular fast selling selection of homes verified for quality & comfort
                                </Text>
                                <View style={{height: 250, marginTop: 20}}>
                                    <ScrollView
                                        horizontal={true}
                                        showsHorizontalScrollIndicator={false}
                                    >
                                        <TouchableHighlight
                                            onPress={() => {
                                                this.setModalVisible(true);
                                            }}>
                                            <Category source={{uri: this.state.dataSource1[0].img}}
                                                      name={this.state.dataSource1[0].name.toUpperCase()}
                                                      price={this.state.dataSource1[0].cost.toUpperCase()}
                                                      id={this.state.dataSource1[0].id}

                                            />
                                        </TouchableHighlight>

                                        <TouchableHighlight
                                            onPress={() => {
                                                this.setModalVisible(true);
                                            }}>
                                            <Category source={{uri: this.state.dataSource1[1].img}}
                                                      name={this.state.dataSource1[1].name.toUpperCase()}
                                                      price={this.state.dataSource1[1].cost.toUpperCase()}
                                                      id={this.state.dataSource1[1].id}

                                            />
                                        </TouchableHighlight>

                                        <TouchableHighlight
                                            onPress={() => {
                                                this.setModalVisible(true);
                                            }}>
                                            <Category source={{uri: this.state.dataSource1[2].img}}
                                                      name={this.state.dataSource1[2].name.toUpperCase()}
                                                      price={this.state.dataSource1[2].cost.toUpperCase()}
                                                      id={this.state.dataSource1[2].id}

                                            />
                                        </TouchableHighlight>

                                        <TouchableHighlight
                                            onPress={() => {
                                                this.setModalVisible(true);
                                            }}>
                                            <Category source={{uri: this.state.dataSource1[3].img}}
                                                      name={this.state.dataSource1[3].name.toUpperCase()}
                                                      price={this.state.dataSource1[3].cost.toUpperCase()}
                                                      id={this.state.dataSource1[3].id}

                                            />
                                        </TouchableHighlight>

                                        <TouchableHighlight
                                            onPress={() => {
                                                this.setModalVisible(true);
                                            }}>
                                            <Category source={{uri: this.state.dataSource1[4].img}}
                                                      name={this.state.dataSource1[4].name.toUpperCase()}
                                                      price={this.state.dataSource1[4].cost.toUpperCase()}
                                                      id={this.state.dataSource1[4].id}

                                            />
                                        </TouchableHighlight>

                                        <TouchableHighlight
                                            onPress={() => {
                                                this.setModalVisible(true);
                                            }}>
                                            <Category source={{uri: this.state.dataSource1[5].img}}
                                                      name={this.state.dataSource1[5].name.toUpperCase()}
                                                      price={this.state.dataSource1[5].cost.toUpperCase()}
                                                      id={this.state.dataSource1[5].id}

                                            />
                                        </TouchableHighlight>
                                    </ScrollView>
                                </View>
                            </View>
                            <View style={{marginTop: 40}}>
                                <Text style={{fontSize: 24, fontWeight: '700', paddingHorizontal: 20}}>
                                    Recently added Apartments
                                </Text>
                                <Text style={{fontWeight: '300', marginTop: 10, paddingHorizontal: 20}}>
                                    Recently added selection of homes verified for quality & comfort
                                </Text>
                                <View style={{height: 250, marginTop: 20}}>
                                    <ScrollView
                                        horizontal={true}
                                        showsHorizontalScrollIndicator={false}
                                    >
                                        <TouchableHighlight
                                            onPress={() => {
                                                this.setModalVisible(true);
                                            }}>
                                            <Category source={{uri: this.state.dataSource3[0].img}}
                                                      name={this.state.dataSource3[0].name.toUpperCase()}
                                                      price={this.state.dataSource3[0].cost.toUpperCase()}
                                                      id={this.state.dataSource2[0].id}

                                            />
                                        </TouchableHighlight>

                                        <TouchableHighlight
                                            onPress={() => {
                                                this.setModalVisible(true);
                                            }}>
                                            <Category source={{uri: this.state.dataSource3[1].img}}
                                                      name={this.state.dataSource3[1].name.toUpperCase()}
                                                      price={this.state.dataSource3[1].cost.toUpperCase()}
                                                      id={this.state.dataSource3[1].id}

                                            />
                                        </TouchableHighlight>

                                        <TouchableHighlight
                                            onPress={() => {
                                                this.setModalVisible(true);
                                            }}>
                                            <Category source={{uri: this.state.dataSource3[2].img}}
                                                      name={this.state.dataSource3[2].name.toUpperCase()}
                                                      price={this.state.dataSource3[2].cost.toUpperCase()}
                                                      id={this.state.dataSource3[2].id}

                                            />
                                        </TouchableHighlight>

                                        <TouchableHighlight
                                            onPress={() => {
                                                this.setModalVisible(true);
                                            }}>
                                            <Category source={{uri: this.state.dataSource3[3].img}}
                                                      name={this.state.dataSource3[3].name.toUpperCase()}
                                                      price={this.state.dataSource3[3].cost.toUpperCase()}
                                                      id={this.state.dataSource3[3].id}

                                            />
                                        </TouchableHighlight>

                                        <TouchableHighlight
                                            onPress={() => {
                                                this.setModalVisible(true);
                                            }}>
                                            <Category source={{uri: this.state.dataSource3[4].img}}
                                                      name={this.state.dataSource3[4].name.toUpperCase()}
                                                      price={this.state.dataSource3[4].cost.toUpperCase()}
                                                      id={this.state.dataSource3[4].id}

                                            />
                                        </TouchableHighlight>

                                        <TouchableHighlight
                                            onPress={() => {
                                                this.setModalVisible(true);
                                            }}>
                                            <Category source={{uri: this.state.dataSource3[5].img}}
                                                      name={this.state.dataSource3[5].name.toUpperCase()}
                                                      price={this.state.dataSource3[5].cost.toUpperCase()}
                                                      id={this.state.dataSource3[5].id}

                                            />
                                        </TouchableHighlight>
                                    </ScrollView>
                                </View>
                            </View>
                        </View>
                    </ScrollView>

                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={this.state.modalVisible}
                        onRequestClose={() => {
                            //Alert.alert('Modal has been closed.');

                           // this.props.navigation.push('Home',{userId:this.state.userId2})
                            this.setModalVisible(false)
                        }}>
                        <ScrollView
                            scrollEventThrottle={16}
                            onScroll={Animated.event(
                                [
                                    {nativeEvent: {contentOffset: {y: this.scrollY}}}
                                ]
                            )}
                        >
                            <View style={{backgroundColor: '#2a2b2d' }}>

                                <ScrollView
                                    horizontal={true}
                                    style={{ flex: 2 }}
                                    showsHorizontalScrollIndicator={false}
                                >

                                    <Image source={require('../assets/experiences.jpg')}
                                           style={{ flex: 1, width: 390, height: 200, resizeMode: 'cover' }}
                                    />

                                    <Image source={require('../assets/experiences.jpg')}
                                           style={{ flex: 1, width: 390, height: 200, resizeMode: 'cover' }}
                                    />

                                    <Image source={require('../assets/experiences.jpg')}
                                           style={{ flex: 1, width: 390, height: 200, resizeMode: 'cover' }}
                                    />

                                    <Image source={require('../assets/experiences.jpg')}
                                           style={{ flex: 1, width: 390, height: 200, resizeMode: 'cover' }}
                                    />
                                </ScrollView>
                                <View style={{ height: 700, width: 350, marginLeft: 10, marginRight: 10,marginTop: 10,
                                    borderWidth: 0.5, borderColor: '#dddddd',backgroundColor: 'white' }}>


                                    <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>

                                        <TouchableHighlight
                                            onPress={() => {
                                                this.setModalVisible2(true);
                                            }}>
                                            <Text>View Location on Google Map</Text>
                                        </TouchableHighlight>

                                        <Text style={{ fontSize: 20, fontWeight: '700' }}>Heloo</Text>
                                        <Text style={{ fontSize: 14, fontWeight: '500' }}>Byeeee</Text>
                                    </View>

                                    <TouchableHighlight
                                        onPress={() => {
                                            this.setModalVisible(!this.state.modalVisible);
                                        }}>
                                        <View style={{height: 50,width: 80, borderWidth: 0.3, borderColor:'#dddddd',
                                            backgroundColor: '#2a2b2d', marginLeft: 10}}>
                                            <Text style={{fontSize: 25, fontWeight: '600', color: 'white', alignItems: 'center'}}>Back
                                            </Text>
                                        </View>
                                    </TouchableHighlight>
                                </View>
                            </View>
                        </ScrollView>
                    </Modal>

                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={this.state.modalVisible2}
                        onRequestClose={() => {
                            this.setModalVisible2(false)
                            //Alert.alert('Modal has been closed.');
                           // this.props.navigation.navigate('Home')

                        }}>
                        <View style={styles.container}>

                            <MapView style={styles.map}
                                     region={{
                                         latitude:6.869289,
                                         longitude:79.863265,
                                         latitudeDelta:0.1,
                                         longitudeDelta:0.1

                                     }}
                            >

                                <MapView.Marker
                                    coordinate={{
                                        latitude:6.869289,
                                        longitude:79.863265
                                    }}
                                    title={'Selected Apartment'}
                                    description={'my marker desc'}
                                />

                                <MapView.Marker
                                    coordinate={{
                                        latitude:6.868842,
                                        longitude:79.862150
                                    }}
                                    title={'Arpico'}
                                    description={'my marker desc'}
                                >
                                    <View style={styles.marker}>
                                        <Text>
                                            Arpico
                                        </Text>
                                    </View>
                                </MapView.Marker>
                            </MapView>
                            <View >


                               {/* <TouchableHighlight
                                    onPress={() => {
                                        this.setModalVisible(!this.state.modalVisible2);
                                    }}>
                                    <Text style={{ borderRadius:45 ,backgroundColor:"green",color:"white",alignSelf: 'flex-end',fontSize:22}}>go back</Text>
                                </TouchableHighlight>*/}
                            </View>
                        </View>
                    </Modal>
                </View>
            </SafeAreaView>
        );
    }
}
export default HomeScreen;

const styles=StyleSheet.create({
    container: {
        position:'absolute',
        top:0,
        left:0,
        bottom:0,
        right:0,
        justifyContent:'flex-end'
    },map:{
        position:'absolute',
        top:0,
        left:0,
        bottom:0,
        right:0,
    },marker:{
        backgroundColor:"red",
        color:"white",
        padding:5,
        borderRadius:5,
    }
});