import * as React from "react";
import { Text, StyleSheet, View } from "react-native";

const SplashScreen = () => {
  return (
    <View style={styles.splashScreenView}>
      <Text style={styles.konixText}>Konix</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  konixText: {
    position: "absolute",
    top: 374,
    left: 101,
    fontSize: 60,
    letterSpacing: -0.2,
    fontStyle: "italic",
    fontWeight: "900",
    fontFamily: "Playfair Display",
    color: "#000",
    textAlign: "left",
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
  },
  splashScreenView: {
    position: "relative",
    backgroundColor: "#f3f6f8",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default SplashScreen;
