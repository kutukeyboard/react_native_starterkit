import * as React from "react";
import { StyleSheet, View } from "react-native";

const SetSpacer = (value) => {
  const ret = StyleSheet.create({
    space: {
      marginTop: value.top,
      marginBottom: value.bottom,
      marginLeft: value.left,
      marginRight: value.right,
    },
  });
  return ret.space;
};

export default Spacer = (props) => {
  return <View style={SetSpacer(props)} />;
};
