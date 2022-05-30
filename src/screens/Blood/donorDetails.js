import React, { useState } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Linking,
  TouchableOpacity,
  Alert,
  Modal,
  Image,
  Pressable
} from "react-native";
import { Avatar } from "react-native-paper";
import kami from "../asset/kami.jpeg";
import { Entypo } from "@expo/vector-icons";
import { Text } from 'react-native-paper';
import TextInputR from '../components/TextInputR';
import { theme } from '../core/theme';
import {emptyfield } from '../helpers/emptyfield';

export default function DonorDetails({ route }) {
  const [data, setData] = useState(route.params.donor);
  const [modalVisible, setModalVisible] = useState(false);
  const [userlocation, setLocation] = useState({ value: '', error: '' });
  const [bottles, setBottles] = useState({ value: '', error: '' });
  const [description, setDescription] = useState({ value: '', error: '' });
  


  const _onRequestPressed = () => {
    const nameError = emptyfield(userlocation.value);
    const priceError = emptyfield(bottles.value);
    const descriptionError = emptyfield(description.value);

    if (priceError || descriptionError || nameError) {
      setLocation({ ...userlocation, error: nameError });
      setBottles({ ...bottles, error: priceError });
      setDescription({ ...description, error: descriptionError });
      return;
    }
  };

  const location = (address) => {
    Linking.openURL(
      `https://www.google.com/maps/search/?api=1&query=${address}`
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.naar}>
        <Avatar.Image source={kami} size={200} />
        <Text style={styles.name}>{data.name}</Text>
      </View>

      <View style={styles.details}>
      <View style = {styles.cardloc}>
        <View style={{ flexDirection: "row", marginTop: 7 }}>
          <Text style={{fontWeight: 'bold',fontSize:20}} >
            Age: 
            </Text>
            <Text
              style={styles.contactNum}
            >
              {data.age}
            </Text>
          </View>
            <View style={{ flexDirection: "row" }}>
            <Text style={{fontWeight: 'bold',fontSize:20}} >
              Blood Group: 
            </Text>
            <Text style={styles.contactNum} >
              {data.bloodGroup}
            </Text>
          </View>
      </View>
        <View style = {styles.cardloc}>
          <Text style={styles.addHead}>Location of Ambulance Service </Text>
          <View style={{ flexDirection: "column" }}>
            <Text
              style={styles.contactAdd}
            >
              {data.city}
            </Text>

            <TouchableOpacity style= {styles.locadd}>
            <Entypo name="location-pin" size={18} color="#43a2e6" />
            <Text style= {{color: '#43a2e6'}} onPress={() => location(data.city)}
            >View on map</Text>
            </TouchableOpacity>
        </View>
      </View>

      <View style={{ alignItems: "center" }}>
        <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.textStyle}>Request Service</Text>
          </Pressable>
        <TouchableOpacity
          style={styles.callbtn}
          onPress={() => {
            Linking.openURL(`tel:${data.contact}`);
          }}
        >
          <Entypo
            name="phone"
            size={18}
            color="#f6f6f6"
            style={{ marginLeft: "32%" }}
          />
          <Text style={styles.callbtntxt}>Call Now</Text>
        </TouchableOpacity>
      </View>

      {/* Modal Opening---------------------------------------------- */}
      <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        //transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          // Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
      <View style= {styles.headcon}>
      <Text style = {{color: '#000', fontSize:22,fontWeight: 'bold', textAlign: 'center'}}>Blood Seeker Detail</Text>

      <TextInputR
        label="Location"
        returnKeyType="next"
        value={userlocation.value}
        onChangeText={text => setLocation({ value: text, error: '' })}
        error={!!userlocation.error}
        errorText={userlocation.error}
        
      />
      <TextInputR
        label="Bottles"
        returnKeyType="next"
        value={bottles.value}
        onChangeText={text => setBottles({ value: text, error: '' })}
        error={!!bottles.error}
        errorText={bottles.error}
      />
      <TextInputR
        label="Description"
        returnKeyType="next"
        value={description.value}
        onChangeText={text => setDescription({ value: text, error: '' })}
        error={!!description.error}
        errorText={description.error}
      />
      <View style={{flexDirection: 'row',justifyContent: 'space-evenly', marginTop: 10}}>
      <Pressable
        style={[styles.button, styles.buttonClose]}
        onPress={() => setModalVisible(!modalVisible)}
      >
        <Text style={styles.textStyle}>Back</Text>
      </Pressable>
        <TouchableOpacity style= {styles.cons} mode="contained" 
            onPress={_onRequestPressed }>
            <Text style={styles.btnTxt}> Request</Text>
        </TouchableOpacity>
     </View>
      </View>
          </View>
        </View>
      </Modal>
    </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: "5%",
    marginHorizontal: 10,
  },
  naar: {
    alignItems: "center",
  },
  name: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#26241e",
    marginVertical: 10,
  },
  details: {
    borderTopWidth: 0.3,
    borderBottomEndRadius: 10,
    borderBottomRightRadius: 100,
    borderBottomStartRadius: 100,
    paddingHorizontal: 10,
    backgroundColor: "#ffff",
    elevation: 5,
  },
  keys: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#26241e",
    marginTop: "5%",
  },
  values: {
    fontSize: 18,
    color: "#6e6464",
    marginTop: "5%",
  },
  
  click: {
    fontSize: 16,
    color: "#6e6464",
    borderBottomWidth: 0.5,
  },
  callbtn: {
    //alignItems: "center",
    flexDirection: "row",
    marginVertical: 15,
    backgroundColor: "#e62012",
    padding: 12,
    borderRadius: 10,
    width: "80%",
  },
  callbtntxt: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#f6f6f6",
    marginLeft: 5,
  },
  addHead: {
    marginTop: 14,
    fontSize: 20,
    fontWeight: "bold",
    color: 'black'
  },
  locadd:{
    flexDirection:'row',
    marginTop: 8,
    color:'blue'
  },
  cardloc:{
    paddingBottom: 8,
    backgroundColor:'#fff' ,
    borderBottomColor: '#000',
    borderBottomWidth: 0.7,
  },
  contactNum: {
    margin:5, 
    fontSize: 16
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    width: '90%',
    height: '70%',
   // alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    width: '80%'
  },
  buttonOpen: {
    marginTop: 10,
    backgroundColor: "#09da41",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
    width: '40%'
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  row: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 20,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  cons: {
    backgroundColor: '#09da41',
    flexDirection: 'row',
    width: '40%',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 30,
    padding: 10
  },
  btnTxt:{
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  txt: {
    marginTop: 6,
    marginLeft: 5,
    fontSize: 16 
},
ratxt: {
    marginTop: 8,
    fontSize: 14 
},
});
