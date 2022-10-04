import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";

const FrameComponent = () => {
  return (
    <View style={[styles.frameView, styles.mt12]}>
      <View style={styles.gamingView}>
        <Text style={styles.text}>Gaming</Text>
        <Image
          style={styles.electronics06Icon}
          resizeMode="cover"
          source={require("../assets/electronics-061.png")}
        />
      </View>
      <View style={[styles.lingerieView, styles.ml9]}>
        <Text style={styles.text1}>Lingerie</Text>
        <Image
          style={styles.ulianaKopanytsiaHjZwhXuRf3QIcon}
          resizeMode="cover"
        />
      </View>
      <View style={[styles.footWearsView, styles.ml9]}>
        <Text style={styles.text2}>Shoes</Text>
        <Image
          style={styles.fashion06Icon}
          resizeMode="cover"
          source={require("../assets/fashion-06.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml9: {
    marginLeft: 9,
  },
  text: {
    position: "absolute",
    top: 20,
    right: 18,
    left: 18,
    fontSize: 18,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: "Outfit",
    color: "#333",
    textAlign: "left",
  },
  electronics06Icon: {
    position: "absolute",
    transform: [
      {
        translateY: -14.5,
      },
      {
        translateX: -45.5,
      },
    ],
    top: "50%",
    left: "50%",
    width: 90,
    height: 70,
  },
  gamingView: {
    position: "relative",
    borderRadius: 10,
    backgroundColor: "#ffa58e",
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
  },
  text1: {
    position: "absolute",
    top: 20,
    right: 18,
    left: 17,
    fontSize: 18,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: "Outfit",
    color: "#333",
    textAlign: "left",
  },
  ulianaKopanytsiaHjZwhXuRf3QIcon: {
    position: "absolute",
    top: 38,
    left: 4,
    width: 95,
    height: 119,
  },
  lingerieView: {
    position: "relative",
    borderRadius: 10,
    backgroundColor: "#dcf9cb",
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
  text2: {
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
  fashion06Icon: {
    position: "absolute",
    transform: [
      {
        translateY: -16.5,
      },
      {
        translateX: -56.5,
      },
    ],
    top: "50%",
    left: "50%",
    width: 104.52,
    height: 76.79,
  },
  footWearsView: {
    position: "relative",
    borderRadius: 10,
    backgroundColor: "#ffda80",
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
  },
  frameView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default FrameComponent;
