import * as React from "react";
import { StyleSheet, View, Image } from "react-native";

const NarrowBox = () => {
  return (
    <View style={styles.checkboxView}>
      <View style={styles.unselectedView}>
        <View style={styles.checkboxBackgroundView} />
      </View>
      <View style={styles.selectedView}>
        <View style={styles.checkboxBackgroundView1} />
        <Image
          style={styles.outline24pxCheck}
          resizeMode="cover"
          source={require("../assets/outline-24px--check.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  checkboxBackgroundView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: "#a6a6aa",
    borderWidth: 1,
    width: 24,
    height: 24,
  },
  unselectedView: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 24,
    height: 24,
  },
  checkboxBackgroundView1: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 3,
    backgroundColor: "#a6a6aa",
    width: 24,
    height: 24,
  },
  outline24pxCheck: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  selectedView: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 24,
    height: 24,
    display: "none",
  },
  checkboxView: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 24,
    height: 24,
  },
});

export default NarrowBox;
