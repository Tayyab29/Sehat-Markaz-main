import React, { useState } from 'react';
import {ScrollView, View, StyleSheet, TouchableOpacity,Alert, Modal, Image,StatusBar } from 'react-native';
import { Text } from 'react-native-paper';
import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import { theme } from '../core/theme';
import { nameValidator } from '../helpers/nameValidator';
import {emptyfield } from '../helpers/emptyfield';
import { RadioButton } from 'react-native-paper';


const PaReg = ( {props, navigation, route}) => {
 const [name, setName] = useState({ value: '', error: '' });
  const [empty, setEmpty] = useState({ value: '', error: '' });
  const [address, setAddress] = useState({ value: '', error: '' });
  const [checked, setChecked] = React.useState('public');
  
  const _onSignUpPressed = () => {
    const nameError = nameValidator(name.value);
    const addressError = emptyfield(address.value);
    const emptyError = emptyfield(empty.value);

    if (addressError || nameError || emptyError) {
      setName({ ...name, error: nameError });
      setAddress({ ...address, error: addressError });
      setEmpty({ ...empty, error: emptyError });
      
      return;}
    navigation.navigate('LoginScreen');
  };
  

  return (
    <View style= {styles.container}>
      <ScrollView style= {styles.head}
      showsVerticalScrollIndicator={false}>
      <View style= {styles.headcon}>
      <Header>Add Details</Header>

      <TextInput
        label="Father Name"
        returnKeyType="next"
        value={name.value}
        onChangeText={text => setName({ value: text, error: '' })}
        error={!!name.error}
        errorText={name.error}
      />
      <TextInput
        label="Blood Group "
        returnKeyType="next"
        value={empty.value}
        onChangeText={text => setEmpty({ value: text, error: '' })}
        error={!!empty.error}
        errorText={empty.error}
      />
      <TextInput
        label="Address"
        returnKeyType="next"
        value={address.value}
        onChangeText={text => setAddress({ value: text, error: '' })}
        error={!!address.error}
        errorText={address.error}
      />
      <View style = {{ marginRight: 80}}>
        <Text style = {styles.txt}> Wanna become a BloodDonor</Text>
        <View style = {{flexDirection: 'row'}}>
            <RadioButton
                value="public"
                color= '#18b4f5'
                status={ checked === 'public' ? 'checked' : 'unchecked' }
                onPress={() => setChecked('public')}
            />
            <Text style = {styles.ratxt}> Yes</Text>
            <RadioButton
                value="private"
                color= '#18b4f5'
                status={ checked === 'private' ? 'checked' : 'unchecked' }
                onPress={() => setChecked('private')}
            />
            <Text style = {styles.ratxt}> No</Text>
            </View>
        </View>

      <Button
        mode="contained"
        onPress = {_onSignUpPressed}
        style={{marginTop: 10 }}>
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
}


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
    marginTop: 6,
    marginBottom: 20
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
  txt: {
    marginTop: 6,
    marginLeft: 5,
    fontSize: 16 
},
ratxt: {
    marginTop: 8,
    fontSize: 14 
},
})

export default PaReg;
