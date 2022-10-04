import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

const PaymentMethod = () => {
  return (
    <View style={styles.paymentMethodView}>
      <View style={styles.bodyView}>
        <View style={styles.buttonView}>
          <View style={styles.baseView} />
          <Image
            style={styles.iconsArrowsarrowLongRight}
            resizeMode="cover"
            source={require("../assets/iconsarrowsarrowlongright.png")}
          />
          <Text style={styles.text}>Continue</Text>
        </View>
        <Image
          style={styles.applePayIcon}
          resizeMode="cover"
          source={require("../assets/-icon--r11.png")}
        />
        <Text style={styles.balanceText}>₦83,000</Text>
        <View style={styles.groupView}>
          <View style={styles.lineView} />
          <Image
            style={styles.iconR}
            resizeMode="cover"
            source={require("../assets/-icon--r12.png")}
          />
          <View style={styles.iconL}>
            <View style={styles.rectangleView} />
            <Image
              style={styles.shapeIcon}
              resizeMode="cover"
              source={require("../assets/shape.png")}
            />
          </View>
          <Text style={styles.balanceText1}>₦83,000</Text>
          <Text style={styles.konixCashWallet}>Konix Cash Wallet</Text>
        </View>
        <View style={styles.lineView1} />
        <Image
          style={styles.iconL1}
          resizeMode="cover"
          source={require("../assets/-icon--l20.png")}
        />
        <Text style={styles.creditCardText}>Credit Card</Text>
      </View>
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
          <Text style={styles.titleText}>Payment Method</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    right: 118,
    left: 119,
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
    top: 602,
    left: 35,
    width: 305,
    height: 44,
  },
  applePayIcon: {
    position: "absolute",
    top: 8,
    right: 35,
    width: 32,
    height: 32,
  },
  balanceText: {
    position: "absolute",
    height: "3.1%",
    width: "53.6%",
    top: "4.33%",
    right: "26.67%",
    bottom: "92.57%",
    left: "19.73%",
    fontSize: 14,
    letterSpacing: 0.4,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
    opacity: 0.6,
  },
  lineView: {
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
    width: "8.53%",
    top: "12.31%",
    right: "9.33%",
    bottom: "38.46%",
    left: "82.13%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  rectangleView: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  shapeIcon: {
    position: "absolute",
    height: "56.25%",
    width: "62.5%",
    top: "21.88%",
    right: "18.75%",
    bottom: "21.88%",
    left: "18.75%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  iconL: {
    position: "absolute",
    height: "49.23%",
    width: "8.53%",
    top: "6.15%",
    right: "82.4%",
    bottom: "44.62%",
    left: "9.07%",
  },
  balanceText1: {
    position: "absolute",
    height: "30.77%",
    width: "53.6%",
    top: "43.08%",
    right: "27.2%",
    bottom: "26.15%",
    left: "19.2%",
    fontSize: 14,
    letterSpacing: 0.4,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
    opacity: 0.6,
  },
  konixCashWallet: {
    position: "absolute",
    transform: [
      {
        translateY: -32.5,
      },
    ],
    width: "53.6%",
    top: "50%",
    right: "27.2%",
    left: "19.2%",
    fontSize: 16,
    letterSpacing: -0.4,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
  },
  groupView: {
    position: "absolute",
    height: "10.06%",
    top: "13.78%",
    right: 0,
    bottom: "76.16%",
    left: 0,
  },
  lineView1: {
    position: "absolute",
    height: "0.15%",
    top: "9.91%",
    right: 0,
    bottom: "89.94%",
    left: 0,
    backgroundColor: "#8f92a1",
    opacity: 0.2,
  },
  iconL1: {
    position: "absolute",
    top: 11,
    bottom: 611,
    left: 35,
    maxHeight: "100%",
    width: 24,
  },
  creditCardText: {
    position: "absolute",
    top: 0,
    left: 73,
    fontSize: 14,
    letterSpacing: -0.4,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
  },
  bodyView: {
    position: "absolute",
    top: 132,
    left: 0,
    width: 375,
    height: 646,
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
    height: 100,
  },
  topBarView: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 375,
    height: 100,
  },
  paymentMethodView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default PaymentMethod;
