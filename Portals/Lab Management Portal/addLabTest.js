import React, { useState } from 'react';
import {ScrollView, View, StyleSheet, TouchableOpacity,Alert, Modal, Image, StatusBar } from 'react-native';
import { Text } from 'react-native-paper';
import Button from '../../src/screens/components/Button';
import TextInputR from '../../src/screens/components/TextInputR';
import { theme } from '../../src/screens/core/theme';
import {emptyfield } from '../../src/screens/helpers/emptyfield';


const AddLabTest = ( {navigation}) => {
  const [name, setName] = useState({ value: '', error: '' });
  const [price, setPrice] = useState({ value: '', error: '' });
  const [description, setDescription] = useState({ value: '', error: '' });


  const _onSignUpPressed = () => {
    const nameError = emptyfield(name.value);
    const priceError = emptyfield(price.value);
    const descriptionError = emptyfield(description.value);

    if (priceError || descriptionError || nameError) {
      setName({ ...name, error: nameError });
      setPrice({ ...price, error: companyError });
      setDescription({ ...description, error: countryError });
      return;
    }

    navigation.navigate('');
  };


  return (
    <View style= {styles.container}>
      <ScrollView style= {styles.head}
      showsVerticalScrollIndicator={false}>
      <View style= {styles.headcon}>
      <Text style = {{color: '#f5a849', fontSize:22,fontWeight: 'bold'}}>Adding Lab Test </Text>

      <TextInputR
        label="Report Name"
        returnKeyType="next"
        value={name.value}
        onChangeText={text => setName({ value: text, error: '' })}
        error={!!name.error}
        errorText={name.error}
        
      />
      <TextInputR
        label="Price"
        returnKeyType="next"
        value={price.value}
        onChangeText={text => setPrice({ value: text, error: '' })}
        error={!!price.error}
        errorText={price.error}
        keyboardType = 'numeric'
      />
      <TextInputR
        label="Specification"
        returnKeyType="next"
        value={description.value}
        onChangeText={text => setDescription({ value: text, error: '' })}
        error={!!description.error}
        errorText={description.error}
      />

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
    marginTop: 50
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
    backgroundColor: '#f5a849',
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

export default AddLabTest;