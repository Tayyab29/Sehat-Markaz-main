import React from 'react';
import {View, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
import {
  Avatar,
  Title,
  Text,
} from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { FontAwesome5 } from '@expo/vector-icons';

const AmbuProfile = ({navigation}) => {

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.usernameSection}>
        <View >
          <Avatar.Image 
            // source={{uri: 'https://api.adorable.io/avatars/80/abott@adorable.png',}}
              source={require('../assets/kami.jpeg')}
            size={200}
          />
          <View style={{alignItems:'center'}}>
            <Title style={[styles.title, {
              marginTop:15,
              marginBottom: 5,
            }]}>Zaman Qadir</Title>
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
      <View style={styles.row}>
        <View style={styles.categoryIcon}>
          <Icon name="ambulance" color="#e64c4c" size={28}/>
          </View>
          <Text style={styles.userText}>Al Sadiq Ambulance</Text>
        </View>
        <View style={styles.row}>
        <View style={styles.categoryIcon}>
          <Icon name="map-marker-radius" color="#e64c4c" size={28}/>
          </View>
          <Text style={styles.userText}>Hostel City, Rawalpindi</Text>
        </View>
        <View style={styles.row}>
        <View style={styles.categoryIcon}>
          <Icon name="phone" color="#e64c4c" size={28}/>
          </View>
          <Text style={styles.userText}>03335102964</Text>
        </View>
        <View style={styles.row}>
        <View style={styles.categoryIcon}>
          <Icon name="email" color="#e64c4c" size={28}/>
          </View>
          <Text style={styles.userText}>zamnanqadir@email.com</Text>
        </View>
        <View>
        <TouchableOpacity style={styles.commandButton} 
          onPress={()=>navigation.navigate("EditAmbuProfile")}>
          <Text style={styles.panelButtonTitle}>Edit Profile</Text>
        </TouchableOpacity>
        </View>
      </View>

    </SafeAreaView>
  );
};

export default AmbuProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#ffff'
  },
  userInfoSection: {
    paddingHorizontal: 20,
    marginBottom: 25,
  },
  usernameSection:{
    marginTop:'4%',
    paddingHorizontal: 30,
    marginBottom: 25,
    alignItems:'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  commandButton: {
    padding: 13,
    borderRadius: 14,
    backgroundColor: '#e64c4c',
    alignItems: 'center',
    marginTop: 10,
  },
  categoryIcon: {
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 50,
    height: 50,
    backgroundColor: '#e6e4df' /* '#FF6347' */,
    borderRadius: 50,
  },
userText:{
  color:"black",
  marginLeft: 20,
  marginTop: 10, 
  fontSize: 16
},
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
    color: 'black'
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});
