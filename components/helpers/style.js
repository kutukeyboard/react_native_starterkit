import { StyleSheet } from "react-native";

export const Colors = {
  textColor: "#333",
  bgDark: "#666",
  primaryColor: "#1A73E8",
  secondaryColor: "#455A64",
  thirdColor: "#607D8B",
  lightColor: "#BBD7EA",
  bgColor: "#fff",
  successColor: "#25AE88",
  dangerColor: "#D75A4A",
  warningColor: "#EBBA16",
};

const baseButton = {
  borderRadius: 25,
  padding: 15,
};

const baseButtonOutline = {
  borderWidth: 1,
  padding: 15,
  borderRadius: 20,
};

const darkLabel = {
  color: Colors.bgColor,
  fontWeight: "500",
};

const baseTextInput = {
  borderBottomWidth: 1,
  paddingBottom: 1,
  textAlignVertical: "top",
};

const normalLabel = {
  color: Colors.thirdColor,
  fontWeight: "500",
};

const dangerLabel = {
  color: Colors.dangerColor,
  fontWeight: "500",
};

const boldLabel = {
  color: Colors.thirdColor,
  fontWeight: "700",
};

const baseContainer = {
  flex: 1,
  padding: 15,
};
const RowContainer = {
  flexDirection: "row",
  justifyContent: "flex-start",
  flexWrap: "wrap",
};

export const Layout = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: Colors.BgColor,
  },
  contentContainer: {
    ...baseContainer,
  },

  contentVerticalContainer: {
    ...baseContainer,
    justifyContent: "space-between",
  },
  pageHeaderContainer: {
    ...RowContainer,
    padding: 10,
  },
  moduleGroupContainer: {
    ...RowContainer,
  },

  switchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
});

export const Inputs = StyleSheet.create({
  textInput: {
    ...baseTextInput,
    borderBottomColor: Colors.lightColor,
  },
  textInputCenter: {
    ...baseTextInput,
    borderBottomColor: Colors.lightColor,
    textAlign: "center",
  },
  inputDescription: {
    ...normalLabel,
    fontSize: 10,
    marginTop: 2,
  },
  inputDangerDescription: {
    ...dangerLabel,
    fontSize: 10,
    marginTop: 2,
    marginBottom: 2,
  },
});

export const Buttons = StyleSheet.create({
  btnPrimary: {
    ...baseButton,
    backgroundColor: Colors.primaryColor,
  },
  btnPrimaryText: {
    color: Colors.bgColor,
    textAlign: "center",
  },
});
