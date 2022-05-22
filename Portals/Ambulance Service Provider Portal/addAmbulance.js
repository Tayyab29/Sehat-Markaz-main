import React, { useState } from 'react';
import {ScrollView, View, StyleSheet, TouchableOpacity,Alert, Modal, Image, StatusBar } from 'react-native';
import { Text, TextInput } from 'react-native-paper';
import Button from '../../src/screens/components/Button';
import TextInputR from '../../src/screens/components/TextInputR';
import { theme } from '../../src/screens/core/theme';
import {emptyfield } from '../../src/screens/helpers/emptyfield';
import * as ImagePicker from 'expo-image-picker';
import DescriptionInput from '../../src/screens/components/DescriptionInput';


const AddAmbulance = ( {navigation}) => {
  const [type, setType] = useState({ value: '', error: '' });
  const [description, setDescription] = useState({ value: '', error: '' });
  const [image, setImage] = useState();
  const [modalVisible, setModalVisible] = useState(false);


  const _onSignUpPressed = () => {
    const typeError = emptyfield(type.value);
    const descriptionError = emptyfield(description.value); 

    if (descriptionError|| typeError ) {
      setType({ ...type, error: typeError });
      setDescription({ ...description, error: descriptionError });
      return;
    }

    navigation.navigate('');
  };

  const pickfromGallery = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      cropping: true,
      width:350, 
      height:300,
      //aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  }
  const pickfromCamera = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      cropping: true,
      width:350, 
      height:300,
      //aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  }

  return (
    <View style= {styles.container}>
      <ScrollView style= {styles.head}
      showsVerticalScrollIndicator={false}>
      <View style= {styles.headcon}>
      <Text style = {{color: '#e64c4c', fontSize:22,fontWeight: 'bold'}}>Add Ambulance Car</Text>

      <TextInputR
        label="Ambulance_Type"
        returnKeyType="next"
        value={type.value}
        onChangeText={text => setType({ value: text, error: '' })}
        error={!!type.error}
        errorText={type.error}
        
      />
      <DescriptionInput
        label="Vehicle Features, Specification "
        returnKeyType="next"
        value={description.value}
        onChangeText={text => setDescription({ value: text, error: '' })}
        error={!!description.error}
        errorText={description.error}
      />
      <Button
        mode="outlined"
        icon = {'upload'} 
        onPress = {() =>setModalVisible(true)}
        labelStyle={{color: '#3d3c3a'}}
        style={{marginTop: 6, padding:4, width:'100%',borderWidth: 1, marginBottom: 20}}>
        Upload Image
      </Button>
      <Image style = {styles.imagearea} source ={{uri:image}}></Image>
      <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            // Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style = {styles.modalview}>
          <Button
            mode="contained"
            icon = 'camera'
            onPress = {pickfromCamera}
            style={{marginTop: 10, alignSelf: 'center', backgroundColor: '#e64c4c' }}>
            Camera
          </Button>
          <Button
            mode="contained"
            icon = 'image-area'
            onPress = {pickfromGallery}
            style={{marginTop: 10, alignSelf: 'center' , backgroundColor: '#e64c4c' }}>
            Gallery
          </Button>
          <Button
            mode="contained"
            onPress = {()=> setModalVisible(!modalVisible)}
            style={{marginTop: 10, alignSelf: 'center',  backgroundColor: '#e64c4c' }}>
            Cancel
          </Button>
          </View>
        
        </Modal>
      </View>

      </ScrollView>
      <View style={{position: 'relative', left: 0, right: 0, bottom: 0}}>
                <TouchableOpacity style= {styles.cons} mode="contained" 
                    onPress={_onSignUpPressed }>
                    <Text style={styles.btnTxt}> Add</Text>
                </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    },
  head: {
    flex: 1,
    width: '80%',
    height: '100%',
    alignSelf:'center',
  },
  headcon: {
    alignItems: 'center',
    marginTop: '7%'
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
  modalview: {
    position: 'absolute',
    bottom:0,
    width:'100%',
    backgroundColor: '#e9f0ef'
  },
  cons: {
    backgroundColor: '#e64c4c',
    width: '80%',
    flexDirection: 'row',
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

export default AddAmbulance;