import React, { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
  Linking,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Avatar } from "react-native-paper";

export default function BloodDonorProfile({ route, navigation }) {
  // const [data, setData] = useState(route.params.doc);
  const location = (address) => {
    Linking.openURL(
      `https://www.google.com/maps/search/?api=1&query=${address}`
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style = {{height: 240, backgroundColor: '#f0eae9',justifyContent:'center'}}>
      <Avatar.Image source={require('../../src/screens/asset/image.jpg')} size= {150} style={styles.img} />
      <Text style={styles.name}>M Tayyab Khazain </Text>
      <Text style={{fontSize: 15, alignSelf: 'center', marginBottom: 10,color: '#65767d'}}>Male</Text>
      </View>
      <View style={styles.detailContainer}>
      <View style={styles.cont}>
          <Text style={styles.head}>Phone No</Text>
          <Text style={styles.sub}>03175739548</Text>
        </View>
        <View style={styles.cont}>
          <Text style={styles.head}>Email</Text>
          <Text style={styles.sub}>xhahg32@gmail.com</Text>
        </View>
        <View style={styles.cont}>
          <Text style={styles.head}>Fater Name</Text>
          <Text style={styles.sub}>M Tahir Amir</Text>
        </View>
        <View style={styles.cont}>
          <Text style={styles.head}>Blood Group</Text>
          <Text style={styles.sub}>A+</Text>
        </View>
        <View style={styles.cont}>
          <Text style={styles.head}>Address</Text>
          <Text style={styles.sub}>Bani Gala, Islamabad</Text>
          <TouchableOpacity style= {styles.locadd}>
            <Entypo name="location-pin" size={18} color="#43a2e6" />
            <Text style= {{color: '#43a2e6', marginLeft: 2}} onPress={() => location('Bani Gala, Islamabad')}
            >View on map</Text>
        </TouchableOpacity>
        </View>
      </View>
      <View style={styles.btn}>
        <TouchableOpacity style= {styles.cons} mode="contained" 
        onPress={() => (navigation.push('EditDonorProfile'))}>
          <Text style={styles.btnTxt}>Edit Profile</Text>
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
    height: 44,
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 10,
    marginBottom: 15,
    padding: 10
  },
  btnTxt:{
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  locadd:{
    flexDirection:'row',
    marginTop: 2,
    color:'blue'
  },
});
