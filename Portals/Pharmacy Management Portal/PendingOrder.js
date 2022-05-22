import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList
} from 'react-native';
import ambu from '../Ambulance Service Provider Portal/AmbuDummyData';
//import SearchBar from '../components/SearchBar'
import { Avatar } from 'react-native-paper';

export default function PendingOrder({ navigation }) {
  return (
    <View style= {styles.container}>
      <FlatList 
            data = {ambu}
            renderItem = {(itemData) =>(
        <TouchableOpacity style={styles.card}
            onPress={() =>
            navigation.push("BuyerDetail", { order: itemData.item }) }>
            <View style = {{flexDirection: 'row',}}>
            <View style={styles.cardImgWrapper}>
            <Avatar.Image
                source={require('../../src/screens/asset/image.jpg')}
                style={styles.cardImg}
                size= {80}
                />
            </View>
            <View style={styles.cardInfo}>
                <Text style={styles.cardTitle}>{itemData.item.name}</Text>
                <Text style={styles.cardDetails}>
                     {itemData.item.contact}{"\n"}
                    {/* {itemData.item.city} */}
                </Text>
            </View>
            </View>
        </TouchableOpacity> 
  
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
    marginTop: 10,
    marginBottom: 10,
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
    backgroundColor: '#fff',
    justifyContent:'center',
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
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
  cons: {
    backgroundColor: '#eb3838',
    width: '35%',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    padding: 7
  },
  btnTxt:{
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
