import * as React from "react";
import { TouchableOpacity, Text } from "react-native";
import { Buttons } from "../helpers/style";

const btnStyle = (option, part) => {
  switch (option) {
    case "primary":
      if (part == "button") {
        return Buttons.btnPrimary;
      } else {
        return Buttons.btnPrimaryText;
      }
    case "primaryOutline":
      if (part == "button") {
        return Buttons.btnPrimaryOutline;
      } else {
        return Buttons.btnPrimaryOutlineText;
      }
    case "danger":
      if (part == "button") {
        return Buttons.btnDanger;
      } else {
        return Buttons.btnDangerText;
      }
    case "dangerOutline":
      if (part == "button") {
        return Buttons.btnDangerOutline;
      } else {
        return Buttons.btnDangerOutlineText;
      }
  }
};

export default Button = (props) => {
  return (
    <TouchableOpacity style={btnStyle(props.btnStyle, "button")} onPress={props.onPress}>
      <Text style={btnStyle(props.btnStyle, "text")}>{props.Title}</Text>
    </TouchableOpacity>
  );
};
