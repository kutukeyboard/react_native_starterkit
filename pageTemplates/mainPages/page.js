import React from "react";
import { View, Text } from "react-native";

export default PageTemplate = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
      }}
    >
      <Text>Home Screen</Text>
    </View>
  );
};
