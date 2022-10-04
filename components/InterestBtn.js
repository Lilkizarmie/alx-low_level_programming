import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

const InterestBtn = () => {
  return (
    <View style={styles.buttonView}>
      <View style={styles.baseView} />
      <Image
        style={styles.iconsArrowsarrowLongRight}
        resizeMode="cover"
        source={require("../assets/iconsarrowsarrowlongright.png")}
      />
      <Text style={styles.text}>Continue</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  baseView: {
    position: "absolute",
    height: "100%",
    top: "0%",
    right: 0,
    bottom: "0%",
    left: 0,
    borderRadius: 6,
    backgroundColor: "#171717",
  },
  iconsArrowsarrowLongRight: {
    position: "absolute",
    transform: [
      {
        translateY: -12,
      },
    ],
    top: "50%",
    right: 16,
    width: 24,
    height: 24,
  },
  text: {
    position: "absolute",
    transform: [
      {
        translateY: -10,
      },
    ],
    top: "50%",
    right: 118,
    left: 119,
    fontSize: 12,
    letterSpacing: 1,
    lineHeight: 20,
    textTransform: "uppercase",
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#fff",
    textAlign: "center",
  },
  buttonView: {
    position: "absolute",
    top: 729,
    left: 35,
    width: 305,
    height: 44,
  },
});

export default InterestBtn;
