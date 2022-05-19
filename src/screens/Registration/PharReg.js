import React, { useState } from 'react';
import {ScrollView, View, StyleSheet, TouchableOpacity,Alert, Modal, Image, StatusBar } from 'react-native';
import { Text } from 'react-native-paper';
import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';

import { theme } from '../core/theme';
import { nameValidator } from '../helpers/nameValidator';
import {emptyfield } from '../helpers/emptyfield';
// import * as Location from 'expo-location';

const PharReg = ( {navigation}) => {
 const [name, setName] = useState({ value: '', error: '' });
  const [address, setAddress] = useState({ value: '', error: '' });
  
  const _onSignUpPressed = () => {
    const nameError = nameValidator(name.value);
    const addressError = emptyfield(address.value);

    if ( nameError || addressError) {
      setName({ ...name, error: nameError });
      setAddress({ ...address, error: addressError });
      return;
    }

    navigation.navigate('LoginScreen');
  };
  

  return (
    <View style= {styles.container}>
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
    width: '100%',
    height: '100%',
  },
  headcon: {
    alignItems: 'center',
  },
  container: {
    width: '80%',
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

export default PharReg;