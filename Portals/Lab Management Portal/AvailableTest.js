import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList, 
  Alert
} from 'react-native';
import users from './DummyTest';
import { Avatar } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function AvailableTest({ navigation }) {
  return (
    <View style= {styles.container}>
      <TouchableOpacity
        onPress={()=>navigation.navigate("addLabTest")}
        >
        <View style = {styles.locbtn} >
        <Text style={styles.locTxt}>Add New Test</Text>
        </View>
      </TouchableOpacity>
      <FlatList 
            data = {users}
            renderItem = {(itemData) =>(
        <View style= {styles.cardsWrapper}>
        <View style={styles.card} >
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>{itemData.item.name}</Text>
            <Text style={styles.cardDetails}>
            {itemData.item.price}
            </Text>
          </View>
          <View style ={{ paddingBottom: 10,
                          flexDirection: 'row',
                          justifyContent: 'space-around', 
                          backgroundColor:'white',
                          borderBottomLeftRadius:6, 
                          borderBottomRightRadius:6 
                          }}>
            <TouchableOpacity style= {styles.cons}  
                onPress={() => Alert.alert("Test has been Deleted.") }>
                <Text style={styles.btnTxt}> Delete</Text>
            </TouchableOpacity>
            <TouchableOpacity style= {styles.cons}
                onPress={()=>navigation.navigate("UpdateLabTest")}>
                <Text style={styles.btnTxt}> Update</Text>
            </TouchableOpacity>
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
  },
  itemtxt:{
      fontSize:24,
      alignItems: 'center'
  },
  cardsWrapper: {
    width: '90%',
    alignSelf: 'center',
  },
  card: {
    height: 120,
    marginVertical: 10,
    flexDirection: 'column',
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  cardInfo: {
    flex: 2,
    padding: 10,
    borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: '#fff',
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
    backgroundColor: '#f5a849',
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
  },
  locTxt:{
    marginHorizontal: 12,
    fontSize: 16,
    fontWeight:'bold',
    marginTop:8,
    color: 'black',
    textAlign: 'center'
  },
  locbtn: {
    flexDirection:'row',
    backgroundColor:'#faefe1',
    padding: 10,
    borderRadius: 10,
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
  },
});
