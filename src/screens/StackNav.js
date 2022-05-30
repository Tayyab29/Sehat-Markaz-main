import React from "react";
import { Provider } from "react-native-paper";
import { StatusBar } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { theme } from "./core/theme";
import PaReg from "./Registration/PaReg";
import AmReg from "./Registration/AmReg";
import PharReg from "./Registration/PharReg";
import DocReg from "./Registration/DocReg";
import LaReg from "./Registration/LaReg";
import BDReg from "./Registration/BDReg";
import Genral from "./Registration/Genral";
import Navigation from "./Navigation";
import Category from "./Category";
import {
  StartScreen,
  LoginScreen,
  ResetPasswordScreen,
  SplashScreen,
  Doctor,
  NotificationsTab,
  DocProfile,
} from "./User";
import MainCalender from "./MainCalender";
import MyAppoint from "./myappoint";
import DocDetails from "./Doctor/DocDetails";
import Schedule from "./Doctor/Schedule";
import BookDoc from "./Doctor/bookDoc";
import PatientProfile from "./Patient/PatientProfile";
import EditPatientProfile from "./Patient/EditPatientProfile";

//For Ambulance Services Screens
import Ambulance from "./Ambulance/start";
import SearchNearbyAmbulances from "./Ambulance/searchNearbyAmbulances";
import FoundNearbyAmbulances from "./Ambulance/foundNearbyAmbulances";
import AmbulanceDetails from "./Ambulance/ambulanceDetails";

//For Lab Screens
import Lab from "./Lab/start";
import SearchLabs from "./Lab/searchLabs";
import FoundLabs from "./Lab/foundLabs";
import LabDetails from "./Lab/labDetails";
import bookLab from "./Lab/bookLab";
import Userdetails from "./Lab/Userdetails";

//For Pharmacy Screens
import Pharmacy from "./Pharmacy/start";
import SearchNearbyPharmacies from "./Pharmacy/searchNearbyPharmacies";
import FoundNearbyPharmacies from "./Pharmacy/foundNearbyPharmacies";
import PharmacyDetails from "./Pharmacy/pharmacyDetails";
import MedicineScreen from "./Pharmacy/medicine";
import MedicineDetails from "./Pharmacy/MedicineDetails";
import CartScreen from "./Pharmacy/CartScreen";
import Userdetailphar from "./Pharmacy/Userdetailphar";

//For Blood Donation Screen
import Start from "./Blood/start";
import BloodDonors from "./Blood/bloodDonors";
import DonorDetails from "./Blood/donorDetails";

//For Pharmacy Management Portal
import StartPharmacyManagementPortal from "../../Portals/Pharmacy Management Portal/start";
import PharmacyManagementProfile from "../../Portals/Pharmacy Management Portal/pharmacyManagementProfile";
import Home from "../../Portals/Pharmacy Management Portal/Home";
import ProfileScreen from "../../Portals/Pharmacy Management Portal/Profilephar";
import ViewMed from "../../Portals/Pharmacy Management Portal/ViewMed";
import AddMed from "../../Portals/Pharmacy Management Portal/addMed";
import PharMedDetail from "../../Portals/Pharmacy Management Portal/PharMedDetail";
import UpdateMed from "../../Portals/Pharmacy Management Portal/UpdateMed";
import AddMedStore from "../../Portals/Pharmacy Management Portal/addMedStore";

//For Blood Donor Portal
import StartBloodDonorPortal from "../../Portals/Blood Donor Portal/start";
import HomeBlood from "../../Portals/Blood Donor Portal/HomeBlood";
import BloodRequest from "../../Portals/Blood Donor Portal/BloodRequest";
import BloodDonorProfile from "../../Portals/Blood Donor Portal/BloodDonorProfile";
import EditDonorProfile from "../../Portals/Blood Donor Portal/EditDonorProfile";
import RequesterDetail from "../../Portals/Blood Donor Portal/RequesterDetail";

//For Lab Management Portal
import StartLabManagementPortal from "../../Portals/Lab Management Portal/start";
import LabManagementProfile from "../../Portals/Lab Management Portal/labManagementProfile";
import HomeLab from "../../Portals/Lab Management Portal/HomeLab";
import LabProfile from "../../Portals/Lab Management Portal/LabProfile";
import EditLabProfile from "../../Portals/Lab Management Portal/EditLabProfile";
import AddLabTest from "../../Portals/Lab Management Portal/addLabTest";
import UpdateLabTest from "../../Portals/Lab Management Portal/UpdateLabTest";
import LabAppoint from "../../Portals/Lab Management Portal/LabAppoint";
import AvailableTest from "../../Portals/Lab Management Portal/AvailableTest";


//For Ambulance Management Portal
import StartAmbulanceServiceProvider from "../../Portals/Ambulance Service Provider Portal/start";
import AmbulanceServiceProviderProfile from "../../Portals/Ambulance Service Provider Portal/ambServiceProviderProfile";
import HomeAmb from "../../Portals/Ambulance Service Provider Portal/HomeAmb";
import EditAmbuProfile from "../../Portals/Ambulance Service Provider Portal/EditAmbuProfile";
import AmbuProfile from "../../Portals/Ambulance Service Provider Portal/AmbuProfile";
import AmbuRequest from "../../Portals/Ambulance Service Provider Portal/AmbuRequest";
import AmbuRequesterDetail from "../../Portals/Ambulance Service Provider Portal/AmbuRequesterDetail";
import AvailableAmbulance from "../../Portals/Ambulance Service Provider Portal/AvailableAmbulance";
import AddAmbulance from "../../Portals/Ambulance Service Provider Portal/addAmbulance";
import AvailableAmbulanceDetail from "../../Portals/Ambulance Service Provider Portal/AvailableAmbulanceDetail";
import UpdateAmbulance from "../../Portals/Ambulance Service Provider Portal/UpdateAmbulance";

import GeocodingScreen from "./Location";
import CurrentLocation from "./CurrentLocation";


//For Doctor Management Portal
import HomeDoc from "../../Portals/Doctor Management Portal/HomeDoc";
import DocViewMed from "../../Portals/Doctor Management Portal/DocViewMed";
import DocaddMed from "../../Portals/Doctor Management Portal/DocaddMed";
import DocAppoint from "../../Portals/Doctor Management Portal/DocAppoint";
import DocProfilePanel from "../../Portals/Doctor Management Portal/DocProfilePanel";
import EditDocProfile from "../../Portals/Doctor Management Portal/EditDocProfile";
import PendingOrder from "../../Portals/Pharmacy Management Portal/PendingOrder";
import BuyerDetail from "../../Portals/Pharmacy Management Portal/BuyerDetail";
import CheckNotification from "./CheckNotification";
import AddPrescriptionNote from "../../Portals/Doctor Management Portal/AddPrescriptionNote";
import AddPrescriptionMed from "../../Portals/Doctor Management Portal/AddPrescriptionMed";
import BookedAppoint from "../../Portals/Doctor Management Portal/BookedAppoint";








const Stack = createStackNavigator();

const StackNav = ({ navigation }) => {
  return (
    <NavigationContainer>
      <Provider theme={theme}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
        <Stack.Navigator
          initialRouteName="SplashScreen"
          screenOptions={{
            headerShown: true,
            marginTop: 10,
            headerStyle: {
              backgroundColor: "white", //'#f0f2f5',
            },
            headerTintColor: "black",
            headerTitleAlign: "center",
            headerTitleStyle: {
              color: "black",
              fontSize: 20,
            },
          }}
        >
          <Stack.Screen
              name="CheckNotification"
              component={CheckNotification}
              options={{ header: () => null }}
            />
          {/* Login */}
          <Stack.Group>
            <Stack.Screen
              name="SplashScreen"
              component={SplashScreen}
              options={{ header: () => null }}
            />
            <Stack.Screen
              name="StartScreen"
              component={StartScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Location"
              component={GeocodingScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CurrentLocation"
              component={CurrentLocation}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginScreen"
              component={LoginScreen}
              options={{
                title: "Login",
              }}
            />
            <Stack.Screen
              name="ResetPasswordScreen"
              component={ResetPasswordScreen}
              screenOptions={{
                headerShown: true,
              }}
              options={{
                title: "Reset Password",
              }}
            />
            <Stack.Screen
              name="Genral"
              component={Genral}
              options={{
                title: "Registration Form",
              }}
            />
            <Stack.Screen
              name="AmReg"
              component={AmReg}
              options={{
                title: "Ambulance Registration",
              }}
            />
            <Stack.Screen
              name="PaReg"
              component={PaReg}
              options={{
                title: "Patient Registration",
              }}
            />
            <Stack.Screen
              name="PharReg"
              component={PharReg}
              options={{
                title: "Pharmacy Registration",
              }}
            />
            <Stack.Screen
              name="BDReg"
              component={BDReg}
              options={{
                title: "Blood Donor Registration",
                headerTitleStyle: {
                  fontSize: 18,
                },
              }}
            />
            <Stack.Screen
              name="DocReg"
              component={DocReg}
              options={{
                title: "Doctor Registration",
              }}
            />
            <Stack.Screen
              name="LaReg"
              component={LaReg}
              options={{
                title: "Laboratory Registration",
              }}
            />
          </Stack.Group>

          <Stack.Group>
            {/* Ambulance */}
            <Stack.Screen
              name="Root"
              component={Navigation}
              options={{
                headerShown: false,
                headerTintColor: "#fff2",
                headerTitleStyle: {
                  fontWeight: "bold",
                },
              }}
            />
            <Stack.Screen
              name="MainCalender"
              component={MainCalender}
              options={{ header: () => null }}
            />
            <Stack.Screen
              name="Ambulance"
              component={Ambulance}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="SearchNearbyAmbulances"
              component={SearchNearbyAmbulances}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="FoundNearbyAmbulances"
              component={FoundNearbyAmbulances}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="AmbulanceDetails"
              component={AmbulanceDetails}
              options={{ title: "Details" }}
            />

            {/* Lab */}
            <Stack.Screen
              name="Lab"
              component={Lab}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="SearchLabs"
              component={SearchLabs}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="FoundLabs"
              component={FoundLabs}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="LabDetails"
              component={LabDetails}
              options={{ title: "Details" }}
            />
            <Stack.Screen
              name="BookLab"
              component={bookLab}
              options={{ title: "Appointment Booking" }}
            />
            <Stack.Screen
              name="Userdetails"
              component={Userdetails}
              options={{ title: "Confirm Booking" }}
            />

            {/* Pharmacy */}
            <Stack.Screen
              name="Pharmacy"
              component={Pharmacy}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="SearchNearbyPharmacies"
              component={SearchNearbyPharmacies}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="FoundNearbyPharmacies"
              component={FoundNearbyPharmacies}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="PharmacyDetails"
              component={PharmacyDetails}
              options={{ title: "Details" }}
            />
            <Stack.Screen
              name="MedicineScreen"
              component={MedicineScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MedicineDetails"
              component={MedicineDetails}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CartScreen"
              component={CartScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Userdetailphar"
              component={Userdetailphar}
              options={{ title: "Personal Details" }}
            />

            {/* BloodDonor */}
            <Stack.Screen
              name="Start"
              component={Start}
              options={{
                headerShown: false,
              }}
            />

            <Stack.Screen
              name="BloodDonors"
              component={BloodDonors}
              options={{
                title: "Blood Donors",
              }}
            />

            <Stack.Screen
              name="DonorDetails"
              component={DonorDetails}
              options={{
                title: "Profile",
              }}
            />

            {/* Doctor */}
            <Stack.Screen
              name="Category"
              component={Category}
              options={{ title: "Category" }}
            />
            <Stack.Screen
              name="DocProfile"
              component={DocProfile}
              options={{
                title: "Doctors",
              }}
            />
            <Stack.Screen
              name="DocDetails"
              component={DocDetails}
              options={{
                title: "Doctor Datails",
              }}
            />
            <Stack.Screen
              name="BookDoc"
              component={BookDoc}
              options={{
                title: "Doctor Datails",
              }}
            />
            <Stack.Screen
              name="Schedule"
              component={Schedule}
              options={{
                title: "Book Appointment",
              }}
            />
        <Stack.Screen
          name="Notification"
          component={NotificationsTab}
          options={{
            title: 'Notification',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="myappoint"
          component={MyAppoint}
          options={{
            title: 'Your Appointments',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Doctor"
          component={Doctor}
          options={{
            title: 'Doctor',
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="PatientProfile"
          component={PatientProfile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EditPatientProfile"
          component={EditPatientProfile}
          options={{ headerShown: false }}
        />
          </Stack.Group>

          <Stack.Group>
            <Stack.Screen
              name="StartPharmacyManagementPortal"
              component={StartPharmacyManagementPortal}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="EditProfile"
              component={PharmacyManagementProfile}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="Profile"
              component={ProfileScreen}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="ViewMed"
              component={ViewMed}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="addMed"
              component={AddMed}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PharMedDetail"
              component={PharMedDetail}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UpdateMed"
              component={UpdateMed}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PendingOrder"
              component={PendingOrder}
              options={{ title: 'New Orders', headerShown: true }}
            />
            <Stack.Screen
              name="BuyerDetail"
              component={BuyerDetail}
              options={{ title: 'Order Detail', headerShown: true }}
            />
            <Stack.Screen
              name="AddMedStore"
              component={AddMedStore}
              options={{title: 'Store Medicine' }}
            />
          </Stack.Group>

          <Stack.Group>
            <Stack.Screen
              name="StartBloodDonorPortal"
              component={StartBloodDonorPortal}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomeBlood"
              component={HomeBlood}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BloodRequest"
              component={BloodRequest}
              options={{ title: 'Blood Request', headerShown: true }}
            />
            <Stack.Screen
              name="BloodDonorProfile"
              component={BloodDonorProfile}
              options={{ title: 'Blood Request', headerShown: true }}
            />
            <Stack.Screen
              name="EditDonorProfile"
              component={EditDonorProfile}
              options={{ title: 'Edit Profile', headerShown: true }}
            />
            <Stack.Screen
              name="RequesterDetail"
              component={RequesterDetail}
              options={{ title: 'Requester Details', headerShown: true }}
            />
          </Stack.Group>

          <Stack.Group>
            <Stack.Screen
              name="StartLabManagementPortal"
              component={StartLabManagementPortal}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="LabManagementProfile"
              component={LabManagementProfile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomeLab"
              component={HomeLab}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LabProfile"
              component={LabProfile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EditLabProfile"
              component={EditLabProfile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="addLabTest"
              component={AddLabTest}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UpdateLabTest"
              component={UpdateLabTest}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LabAppoint"
              component={LabAppoint}
              options={{title: 'Appointments', headerShown: true }}
            />
            <Stack.Screen
              name="AvailableTest"
              component={AvailableTest}
              options={{ headerShown: true }}
            />
          </Stack.Group>

          <Stack.Group>
            <Stack.Screen
              name="StartAmbulanceServiceProvider"
              component={StartAmbulanceServiceProvider}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="AmbulanceServiceProviderProfile"
              component={AmbulanceServiceProviderProfile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomeAmbulance"
              component={HomeAmb}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AmbuProfile"
              component={AmbuProfile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EditAmbuProfile"
              component={EditAmbuProfile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AmbuRequest"
              component={AmbuRequest}
              options={{title: 'Pending Request', headerShown: true }}
            />
            <Stack.Screen
              name="AmbuRequesterDetail"
              component={AmbuRequesterDetail}
              options={{ title: 'Requester Details', headerShown: true }}
            />
            <Stack.Screen
              name="AvailableAmbulance"
              component={AvailableAmbulance}
              options={{ title: 'Ambulance Cars', headerShown: true }}
            />
            <Stack.Screen
              name="AddAmbulance"
              component={AddAmbulance}
              options={{ title: 'Add Ambulance Car', headerShown: true }}
            />
            <Stack.Screen
              name="UpdateAmbulance"
              component={UpdateAmbulance}
              options={{ title: 'Update Ambulance Car', headerShown: true }}
            />
            <Stack.Screen
              name="AvailableAmbulanceDetail"
              component={AvailableAmbulanceDetail}
              options={{ title: 'Ambulance Detail', headerShown: true }}
            />
          </Stack.Group>
          <Stack.Group>
          <Stack.Screen
              name="HomeDoc"
              component={HomeDoc}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DocViewMed"
              component={DocViewMed}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DocaddMed"
              component={DocaddMed}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DocAppoint"
              component={DocAppoint}
              options={{
                title: 'Pending Appointments',
                headerShown: true,
              }}
            />
            <Stack.Screen
              name="BookedAppoint"
              component={BookedAppoint}
              options={{
                title: 'Booked Appointments',
                headerShown: true,
              }}
            />
            <Stack.Screen
              name="DocProfilePanel"
              component={DocProfilePanel}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="EditDocProfile"
              component={EditDocProfile}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="AddPrescriptionNote"
              component={AddPrescriptionNote}
              options={{ title: 'Prescription', headerShown: true }}
            />
            <Stack.Screen
              name="AddPrescriptionMed"
              component={AddPrescriptionMed}
              options={{ title: 'Prescription', headerShown: true }}
            />
          </Stack.Group>
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
};
export default StackNav;
