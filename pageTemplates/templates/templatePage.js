import React from "react";
import { SafeAreaView, StyleSheet, TouchableOpacity, View, Text, FlatList } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { Colors, Layout, Labels } from "../../components/helpers/style";

import Icon from "react-native-vector-icons/FontAwesome5";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Inbox Page",
    description: "Simple list page containing inbox messages",
    page: "Inbox",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Product Catalog",
    description: "Product catalog and details",
    page: "CatalogPage",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
    description: "Product catalog and details",
    page: "CatalogPage",
  },
];

export default TemplatePage = () => {
  const navigation = useNavigation();
  const Item = (data) => {
    return (
      <TouchableOpacity style={pageStyle.item} onPress={() => navigation.navigate(data.page)}>
        <Text style={pageStyle.title}>{data.title}</Text>
        <Text style={pageStyle.description}>{data.description}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={Layout.pageContainer}>
      <View style={Layout.pageHeaderContainer}>
        <Icon name="th-large" size={20} color={Colors.primaryColor} />
        <Text style={Labels.pageHeaderText}>Templates</Text>
      </View>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item {...item} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const pageStyle = StyleSheet.create({
  item: {
    backgroundColor: Colors.bgColor,
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 16,
  },
  description: {
    fontSize: 12,
  },
});
