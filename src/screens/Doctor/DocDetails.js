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
import { FontAwesome } from "@expo/vector-icons";
import Button from "../components/Button";
// import { Button } from 'react-native-paper';
import { Avatar } from "react-native-paper";

export default function DocDetails({ route, navigation }) {
  const [data, setData] = useState(route.params.doc);

  return (
    <ScrollView style={styles.container}>
      <View style = {{height: 240, backgroundColor: '#f2fafc',justifyContent:'center'}}>
      <Avatar.Image source={require('../asset/image.jpg')} size= {150} style={styles.img} />
      <Text style={styles.name}>Dr. {data.name}</Text>
      <Text style={{fontSize: 15, alignSelf: 'center', marginBottom: 10, color: '#65767d'}}>Age 50</Text>
      </View>
      <View style={styles.detailContainer}>
        <View style={styles.cont}>
          <Text style={styles.head}>Specialities</Text>
          <Text style={styles.sub}>{data.category}</Text>
        </View>
        <View style={styles.cont}>
          <Text style={styles.head}>Experience</Text>
          <Text style={styles.sub}>{data.experience}</Text>
        </View>
        <Text style={styles.head}>Qualification</Text>
        <Text style={styles.sub}>{data.description}</Text>
        <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.head}>Serving</Text>
        <View style = {{backgroundColor: '#18b4f5', padding: 7,borderRadius: 8}}>
        <Text style={{fontSize: 14, color: 'white'}}>Private</Text>
        </View>
        </View>
        <Text style={styles.sub}>Noor Hospital, Islamabad</Text>
      </View>
      <View style={styles.btn}>
        <TouchableOpacity style= {styles.cons} mode="contained" 
        onPress={() => (navigation.push('BookDoc', {data})) }>
          <FontAwesome name='calendar' color="#ffff" style= {styles.icon} size={22} />
          <Text style={styles.btnTxt}>Book Appoinment</Text>
        </TouchableOpacity>
        </View>
        {/* <TouchableOpacity
          style={styles.suc}
          onPress={() =>{}
            // Alert.alert("Confirm", "Are You Sure?", [
            //   {
            //     text: "Yes Proceed",
            //     onPress: () => {
            //       Alert.alert("Success", "Request is Approved Successfully");
            //       navigation.goBack();
            //     },
            //   },
            //   { text: "Cancel" },
            // ])
          }
        >
          <FontAwesome name="check" color="#fff" size={24} />
          <Text style={styles.btnTxt}>Online Consultation</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.war}
          onPress={() =>
            Alert.alert("Confirm", "Are You Sure?", [
              {
                text: "Yes Proceed",
                onPress: () => {
                  Alert.alert("Success", "Request is Rejected Successfully");
                  navigation.goBack();
                },
              },
              { text: "Cancel" },
            ])
          }
        >
          <FontAwesome name="times" color="#fff" size={24} />
          <Text style={styles.btnTxt}>Decline</Text>
        </TouchableOpacity> */}
      
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
  // detail: {
  //   fontSize: 16,
  //   marginTop: 10,
  //   marginLeft: 5,
  // },
  btn: {
    flexDirection: 'column',
    padding: 10,
    alignItems:'center'
  },
  cons: {
    backgroundColor: '#18b4f5',
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
    marginLeft:10,
  }
});
