import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import colors from "../../colors.json";
import Icon from "react-native-vector-icons/FontAwesome";

const Home = (props) => {
  console.log(props);
  const list = [
    "Recorded classes",
    "Multilingual content",
    "Notes and memory maps ",
    "Lecture PDF's",
    "Doubt solving session",
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.heading} numberOfLines={1}>
        Hello👋,{props.user}
      </Text>
      <View style={styles.text_heading}>
        <Text style={[styles.text_main, { color: colors.green }]}>
          Learning
        </Text>
        <Text style={[styles.text_main, { color: colors.dark }]}>
          {" "}
          online is
        </Text>
        <Text style={[styles.text_main, { color: colors.blue }]}> fun</Text>
      </View>
      <Image
        style={styles.image}
        source={require("../../assets/hero.jpg")}
        resizeMode="cover"
      />
      <Text style={styles.heading}>Welcome to UAcademy</Text>
      <Text style={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
        similique ex vero saepe neque odit ducimus aliquam eligendi beatae, esse
        tempore voluptatem dolores. Sit. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Laboriosam amet qui voluptatem voluptas eveniet
        eligendi assumenda mollitia veritatis rem vel.
      </Text>
      <View style={styles.list}>
        {list.map((item , index) => {
          return (
            <View key={index + "_"+ item} style={styles.list_item}>
              <Icon name="check" color={colors.blue} />
              <Text style={styles.list_text}>{item}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: colors.wheat,
    fontFamily: "Padauk_400Regular",
    minHeight: 1000,
  },
  image: {
    width: "95%",
    aspectRatio: 9 / 4,
    marginHorizontal: "auto",
    height: undefined,
    marginTop: 20,
    borderRadius: 10,
    borderColor: colors.dark,
    borderWidth: 2,
  },
  text_main: {
    fontSize: 20,
    // fontWeight : "bold",
    fontFamily: "Padauk_700Bold",
  },
  text_heading: {
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
  },
  heading: {
    color: colors.blue,
    fontFamily: "Padauk_700Bold",
    fontSize: 40,
    marginTop: 20,
  },
  desc: {
    fontSize: 20,
    color: colors.slate,
    paddingVertical: 10,
    lineHeight: 25,
    marginTop: 15,
    fontFamily: "Padauk_400Regular",
  },
  list: {
  paddingHorizontal : 20,
  },
  list_item: {
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection : "row",
    display: "flex",
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: colors.blue,
  },
  list_text : {
    color : colors.blue,
    marginLeft : 10,
    fontFamily : "Padauk_700Bold"
  }
});
