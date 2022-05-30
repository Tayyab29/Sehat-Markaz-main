import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import SearchableDropdown from "react-native-searchable-dropdown";
import TextInputR from "../../src/screens/components/TextInputR";
import meds from "../../src/screens/Pharmacy/meds";
import Icon from 'react-native-vector-icons/FontAwesome';


const AddMedStore = () => {
  const [med_id, setMed_id] = useState({ value: "", error: "" });
  const [med_name, setMed_name] = useState();
  const [price, setPrice] = useState({ value: "", error: "" });
  const [quantity, setQuantity] = useState({ value: "", error: "" });
 

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.titleText}>Adding Medicne to Store</Text>
        <Text style={styles.headingText}>Search Medicine by Name</Text>
        <View style={{ width: "90%", alignSelf: "center" }}>
          <SearchableDropdown
            onTextChange={(text) => console.log(text)}
            //On text change listner on the searchable input
            // onItemSelect={(item) => alert(JSON.stringify(item.name))}
            onItemSelect={(item) => {
              setMed_id(JSON.stringify(item.id));
              setMed_name(item.name);
            }}
            //onItemSelect called after the selection from the dropdown
            containerStyle={{ padding: 5, borderRadius: 20,  }}
            //suggestion container style
            textInputStyle={{
              //inserted text style
              padding: 12,
              borderWidth: 1,
              borderColor: "#000",
              backgroundColor: "#FAF7F6",
            }}
            itemStyle={{
              //single dropdown item style
              padding: 10,
              marginTop: 2,
              backgroundColor: "#FAF9F8",
              borderColor: "#bbb",
              borderWidth: 0.5,
            }}
            itemTextStyle={{
              //text style of a single dropdown item
              color: "#222",
            }}
            itemsContainerStyle={{
              //items container style you can pass maxHeight
              //to restrict the items dropdown hieght
              maxHeight: "60%",
            }}
            items={meds}
            placeholder="Search Medicine"
            //place holder for the search input
            resetValue={false}
            //reset textInput Value with true and false state
            underlineColorAndroid="transparent"
            //To remove the underline from the android input
          />

          <TextInputR
            label="Medicine"
            returnKeyType="next"
            value={med_name}
            //onChangeText={}
            editable={false}
            error={!!price.error}
            errorText={price.error}
          />

          <TextInputR
            label="Price"
            returnKeyType="next"
            value={price.value}
            onChangeText={(text) => setPrice({ value: text, error: "" })}
            error={!!price.error}
            errorText={price.error}
          />
          <TextInputR
            label="Quantity"
            returnKeyType="next"
            value={quantity.value}
            onChangeText={(text) => setQuantity({ value: text, error: "" })}
            error={!!quantity.error}
            errorText={quantity.error}
          />
          <TouchableOpacity style={styles.cons} mode="contained" onPress={""}>
            <Text style={styles.btnTxt}> Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddMedStore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  titleText: {
    padding: 8,
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
  headingText: {
    padding: 8,
    marginLeft: 16,
    fontSize: 16, 
  },
  cons: {
    backgroundColor: "#43ba63",
    width: "80%",
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 30,
    padding: 10,
  },
  btnTxt: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});