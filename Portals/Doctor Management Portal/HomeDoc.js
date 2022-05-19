import React from 'react'
import {View, Text, Image, ImageBackground,TouchableOpacity} from 'react-native'
import {TextInput,ScrollView,} from 'react-native-gesture-handler'
import { LinearGradient } from 'expo-linear-gradient'
import Icon from 'react-native-vector-icons/FontAwesome';
import MaIcon from 'react-native-vector-icons/MaterialIcons';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';

const HomeDoc = ({navigation}) => {
    return(
        <View style={{
            backgroundColor:"#FFF",
            flex:1
        }}>
           <View style={{
               backgroundColor:"#18b4f5",
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
                        marginTop:25
                    }}
               />
               <View style={{
                   flexDirection:"row",
                   alignItems:"center",
                   marginTop:5,
                   width:"100%"
               }}>
                            <View style={{ width: "50%" }}>
            <Text
              style={{
                fontSize: 28,
                color: "#FFF",
                fontWeight: "bold",
              }}
            >
              Hi Dr Tayyab{" "}
            </Text>
            <Text
              style={{
                fontSize: 20,
                color: "#FFF",
                fontWeight: "bold",
              }}
            >
              How are you today?{" "}
            </Text>
          </View>
                   <View style={{width:"50%",alignItems:"flex-end"}}>
                        <Image
                           source={require('../assets/sehatblacklog.png')}
                            style={{height:80,width:80}}
                        />
                   </View>
               </View>
           </View>
           <LinearGradient
            colors={["rgba(197, 225, 235,0.4)", "transparent"]}
            style={{
                left:0,
                right:0,
                height:90,
                marginTop:-45
            }}
           >
            </LinearGradient>
            
        
                <ScrollView 
                    // horizontal
                    // showsHorizontalScrollIndicator={false}
                    
                    style={{height:400}}
                >
                    <LinearGradient
                        colors={["rgba(0,164,109,0.09)", "transparent"]}
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
                    onPress={()=>navigation.navigate("")}
                    >
                        <Icon name="calendar" size= {70} color= '#18b4f5' />
                        <View style={{
                            flexDirection:"row",
                            paddingTop:10,
                            paddingHorizontal:10
                        }}>
                            <Text style={{
                                fontWeight:"bold",
                                alignItems: "center"
                            }}>Schedule</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        onPress={()=>navigation.navigate("DocAppoint")}
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
                        <MIcon name="calendar-clock" size= {70} color= '#18b4f5'  />
                        <View style={{
                            flexDirection:"row",
                            paddingTop:10,
                            paddingHorizontal:10
                        }}>
                            <Text style={{
                                fontWeight:"bold"
                            }}>View Appointments</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style = {{flexDirection: 'row',justifyContent:'space-evenly'}}>
                    <TouchableOpacity 
                        onPress={()=>navigation.navigate("DocViewMed")}
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
                        <Fontisto name="pills" size= {70} color= '#18b4f5' />
                        {/* <MIcon name="android-messages" size= {70} color= '#43ba63'  /> */}
                        <View style={{
                            flexDirection:"row",
                            paddingTop:10,
                            paddingHorizontal:10
                        }}>
                            <Text style={{
                                fontWeight:"bold"
                            }}>Medicine</Text>
                        </View>
                    </TouchableOpacity>

                    <View 
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
                        <Fontisto name="prescription" size= {70} color= '#18b4f5'  />
                        <View style={{
                            flexDirection:"row",
                            paddingTop:10,
                            paddingHorizontal:10
                        }}>
                            <Text style={{
                                fontWeight:"bold"
                            }}>Prescription</Text>
                        </View>
                    </View>
                </View>
                <View style = {{flexDirection: 'row',justifyContent:'space-evenly'}}>
                    {/* <TouchableOpacity 
                        onPress={()=>navigation.navigate("ViewMed")}
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
                        <Fontisto name="pills" size= {70} color= '#43ba63' />
                        {/* <MIcon name="android-messages" size= {70} color= '#43ba63'  /> 
                        <View style={{
                            flexDirection:"row",
                            paddingTop:10,
                            paddingHorizontal:10
                        }}>
                            <Text style={{
                                fontWeight:"bold"
                            }}>Medicine</Text>
                        </View>
                    </TouchableOpacity> */}

                    <View 
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
                        <MIcon name="logout" size= {70} color= '#18b4f5'  />
                        <View style={{
                            flexDirection:"row",
                            paddingTop:10,
                            paddingHorizontal:10
                        }}>
                            <Text style={{
                                fontWeight:"bold"
                            }}>Logout</Text>
                        </View>
                    </View>
                </View>

                </ScrollView>            

                
{/* 

               <View style={{
                   flexDirection:"row",
                   paddingHorizontal:20,
                   width:"100%",
                   alignItems:"center",
                   marginTop:-80,
               }}>
                   <View style={{width:"50%"}}>
                        <Text style={{
                            fontWeight:"bold",
                            fontSize:17,
                            color:"#585a61"
                        }}>Featured Plants</Text>
                        <View style={{
                            height:4,
                            backgroundColor:"#b1e5d3",
                            width:115,
                            marginTop:-5
                        }}>

                        </View>

                   </View>
                   <View style={{width:"50%", alignItems:"flex-end"}}>
                        <View style={{
                            backgroundColor:"#00a46c",
                            paddingHorizontal:20,
                            paddingVertical:5,
                            borderRadius:15
                        }}>
                            <Text style={{
                                fontWeight:"bold",
                                fontSize:13,
                                color:"#FFF"
                            }}>More</Text>
                        </View>
                   </View>
               </View>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{marginBottom:-100}}
                >
                    <Image
                        //source={require("../images/18.png")}
                        style={{marginTop:20,marginHorizontal:20}}
                    />
                     <Image
                        //source={require("../images/19.png")}
                        style={{marginTop:20,borderRadius:10}}
                    />
                </ScrollView> */}
        </View>
    )
}
export default HomeDoc;