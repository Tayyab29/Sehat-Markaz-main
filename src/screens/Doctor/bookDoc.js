import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Linking,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Avatar } from 'react-native-paper';

export default function BookDoc({ navigation, route }) {
  const other2 = route.params.data;
  console.log(other2)
   return(
       <View style = {styles.container}>
           <ScrollView>
           <View style= {styles.cardsWrapper}>
              <View style={styles.card} 
                onPress={() => ('') }>
            <View style={styles.cardImgWrapper}>
            <Avatar.Image
              source={require('../asset/image.jpg')}
              style={styles.cardImg}
                size= {100}
              />
            </View>
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>Dr. {other2.name}</Text>
              <Text style={styles.cardDetails}>
              {other2.category}{"\n"}
              {other2.experience}
              </Text> 
            </View>
          </View>
          </View>

          <View style = {styles.timesdate}>
              <Text style = {{fontSize: 16, fontWeight: 'bold'}}>Pick a Date</Text>
          </View>

          <View style = {styles.timeslot}>
              <Text style = {{fontSize: 16, fontWeight: 'bold'}}>Pick a Time Slot</Text>
              <TouchableOpacity>

              </TouchableOpacity>
          </View>
          </ScrollView>
        
          <View style={{position: 'relative', left: 0, right: 0, bottom: 0}}>
            <TouchableOpacity style= {styles.cons} mode="contained" 
                onPress={() => {(navigation.push('Userdetails'))} }>
                <FontAwesome name='calendar' color="#ffff" style= {styles.icon} size={22} />
                <Text style={styles.btnTxt}> Confirm Booking</Text>
            </TouchableOpacity>
        </View>
        </View>

           
   );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10
    },
    cardsWrapper: {
        width: '100%',
        alignSelf: 'center',
      },
      cardloc:{
        paddingBottom: 8,
        backgroundColor:'#fff' ,
        borderBottomColor: '#000',
        borderBottomWidth: 0.7
      },
      card: {
        height: 100,
        marginVertical: 10,
        flexDirection: 'row',
        shadowColor: '#999',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
      },
      cardsWrapper:{
        borderBottomColor: '#000',
        borderBottomWidth: 0.7
      },
      cardImgWrapper: {
        flex: 1,
      },
      cardImg: {
        height: '100%',
        width: '100%',
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
      timesdate: {
          padding: 10,
          borderBottomColor: '#000',
          borderBottomWidth: 0.7
      },
      timeslot: {
        padding: 10,
        borderBottomColor: '#000',
        borderBottomWidth: 0.7
      },
      cons: {
        backgroundColor: '#18b4f5',
        width: '93%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 10,
        padding: 10
      },
      btnTxt:{
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft:10,
      }
})