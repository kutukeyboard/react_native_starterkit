import React from "react";
import { SafeAreaView, StyleSheet, TouchableOpacity, View, Text, FlatList } from "react-native";

import { Colors, Layout, Labels } from "../../components/helpers/style";

import Icon from "react-native-vector-icons/FontAwesome5";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

function Item({ title }) {
  return (
    <TouchableOpacity style={pageStyle.item}>
      <Text style={pageStyle.title}>{title}</Text>
    </TouchableOpacity>
  );
}

export default TemplatePage = () => {
  return (
    <SafeAreaView style={Layout.pageContainer}>
      <View style={Layout.pageHeaderContainer}>
        <Icon name="th-large" size={20} color={Colors.primaryColor} />
        <Text style={Labels.pageHeaderText}>Templates</Text>
      </View>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
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
});
