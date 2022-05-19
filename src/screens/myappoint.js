import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList
} from 'react-native';
import users from "../screens/Doctor/DoctorData";
//import SearchBar from '../components/SearchBar'
import { Avatar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import EIcon from 'react-native-vector-icons/Entypo';

export default function MyAppoint({ navigation }) {
  return (
    <View style= {styles.container}>
      <FlatList 
            data = {users}
            renderItem = {(itemData) =>(
        <View style={styles.card} >
            <View style = {{flexDirection: 'row',}}>
            <View style={styles.cardImgWrapper}>
            <Avatar.Image
                source={require('./asset/image.jpg')}
                style={styles.cardImg}
                size= {80}
                />
            </View>
            <View style={styles.cardInfo}>
                <Text style={styles.cardTitle}>Dr. {itemData.item.name}</Text>
                <Text style={styles.cardDetails}>
                    {itemData.item.category}{"\n"}
                {/* Experince: {itemData.item.experience} */}
                </Text>
            </View>
            </View>
            <View 
              style = {{flexDirection: 'row',
                        borderBottomLeftRadius:6, 
                        borderBottomRightRadius:6 ,
                        backgroundColor: '#ffff', 
                        justifyContent: 'space-evenly'
                        }}>
            <View style ={{padding:10, flexDirection: 'row'}}>
                <Icon name="calendar-alt" size={19} color="#57D4EB" />
                <Text style = {{marginLeft: 7, fontSize:15,fontWeight:'bold', color: '#3c3c3d'}}> 20/04/2020</Text>
            </View>
            <View style ={{padding:10, flexDirection: 'row'}}>
                <Icon name="clock" size={19} color="#57D4EB" />
                <Text style = {{marginLeft: 7, fontSize:15,fontWeight:'bold', color: '#3c3c3d'}}> 11:00 </Text>
            </View>
            <View style ={{padding:10, flexDirection: 'row'}}>
                <EIcon name="dot-single" size={19} color="#57D4EB" />
                <Text style = {{marginLeft: 0, fontSize:15,fontWeight:'bold', color: '#3c3c3d'}}> Unconfirmed </Text>
            </View>
            </View>
        </View> 
  
    )}
      />
</View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#e3e6e4'
  },
  itemtxt:{
      fontSize:24,
      alignItems: 'center'
  },
  card: {
    width: '90%',
    alignSelf: 'center',
    height: 90,
    marginVertical: 25,
    borderTopLeftRadius:6, 
    borderTopRightRadius:6 ,
    shadowColor: '#999',
    backgroundColor: '#ffff'
  },
  cardImgWrapper: {
    flex: 1,
  },
  cardImg: {
    height: '100%',
    width: '100%',
    padding:4,
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
    borderLeftWidth: 0,
    paddingTop:10,
    justifyContent:'center',
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    // backgroundColor: '#fff',
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
});
