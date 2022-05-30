import React, { useState } from "react";
// import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import {ScrollView, View, StyleSheet, TouchableOpacity,Alert, Modal, Image,Pressable } from 'react-native';
import { Text } from 'react-native-paper';
import TextInputR from '../components/TextInputR';
import { theme } from '../core/theme';
import {emptyfield } from '../helpers/emptyfield';

const PatientAmbuRequest = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [location, setLocation] = useState({ value: '', error: '' });
  const [destination, setDestination] = useState({ value: '', error: '' });
  const [description, setDescription] = useState({ value: '', error: '' });


  const _onRequestPressed = () => {
    const nameError = emptyfield(location.value);
    const priceError = emptyfield(destination.value);
    const descriptionError = emptyfield(description.value);

    if (priceError || descriptionError || nameError) {
      setLocation({ ...location, error: nameError });
      setDestination({ ...location, error: priceError });
      setDescription({ ...description, error: descriptionError });
      return;
    }

    navigation.navigate('');
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
      <View style= {styles.headcon}>


      <TextInputR
        label="Patient Location"
        returnKeyType="next"
        value={location.value}
        onChangeText={text => setLocation({ value: text, error: '' })}
        error={!!location.error}
        errorText={location.error}
        
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
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Request Service</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
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
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
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
    backgroundColor: '#f5a849',
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

export default PatientAmbuRequest;