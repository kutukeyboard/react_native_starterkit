import React, { useEffect, createContext, useReducer, useMemo } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginPage from "./pageTemplates/loginSignup/loginPage";
import SignupPage from "./pageTemplates/loginSignup/signupPage";
import OTPPage from "./pageTemplates/loginSignup/otpPage";

import HomeContainer from "./pageTemplates/mainPages/homeContainer";

import AsyncStorage from "@react-native-community/async-storage";

const Stack = createStackNavigator();
const AuthContext = createContext();

const reducer = (prevState, action) => {
  switch (action.type) {
    case "RESTORE_TOKEN":
      return {
        ...prevState,
        userToken: action.token,
        isLoading: false,
      };
    case "SIGN_IN":
      return {
        ...prevState,
        isSignout: false,
        userToken: action.token,
      };
    case "SIGN_OUT":
      return {
        ...prevState,
        isSignout: true,
        userToken: null,
      };
  }
};

export default App = () => {
  const [state, dispatch] = useReducer(reducer, {
    isLoading: true,
    isSignout: false,
    userToken: null,
  });

  const bootstrapAsync = async () => {
    let userToken;

    //for testing, to reset login state, uncomment code below
    // AsyncStorage.removeItem("userToken");

    try {
      userToken = await AsyncStorage.getItem("userToken");
    } catch (e) {}
    dispatch({ type: "RESTORE_TOKEN", token: userToken });
  };

  useEffect(() => {
    bootstrapAsync();
  }, []);

  const authContext = useMemo(
    () => ({
      signIn: async (data) => {
        AsyncStorage.setItem("userToken", data);
        dispatch({ type: "SIGN_IN", token: data });
      },
      signOut: () => dispatch({ type: "SIGN_OUT" }),
    }),
    []
  );

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTitleStyle: { fontSize: 16 },
            headerTitleAlign: "center",
            headerTintColor: "#607D8B",
            headerStyle: { height: 40 },
            animationEnabled: false,
          }}
        >
          {state.userToken != null ? (
            <Stack.Screen name="Home" component={HomeContainer} options={{ headerShown: false }} />
          ) : (
            <>
              <Stack.Screen name="Login" options={{ headerShown: false }}>
                {() => <LoginPage />}
              </Stack.Screen>

              <Stack.Screen name="SignUp" options={{ title: "SIGN UP" }}>
                {() => <SignupPage />}
              </Stack.Screen>

              <Stack.Screen name="Otp" options={{ headerShown: false }}>
                {() => <OTPPage {...AuthContext} />}
              </Stack.Screen>
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
};
