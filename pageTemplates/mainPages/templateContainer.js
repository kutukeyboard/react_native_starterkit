import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import TemplatePage from "../templates/templatePage";

const Stack = createStackNavigator();

export default TemplateContainer = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Template" component={TemplatePage} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};
