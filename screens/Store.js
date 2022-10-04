import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const Store = () => {
  return (
    <View style={styles.storeView}>
      <Image
        style={styles.image1Icon}
        resizeMode="cover"
        source={require("../assets/image-1.png")}
      />
      <Image
        style={styles.image2Icon}
        resizeMode="cover"
        source={require("../assets/image-2.png")}
      />
      <View style={styles.shopingCartView}>
        <Image
          style={styles.baseIcon}
          resizeMode="cover"
          source={require("../assets/base.png")}
        />
        <View style={styles.groupView}>
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/iconsothershoppingcart.png")}
          />
          <View style={styles.counterBubbleView}>
            <Image
              style={styles.fondIcon}
              resizeMode="cover"
              source={require("../assets/fond.png")}
            />
            <Text style={styles.counterText}>1</Text>
          </View>
        </View>
      </View>
      <View style={styles.frameView}>
        <Image
          style={styles.iconsOtherclose}
          resizeMode="cover"
          source={require("../assets/iconsotherclose1.png")}
        />
        <Image
          style={styles.iconsArrowsarrowLongLeft}
          resizeMode="cover"
          source={require("../assets/-icon--l1.png")}
        />
        <View style={styles.topBarView}>
          <View style={styles.searchView}>
            <View style={styles.lineView} />
            <Text style={styles.placeholderText}>Checkout</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image1Icon: {
    position: "absolute",
    top: 94,
    left: 0,
    width: 376,
    height: 610,
  },
  image2Icon: {
    position: "absolute",
    top: 704,
    left: 0,
    width: 376,
    height: 541,
  },
  baseIcon: {
    position: "absolute",
    top: -8,
    right: -16,
    left: -16,
    maxWidth: "100%",
    overflow: "hidden",
    height: 80,
  },
  icon: {
    position: "absolute",
    top: 6,
    right: 3,
    left: 0,
    maxWidth: "100%",
    overflow: "hidden",
    height: 24,
  },
  fondIcon: {
    position: "absolute",
    transform: [
      {
        translateY: -8,
      },
      {
        translateX: -8,
      },
    ],
    top: "50%",
    left: "50%",
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  counterText: {
    position: "absolute",
    height: "62.5%",
    width: "100%",
    top: "18.75%",
    right: "0%",
    bottom: "18.75%",
    left: "0%",
    fontSize: 8,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#fff",
    textAlign: "center",
  },
  counterBubbleView: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 11,
    height: 16,
  },
  groupView: {
    position: "absolute",
    top: 9,
    right: 10,
    left: 11,
    height: 30,
  },
  shopingCartView: {
    position: "absolute",
    top: 680,
    right: 20,
    left: 307,
    height: 48,
  },
  iconsOtherclose: {
    position: "absolute",
    height: "20.87%",
    width: "6.4%",
    top: "64.35%",
    right: "6.4%",
    bottom: "14.78%",
    left: "87.2%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  iconsArrowsarrowLongLeft: {
    position: "absolute",
    top: 74,
    left: 24,
    width: 24,
    height: 24,
  },
  lineView: {
    position: "absolute",
    height: "100%",
    top: "0%",
    right: 0,
    bottom: "0%",
    left: 0,
    borderRadius: 12,
    backgroundColor: "#27ae60",
  },
  placeholderText: {
    position: "absolute",
    transform: [
      {
        translateY: -10,
      },
    ],
    top: "50%",
    left: 42,
    fontSize: 16,
    letterSpacing: -0.2,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#fff",
    textAlign: "left",
  },
  searchView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 12,
    backgroundColor: "#27ae60",
    width: 156,
    height: 44,
  },
  topBarView: {
    position: "absolute",
    top: 64,
    left: 109,
    width: 156,
    height: 44,
  },
  frameView: {
    position: "absolute",
    top: -36,
    left: -1,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 50,
    elevation: 50,
    shadowOpacity: 1,
    width: 376,
    height: 130,
    overflow: "hidden",
  },
  storeView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 1266,
    overflow: "hidden",
  },
});

export default Store;
