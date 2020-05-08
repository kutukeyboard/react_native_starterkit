import { StyleSheet } from "react-native";
import { round } from "react-native-reanimated";

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
  padding: 20,
};
const RowContainer = {
  flexDirection: "row",
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
  ProfilePictureContainer: {
    ...baseContainer,
    alignSelf: "center",
    alignItems: "center",
    width: 100,
  },
  profilePictureEditIcon: {
    position: "absolute",
    zIndex: 99,
    top: 90,
    left: 80,
  },
  contentVerticalContainer: {
    ...baseContainer,
    justifyContent: "space-between",
  },
  pageHeaderContainer: {
    ...RowContainer,
    justifyContent: "flex-start",
    padding: 10,
  },
  moduleGroupContainer: {
    ...RowContainer,
    marginTop: 20,
    marginBottom: 20,
    alignItems: "center",
  },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  devider: {
    borderWidth: 0.3,
    borderColor: Colors.secondaryColor,
  },
});

export const Graphics = StyleSheet.create({
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  profilePictureLarge: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  moduleIcon: {
    backgroundColor: Colors.bgDark,
    margin: "auto",
  },
});

export const Labels = StyleSheet.create({
  pageHeaderText: {
    ...normalLabel,
    marginLeft: 5,
    fontSize: 14,
  },
  sectionLabel: {
    ...boldLabel,
    fontSize: 14,
  },
  iconLabel: {
    ...boldLabel,
    fontSize: 14,
    marginLeft: 10,
  },
  descriptionLabel: {
    ...normalLabel,
    fontSize: 10,
    marginTop: 2,
    marginLeft: 10,
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
