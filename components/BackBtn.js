import * as React from "react";
import { Image, StyleSheet } from "react-native";

const BackBtn = () => {
  return (
    <Image
      style={styles.iconsArrowsarrowLongLeft}
      resizeMode="cover"
      source={require("../assets/-icon--l1.png")}
    />
  );
};

const styles = StyleSheet.create({
  iconsArrowsarrowLongLeft: {
    position: "absolute",
    transform: [
      {
        translateY: -377,
      },
    ],
    top: "50%",
    left: 27,
    width: 24,
    height: 24,
  },
});

export default BackBtn;
