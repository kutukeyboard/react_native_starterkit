import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import TemplatePage from "../templates/templatePage";
import InboxPage from "../templates/inboxPage";
import MessageDetail from "../templates/messageDetail";
import CatalogPage from "../templates/catalogPage";
import ProductDetailPage from "../templates/productDetailPage";

const Stack = createStackNavigator();

export default TemplateContainer = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Template" component={TemplatePage} options={{ headerShown: false }} />
      <Stack.Screen name="Inbox" component={InboxPage} />
      <Stack.Screen name="MessageDetail" component={MessageDetail} />
      <Stack.Screen name="Catalog" component={CatalogPage} />
      <Stack.Screen name="ProductDetail" component={ProductDetailPage} />
    </Stack.Navigator>
  );
};
