import React, { useState } from 'react';
import {ScrollView, View, StyleSheet, TouchableOpacity,Alert, Modal, Image, StatusBar } from 'react-native';
import { Text } from 'react-native-paper';
import Button from '../../src/screens/components/Button';
import TextInputR from '../../src/screens/components/TextInputR';
import { theme } from '../../src/screens/core/theme';
import {emptyfield } from '../../src/screens/helpers/emptyfield';
import DescriptionInput from '../../src/screens/components/DescriptionInput';


const AddPrescriptionNote = ( {navigation}) => {
  const [doctor, setDoctor] = useState({ value: '', error: '' });
  const [patient, setPatient] = useState({ value: '', error: '' });
  const [notes, setNotes] = useState({ value: '', error: '' });
  const [severity, setSeverity] = useState({ value: '', error: '' });


  const _onSignUpPressed = () => {
    const doctorError = emptyfield(doctor.value);
    const patientError = emptyfield(patient.value);
    const notesError = emptyfield(notes.value);
    const severityError = emptyfield(severity.value);

    if (patientError || notesError || doctorError || severityError) {
      setDoctor({ ...doctor, error: doctorError });
      setPatient({ ...patient, error: patientError });
      setNotes({ ...notes, error: notesError });
      setSeverity({ ...notes, error: severityError });
      return;
    }

    navigation.navigate('AddPrescriptionMed');
  };


  return (
    <View style= {styles.container}>
      <ScrollView style= {styles.head}
      showsVerticalScrollIndicator={false}>
      <View style= {styles.headcon}>
      <Text style = {{color: '#18b4f5', fontSize:22,fontWeight: 'bold'}}>Creating Prescription </Text>

      <TextInputR
        label="Doctor Name"
        returnKeyType="next"
        value={doctor.value}
       onChangeText={text => setDoctor({ value: text, error: '' })}
        error={!!doctor.error}
        errorText={doctor.error}
        
      />
      <TextInputR
        label="Patient Name"
        returnKeyType="next"
        value={patient.value}
        onChangeText={text => setPatient({ value: text, error: '' })}
        error={!!patient.error}
        errorText={patient.error}
      />
    <DescriptionInput
        label="Notes "
        returnKeyType="next"
        value={notes.value}
        onChangeText={text => setNotes({ value: text, error: '' })}
        error={!!notes.error}
        errorText={notes.error}
      />
      <TextInputR
        label="Severity"
        returnKeyType="next"
        value={severity.value}
        onChangeText={text => setSeverity({ value: text, error: '' })}
        error={!!severity.error}
        errorText={severity.error}
      />
        <TouchableOpacity style= {styles.cons} mode="contained" 
                    onPress={_onSignUpPressed }>
                    <Text style={styles.btnTxt}> Add Medicine</Text>
        </TouchableOpacity>

      </View>
      </ScrollView>
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
    backgroundColor: '#18b4f5',
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    alignSelf: 'center',
    borderRadius: 10,
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

export default AddPrescriptionNote;