import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

const ManageOrders1 = () => {
  return (
    <View style={styles.manageOrdersView}>
      <View style={styles.topBarView}>
        <View style={styles.barsTopBarsV4View}>
          <View style={styles.barsStatusBariPhoneLightView}>
            <View style={styles.batteryView}>
              <View style={styles.borderView} />
              <Image
                style={styles.capIcon}
                resizeMode="cover"
                source={require("../assets/cap1.png")}
              />
              <View style={styles.capacityView} />
            </View>
            <Image
              style={styles.wifiIcon}
              resizeMode="cover"
              source={require("../assets/wifi3.png")}
            />
            <Image
              style={styles.cellularConnectionIcon}
              resizeMode="cover"
              source={require("../assets/cellular-connection3.png")}
            />
            <View style={styles.timeStyleView}>
              <Text style={styles.timeText}>9:41</Text>
            </View>
          </View>
          <Image
            style={styles.iconsButtonsmoreAlt}
            resizeMode="cover"
            source={require("../assets/iconsbuttonsmorealt.png")}
          />
          <Image
            style={styles.iconsArrowsarrowLongLeft}
            resizeMode="cover"
            source={require("../assets/-icon--l1.png")}
          />
          <Text style={styles.titleText}>Your orders</Text>
        </View>
      </View>
      <View style={styles.groupView}>
        <View style={styles.frameView}>
          <Text style={styles.nothingToShowYet}>Nothing to show Yet</Text>
          <Text style={[styles.whenYouPlaceAnOrderItWil, styles.mt6]}>
            When you place an order it will show up here.
          </Text>
        </View>
        <Image
          style={styles.uilclipboardBlankIcon}
          resizeMode="cover"
          source={require("../assets/uilclipboardblank.png")}
        />
      </View>
      <View style={styles.buttonView}>
        <View style={styles.baseView} />
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/icon57.png")}
        />
        <Text style={styles.text}>Find that special item</Text>
      </View>
      <View style={styles.menuView}>
        <View style={styles.groupView2}>
          <View style={styles.frameView1}>
            <Text style={styles.priceText}>All</Text>
            <Text style={[styles.typeText, styles.ml36]}>Processing</Text>
            <Text style={[styles.dietaryText, styles.ml36]}>Shipped</Text>
            <Text style={[styles.dietaryText1, styles.ml36]}>Delivered</Text>
          </View>
          <View style={styles.groupView1}>
            <View style={styles.rectangleView} />
            <View style={styles.rectangleCopyView} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt6: {
    marginTop: 6,
  },
  ml36: {
    marginLeft: 36,
  },
  borderView: {
    position: "absolute",
    top: 0,
    right: 2.33,
    borderRadius: 2.67,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    width: 22,
    height: 11.33,
    opacity: 0.35,
  },
  capIcon: {
    position: "absolute",
    top: 3.67,
    right: 0,
    width: 1.33,
    height: 4,
    opacity: 0.4,
  },
  capacityView: {
    position: "absolute",
    top: 2,
    right: 4.33,
    borderRadius: 1.33,
    backgroundColor: "#000",
    width: 18,
    height: 7.33,
  },
  batteryView: {
    position: "absolute",
    top: 17.33,
    right: 14.34,
    width: 24.33,
    height: 11.33,
  },
  wifiIcon: {
    position: "relative",
    width: 15.33,
    height: 11,
  },
  cellularConnectionIcon: {
    position: "relative",
    width: 17,
    height: 10.67,
  },
  timeText: {
    position: "absolute",
    transform: [
      {
        translateY: -3.5,
      },
    ],
    top: "50%",
    left: 0,
    fontSize: 15,
    letterSpacing: -0.3,
    fontWeight: "600",
    fontFamily: "SF Pro Text",
    color: "#000",
    textAlign: "center",
    width: 54,
  },
  timeStyleView: {
    position: "absolute",
    top: 7.33,
    left: 21,
    width: 54,
    height: 21,
  },
  barsStatusBariPhoneLightView: {
    position: "absolute",
    height: "44%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "56%",
    left: "0%",
    display: "none",
  },
  iconsButtonsmoreAlt: {
    position: "absolute",
    transform: [
      {
        translateY: 10,
      },
    ],
    top: "50%",
    right: 35,
    width: 24,
    height: 24,
    display: "none",
  },
  iconsArrowsarrowLongLeft: {
    position: "absolute",
    transform: [
      {
        translateY: 10,
      },
    ],
    top: "50%",
    left: 35,
    width: 24,
    height: 24,
  },
  titleText: {
    position: "absolute",
    transform: [
      {
        translateY: 12,
      },
    ],
    width: "24.8%",
    top: "50%",
    right: "37.6%",
    left: "37.6%",
    fontSize: 12,
    letterSpacing: 1,
    lineHeight: 20,
    textTransform: "uppercase",
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "center",
  },
  barsTopBarsV4View: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#fff",
    width: 375,
    height: 100,
  },
  topBarView: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 375,
    height: 100,
  },
  nothingToShowYet: {
    position: "relative",
    fontSize: 16,
    letterSpacing: 1,
    lineHeight: 20,
    textTransform: "uppercase",
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#000",
    textAlign: "center",
  },
  whenYouPlaceAnOrderItWil: {
    position: "relative",
    fontSize: 14,
    letterSpacing: -0.1,
    fontWeight: "500",
    fontFamily: "DM Sans",
    color: "#959595",
    textAlign: "center",
    width: 305,
  },
  frameView: {
    position: "absolute",
    top: 111,
    left: 0,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  uilclipboardBlankIcon: {
    position: "absolute",
    top: 0,
    left: 103,
    width: 100,
    height: 100,
    overflow: "hidden",
  },
  groupView: {
    position: "absolute",
    top: 328,
    left: 35,
    width: 305,
    height: 155,
  },
  baseView: {
    position: "absolute",
    height: "100%",
    top: "0%",
    right: 0,
    bottom: "0%",
    left: 0,
    borderRadius: 6,
    backgroundColor: "#171717",
  },
  icon: {
    position: "absolute",
    transform: [
      {
        translateY: -12,
      },
    ],
    top: "50%",
    right: 16,
    width: 24,
    height: 24,
    display: "none",
  },
  text: {
    position: "absolute",
    transform: [
      {
        translateY: -10,
      },
    ],
    top: "50%",
    right: 70,
    left: 72,
    fontSize: 12,
    letterSpacing: 1,
    lineHeight: 20,
    textTransform: "uppercase",
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#fff",
    textAlign: "center",
  },
  buttonView: {
    position: "absolute",
    top: 673,
    left: 36,
    width: 305,
    height: 44,
  },
  priceText: {
    position: "relative",
    fontSize: 14,
    letterSpacing: -0.4,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
  },
  typeText: {
    position: "relative",
    fontSize: 14,
    letterSpacing: -0.4,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#010f07",
    textAlign: "left",
    opacity: 0.64,
  },
  dietaryText: {
    position: "relative",
    fontSize: 14,
    letterSpacing: -0.4,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#010f07",
    textAlign: "left",
    opacity: 0.64,
  },
  dietaryText1: {
    position: "relative",
    fontSize: 14,
    letterSpacing: -0.4,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#010f07",
    textAlign: "left",
    opacity: 0.64,
  },
  frameView1: {
    position: "absolute",
    top: 0,
    left: 11.01,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  rectangleView: {
    position: "absolute",
    top: 2,
    left: 11.01,
    backgroundColor: "#8f92a1",
    width: 340,
    height: 1,
    opacity: 0.3,
  },
  rectangleCopyView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 12,
    backgroundColor: "#171717",
    width: 36,
    height: 4,
  },
  groupView1: {
    position: "absolute",
    top: 25,
    left: 0,
    width: 351.01,
    height: 4,
  },
  groupView2: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 351.01,
    height: 29,
  },
  menuView: {
    position: "absolute",
    top: 124,
    left: 23.99,
    width: 351.01,
    height: 29,
  },
  manageOrdersView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default ManageOrders1;
