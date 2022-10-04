import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import GetStarted from "../components/GetStarted";
import SkipBtn from "../components/SkipBtn";

const Onboarding = () => {
  return (
    <View style={styles.onboardingView}>
      <View style={styles.indicatorView}>
        <View style={styles.rectangleView} />
        <View style={styles.rectangleView1} />
        <View style={styles.rectangleView2} />
      </View>
      <View style={styles.contentView}>
        <GetStarted />
        <Text style={styles.withLongExperience}>
          Shop premium luxury items with ease from all your favorite brands
          across the globe.
        </Text>
        <Text style={styles.welcomeToCaStore}>Point and Kill</Text>
      </View>
      <SkipBtn />
      <Image
        style={styles.onlineShoppingPana1}
        resizeMode="cover"
        source={require("../assets/online-shoppingpana-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleView: {
    position: "relative",
    borderRadius: 2.5,
    backgroundColor: "#f2b51d",
    width: 16,
    height: 5,
    flexShrink: 0,
  },
  rectangleView1: {
    position: "relative",
    borderRadius: 2.5,
    backgroundColor: "#8f92a1",
    width: 8,
    height: 5,
    flexShrink: 0,
    opacity: 0.2,
  },
  rectangleView2: {
    position: "relative",
    borderRadius: 2.5,
    backgroundColor: "#8f92a1",
    width: 8,
    height: 5,
    flexShrink: 0,
    opacity: 0.2,
  },
  indicatorView: {
    position: "absolute",
    top: 490,
    left: 163,
    width: 48,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  withLongExperience: {
    position: "absolute",
    height: "25.53%",
    width: "93.44%",
    top: "25.53%",
    right: "3.28%",
    bottom: "48.94%",
    left: "3.28%",
    fontSize: 14,
    letterSpacing: -0.4,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "center",
    opacity: 0.6,
  },
  welcomeToCaStore: {
    position: "absolute",
    transform: [
      {
        translateY: -94,
      },
    ],
    width: "45.57%",
    top: "50%",
    right: "27.21%",
    left: "27.21%",
    fontSize: 24,
    letterSpacing: -0.8,
    lineHeight: 32,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "center",
  },
  contentView: {
    position: "absolute",
    height: "23.15%",
    width: "81.33%",
    top: "68.23%",
    right: "9.33%",
    bottom: "8.62%",
    left: "9.33%",
  },
  onlineShoppingPana1: {
    position: "absolute",
    top: 194,
    left: 30,
    width: 315,
    height: 238,
    overflow: "hidden",
  },
  onboardingView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Onboarding;
