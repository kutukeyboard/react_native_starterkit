import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import SettingPage from "../settings/settingPage";
import ProfilePage from "../settings/profilePage";

const Stack = createStackNavigator();

export default SettingContainer = (AuthContext) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Setting" options={{ headerShown: false }}>
        {(props) => <SettingPage {...props} {...AuthContext} />}
      </Stack.Screen>
      <Stack.Screen name="Profile" component={ProfilePage} />
    </Stack.Navigator>
  );
};
