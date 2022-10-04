import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const CustomKeybtn = () => {
  return (
    <View style={styles.keyboardsNumberView}>
      <View style={styles.baseView} />
      <Text style={styles.text}>1</Text>
      <Text style={styles.text1}>2</Text>
      <Text style={styles.text2}>3</Text>
      <Text style={styles.text3}>4</Text>
      <Text style={styles.text4}>5</Text>
      <Text style={styles.text5}>6</Text>
      <Text style={styles.text6}>7</Text>
      <Text style={styles.text7}>8</Text>
      <Text style={styles.text8}>9</Text>
      <Text style={styles.text9}>0</Text>
      <Image
        style={styles.icon}
        resizeMode="cover"
        source={require("../assets/icon.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  baseView: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: "#fff",
  },
  text: {
    position: "absolute",
    transform: [
      {
        translateY: -106,
      },
    ],
    width: "22.67%",
    top: "50%",
    right: "68%",
    left: "9.33%",
    fontSize: 24,
    letterSpacing: -0.2,
    lineHeight: 34,
    fontWeight: "500",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "center",
  },
  text1: {
    position: "absolute",
    transform: [
      {
        translateY: -106,
      },
    ],
    width: "22.67%",
    top: "50%",
    right: "38.67%",
    left: "38.67%",
    fontSize: 24,
    letterSpacing: -0.2,
    lineHeight: 34,
    fontWeight: "500",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "center",
  },
  text2: {
    position: "absolute",
    transform: [
      {
        translateY: -106,
      },
    ],
    width: "22.67%",
    top: "50%",
    right: "9.33%",
    left: "68%",
    fontSize: 24,
    letterSpacing: -0.2,
    lineHeight: 34,
    fontWeight: "500",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "center",
  },
  text3: {
    position: "absolute",
    transform: [
      {
        translateY: -40,
      },
    ],
    width: "22.67%",
    top: "50%",
    right: "68%",
    left: "9.33%",
    fontSize: 24,
    letterSpacing: -0.2,
    lineHeight: 34,
    fontWeight: "500",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "center",
  },
  text4: {
    position: "absolute",
    transform: [
      {
        translateY: -40,
      },
    ],
    width: "22.67%",
    top: "50%",
    right: "38.67%",
    left: "38.67%",
    fontSize: 24,
    letterSpacing: -0.2,
    lineHeight: 34,
    fontWeight: "500",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "center",
  },
  text5: {
    position: "absolute",
    transform: [
      {
        translateY: -40,
      },
    ],
    width: "22.67%",
    top: "50%",
    right: "9.33%",
    left: "68%",
    fontSize: 24,
    letterSpacing: -0.2,
    lineHeight: 34,
    fontWeight: "500",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "center",
  },
  text6: {
    position: "absolute",
    transform: [
      {
        translateY: 26,
      },
    ],
    width: "22.67%",
    top: "50%",
    right: "68%",
    left: "9.33%",
    fontSize: 24,
    letterSpacing: -0.2,
    lineHeight: 34,
    fontWeight: "500",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "center",
  },
  text7: {
    position: "absolute",
    transform: [
      {
        translateY: 26,
      },
    ],
    width: "22.67%",
    top: "50%",
    right: "38.67%",
    left: "38.67%",
    fontSize: 24,
    letterSpacing: -0.2,
    lineHeight: 34,
    fontWeight: "500",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "center",
  },
  text8: {
    position: "absolute",
    transform: [
      {
        translateY: 26,
      },
    ],
    width: "22.67%",
    top: "50%",
    right: "9.33%",
    left: "68%",
    fontSize: 24,
    letterSpacing: -0.2,
    lineHeight: 34,
    fontWeight: "500",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "center",
  },
  text9: {
    position: "absolute",
    transform: [
      {
        translateY: 88,
      },
    ],
    width: "22.67%",
    top: "50%",
    right: "38.67%",
    left: "38.67%",
    fontSize: 24,
    letterSpacing: -0.2,
    lineHeight: 34,
    fontWeight: "500",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "center",
  },
  icon: {
    position: "absolute",
    height: "7.41%",
    width: "6.4%",
    top: "78.7%",
    right: "17.33%",
    bottom: "13.89%",
    left: "76.27%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  keyboardsNumberView: {
    position: "absolute",
    height: "48.8%",
    width: "100%",
    top: "51.2%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
});

export default CustomKeybtn;
