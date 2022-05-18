import React, { useState } from 'react';
import {ScrollView, View, StyleSheet, TouchableOpacity,Alert, Modal, Image, StatusBar } from 'react-native';
import { Text } from 'react-native-paper';
import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import { theme } from '../core/theme';
import {emptyfield } from '../helpers/emptyfield';
// import { phoneValidator } from '../helpers/phoneValidator';
import { RadioButton } from 'react-native-paper';



const DocReg = ( {navigation}) => {
 const [qual, setQual] = useState({ value: '', error: '' });
  const [age, setAge] = useState({ value: '', error: '' });
  const [ser, setSer] = useState({ value: '', error: '' });
  // const [phone, setPhone] = useState({ value: '', error: '' });
  const [spec, setSpec] = useState({ value: '', error: '' });
  const [exp, setExp] = useState({ value: '', error: '' });
  const [checked, setChecked] = React.useState('public');

  const _onSignUpPressed = () => {
    const qualError = emptyfield(qual.value);
    const serError = emptyfield(ser.value);
    const ageError = emptyfield(age.value); 
    const specError = emptyfield(spec.value);
    const expError = emptyfield(exp.value);

    if (qualError || serError ||ageError||specError||expError) {
      setQual({ ...qual, error: qualError });
      setAge({ ...age, error: ageError });
      setSer({ ...ser, error: serError });
      setSpec({ ...spec, error: specError });
      setExp({ ...exp, error: expError });
      return;
    }

    navigation.navigate('LoginScreen');
  };


  return (
    <View style= {styles.container}>
      <ScrollView style= {styles.head}
      showsVerticalScrollIndicator={false}>
      <View style= {styles.headcon}>
      <Header>Add Details</Header>

      <TextInput
        label="Qualification"
        returnKeyType="next"
        value={qual.value}
        onChangeText={text => setQual({ value: text, error: '' })}
        error={!!qual.error}
        errorText={qual.error}
      />
      <TextInput
        label="Age"
        returnKeyType="next"
        value={age.value}
        onChangeText={text => setAge({ value: text, error: '' })}
        error={!!age.error}
        errorText={age.error}
        keyboardType = 'numeric'
      />
      <TextInput
        label="Serving"
        returnKeyType="next"
        value={ser.value}
        onChangeText={text => setSer({ value: text, error: '' })}
        error={!!ser.error}
        errorText={ser.error}
      />
      {/* <TextInput
        label="PMC No"
        returnKeyType="next"
        value={empty.value}
        onChangeText={text => setEmpty({ value: text, error: '' })}
        error={!!empty.error}
        errorText={empty.error}
      /> */}
      <TextInput
        label="Specialty"
        returnKeyType="next"
        value={spec.value}
        onChangeText={text => setSpec({ value: text, error: '' })}
        error={!!spec.error}
        errorText={spec.error}
      />
      <TextInput
        label="Experience"
        returnKeyType="next"
        value={exp.value}
        onChangeText={text => setExp({ value: text, error: '' })}
        error={!!exp.error}
        errorText={exp.error}
        keyboardType = 'numeric'
      />
        <View style = {{marginRight:75}}>
        <Text style = {styles.txt}> Serving Type</Text>
        <View style = {{flexDirection: 'row'}}>
            <RadioButton
                value="public"
                color= '#18b4f5'
                status={ checked === 'public' ? 'checked' : 'unchecked' }
                onPress={() => setChecked('public')}
            />
            <Text style = {styles.ratxt}> Public</Text>
            <RadioButton
                value="private"
                color= '#18b4f5'
                status={ checked === 'private' ? 'checked' : 'unchecked' }
                onPress={() => setChecked('private')}
            />
            <Text style = {styles.ratxt}> Private</Text>
            <RadioButton
                value="both"
                color= '#18b4f5'
                status={ checked === 'both' ? 'checked' : 'unchecked' }
                onPress={() => setChecked('both')}
            />
            <Text style = {styles.ratxt}> Both</Text>
            </View>
        </View>
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

export default DocReg;