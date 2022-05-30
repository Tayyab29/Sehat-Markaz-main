import React, {useState} from "react";
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
import DateTimePicker from '@react-native-community/datetimepicker';

export default function BookLab({ navigation, route }) {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [datetext, setDatetext] = useState("");
  const [times,setTimes] = useState('');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow (Platform.OS === 'ios')
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + (tempDate.getFullYear());
    let fTime = 'Time: ' + tempDate.getHours() + ':' + tempDate.getMinutes();
    setDatetext (fDate )
    setTimes(fTime)
  }
  


  const showMode = (currentMode) =>{
    setShow(true);
    setMode(currentMode);
  }
  const other2 = route.params.other;
  console.log(other2)
   return(
       <View style = {styles.container}>
           <ScrollView>
           <View style= {styles.cardsWrapper}>
              <View style={styles.card} 
                onPress={() => ('') }>
            <View style={styles.cardImgWrapper}>
            <Avatar.Image
              source={require('../asset/idc.png')}
              style={styles.cardImg}
                size= {100}
              />
            </View>
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>{other2.pharm.name}</Text>
              <Text style={styles.cardDetails}>
              {other2.pharm.type}{"\n"}
              </Text> 
            </View>
          </View>
          </View>

          <View style = {styles.timesdate}>
              <Text style = {{fontSize: 16, fontWeight: 'bold',marginLeft: 7}}>Pick a Date</Text>
              <TouchableOpacity style= {styles.DTcons} mode="contained"  
                onPress = {() =>showMode('date')}>
                <FontAwesome name='calendar' color="#ffff" style= {styles.icon} size={20} />
                <Text style={styles.DTbtnTxt}> Select a Date</Text> 
                <FontAwesome name='angle-down' color="#ffff" style= {styles.dicon} size={20} />
              </TouchableOpacity>
          </View>

          <View style = {styles.timeslot}>
              <Text style = {{fontSize: 16, fontWeight: 'bold',marginLeft: 7}}>Pick a Time </Text>
              <TouchableOpacity style= {styles.DTcons} mode="contained"  
                onPress = {() =>showMode('time')}>
                <FontAwesome name='clock-o' color="#ffff" style= {styles.icon} size={20} />
                <Text style={styles.DTbtnTxt}> Select a Time</Text> 
                <FontAwesome name='angle-down' color="#ffff" style= {styles.dicon} size={20} />
              </TouchableOpacity>
              <Text style ={{padding: 10, color: "#85898c"}}>
                  There Should be a 20 Minutes Interval between each Appointments
              </Text>
          </View>
          
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode = {mode}
              display = 'default'
              onChange={onChange}
              maximumDate={new Date(2022, 6, 20)}
              minimumDate={new Date()}
              minuteInterval={20}
            />
          )}
          </ScrollView>
        
          <View style={{position: 'relative', left: 0, right: 0, bottom: 0}}>
          <View style = {{flexDirection:'row', justifyContent: 'space-around', backgroundColor: '#e6eaed', borderRadius:20}}>
            <Text style = {{fontSize: 16, fontWeight: 'bold'}}>{datetext}</Text>
            <Text style = {{fontSize: 16, fontWeight: 'bold'}}>{times}</Text>
          </View>
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
        backgroundColor: '#fff'
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
        padding: 10,
      },
      btnTxt:{
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft:10,
      },
      DTcons: {
        backgroundColor: '#a3c0d6',
        width: '63%',
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 10,
        padding: 10,
        marginTop:7,
        marginLeft: 10
      },
      DTbtnTxt:{
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft:8,
      },
      dicon: {
        marginLeft:8
      }
})