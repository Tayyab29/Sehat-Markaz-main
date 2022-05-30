import React, { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import Swiper from 'react-native-swiper';
import { FontAwesome } from "@expo/vector-icons";
// import { Button } from 'react-native-paper';
import { Avatar } from "react-native-paper";
import { Entypo } from "@expo/vector-icons";

export default function AvailableAmbulanceDetail({ route, navigation }) {
  const [data, setData] = useState(route.params.ambu);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.detailContainer}>
        <View style={styles.cont}>
          <Text style={styles.head}>Ambulance Type</Text>
          <Text style={styles.sub}>{data.ambulance_type}</Text>
        </View>
        <View style={styles.cont}>
          <Text style={styles.head}>Ambulance Features</Text>
          <Text style={styles.sub}>{data.description}</Text>
        </View>
        <Text style={styles.head}>Picture</Text>
        <View style={styles.sliderContainer}>
        <Swiper
          autoplay
          horizontal={true}
          height={200}
          activeDotColor="#f71616">
          <View style={styles.slide}>
            <Image
              source={require('../../src/screens/asset/ambu1.jpeg')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../../src/screens/asset/ambu2.jpeg')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../../src/screens/asset/ambu3.jpeg')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
        </Swiper>
      </View>
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
               >
                <Text style={styles.btnTxt}> Delete</Text>
            </TouchableOpacity>
            <TouchableOpacity style= {styles.cons}
                 onPress={()=>navigation.navigate("UpdateAmbulance")}>
                <Text style={styles.btnTxt}> Update</Text>
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
  sliderContainer: {
    height: 200,
    width: '100%',
    marginTop: 16,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
  sliderImage: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
  }
});
