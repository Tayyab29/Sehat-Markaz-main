import React, { useState, useEffect, useRef } from "react";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Linking,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import TextInput from "../components/TextInput";
import { RadioButton } from "react-native-paper";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Avatar } from "react-native-paper";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function Userdetails({ navigation, route }) {
  const [name, setName] = useState({ value: "", error: "" });
  const [phone, setPhone] = useState({ value: "", error: "" });
  const [lab, setLab] = useState({ value: "", error: "" });
  const [checked, setChecked] = React.useState("male");
  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) =>
      setExpoPushToken(token)
    );

    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response);
      });

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={{ fontSize: 24 }}>Patient Information</Text>
        <Text style={{ paddingTop: 3, fontSize: 16, color: "#515357" }}>
          We will share this Information with Lab
        </Text>
        <Text style={styles.txt}> Patient Name</Text>
        <TextInput
          label="Enter your name"
          returnKeyType="next"
          value={name.value}
          onChangeText={(text) => setName({ value: text, error: "" })}
          error={!!name.error}
          errorText={name.error}
          style={styles.txtin}
        />
        <Text style={styles.txt}> Phone No</Text>
        <TextInput
          label="Phone No"
          returnKeyType="next"
          value={phone.value}
          onChangeText={(text) => setPhone({ value: text, error: "" })}
          error={!!phone.error}
          errorText={phone.error}
          keyboardType="numeric"
        />
        <Text style={styles.txt}> Test Name</Text>
        <TextInput
          label="Lab test"
          returnKeyType="next"
          value={lab.value}
          onChangeText={(text) => setLab({ value: text, error: "" })}
          error={!!lab.error}
          errorText={lab.error}
          style={styles.txtin}
        />
        <View>
          <Text style={styles.txt}> Gender</Text>
          <View style={{ flexDirection: "row" }}>
            <RadioButton
              value="male"
              color="#18b4f5"
              status={checked === "male" ? "checked" : "unchecked"}
              onPress={() => setChecked("male")}
            />
            <Text style={styles.ratxt}> Male</Text>
            <RadioButton
              value="female"
              color="#18b4f5"
              status={checked === "female" ? "checked" : "unchecked"}
              onPress={() => setChecked("female")}
            />
            <Text style={styles.ratxt}> Female</Text>
          </View>
        </View>
      </ScrollView>

      <View style={{ position: "relative", left: 0, right: 0, bottom: 0 }}>
        <TouchableOpacity
          style={styles.cons}
          mode="contained"
          onPress={async () => {
            await schedulePushNotification();
          }}
        >
          <Text style={styles.btnTxt}>Confirm Booking</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
async function schedulePushNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Booking Confirmation",
      body: "Successfully, Booking details has been sent",
      data: { data: "goes here" },
    },
    trigger: { seconds: 2 },
  });
}

async function registerForPushNotificationsAsync() {
  let token;
  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert("Must use physical device for Push Notifications");
  }

  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  return token;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 14,
  },
  txt: {
    marginTop: 6,
    fontWeight: "bold",
    fontSize: 14,
  },
  ratxt: {
    marginTop: 8,
    fontWeight: "bold",
    fontSize: 14,
  },
  cons: {
    backgroundColor: "#18b4f5",
    width: "93%",
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 10,
    padding: 10,
  },
  btnTxt: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});