import React, { useContext, useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Image,
  TextInput,
  Keyboard,
} from "react-native";
import { Formik } from "formik";
import * as yup from "yup";

import Button from "../../components/custom/button";

import { Inputs, Colors, Layout, Graphics } from "../../components/helpers/style";

import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-community/async-storage";
import Icon from "react-native-vector-icons/FontAwesome5";
import { ScrollView } from "react-native-gesture-handler";

export default ProfilePage = () => {
  const [userData, setUserData] = useState();

  const imagePickeroptions = {
    title: "Select Avatar",
    customButtons: [{ name: "fb", title: "Choose Photo from Facebook" }],
    storageOptions: {
      skipBackup: true,
      path: "images",
    },
  };

  const getUserData = () => {
    //get user data via your API here

    setUserData({
      firstName: "Veronica",
      lastName: "Juan",
      email: "vjuan@gmail.com",
      phoneNumber: "112211",
    });
  };

  useEffect(() => {
    getUserData();
  }, []);

  const profileValidation = yup.object({
    firstName: yup.string().required().min(3).max(50),
    lastName: yup.string().required().min(3).max(50),
    email: yup.string().required().min(3).max(255),
    phoneNumber: yup.string().min(10).max(20),
  });

  return (
    <SafeAreaView style={Layout.pageContainer}>
      <ScrollView style={Layout.contentContainer}>
        {userData && (
          <>
            <TouchableOpacity style={Layout.ProfilePictureContainer}>
              <Icon
                name="camera"
                size={30}
                color={Colors.primaryColor}
                style={Layout.profilePictureEditIcon}
              />
              <Image
                source={require("../../images/profile.jpg")}
                style={Graphics.profilePictureLarge}
              />
            </TouchableOpacity>
            <Formik
              initialValues={userData}
              validationSchema={profileValidation}
              onSubmit={async (values, actions) => {
                Keyboard.dismiss();
                actions.resetForm();
                //save profile function here 
              }}
            >
              {(props) => (
                <View>
                  <Text>First Name</Text>
                  <TextInput
                    onChangeText={props.handleChange("firstName")}
                    value={props.values.firstName}
                    onBlur={props.handleBlur("firstName")}
                    style={Inputs.textInput}
                  />
                  <Text style={Inputs.inputDangerDescription}>
                    {props.touched.firstName && props.errors.firstName}
                  </Text>
                  <Text>Last Name</Text>
                  <TextInput
                    onChangeText={props.handleChange("lastName")}
                    value={props.values.lastName}
                    onBlur={props.handleBlur("lastName")}
                    style={Inputs.textInput}
                  />
                  <Text style={Inputs.inputDangerDescription}>
                    {props.touched.lastName && props.errors.lastName}
                  </Text>
                  <Text>Email</Text>
                  <TextInput
                    onChangeText={props.handleChange("email")}
                    value={props.values.email}
                    onBlur={props.handleBlur("email")}
                    style={Inputs.textInput}
                    keyboardType="email-address"
                  />
                  <Text style={Inputs.inputDangerDescription}>
                    {props.touched.email && props.errors.email}
                  </Text>
                  <Text>Phone Number</Text>
                  <TextInput
                    onChangeText={props.handleChange("phoneNumber")}
                    value={props.values.phoneNumber}
                    onBlur={props.handleBlur("phoneNumber")}
                    style={Inputs.textInput}
                  />
                  <Text style={Inputs.inputDangerDescription}>
                    {props.touched.phoneNumber && props.errors.phoneNumber}
                  </Text>
                  <Spacer top={40} bottom={0} left={0} right={0} />
                  <Button Title={"Save"} btnStyle={"primary"} onPress={props.handleSubmit} />
                </View>
              )}
            </Formik>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};
