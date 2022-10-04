import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const EnterInterests1 = () => {
  return (
    <View style={styles.enterInterestsView}>
      <Text style={styles.customizingYourPerfectFeed}>
        Customizing your perfect feed
      </Text>
      <View style={styles.groupView}>
        <View style={styles.rectangleView} />
        <View style={styles.rectangleView1} />
      </View>
      <Image
        style={styles.groupIcon}
        resizeMode="cover"
        source={require("../assets/group-6855.png")}
      />
      <Image
        style={styles.checkIcon}
        resizeMode="cover"
        source={require("../assets/check.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  customizingYourPerfectFeed: {
    position: "absolute",
    top: 414,
    left: 70,
    fontSize: 18,
    letterSpacing: -0.8,
    lineHeight: 32,
    fontWeight: "500",
    fontFamily: "DM Sans",
    color: "#000",
    textAlign: "center",
  },
  rectangleView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 12,
    backgroundColor: "#f3f6f8",
    width: 280,
    height: 8,
  },
  rectangleView1: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 12,
    backgroundColor: "#ffd15c",
    width: 129,
    height: 8,
  },
  groupView: {
    position: "absolute",
    top: 462,
    left: 48,
    width: 280,
    height: 8,
  },
  groupIcon: {
    position: "absolute",
    height: "6.9%",
    width: "14.93%",
    top: "42.12%",
    right: "42.4%",
    bottom: "50.99%",
    left: "42.67%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  checkIcon: {
    position: "absolute",
    height: "4.43%",
    width: "9.6%",
    top: "43.35%",
    right: "45.07%",
    bottom: "52.22%",
    left: "45.33%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  enterInterestsView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default EnterInterests1;
