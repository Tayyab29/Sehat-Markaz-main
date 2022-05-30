import React, { useState } from "react";
import {
  View,
  //ssText,
  StyleSheet,
  Image,
  Linking,
  TouchableOpacity,
  Alert,
  Modal,
  Pressable
} from "react-native";
import ambulance from "../asset/ambulance.png";
import Swiper from 'react-native-swiper';
import { Entypo } from "@expo/vector-icons";
import { Avatar } from 'react-native-paper';
import { Text } from 'react-native-paper';
import TextInputR from '../components/TextInputR';
import { theme } from '../core/theme';
import {emptyfield } from '../helpers/emptyfield';

export default function AmbulanceDetails({ navigation, route }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [userlocation, setLocation] = useState({ value: '', error: '' });
  const [destination, setDestination] = useState({ value: '', error: '' });
  const [description, setDescription] = useState({ value: '', error: '' });


  const _onRequestPressed = () => {
    const nameError = emptyfield(userlocation.value);
    const priceError = emptyfield(destination.value);
    const descriptionError = emptyfield(description.value);

    if (priceError || descriptionError || nameError) {
      setLocation({ ...userlocation, error: nameError });
      setDestination({ ...destination, error: priceError });
      setDescription({ ...description, error: descriptionError });
      return;
    }

    // navigation.navigate('');
  }

  const location = (address) => {
    Linking.openURL(
      `https://www.google.com/maps/search/?api=1&query=${address}`
    );
  };

  return (
    <View style={styles.container}>
      <View style = {{marginHorizontal: "5%",}}>
        <View style= {styles.cardsWrapper}>
              <TouchableOpacity style={styles.card} 
                onPress={() => ('') }>
            <View style={styles.cardImgWrapper}>
            <Avatar.Image
              source={require('../asset/ambulance.png')}
              style={styles.cardImg}
                size= {100}
              />
            </View>
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>{route.params.pharm.name}</Text>
              <Text style={styles.cardDetails}>
              Opens: {route.params.pharm.timing}{"\n"}
              </Text> 
            </View>
          </TouchableOpacity>
          </View>
          <View style = {styles.cardloc}>
          <Text style={styles.addHead}>Location of Ambulance Service </Text>
          <View style={{ flexDirection: "column" }}>
            <Text
              style={styles.contactAdd}
            >
              {route.params.pharm.address}
            </Text>

            <TouchableOpacity style= {styles.locadd}>
            <Entypo name="location-pin" size={18} color="#43a2e6" />
            <Text style= {{color: '#43a2e6'}} onPress={() => location(route.params.pharm.address)}
            >View on map</Text>
            </TouchableOpacity>
        </View>
      </View>
      <View style = {styles.cardloc}>
          <Text style={styles.addHead}>Contact No </Text>
          <View style={{ flexDirection: "column" }}>
            <Text
              style={styles.contactNum}
            >
              {route.params.pharm.contact}
            </Text>
      </View>
      </View>

      <View style={styles.sliderContainer}>
        <Swiper
          autoplay
          horizontal={true}
          height={200}
          activeDotColor="#f71616">
          <View style={styles.slide}>
            <Image
              source={require('../asset/ambu1.jpeg')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../asset/ambu2.jpeg')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../asset/ambu3.jpeg')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
        </Swiper>
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
            Linking.openURL(`tel:${route.params.pharm.contact}`);
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
      <Text style = {{color: '#000', fontSize:22,fontWeight: 'bold', textAlign: 'center'}}>Requester Detail</Text>

      <TextInputR
        label="Patient Location"
        returnKeyType="next"
        value={userlocation.value}
        onChangeText={text => setLocation({ value: text, error: '' })}
        error={!!userlocation.error}
        errorText={userlocation.error}
        
      />
      <TextInputR
        label="Destination"
        returnKeyType="next"
        value={destination.value}
        onChangeText={text => setDestination({ value: text, error: '' })}
        error={!!destination.error}
        errorText={destination.error}
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
    flex:1,
    backgroundColor: '#ffff'
  },
  txtName: {
    fontSize: 24,
    fontWeight: "bold",
  },
  img: {
    marginVertical: 10,
    width: 300,
    height: 220,
  },
  addHead: {
    marginTop: 14,
    fontSize: 20,
    fontWeight: "bold",
  },
  contactNum: {
    marginTop: 5,
    fontSize: 16,
    color: "black",
    marginLeft: 2
  },
  contactAdd: {
    marginTop: 5,
    fontSize: 18,
    color: "black",
  },
  callbtn: {
    //alignItems: "center",
    flexDirection: "row",
    marginVertical: 20,
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

  locadd:{
    flexDirection:'row',
    marginTop: 8,
    color:'blue'
  },
  cardsWrapper: {
    width: '100%',
    alignSelf: 'center',
  },
  cardloc:{
    paddingBottom: 8,
    backgroundColor:'#fff' ,
    borderBottomColor: '#000',
    borderBottomWidth: 0.7
  },
  card: {
    height: 100,
    marginVertical: 10,
    flexDirection: 'row',
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  cardsWrapper:{
    borderBottomColor: '#000',
    borderBottomWidth: 0.7
  },
  cardImgWrapper: {
    flex: 1,
  },
  cardImg: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderRightWidth:0,
    borderRadius: 8,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
  cardInfo: {
    flex: 2,
    padding: 10,
    justifyContent: 'center',
    borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: '#fff',
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 3,
  },
  cardDetails: {
    fontSize: 15,
    color: '#444',
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
