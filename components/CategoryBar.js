import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";

const CategoryBar = ({ text }) => {
  return (
    <View style={styles.booksView}>
      <Text style={styles.text}>{text}</Text>
      <Image style={styles.book02Icon} resizeMode="cover" />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    position: "absolute",
    top: 20,
    right: 27,
    left: 26,
    fontSize: 18,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: "Outfit",
    color: "#333",
    textAlign: "left",
  },
  book02Icon: {
    position: "absolute",
    transform: [
      {
        translateY: -21.5,
      },
      {
        translateX: -31.5,
      },
    ],
    top: "50%",
    left: "50%",
    width: 62,
    height: 89.24,
  },
  booksView: {
    position: "relative",
    borderRadius: 10,
    backgroundColor: "#e8c3e3",
    shadowColor: "rgba(0, 0, 0, 0.04)",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    width: 103,
    height: 139,
    flexShrink: 0,
    overflow: "hidden",
  },
});

export default CategoryBar;
