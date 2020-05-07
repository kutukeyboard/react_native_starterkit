import React from "react";
import { SafeAreaView, View, Text, TextInput, Keyboard, Alert } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigation } from "@react-navigation/native";

import Button from "../../components/custom/button";
import Spacer from "../../components/custom/spacer";
import { Inputs, Layout } from "../../components/helpers/style";
import { ScrollView } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-community/async-storage";

export default SignupPage = () => {
  const navigation = useNavigation();

  const signupValidation = yup.object({
    firstName: yup.string().required().min(3).max(50),
    lastName: yup.string().required().min(3).max(50),
    email: yup.string().required().min(3).max(255),
    password: yup.string().required().min(3).max(255),
    phoneNumber: yup.string().min(10).max(20),
  });

  const getOtpCode = async (props) => {
    //get your otp code using your API here
    const otpCode = 111111;
    return otpCode;
  };

  return (
    <SafeAreaView style={Layout.contentContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            phoneNumber: "",
          }}
          validationSchema={signupValidation}
          onSubmit={async (values, actions) => {
            Keyboard.dismiss();
            actions.resetForm();
            const otpCode = await getOtpCode(values);

            if (otpCode != null) {
              const otpData = JSON.stringify({
                otpType: "signup",
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
            <View>
              <TextInput
                placeholder="First Name"
                onChangeText={props.handleChange("firstName")}
                value={props.values.firstName}
                onBlur={props.handleBlur("firstName")}
                style={Inputs.textInput}
              />
              <Text style={Inputs.inputDangerDescription}>
                {props.touched.firstName && props.errors.firstName}
              </Text>
              <TextInput
                placeholder="Last Name"
                onChangeText={props.handleChange("lastName")}
                value={props.values.lastName}
                onBlur={props.handleBlur("lastName")}
                style={Inputs.textInput}
              />
              <Text style={Inputs.inputDangerDescription}>
                {props.touched.lastName && props.errors.lastName}
              </Text>
              <TextInput
                placeholder="Email Address"
                onChangeText={props.handleChange("email")}
                value={props.values.email}
                onBlur={props.handleBlur("email")}
                style={Inputs.textInput}
                keyboardType="email-address"
              />
              <Text style={Inputs.inputDangerDescription}>
                {props.touched.email && props.errors.email}
              </Text>
              <TextInput
                placeholder="Password"
                onChangeText={props.handleChange("password")}
                value={props.values.password}
                onBlur={props.handleBlur("password")}
                style={Inputs.textInput}
                secureTextEntry
              />
              <Text style={Inputs.inputDangerDescription}>
                {props.touched.password && props.errors.password}
              </Text>
              <TextInput
                placeholder="Phone Number"
                onChangeText={props.handleChange("phoneNumber")}
                value={props.values.phoneNumber}
                onBlur={props.handleBlur("phoneNumber")}
                style={Inputs.textInput}
              />
              <Text style={Inputs.inputDangerDescription}>
                {props.touched.phoneNumber && props.errors.phoneNumber}
              </Text>
              <Spacer top={40} bottom={0} left={0} right={0} />
              <Button Title={"SIGN UP"} btnStyle={"primary"} onPress={props.handleSubmit} />
            </View>
          )}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  );
};
