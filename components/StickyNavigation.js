import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const StickyNavigation = () => {
  return (
    <View style={styles.groupView}>
      <View style={styles.activeView}>
        <View style={styles.baseView} />
        <Text style={styles.homeText}>Home</Text>
        <Image
          style={styles.menu1Icon}
          resizeMode="cover"
          source={require("../assets/-menu-1.png")}
        />
      </View>
      <Image
        style={styles.lucidewalletIcon}
        resizeMode="cover"
        source={require("../assets/lucidewallet.png")}
      />
      <Image
        style={styles.store1Icon}
        resizeMode="cover"
        source={require("../assets/store-1.png")}
      />
      <Image
        style={styles.iconsOthershoppingCart}
        resizeMode="cover"
        source={require("../assets/iconsothershoppingcart.png")}
      />
      <Image
        style={styles.menu3Icon}
        resizeMode="cover"
        source={require("../assets/-menu-3.png")}
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
    borderRadius: 20,
    backgroundColor: "#f2b51d",
  },
  homeText: {
    position: "absolute",
    transform: [
      {
        translateY: -9,
      },
    ],
    width: "35.87%",
    top: "50%",
    right: "19.39%",
    left: "44.74%",
    fontSize: 12,
    letterSpacing: -0.6,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
  },
  menu1Icon: {
    position: "absolute",
    height: "60%",
    width: "25%",
    top: "20%",
    right: "62.5%",
    bottom: "20%",
    left: "12.5%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  activeView: {
    position: "absolute",
    height: "100%",
    width: "28.13%",
    top: "0%",
    right: "71.87%",
    bottom: "0%",
    left: "0%",
    overflow: "hidden",
  },
  lucidewalletIcon: {
    position: "absolute",
    height: "60%",
    width: "7.34%",
    top: "20%",
    right: "36.7%",
    bottom: "20%",
    left: "55.96%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  store1Icon: {
    position: "absolute",
    height: "60%",
    width: "7.34%",
    top: "20%",
    right: "55.05%",
    bottom: "20%",
    left: "37.61%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  iconsOthershoppingCart: {
    position: "absolute",
    height: "60%",
    width: "7.34%",
    top: "20%",
    right: "18.35%",
    bottom: "20%",
    left: "74.31%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  menu3Icon: {
    position: "absolute",
    height: "60%",
    width: "7.34%",
    top: "20%",
    right: "0%",
    bottom: "20%",
    left: "92.66%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  groupView: {
    position: "absolute",
    height: "36.36%",
    width: "87.2%",
    top: "21.82%",
    right: "6.4%",
    bottom: "41.82%",
    left: "6.4%",
  },
});

export default StickyNavigation;
