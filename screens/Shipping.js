import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

const Shipping = () => {
  return (
    <View style={styles.shippingView}>
      <View style={styles.topBarView}>
        <View style={styles.baseView} />
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
              source={require("../assets/wifi8.png")}
            />
            <Image
              style={styles.cellularConnectionIcon}
              resizeMode="cover"
              source={require("../assets/cellular-connection8.png")}
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
          <Text style={styles.titleText}>Shipping</Text>
        </View>
      </View>
      <View style={styles.searchView1}>
        <View style={styles.lineView} />
        <View style={styles.searchView}>
          <View style={styles.lineView1} />
          <Image
            style={styles.iconsOthersearch}
            resizeMode="cover"
            source={require("../assets/iconsothersearch1.png")}
          />
          <Text style={styles.placeholderText}>Enter your addresses</Text>
        </View>
      </View>
      <View style={styles.myAddressesView}>
        <View style={styles.itemView}>
          <View style={styles.lineView2} />
          <Image
            style={styles.iconR}
            resizeMode="cover"
            source={require("../assets/-icon--r11.png")}
          />
          <Image
            style={styles.iconL}
            resizeMode="cover"
            source={require("../assets/-icon--l11.png")}
          />
          <Text style={styles.twinPeaksBlvd}>{`12 Oga nla way,Oshodi `}</Text>
          <Text style={styles.sanFranciscoCA}>Lagos NG</Text>
        </View>
        <View style={styles.itemView1}>
          <View style={styles.lineView3} />
          <Image
            style={styles.iconR1}
            resizeMode="cover"
            source={require("../assets/-icon--r12.png")}
          />
          <Image
            style={styles.iconL1}
            resizeMode="cover"
            source={require("../assets/-icon--l11.png")}
          />
          <Text style={styles.broadwayBrooklText}>178 Allen Avenue,Ikeja</Text>
          <Text style={styles.newYorkNY}>Lagos, NG</Text>
        </View>
        <View style={styles.titleView}>
          <Text style={styles.myAddressesText}>My Addresses</Text>
        </View>
      </View>
      <View style={styles.buttonView}>
        <View style={styles.baseView1} />
        <Image
          style={styles.iconsArrowsarrowLongRight}
          resizeMode="cover"
          source={require("../assets/iconsarrowsarrowlongright.png")}
        />
        <Text style={styles.text}>Continue to Payment</Text>
      </View>
      <View style={styles.itemView2}>
        <Image
          style={styles.iconR2}
          resizeMode="cover"
          source={require("../assets/-icon--r13.png")}
        />
        <Image
          style={styles.iconL2}
          resizeMode="cover"
          source={require("../assets/-icon--l11.png")}
        />
        <Text style={styles.twinPeaksBlvd1}>Add New Address</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  baseView: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#fff",
    width: 375,
    height: 102,
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
    height: 11.22,
  },
  cellularConnectionIcon: {
    position: "relative",
    width: 17,
    height: 10.88,
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
    width: "60%",
    top: "50%",
    right: "20%",
    left: "20%",
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
    height: 102,
  },
  topBarView: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 375,
    height: 102,
  },
  lineView: {
    position: "absolute",
    height: "1.3%",
    top: "98.7%",
    right: 0,
    bottom: "0%",
    left: 0,
    backgroundColor: "#8f92a1",
    opacity: 0.2,
  },
  lineView1: {
    position: "absolute",
    height: "100%",
    top: "0%",
    right: 0,
    bottom: "0%",
    left: 0,
    borderRadius: 12,
    backgroundColor: "#f3f6f8",
  },
  iconsOthersearch: {
    position: "absolute",
    height: "54.55%",
    width: "7.87%",
    top: "22.73%",
    right: "5.25%",
    bottom: "22.73%",
    left: "86.89%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  placeholderText: {
    position: "absolute",
    transform: [
      {
        translateY: -10,
      },
    ],
    top: "50%",
    left: 16,
    fontSize: 16,
    letterSpacing: -0.2,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: "DM Sans",
    color: "rgba(23, 23, 23, 0.4)",
    textAlign: "left",
    width: 233,
  },
  searchView: {
    position: "absolute",
    height: "57.14%",
    width: "81.33%",
    top: "0%",
    right: "9.33%",
    bottom: "42.86%",
    left: "9.33%",
    backgroundColor: "#fff",
  },
  searchView1: {
    position: "absolute",
    height: "9.48%",
    top: "15.27%",
    right: 0,
    bottom: "75.25%",
    left: 0,
  },
  lineView2: {
    position: "absolute",
    height: "1.54%",
    top: "98.46%",
    right: 0,
    bottom: "0%",
    left: 0,
    backgroundColor: "#8f92a1",
    opacity: 0.2,
  },
  iconR: {
    position: "absolute",
    height: "49.23%",
    width: "10.49%",
    top: "12.31%",
    right: "0%",
    bottom: "38.46%",
    left: "89.51%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  iconL: {
    position: "absolute",
    height: "36.92%",
    width: "7.87%",
    top: "18.46%",
    right: "92.13%",
    bottom: "44.62%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  twinPeaksBlvd: {
    position: "absolute",
    transform: [
      {
        translateY: -8.5,
      },
    ],
    width: "65.9%",
    top: "50%",
    right: "20.98%",
    left: "13.11%",
    fontSize: 16,
    letterSpacing: -0.4,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
  },
  sanFranciscoCA: {
    position: "absolute",
    height: "30.77%",
    width: "65.9%",
    top: "0%",
    right: "20.98%",
    bottom: "69.23%",
    left: "13.11%",
    fontSize: 12,
    letterSpacing: -0.4,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
    opacity: 0.6,
  },
  itemView: {
    position: "absolute",
    height: "29.82%",
    top: "70.18%",
    right: 0,
    bottom: "0%",
    left: 0,
  },
  lineView3: {
    position: "absolute",
    height: "1.54%",
    top: "98.46%",
    right: 0,
    bottom: "0%",
    left: 0,
    backgroundColor: "#8f92a1",
    opacity: 0.2,
  },
  iconR1: {
    position: "absolute",
    height: "49.23%",
    width: "10.49%",
    top: "12.31%",
    right: "0%",
    bottom: "38.46%",
    left: "89.51%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  iconL1: {
    position: "absolute",
    height: "36.92%",
    width: "7.87%",
    top: "18.46%",
    right: "92.13%",
    bottom: "44.62%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  broadwayBrooklText: {
    position: "absolute",
    transform: [
      {
        translateY: -8.5,
      },
    ],
    width: "65.9%",
    top: "50%",
    right: "20.98%",
    left: "13.11%",
    fontSize: 16,
    letterSpacing: -0.4,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
  },
  newYorkNY: {
    position: "absolute",
    height: "30.77%",
    width: "65.9%",
    top: "0%",
    right: "20.98%",
    bottom: "69.23%",
    left: "13.11%",
    fontSize: 12,
    letterSpacing: -0.4,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
    opacity: 0.6,
  },
  itemView1: {
    position: "absolute",
    height: "29.82%",
    top: "25.69%",
    right: 0,
    bottom: "44.5%",
    left: 0,
  },
  myAddressesText: {
    position: "absolute",
    transform: [
      {
        translateY: -12,
      },
    ],
    width: "100%",
    top: "50%",
    right: "0%",
    left: "0%",
    fontSize: 14,
    letterSpacing: -0.4,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
  },
  titleView: {
    position: "absolute",
    transform: [
      {
        translateY: -109,
      },
    ],
    width: "30.16%",
    top: "50%",
    right: "69.84%",
    left: "0%",
    height: 24,
  },
  myAddressesView: {
    position: "absolute",
    height: "26.85%",
    top: "27.71%",
    right: 37,
    bottom: "45.44%",
    left: 33,
  },
  baseView1: {
    position: "absolute",
    height: "100%",
    top: "0%",
    right: 0,
    bottom: "0%",
    left: 0,
    borderRadius: 6,
    backgroundColor: "#171717",
  },
  iconsArrowsarrowLongRight: {
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
  },
  text: {
    position: "absolute",
    transform: [
      {
        translateY: -10,
      },
    ],
    top: "50%",
    right: 74,
    left: 75,
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
    height: "5.42%",
    width: "81.33%",
    top: "87.44%",
    right: "9.87%",
    bottom: "7.14%",
    left: "8.8%",
  },
  iconR2: {
    position: "absolute",
    height: "100%",
    width: "7.97%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "92.03%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  iconL2: {
    position: "absolute",
    height: "100%",
    width: "7.97%",
    top: "0%",
    right: "92.03%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  twinPeaksBlvd1: {
    position: "absolute",
    transform: [
      {
        translateY: -12,
      },
    ],
    width: "73.42%",
    top: "50%",
    right: "13.29%",
    left: "13.29%",
    fontSize: 14,
    letterSpacing: -0.8,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
  },
  itemView2: {
    position: "absolute",
    height: "2.96%",
    width: "80.27%",
    top: "58.87%",
    right: "10.93%",
    bottom: "38.18%",
    left: "8.8%",
  },
  shippingView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Shipping;
