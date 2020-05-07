import React, { useContext, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  Keyboard,
  BackHandler,
  Alert,
} from "react-native";

import { Formik } from "formik";
import * as yup from "yup";

import Button from "../../components/custom/button";

import { Layout, Inputs } from "../../components/helpers/style";
import AsyncStorage from "@react-native-community/async-storage";

import { useNavigation } from "@react-navigation/native";

function backButtonHandler() {
  console.log("press");
}

export default OtpPage = (AuthContext) => {
  const navigation = useNavigation();
  const { signIn } = useContext(AuthContext);

  const otpValidation = yup.object({ otpCode: yup.string().required().length(6) });

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", () => {
      return true;
    });

    return () => {
      BackHandler.removeEventListener("hardwareBackPress", backButtonHandler);
    };
  }, [backButtonHandler]);

  return (
    <SafeAreaView style={Layout.contentVerticalContainer}>
      <View>
        <Text style={pageStyle.sectionLabel}>Enter OTP</Text>
        <Text style={pageStyle.smalltext}>We have sent an OTP to your email address.</Text>
      </View>
      <Formik
        initialValues={{
          otpCode: "",
        }}
        validationSchema={otpValidation}
        onSubmit={async (values, actions) => {
          Keyboard.dismiss();
          actions.resetForm();
          const tempData = await AsyncStorage.getItem("otpData");
          // console.log(tempData);
          const otpData = JSON.parse(tempData);
          if (otpData != null) {
            //check values.otp against your database
            if (otpData.data.otpType == "signup") {
              // otpData sent from signup page, do your registration process here
            }
            // continue to auto login users after otp process

            signIn("your_token_string");
          } else {
            Alert.alert("Validation Failed", "Failde to validate OTP");
            return;
          }
        }}
      >
        {(props) => (
          <>
            <View style={pageStyle.otpContainer}>
              <TextInput
                onChangeText={props.handleChange("otpCode")}
                value={props.values.otpCode}
                onBlur={props.handleBlur("otpCode")}
                style={Inputs.textInputCenter}
              />
              <Text style={Inputs.inputDangerDescription}>
                {props.touched.otpCode && props.errors.otpCode}
              </Text>
            </View>
            <Button Title={"VALIDATE"} btnStyle={"primary"} onPress={props.handleSubmit} />
          </>
        )}
      </Formik>
    </SafeAreaView>
  );
};

const pageStyle = StyleSheet.create({
  otpContainer: {
    flex: 1,
    marginTop: 40,
  },
  sectionLabel: {
    marginTop: 10,
    fontWeight: "700",
    fontSize: 16,
    textAlign: "center",
    color: "#607D8B",
  },
  smalltext: {
    marginTop: 5,
    fontSize: 12,
    color: "#607D8B",
    textAlign: "center",
  },
});
