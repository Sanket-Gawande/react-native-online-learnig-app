import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import colors from "../../colors.json";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";

const Navigation = () => {
  const navigation = useNavigation();
  function goto(route) {
    navigation.navigate(route);
  }
  return (
    <View style={styles.navigation}>
      {[
        { icon: "home", route: "Home" },
        { icon: "book", route: "Courses" },
        { icon: "chalkboard-teacher", route: "Faculties" },
        { icon: "user-circle", route: "Account" },
      ].map((item, index) => {
        return (
          <TouchableOpacity
            key={index}
            style={styles.navigation_link}
            onPress={() => goto(item.route)}
          >
            <Icon name={item.icon} color={colors.blue} size={20} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
  
};

export default Navigation;

const styles = StyleSheet.create({
  navigation: {
    padding: 15,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,
    shadowColor: "#aaa",
    borderRadius: 20,
    marginHorizontal:"auto",
    
  },
  navigation_link: {
    width: 50,
    height: 50,
    borderRadius: 50,
    color: colors.green,
    marginHorizontal: 25,
    backgroundColor: "#eee",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
