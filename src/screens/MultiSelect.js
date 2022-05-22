import React, {useState, useEffect} from 'react';
 
// import all the components we are going to use
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
 
// import MultiSelect library
import MultiSelect from 'react-native-multiple-select';
 
// Dummy Data for the MutiSelect
const items = [
  // name key is must. It is to show the text in front
  {id: 1, name: 'angellist'},
  {id: 2, name: 'codepen'},
  {id: 3, name: 'envelope'},
  {id: 4, name: 'etsy'},
  {id: 5, name: 'facebook'},
  {id: 6, name: 'foursquare'},
  {id: 7, name: 'github-alt'},
  {id: 8, name: 'github'},
  {id: 9, name: 'gitlab'},
  {id: 10, name: 'instagram'},
];
 
const Multi = () => {
  // Data Source for the SearchableDropdown
  const [selectedItems, setSelectedItems] = useState([]);
 
  const onSelectedItemsChange = (selectedItems) => {
    // Set Selected Items
    setSelectedItems(selectedItems);
  };
 
//   useEffect(() => {
//     fetch('https://aboutreact.herokuapp.com/demosearchables.php')
//       .then((response) => response.json())
//       .then((responseJson) => {
//         //Successful response from the API Call
//         setServerData(responseJson.results);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []);
 
  return (
    // <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        {/* <Text style={styles.titleText}>
                Prescription
        </Text> */}
        <View style = {styles.multiselectContainer}>
        <MultiSelect
          hideTags
          items={items}
          uniqueKey="id"
          onSelectedItemsChange={onSelectedItemsChange}
          selectedItems={selectedItems}
          selectText="Pick Medicine"
          searchInputPlaceholderText="Search Medicine..."
          onChangeInput={(text) => console.log(text)}
          tagRemoveIconColor="#000"
          tagBorderColor="#CCC"
          tagTextColor="#CCC"
          selectedItemTextColor="#CCC"
          selectedItemIconColor="#CCC"
          itemTextColor="#000"
          styleListContainer={{height: 200}}
          displayKey="name"
          searchInputStyle={{color: '#CCC'}}
          submitButtonColor="#48d22b"
          submitButtonText="Submit"
        //   removeSelected
        />
        </View>
      </View>

    // </SafeAreaView>
  );
};
 
export default Multi;
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  multiselectContainer: {
      height: 500, 
      width: '90%'
  },
//   titleText: {
//     padding: 8,
//     fontSize: 16,
//     textAlign: 'center',
//     fontWeight: 'bold',
//   },
});