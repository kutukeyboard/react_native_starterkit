import React, { useContext } from "react";
import { SafeAreaView, View, Text, Image, StyleSheet, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Icon from "react-native-vector-icons/FontAwesome5";

import { Colors, Layout, Graphics, Labels } from "../../components/helpers/style";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

export default SettingPage = (AuthContext) => {
  const { signOut } = useContext(AuthContext);
  const navigation = useNavigation();
  const myImage = "../../images/profile.jpg";
  return (
    <SafeAreaView style={Layout.pageContainer}>
      <View style={Layout.pageHeaderContainer}>
        <Icon name="cog" size={20} color={Colors.primaryColor} />
        <Text style={Labels.pageHeaderText}>Settings</Text>
      </View>
      <ScrollView style={Layout.contentContainer}>
        <TouchableOpacity
          style={Layout.moduleGroupContainer}
          onPress={() => navigation.navigate("Profile")}
        >
          <Image source={require(myImage)} style={Graphics.profilePicture} />
          <Text style={Labels.iconLabel}>Veronica Juan</Text>
        </TouchableOpacity>

        <View style={Layout.devider} />
        <TouchableOpacity style={Layout.moduleGroupContainer}>
          <Icon name="key" size={20} color={Colors.bgDark} />
          <View>
            <Text style={Labels.iconLabel}>Account</Text>
            <Text style={Labels.descriptionLabel}>Privacy, security, billing info</Text>
          </View>
        </TouchableOpacity>
        <View style={Layout.devider} />
        <TouchableOpacity style={Layout.moduleGroupContainer}>
          <Icon name="bell" size={20} color={Colors.bgDark} />
          <View>
            <Text style={Labels.iconLabel}>Notification</Text>
            <Text style={Labels.descriptionLabel}>Message, system alerts</Text>
          </View>
        </TouchableOpacity>
        <View style={Layout.devider} />
        <TouchableOpacity style={Layout.moduleGroupContainer}>
          <Icon name="headset" size={20} color={Colors.bgDark} />
          <View>
            <Text style={Labels.iconLabel}>Help & Support</Text>
            <Text style={Labels.descriptionLabel}>contact support team</Text>
          </View>
        </TouchableOpacity>
        <View style={Layout.devider} />
        <TouchableOpacity
          style={Layout.moduleGroupContainer}
          onPress={() => {
            Alert.alert("Sign Out Confirmation", "Are you sure you want to sign out ?", [
              {
                text: "OK",
                onPress: () => signOut(),
              },
            ]);
          }}
        >
          <Icon name="sign-out-alt" size={20} color={Colors.bgDark} />
          <View>
            <Text style={Labels.iconLabel}>Log out</Text>
            <Text style={Labels.descriptionLabel}>Log out</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};
