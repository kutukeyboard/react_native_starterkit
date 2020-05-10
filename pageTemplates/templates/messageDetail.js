import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, View, Text } from "react-native";

import { Colors, Layout } from "../../components/helpers/style";
import { ScrollView } from "react-native-gesture-handler";

const dummyMessages = [
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
];

export default MessageDetail = ({ route }) => {
  const [messageData, setMessageData] = useState();

  const messageId = route.params.messageId;

  const getMessage = () => {
    // get message from your API here, then insert to messageData variable via setMessageData HOOK

    //code below is just filtering dummy data
    setMessageData(dummyMessages.filter((e) => e.id == messageId)[0]);
  };

  useEffect(() => {
    getMessage();
  }, []);

  return (
    <SafeAreaView style={Layout.pageContainer}>
      <ScrollView style={Layout.contentContainer}>
        {messageData && (
          <>
            <View style={pageStyle.messageHeader}>
              <Text style={pageStyle.messageFrom}>{messageData.from}</Text>
              <Text style={pageStyle.dateText}>{messageData.reciveDate}</Text>
            </View>
            <Text style={pageStyle.subject}>{messageData.subject}</Text>
            <Text style={pageStyle.message}>{messageData.message}</Text>
          </>
        )}
      </ScrollView>
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
