import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, TouchableOpacity, View, Text, FlatList } from "react-native";

import { Colors, Layout } from "../../components/helpers/style";

import { useNavigation } from "@react-navigation/native";

export default InboxPage = () => {
  const navigation = useNavigation();
  const [messageData, setMessageData] = useState();

  const getMessage = () => {
    //get user data via your API here

    setMessageData([
      {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        from: "Joseph Kent",
        subject: "Meeting schedule",
        reciveDate: "2020-04-01",
        message: "Hi, lets meet on monday morning.",
      },
      {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        from: "Cindy Crow",
        subject: "Project Alpha",
        reciveDate: "2020-04-02",
        message: "The project will start sooner than we thought, will update you later.",
      },
      {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        from: "Samuel Jin",
        subject: "Thanks for the gift",
        reciveDate: "2020-04-02",
        message: "Its a nice gift, thank you so much.",
      },
    ]);
  };

  useEffect(() => {
    getMessage();
  }, []);

  const Item = (data) => {
    return (
      <TouchableOpacity
        style={pageStyle.item}
        onPress={() => navigation.navigate("MessageDetail", { messageId: data.id })}
      >
        <View style={pageStyle.messageHeader}>
          <Text style={pageStyle.messageFrom}>{data.from}</Text>
          <Text style={pageStyle.dateText}>{data.reciveDate}</Text>
        </View>
        <Text style={pageStyle.subject}>{data.subject}</Text>
        <Text style={pageStyle.message}>{data.message}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={Layout.pageContainer}>
      <FlatList
        data={messageData}
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
  messageHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  messageFrom: {
    fontSize: 16,
    fontWeight: "700",
  },
  subject: {
    fontSize: 14,
  },
  message: {
    fontSize: 10,
  },
  dateText: {
    fontSize: 8,
  },
});
