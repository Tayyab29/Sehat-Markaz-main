import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
  TextInput
} from 'react-native';
import users from "./DoctorData";
import SearchBar from '../components/SearchBar'
import { Avatar } from 'react-native-paper';
import Ionicons from "@expo/vector-icons/Ionicons";

export default function DocProfile({ navigation, route }) {
  const [input, setInput] = useState("");

  const [docData, setDocData] = useState([]);

  useEffect(() => {
    setDocData(users);
  }, [users]);

  const searchData = (text) => {
    // console.log("\n\nI typed: ", text)
    const formattedQuery = text.toLowerCase();
    const newData = users.filter((item) => {
      return item.name.toLowerCase().search(formattedQuery) > -1;
    });
    // setFullData(newData);
    setDocData(newData);
    setInput(text);
  };

  return (
    <View style= {styles.container}>
        <View style={styles.searchView}>
          <View
            style={{
              flexDirection: "row",
              height: 50,
              alignItems: "center",
            }}
          >
            <Ionicons name="search" size={28} color="#18b4f5" />
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              // onChangeText={handleSearch}
              onChangeText={(text) => searchData(text)}
              value={input}
              style={styles.searchInput}
              placeholder="Search Doctors"
              clearButtonMode="always"
              keyboardAppearance="dark"
              maxLength={30}
            ></TextInput>
          </View>
        </View>
            <FlatList
              data={docData}
              renderItem={(itemData) => {
                if (
                  itemData.item.category.toUpperCase() ===
                  route.params.title.toUpperCase()
                ) {
                  return (
                    <View style= {styles.cardsWrapper}>
                    <TouchableOpacity style={styles.card} 
                    onPress={() =>
                        navigation.push("DocDetails", { doc: itemData.item })
                      }>
                      <View style={styles.cardImgWrapper}>
                      <Avatar.Image
                        source={require('../asset/image.jpg')}
                        style={styles.cardImg}
                          size= {100}
                        />
                      </View>
                      <View style={styles.cardInfo}>
                        <Text style={styles.cardTitle}>Dr. {itemData.item.name}</Text>
                        <Text style={styles.cardDetails}>
                          Specialty: {itemData.item.category}{"\n"}
                          Experince: {itemData.item.experience}
                        </Text>
                      </View>
                    </TouchableOpacity>
                    </View>     
            );
          }
        }}
        keyExtractor={(itemData, index) => itemData.id}
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
    height: 100,
    marginVertical: 10,
    flexDirection: 'row',
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
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
  searchView: {
    // flex: 0.7,
    width: "91%",
    alignSelf: 'center',
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    height: 50,
    marginTop: Platform.OS == "android" ? 10 : 10,
    borderRadius: 15,
    backgroundColor: "white",
    paddingRight: 15,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    elevation: 5,
    shadowOpacity: 0.16,
    shadowRadius: 10,
  },
});
