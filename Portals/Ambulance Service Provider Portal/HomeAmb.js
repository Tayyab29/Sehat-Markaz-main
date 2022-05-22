import React from 'react'
import {View, Text, Image, ImageBackground} from 'react-native'
import {TextInput,ScrollView,TouchableOpacity} from 'react-native-gesture-handler'
import { LinearGradient } from 'expo-linear-gradient'
import Icon from 'react-native-vector-icons/FontAwesome';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaIcon from "react-native-vector-icons/MaterialIcons";

const HomeAmb = ({navigation}) => {
    return(
        <View style={{
            backgroundColor:"#FFF",
            flex:1
        }}>
           <View style={{
               backgroundColor:"#e64c4c",
               height:"28%",
               borderBottomLeftRadius:20,
               borderBottomRightRadius:20,
               paddingHorizontal:20
           }}>
               <Image
                   // source={require('../images/1.png')}
                    style={{
                        height:10,
                        width:20,
                        marginTop:'8%'
                    }}
               />
               <View style={{
                   flexDirection:"row",
                   alignItems:"center",
                   marginTop:5,
                   width:"100%"
               }}>
                   <View style={{width:"60%"}}>
                        <Text style={{
                            fontSize:24,
                            color:"#FFF",
                            fontWeight:"bold"
                        }}>Al Sadiq Ambulance Service </Text>
                   </View>
                   <View style={{width:"40%",alignItems:"flex-end"}}>
                        <Image
                           source={require('../assets/sehatblacklog.png')}
                            style={{height:85,width:85}}
                        />
                   </View>
               </View>
           </View>
           <LinearGradient
            colors={["rgba(196, 132, 132,0.4)", "transparent"]}
            style={{
                left:0,
                right:0,
                height:50,
                marginTop:-45
            }}
           >
            </LinearGradient>

                <ScrollView 
                    style={{height:400}}
                >
                    <LinearGradient
                        colors={["rgba(196, 132, 132,0.09)", "transparent"]}
                        style={{
                            position:"absolute",
                            left:0,
                            right:0,
                            height:100,
                            marginTop:220,
                            top:0
                        }}
                    />
                <View style = {{flexDirection: 'row',justifyContent:'space-evenly'}}>
                    <TouchableOpacity 
                        onPress={()=>navigation.navigate("AmbuProfile")}
                        style={{
                            height:150,
                            elevation:2,
                            backgroundColor:"#FFF",
                            alignItems:'center',
                            justifyContent:'center',
                            marginTop:20,
                            borderRadius:15,
                            marginBottom:10,
                            width:160
                        }}
                    >
                        <Icon name="user" size= {70} color= '#e64c4c' />
                        <View style={{
                            flexDirection:"row",
                            paddingTop:10,
                            paddingHorizontal:10
                        }}>
                            <Text style={{
                                fontWeight:"bold",
                                alignItems: "center"
                            }}>Profile</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        // onPress={()=>navigation.navigate("Detail")}
                        style={{
                            height:150,
                            elevation:2,
                            backgroundColor:"#FFF",
                            alignItems:'center',
                            justifyContent:'center',
                            marginTop:20,
                            borderRadius:15,
                            marginBottom:10,
                            width:160
                        }}
                    >
                        <Icon name="bell-o" size= {70} color= '#e64c4c'  />
                        <View style={{
                            flexDirection:"row",
                            paddingTop:10,
                            paddingHorizontal:10
                        }}>
                            <Text style={{
                                fontWeight:"bold"
                            }}>Notification</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style = {{flexDirection: 'row',justifyContent:'space-evenly'}}>
                    <TouchableOpacity 
                        onPress={()=>navigation.navigate("AmbuRequest")}
                        style={{
                            height:150,
                            elevation:2,
                            backgroundColor:"#FFF",
                            alignItems:'center',
                            justifyContent:'center',
                            marginTop:20,
                            borderRadius:15,
                            marginBottom:10,
                            width:160
                        }}
                    >
                        <MaIcon name="pending-actions" size= {70} color= '#e64c4c'  />
                        <View style={{
                            flexDirection:"row",
                            paddingTop:10,
                            paddingHorizontal:10
                        }}>
                            <Text style={{
                                fontWeight:"bold"
                            }}>Pending Request</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        onPress={()=>navigation.navigate("AvailableAmbulance")}
                        style={{
                            height:150,
                            elevation:2,
                            backgroundColor:"#FFF",
                            alignItems:'center',
                            justifyContent:'center',
                            marginTop:20,
                            borderRadius:15,
                            marginBottom:10,
                            width:160
                        }}
                    >
                        <Icon name="ambulance" size= {65} color= '#e64c4c'  />
                        <View style={{
                            flexDirection:"row",
                            paddingTop:10,
                            paddingHorizontal:10
                        }}>
                            <Text style={{
                                fontWeight:"bold"
                            }}>Ambulance</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style = {{flexDirection: 'row',justifyContent:'space-evenly'}}>
                    <TouchableOpacity 
                        // onPress={'()=>navigation.navigate("Detail")'}
                        style={{
                            height:150,
                            elevation:2,
                            backgroundColor:"#FFF",
                            alignItems:'center',
                            justifyContent:'center',
                            marginTop:20,
                            borderRadius:15,
                            marginBottom:10,
                            width:160
                        }}
                    >
                        <MIcon name="android-messages" size= {70} color= '#e64c4c'  />
                        <View style={{
                            flexDirection:"row",
                            paddingTop:10,
                            paddingHorizontal:10
                        }}>
                            <Text style={{
                                fontWeight:"bold"
                            }}>Messages</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        // onPress={()=>navigation.navigate("Detail")}
                        style={{
                            height:150,
                            elevation:2,
                            backgroundColor:"#FFF",
                            alignItems:'center',
                            justifyContent:'center',
                            marginTop:20,
                            borderRadius:15,
                            marginBottom:10,
                            width:160
                        }}
                    >
                        <MIcon name="logout" size= {70} color= '#e64c4c'  />
                        <View style={{
                            flexDirection:"row",
                            paddingTop:10,
                            paddingHorizontal:10
                        }}>
                            <Text style={{
                                fontWeight:"bold"
                            }}>Logout</Text>
                        </View>
                    </TouchableOpacity>
                </View>              
            </ScrollView>            
        </View>
    )
}
export default HomeAmb;