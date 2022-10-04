import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import GetStarted from "../components/GetStarted";
import SkipBtn from "../components/SkipBtn";

const Onboarding1 = () => {
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
          Shop from the comfort of your home. From start to finish we do it all.
          We shop, ship and deliver to your doorstep.
        </Text>
        <Text style={styles.welcomeToCaStore}>We do everything for you</Text>
      </View>
      <SkipBtn />
      <Image
        style={styles.inNoTimeAmico1}
        resizeMode="cover"
        source={require("../assets/in-no-timeamico-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleView: {
    position: "relative",
    borderRadius: 2.5,
    backgroundColor: "#8f92a1",
    width: 8,
    height: 5,
    flexShrink: 0,
    opacity: 0.2,
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
    backgroundColor: "#f2b51d",
    width: 16,
    height: 5,
    flexShrink: 0,
  },
  indicatorView: {
    position: "absolute",
    top: 490,
    left: 164,
    width: 48,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  withLongExperience: {
    position: "absolute",
    height: "38.3%",
    width: "93.44%",
    top: "25.53%",
    right: "3.28%",
    bottom: "36.17%",
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
    width: "88.85%",
    top: "50%",
    right: "5.57%",
    left: "5.57%",
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
  inNoTimeAmico1: {
    position: "absolute",
    top: 151,
    left: 30,
    width: 315,
    height: 315,
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

export default Onboarding1;
