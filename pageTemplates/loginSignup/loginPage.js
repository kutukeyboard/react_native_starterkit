import React, { useContext } from "react";
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

import { Colors } from "../../components/helpers/style";

import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-community/async-storage";

export default LoginPage = () => {
  const navigation = useNavigation();

  const loginValidation = yup.object({
    email: yup.string().required().min(3).max(255),
    password: yup.string().required().min(3).max(255),
  });

  const getOtpCode = async (props) => {
    //get your otp code using your API here
    const otpCode = 111111;
    return otpCode;
  };

  return (
    <SafeAreaView style={pageStyle.container}>
      <View>
        <Image source={require("../../images/logo.png")} style={pageStyle.loginImage} />
        <Text style={pageStyle.headerText}>Welcome to My APP</Text>
      </View>
      <View>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={loginValidation}
          onSubmit={async (values, actions) => {
            Keyboard.dismiss();
            actions.resetForm();
            const otpCode = await getOtpCode(values);
            if (otpCode != null) {
              const otpData = JSON.stringify({
                otpType: "login",
                data: values,
              });
              AsyncStorage.setItem("otpData", otpData);
              navigation.navigate("Otp");
            } else {
              // handle otp request failed here
              Alert.alert("Something wrong", "OTP Request Failed");
              return;
            }
          }}
        >
          {(props) => (
            <>
              <TextInput
                placeholder="Email Address"
                onChangeText={props.handleChange("email")}
                value={props.values.email}
                onBlur={props.handleBlur("email")}
                style={pageStyle.loginInput}
                keyboardType="email-address"
              />
              <Text style={pageStyle.errorLabel}>{props.touched.email && props.errors.email}</Text>
              <TextInput
                placeholder="Password"
                onChangeText={props.handleChange("password")}
                value={props.values.password}
                onBlur={props.handleBlur("password")}
                style={pageStyle.loginInput}
                secureTextEntry
              />
              <Text style={pageStyle.errorLabel}>
                {props.touched.password && props.errors.password}
              </Text>
              <Button Title={"LOGIN"} btnStyle={"primary"} onPress={props.handleSubmit} />
            </>
          )}
        </Formik>
      </View>
      <TouchableOpacity
        style={pageStyle.signupButton}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Text style={pageStyle.SignupText}>Dont have account yet ? </Text>
        <Text style={pageStyle.SignupTextBold}>SIGN UP</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const pageStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondaryColor,
    padding: 40,
    justifyContent: "space-between",
  },
  loginImage: {
    width: 100,
    height: 100,
    marginBottom: 20,
    alignSelf: "center",
  },
  headerText: {
    textAlign: "center",
    fontSize: 16,
    color: Colors.bgColor,
  },
  loginInput: {
    backgroundColor: Colors.thirdColor,
    borderRadius: 25,
    paddingLeft: 30,
    paddingTop: 10,
    paddingBottom: 10,
    color: Colors.textColor,
  },
  signupButton: {
    flexDirection: "row",
    justifyContent: "center",
  },
  SignupText: {
    color: Colors.bgColor,
    fontWeight: "300",
  },
  SignupTextBold: {
    color: Colors.bgColor,
    fontWeight: "700",
  },
  errorLabel: {
    color: Colors.bgColor,
    fontSize: 12,
    marginTop: 2,
    marginBottom: 10,
    marginLeft: 20,
  },
});
