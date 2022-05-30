import React, { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
  Linking
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
// import { Button } from 'react-native-paper';
import { Avatar } from "react-native-paper";
import { Entypo } from "@expo/vector-icons";

export default function AmbuRequesterDetail({ route, navigation }) {
  const [data, setData] = useState(route.params.ambul);

  const location = (address) => {
    Linking.openURL(
      `https://www.google.com/maps/search/?api=1&query=${address}`
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style = {{height: 200, backgroundColor: '#f0eae9',justifyContent:'center'}}>
      <Avatar.Image source={require('../../src/screens/asset/image.jpg')} size= {120} style={styles.img} />
      <Text style={styles.name}>{data.name}</Text>
      </View>
      <View style={styles.detailContainer}>
        <View style={styles.cont}>
          <Text style={styles.head}>Phone No</Text>
          <Text style={styles.sub}>{data.contact}</Text>
        </View>
        <View style={styles.cont}>
          <Text style={styles.head}>Soure Location</Text>
          <Text style={styles.sub}>{data.city}</Text>
          <TouchableOpacity style= {styles.locadd}>
            <Entypo name="location-pin" size={18} color="#43a2e6" />
            <Text style= {{color: '#43a2e6'}} onPress={() => location(data.city)}
            >View on map</Text>
        </TouchableOpacity>
        </View>
        <Text style={styles.head}>Destination</Text>
        <Text style={styles.sub}>{data.city}</Text>
        <TouchableOpacity style= {styles.locadd}>
            <Entypo name="location-pin" size={18} color="#43a2e6" />
            <Text style= {{color: '#43a2e6'}} onPress={() => location(data.city)}
            >View on map</Text>
        </TouchableOpacity>
        <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.head}>Description</Text>
        </View>
        <Text style={styles.sub}>Urgently Need </Text>
      </View>
    <View style ={{paddingBottom: 10,
            paddingTop: 5, 
            flexDirection: 'row',
            justifyContent: 'space-around', 
            backgroundColor:'white',
            borderBottomLeftRadius:6, 
            borderBottomRightRadius:6 
            }}>
            <TouchableOpacity style= {styles.cons}  
                onPress={() => {''} }>
                <Text style={styles.btnTxt}> Reject</Text>
            </TouchableOpacity>
            <TouchableOpacity style= {styles.Acons}
                onPress={() => {''} }>
                <Text style={styles.btnTxt}> Accept</Text>
            </TouchableOpacity>
            </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white", //"#EEEAE2",
    height: '100%'
  },
  img: {
    alignSelf: "center",
  },
  detailContainer: {
    marginVertical: 5,
    padding: 15,
  },
  name: {
    alignSelf: "center",
    fontSize: 22,
    fontWeight: "bold",
    marginVertical:5
  },
  cont: {
    flexDirection: 'column',
  },
  head: {
    fontSize: 20,
    fontWeight: "bold",
  },
  sub: {
    fontSize: 16,
    paddingTop: 10,
    paddingBottom: 10,
    color: '#2d2e2e'
  },
  btn: {
    flexDirection: 'column',
    padding: 10,
    alignItems:'center'
  },
  cons: {
    backgroundColor: '#eb3838',
    width: '35%',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    padding: 7
  },
  Acons: {
    backgroundColor: '#18c947',
    width: '35%',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    padding: 7
  },
  btnTxt:{
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  locadd:{
    flexDirection:'row',
    marginBottom: 5,
    color:'blue'
  },
});
