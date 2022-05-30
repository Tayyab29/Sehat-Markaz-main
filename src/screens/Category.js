import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    StatusBar
  } from 'react-native';
  import SearchBar from './components/SearchBar'
  import { Avatar } from 'react-native-paper';

  const Category = ({ navigation }) => {
      return(
          <View style={styles.container}>
            {/* <StatusBar backgroundColor="skyblue" translucent={true}/> */}
            {/* <SearchBar/> */}
            {/* <TouchableOpacity onPress={() =>
                    navigation.navigate('DocProfile', {title: ''})
                    } >
            <Text style={styles.txtdoc}> All Doctors</Text>
            </TouchableOpacity> */}
              <Text style={styles.txt}> Find Doctor by Specialty</Text>

              <View style= {styles.main}>
                    <TouchableOpacity style={styles.card} onPress={() =>
                    navigation.navigate('DocProfile', {title: 'Gynocalogist'})
                    } >
                    <Avatar.Image
                        source={require('./asset/gyno.png')}
                        style={styles.cardImg}
                        size= {42}
                        />
                        <Text style= {styles.cardtext}>
                            Gynocalogist
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card}onPress={() =>
                    navigation.navigate('DocProfile', {title: 'Neurologist'})
                    }>
                    <Avatar.Image
                        source={require('./asset/neuro.png')}
                        style={styles.cardImg}
                        size= {42}
                        />
                        <Text style= {styles.cardtext}>
                            Neurologist
                        </Text>
                    </TouchableOpacity>
              </View>
              <View style= {styles.main}>
                    <TouchableOpacity style={styles.card} onPress={() =>
                    navigation.navigate('DocProfile', {title: 'Genral Physician'})
                    }>
                    <Avatar.Image
                        source={require('./asset/surgeon.png')}
                        style={styles.cardImg}
                        size= {42}
                        />
                        <Text style= {styles.cardtext}>
                            Genral Physician
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card} onPress={() =>
                    navigation.navigate('DocProfile', {title: 'Heart Surgeon'})
                    }>
                    <Avatar.Image
                        source={require('./asset/heart.png')}
                        style={styles.cardImg}
                        size= {42}
                        />
                        <Text style= {styles.cardtext}>
                            Heart Surgeon
                        </Text>
                    </TouchableOpacity>
              </View>
              <View style= {styles.main}>
                    <TouchableOpacity style={styles.card} onPress={() =>
                    navigation.navigate('DocProfile', {title: 'Skin Specialist'})
                    }>
                    <Avatar.Image
                        source={require('./asset/skin.png')}
                        style={styles.cardImg}
                        size= {42}
                        />
                        <Text style= {styles.cardtext}>
                            Skin Specialist
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card} onPress={() =>
                    navigation.navigate('DocProfile', {title: 'Dentist'})
                    }>
                    <Avatar.Image
                        source={require('./asset/dentist.png')}
                        style={styles.cardImg}
                        size= {42}
                        />
                        <Text style= {styles.cardtext}>
                            Dentist
                        </Text>
                    </TouchableOpacity>
              </View>
              <View style= {styles.main}>
                    <TouchableOpacity style={styles.card} onPress={() =>
                    navigation.navigate('DocProfile', {title: 'Urologist'})
                    }>
                    <Avatar.Image
                        source={require('./asset/urology.png')}
                        style={styles.cardImg}
                        size= {42}
                        />
                        <Text style= {styles.cardtext}>
                            Urologist
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card} onPress={() =>
                    navigation.navigate('DocProfile', {title: 'Eye Specialist'})
                    }>
                    <Avatar.Image
                        source={require('./asset/eye2.png')}
                        style={styles.cardImg}
                        size= {42}
                        />
                        <Text style= {styles.cardtext}>
                            Eye Specialist
                        </Text>
                    </TouchableOpacity>
              </View>
              <View style= {styles.main}>
                    <TouchableOpacity style={styles.card} onPress={() =>
                    navigation.navigate('DocProfile', {title: 'Psychiatrist'})
                    }>
                    <Avatar.Image
                        source={require('./asset/psychiat.png')}
                        style={styles.cardImg}
                        size= {42}
                        />
                        <Text style= {styles.cardtext}>
                            Psychiatrist
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card} onPress={() =>
                    navigation.navigate('DocProfile', {title: 'Diabetes'})
                    }>
                    <Avatar.Image
                        source={require('./asset/diabetes2.png')}
                        style={styles.cardImg}
                        size= {42}
                        />
                        <Text style= {styles.cardtext}>
                            Diabetes
                        </Text>
                    </TouchableOpacity>
              </View>
              <View style= {styles.main}>
                    <TouchableOpacity style={styles.card} onPress={() =>
                    navigation.navigate('DocProfile', {title: 'Allegry'})
                    }>
                    <Avatar.Image
                        source={require('./asset/allergy.png')}
                        style={styles.cardImg}
                        size= {42}
                        />
                        <Text style= {styles.cardtext}>
                            Allegry Specialist
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card} onPress={() =>
                    navigation.navigate('DocProfile', {title: 'Cardilogist'})
                    }>
                    <Avatar.Image
                        source={require('./asset/cardiology.png')}
                        style={styles.cardImg}
                        size= {42}
                        />
                        <Text style= {styles.cardtext}>
                            Cardilogist
                        </Text>
                    </TouchableOpacity>
              </View>
              <View style= {styles.main}>
                    <TouchableOpacity style={styles.card} onPress={() =>
                    navigation.navigate('DocProfile', {title: 'Counselor'})
                    }>
                    <Avatar.Image
                        source={require('./asset/counselor.png')}
                        style={styles.cardImg}
                        size= {42}
                        />
                        <Text style= {styles.cardtext}>
                            Counselor
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card} onPress={() =>
                    navigation.navigate('DocProfile', {title: 'Infection'})
                    }>
                    <Avatar.Image
                        source={require('./asset/infection.png')}
                        style={styles.cardImg}
                        size= {42}
                        />
                        <Text style= {styles.cardtext}>
                            Infection Diseases
                        </Text>
                    </TouchableOpacity>
              </View>
              <View style= {styles.main}>
                    <TouchableOpacity style={styles.card} onPress={() =>
                    navigation.navigate('DocProfile', {title: 'Paediatrician'})
                    }>
                    <Avatar.Image
                        source={require('./asset/paedia.png')}
                        style={styles.cardImg}
                        size= {42}
                        />
                        <Text style= {styles.cardtext}>
                            Paediatrician
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card} onPress={() =>
                    navigation.navigate('DocProfile', {title: 'Physician'})
                    }>
                    <Avatar.Image
                        source={require('./asset/physician.png')}
                        style={styles.cardImg}
                        size= {42}
                        />
                        <Text style= {styles.cardtext}>
                             Physician
                        </Text>
                    </TouchableOpacity>
              </View>
           </View>
      );
  }

  export default Category;

  const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    txtdoc: {
        fontWeight: '900',
          fontSize: 19,
          margin: 10,
    },
      txt:{
          fontWeight: '900',
          fontSize: 16,
          margin: 10,
        //   backgroundColor: '#ffff',
        //   padding: 10,
        //   borderRadius:20
      },
      cardtext:{
          fontSize: 16,
          margin: 9,
          width: "80%",
          color: "black"
      },
      card: {
        flexDirection: 'row',
        margin: 10,
        width: "45%"

      },
      cardImg: {
          backgroundColor: "transparent"
      },
      main: {
          flexDirection: 'row'

      },

});