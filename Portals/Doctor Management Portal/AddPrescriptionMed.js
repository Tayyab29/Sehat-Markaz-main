// import React, { useState, useEffect } from "react";
// import {
//   SafeAreaView,
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   TextInput,
//   Button,
//   FlatList,
//   Modal,
// } from "react-native";
// import { ScrollView } from "react-native-gesture-handler";
// import MultiSelect from "react-native-multiple-select";
// import meds from "../../src/screens/Pharmacy/meds";
// import { emptyfield } from "../../src/screens/helpers/emptyfield";
// import TextInputM from "../../src/screens/components/TextInputM";

// const Item = ({ title, din, fre, amo }) => (
//   <View style={styles.item}>
//     <Text style={styles.title}>{title}</Text>
//     <Text style={styles.otherdetails}>{"Take "+amo+" "+title+" ( "+fre+" ) "+" per day. And continue it to "+din+" day."}</Text>
//   </View>
// );

// const AddPrescriptionMed = () => {
//   const [selectedItem, setSelectedItem] = useState([]);
//   // const [newitem, setNewitem] = useState([])
//   const [meddata, setMeddata] = useState([]);
//   const [modalVisible, setModalVisible] = useState(true);

//   const getName = (selectedItems) => {
//     var name1;
//     let name;
//     console.log(selectedItems);

//     name = meds.filter((item) => {
//       if (item.id == selectedItems) {
//         //console.log(item)
//         name1 = item.name;
//       }
//     });

//     return name1;
//   };

//   const onSelectedItemsChange = (selectedItems) => {
//     setSelectedItem(selectedItems);
//   };

//   const Card = ({ med }) => {
//     const [day, setDay] = useState({ value: '', error: '' });
//     const [frequency, setFrequency] = useState({ value: '', error: '' });
//     const [amount, setAmount] = useState({ value: '', error: '' });
//     const [med_name, setMed_name] = useState();
//     const MedicineNAME = getName(med);


//     const AddMeds = () => {
//   //    console.log("Value 1 " + meddata.length);
//         meddata.push({ med_name: med, din: day, fre: frequency, amo: amount });
//       // console.log("Value 2 " + meddata.length);
//       // console.log("object");
//       // console.log(meddata);
//       const dayError = emptyfield(day.value);
//       const frequencyError = emptyfield(frequency.value);
//       const amountError = emptyfield(amount.value);   
  
  
//       if (dayError || frequencyError ||amountError) {
//         setDay({ ...day, error: dayError });
//         setFrequency({ ...frequency, error: frequencyError });
//         setAmount({ ...amount, error: amountError });
//         return;
//       }
  
//       navigation.navigate('LoginScreen');
//       setDay("");
//       setAmount("");
//       setFrequency("");
//     };


//       // const dayError = nameValidator(day.value);
//       // const frequencyError = emptyfield(frequency.value);
//       // const amountError = emptyfield(amount.value);   
  
  
//       // if (dayError || frequencyError ||amountError) {
//       //   setDay({ ...day, error: dayError });
//       //   setFrequency({ ...frequency, error: frequencyError });
//       //   setAmount({ ...amount, error: amountError });
//       //   return;
//       // }
  
//       // navigation.navigate('LoginScreen');

    // return (
    //   <View>
    //     <View style={styles.card}>
    //       <View style={styles.cardInfo}>
    //         <View
    //           style={{
    //             flexDirection: "row",
    //             justifyContent: "space-between",
    //             marginBottom: 8,
    //           }}
    //         >
    //           <Text style={styles.cardTitle}>{MedicineNAME}</Text>
    //           {/* {console.log(med)} */}
    //           <TextInputM
    //             style={{ height: 30, width: 140 }}
    //             label="Days"
    //             returnKeyType="next"
    //             value={day}
    //             onChangeText={(text) => setDay({ value: text, error: '' })}
    //             error={!!day.error}
    //             errorText={day.error}
    //           />
    //         </View>
    //         <View
    //           style={{ flexDirection: "row", justifyContent: "space-between" }}
    //         >
    //           <TextInputM
    //             style={{ height: 30, width: 140 }}
    //             label="Frequency"
    //             returnKeyType="next"
    //             onChangeText={(text) => setFrequency({ value: text, error: '' })}
    //             value={frequency}
    //             error={!!frequency.error}
    //             errorText={frequency.error}
    //           />
    //           <TextInputM
    //             style={{ height: 30, width: 140 }}
    //             label="Amount"
    //             returnKeyType="next"
    //             onChangeText={(text) => setAmount({ value: text, error: '' })}
    //             value={amount}
    //             error={!!amount.error}
    //             errorText={amount.error}
    //           />
    //         </View>
    //         <TouchableOpacity style={styles.Acons} mode="contained"
    //            onPress={AddMeds} >
    //           <Text style={styles.btnTxt}> Add</Text>
    //         </TouchableOpacity>
    //         {/* <Button style= {{marginTop:15}} title="Add" onPress={AddMeds}></Button> */}
    //       </View>
    //     </View>

//         <View>
//           <Text>{}</Text>
//           <FlatList
//             data={meddata}
//             renderItem={renderItem}
//             keyExtractor={(item) => item.id}
//           />
//         </View>
//       </View>
//     );
//   };
//   const renderItem = ({ item }) => (
//     <Item
//       title={getName(item.med_name)}
//       din={item.din}
//       fre={item.fre}
//       amo={item.amo}
//     />
//   );
//   return (
//     <View style={styles.container}>
//       <Text style={styles.titleText}>Adding Medicine in Prescription </Text>
//       <MultiSelect
//         items={meds}
//         uniqueKey="id"
//         displayKey="name"
//         onSelectedItemsChange={onSelectedItemsChange}
//         selectedItem={selectedItem}
//         selectText="Pick Medicine"
//         searchInputPlaceholderText="Search Medicine..."
//         onChangeInput={(text) => console.log(text)}
//         styleDropdownMenu={{
//           height: 50,
//           borderBottomColor: "#000",
//           borderWidth: 0.7,
//           paddingLeft: 8,
//         }}
//         selectedItemTextColor="#3ac1f2"
//         selectedItemIconColor="#3ac1f2"
//         itemTextColor="#000"
//         styleListContainer={{ height: 170 }}
//         searchInputStyle={{ color: "#000" }}
//         submitButtonColor="#18b4f5"
//         submitButtonText="Submit"
//       />
//       <ScrollView showsVerticalScrollIndicator={false}>
//         <View style={{ flexDirection: "column" }}>
//           {selectedItem.map((item) => {
//             return <Card key={Math.random()} med={item} />;
//           })}
//         </View>
//       </ScrollView>
//       <View style={{ position: "relative", left: 0, right: 0, bottom: 0 }}>
//         <TouchableOpacity style={styles.cons} mode="contained">
//           {/* onPress={_onSignUpPressed } */}
//           <Text style={styles.btnTxt}> Submit</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default AddPrescriptionMed;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "white",
//     paddingHorizontal: 15,
//   },
//   item: {
//     backgroundColor: "#f2f2f2",
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//     borderWidth: 0.25,
//     borderRadius: 5,
//   },
//   title: {
//     fontSize: 24,
//   },
//   otherdetails: {
//     fontSize: 16,
//   },
//   titleText: {
//     color: "#18b4f5",
//     fontSize: 22,
//     fontWeight: "bold",
//     alignSelf: "center",
//     paddingBottom: 15,
//   },
//   headingText: {
//     padding: 8,
//   },
//   card: {
//     width: "100%",
//     alignSelf: "center",
//     height: 150,
//     marginVertical: 8,
//     flexDirection: "column",
//     shadowColor: "#999",
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.8,
//     shadowRadius: 2,
//     elevation: 5,
//   },
//   cardInfo: {
//     flex: 2,
//     padding: 10,
//     borderLeftWidth: 0,
//     borderRadius: 10,
//     borderBottomRightRadius: 8,
//     borderTopRightRadius: 8,
//     backgroundColor: "#ebf2f5",
//   },
//   cardTitle: {
//     fontWeight: "bold",
//     fontSize: 16,
//     marginTop: 8,
//     marginLeft: "7%",
//   },
//   Acons: {
//     backgroundColor: "#18b4f5",
//     width: "40%",
//     flexDirection: "row",
//     justifyContent: "center",
//     alignSelf: "center",
//     borderRadius: 15,
//     padding: 10,
//     marginTop:10
//   },
//   cons: {
//     backgroundColor: "#18b4f5",
//     width: "80%",
//     flexDirection: "row",
//     justifyContent: "center",
//     alignSelf: "center",
//     borderRadius: 15,
//     padding: 10,
//     marginTop:10
//   },
//   btnTxt: {
//     color: "white",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
// });

import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Button,
  FlatList,
  Alert,
  Modal,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import MultiSelect from "react-native-multiple-select";
import meds from "../../src/screens/Pharmacy/meds";
import TextInputM from "../../src/screens/components/TextInputM";

const Item = ({ title, din, fre, amo }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.otherdetails}>
      {"Take " +
        amo +
        " " +
        title +
        " ( " +
        fre +
        " ) " +
        " per day. And continue it to " +
        din +
        " day."}
    </Text>
  </View>
);

const AddPrescriptionMed = () => {
  const [selectedItem, setSelectedItem] = useState([]);
  const [meddata, setMeddata] = useState([]);
  const [modalVisible, setModalVisible] = useState(true);

  const getName = (selectedItems) => {
    var name1;
    let name;
    console.log(selectedItems);

    name = meds.filter((item) => {
      if (item.id == selectedItems) {
        //console.log(item)
        name1 = item.name;
      }
    });

    return name1;
  };

  const onSelectedItemsChange = (selectedItems) => {
    setSelectedItem(selectedItems);
  };

  const Card = ({ med }) => {
    const AddMeds = () => {
      console.log(
        "check" +
          (day != undefined && frequency != undefined && amount != undefined)
      );
      console.log("Day :", day);
      console.log("Fre ", frequency);
      console.log("Amount ", amount);
      if (day != undefined && frequency != undefined && amount != undefined) {
        console.log("Function 1");
        meddata.push({ med_name: med, din: day, fre: frequency, amo: amount });

        setDay("");
        setAmount("");
        setFrequency("");
      } else {
        Alert.alert("Prescription Warning", "Field's can't be empty");
      }
    };
    const [day, setDay] = useState();
    const [frequency, setFrequency] = useState();
    const [amount, setAmount] = useState();
    const [med_name, setMed_name] = useState();
    const MedicineNAME = getName(med);

    return (
      <View>
        <View style={styles.card}>
          <View style={styles.cardInfo}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 8,
              }}
            >
              <Text style={styles.cardTitle}>{MedicineNAME}</Text>
              {/* {console.log(med)} */}
              <TextInputM
                style={{ height: 30, width: 140 }}
                label="Days"
                returnKeyType="next"
                value={day}
                onChangeText={(text) => setDay(text)}
                keyboardType = 'numeric'
              />
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <TextInputM
                style={{ height: 30, width: 140 }}
                label="Frequency"
                returnKeyType="next"
                onChangeText={(text) => setFrequency(text)}
                value={frequency}
                keyboardType = 'numeric'
              />
              <TextInputM
                style={{ height: 30, width: 140 }}
                label="Amount"
                returnKeyType="next"
                onChangeText={(text) => setAmount(text)}
                value={amount}
                keyboardType = 'numeric'

              />
            </View>
            <TouchableOpacity style={styles.Acons} mode="contained"
               onPress={AddMeds} >
              <Text style={styles.btnTxt}> Add</Text>
            </TouchableOpacity>
            {/* <Button style= {{marginTop:15}} title="Add" onPress={AddMeds}></Button> */}
          </View>
        </View>
        <View>
          <Text>{}</Text>
          <FlatList
            data={meddata}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    );
  };
  const renderItem = ({ item }) => (
    <Item
      title={getName(item.med_name)}
      din={item.din}
      fre={item.fre}
      amo={item.amo}
    />
  );
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Adding Medicine in Prescription </Text>
      <MultiSelect
        items={meds}
        uniqueKey="id"
        displayKey="name"
        onSelectedItemsChange={onSelectedItemsChange}
        selectedItem={selectedItem}
        selectText="Pick Medicine"
        searchInputPlaceholderText="Search Medicine..."
        onChangeInput={(text) => console.log(text)}
        styleDropdownMenu={{
          height: 50,
          borderBottomColor: "#000",
          borderWidth: 0.7,
          paddingLeft: 8,
        }}
        selectedItemTextColor="#3ac1f2"
        selectedItemIconColor="#3ac1f2"
        itemTextColor="#000"
        styleListContainer={{ height: 170 }}
        searchInputStyle={{ color: "#000" }}
        submitButtonColor="#18b4f5"
        submitButtonText="Submit"
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flexDirection: "column" }}>
          {selectedItem.map((item) => {
            return <Card key={Math.random()} med={item} />;
          })}
        </View>
      </ScrollView>
      <View style={{ position: "relative", left: 0, right: 0, bottom: 0 }}>
        <TouchableOpacity style={styles.cons} mode="contained">
          {/* onPress={_onSignUpPressed } */}
          <Text style={styles.btnTxt}> Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddPrescriptionMed;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 15,
  },
  item: {
    backgroundColor: "#f2f2f2",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderWidth: 0.25,
    borderRadius: 5,
  },
  title: {
    fontSize: 24,
  },
  otherdetails: {
    fontSize: 16,
  },
  titleText: {
    color: "#18b4f5",
    fontSize: 22,
    fontWeight: "bold",
    alignSelf: "center",
    paddingBottom: 15,
  },
  headingText: {
    padding: 8,
  },
  card: {
    width: "100%",
    alignSelf: "center",
    height: 150,
    marginVertical: 8,
    flexDirection: "column",
    shadowColor: "#999",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  cardInfo: {
    flex: 2,
    padding: 10,
    borderLeftWidth: 0,
    borderRadius: 10,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: "#ebf2f5",
  },
  cardTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 8,
    marginLeft: "7%",
  },
  Acons: {
    backgroundColor: "#18b4f5",
    width: "40%",
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 15,
    padding: 10,
    marginTop:10
  },
  cons: {
    backgroundColor: "#18b4f5",
    width: "80%",
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 15,
    padding: 10,
    marginTop:10
  },
  btnTxt: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});