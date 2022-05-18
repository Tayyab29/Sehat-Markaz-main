import React, { useState } from 'react';
import {ScrollView, View, StyleSheet, TouchableOpacity,Alert, Modal, Image, StatusBar} from 'react-native';
import { Text } from 'react-native-paper';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
//import Dropdown from '../components/DropdownR';
import Dropdown from '../components/Dropdown';
import { theme } from '../core/theme';
import { emailValidator } from '../helpers/emailValidator';
import { passwordValidator } from '../helpers/passwordValidator';
import { nameValidator } from '../helpers/nameValidator';
import {emptyfield } from '../helpers/emptyfield';
import * as ImagePicker from 'expo-image-picker';
// import Firebase from "../firebase";
// const auth = Firebase.auth();

const AmReg = ( {navigation}) => {
  const [name, setName] = useState({ value: '', error: '' });
  const [empty, setEmpty] = useState({ value: '', error: '' });
  const [address, setAddress] = useState({ value: '', error: '' });
  const [image, setImage] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  
  const _onSignUpPressed = () => {
    const nameError = nameValidator(name.value);
    const emptyError = emptyfield(empty.value);
    const addressError = emptyfield(address.value);   


    if (nameError || emptyError ||addressError) {
      setName({ ...name, error: nameError });
      setEmpty({ ...empty, error: emptyError });
      setAddress({ ...empty, error: addressError });
      return;
    }

    navigation.navigate('LoginScreen');
  };


  const pickfromGallery = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      cropping: true,
      width:300, 
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
      width:300, 
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
      {/* <StatusBar backgroundColor="skyblue" translucent={true}/> */}
      {/* <Logo /> */}
      <ScrollView style= {styles.head}>
      <View style= {styles.headcon}>
      <Header>Add Details</Header>

      <TextInput
        label="Owner Name"
        returnKeyType="next"
        value={name.value}
        onChangeText={text => setName({ value: text, error: '' })}
        error={!!name.error}
        errorText={name.error}
      />
      <TextInput
        label="Address"
        returnKeyType="next"
        value={address.value}
        onChangeText={text => setAddress({ value: text, error: '' })}
        error={!!address.error}
        errorText={address.error}
      />
      {/* <Dropdown/> */}
      <Button
        mode="contained"
        onPress={_onSignUpPressed}
        style={{ marginTop: 6 }}>
        Sign Up
      </Button>
      <View style={styles.row}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.goBack('LoginScreen')}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
      </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  head: {
    flex: 1,
    width: '80%',
    height: '100%',
  },
  headcon: {
    alignItems: 'center',
  },
  container: {
    width: '100%',
    height: '100%',
    alignSelf:'center',
    alignItems: 'center',
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
    bottom:2,
    width:'100%',
    backgroundColor: '#e9f0ef'
  },
});

export default AmReg;