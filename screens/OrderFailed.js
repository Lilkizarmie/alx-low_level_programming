import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const OrderFailed = () => {
  return (
    <View style={styles.orderFailedView}>
      <View style={styles.bodyView}>
        <View style={styles.buttonView}>
          <View style={styles.itemView}>
            <View style={styles.baseView} />
            <Text style={styles.text}>Contact support</Text>
          </View>
          <View style={styles.itemView1}>
            <View style={styles.baseView1} />
            <Image
              style={styles.iconsArrowsarrowLongLeft}
              resizeMode="cover"
              source={require("../assets/-icon--l1.png")}
            />
            <Text style={styles.text1}>Review Payment Method</Text>
          </View>
        </View>
        <View style={styles.helpView}>
          <Text style={styles.keepCalmSometimes1}>
            <Text style={styles.keepCalmSometimes}>
              Keep calm, sometimes it happens
            </Text>
            <Text style={styles.pleaseGoBack}>
              Please go back and check your payment method or contact us
            </Text>
          </Text>
          <Text style={styles.doNotWorry1}>
            <Text style={styles.doNotWorry}>{`Do not worry `}</Text>
            <Text style={styles.text2}>😉</Text>
          </Text>
          <Image
            style={styles.iconL}
            resizeMode="cover"
            source={require("../assets/-icon--l22.png")}
          />
        </View>
        <View style={styles.topView}>
          <View style={styles.lineView} />
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/icon6.png")}
          />
          <Text style={styles.yourPaymentOccurre}>
            Your payment was unsuccessful
          </Text>
          <Text style={styles.orderFailedText}>Order Failed</Text>
        </View>
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
            style={styles.iconsArrowsarrowLongLeft1}
            resizeMode="cover"
            source={require("../assets/-icon--l1.png")}
          />
          <Text style={styles.titleText}>Order Complete</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  baseView: {
    position: "absolute",
    height: "102.27%",
    top: "-1.14%",
    right: -0.5,
    bottom: "-1.14%",
    left: -0.5,
    borderRadius: 6,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
  },
  text: {
    position: "absolute",
    transform: [
      {
        translateY: -10,
      },
    ],
    top: "50%",
    right: 0,
    left: 0,
    fontSize: 12,
    letterSpacing: 1,
    lineHeight: 20,
    textTransform: "uppercase",
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "center",
  },
  itemView: {
    position: "absolute",
    top: 60,
    left: 0,
    backgroundColor: "#fff",
    width: 305,
    height: 44,
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
  iconsArrowsarrowLongLeft: {
    position: "absolute",
    transform: [
      {
        translateY: -12,
      },
    ],
    top: "50%",
    left: 16,
    width: 24,
    height: 24,
  },
  text1: {
    position: "absolute",
    transform: [
      {
        translateY: -10,
      },
    ],
    top: "50%",
    right: 63,
    left: 65,
    fontSize: 12,
    letterSpacing: 1,
    lineHeight: 20,
    textTransform: "uppercase",
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#fff",
    textAlign: "center",
  },
  itemView1: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 305,
    height: 44,
  },
  buttonView: {
    position: "absolute",
    top: 436,
    left: 35,
    width: 305,
    height: 104,
  },
  keepCalmSometimes: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  pleaseGoBack: {
    margin: 0,
  },
  keepCalmSometimes1: {
    position: "absolute",
    height: "46.88%",
    width: "84.92%",
    top: "53.13%",
    right: "7.54%",
    bottom: "0%",
    left: "7.54%",
    fontSize: 14,
    letterSpacing: -0.4,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "center",
    opacity: 0.6,
  },
  doNotWorry: {
    fontWeight: "700",
    fontFamily: "DM Sans",
  },
  text2: {
    fontFamily: "Roboto",
  },
  doNotWorry1: {
    position: "absolute",
    transform: [
      {
        translateY: -24,
      },
    ],
    width: "100%",
    top: "50%",
    right: "0%",
    left: "0%",
    fontSize: 14,
    letterSpacing: -0.4,
    lineHeight: 24,
    color: "#171717",
    textAlign: "center",
  },
  iconL: {
    position: "absolute",
    height: "18.75%",
    width: "7.87%",
    top: "0%",
    right: "45.9%",
    bottom: "81.25%",
    left: "46.23%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  helpView: {
    position: "absolute",
    height: "23.7%",
    width: "81.33%",
    top: "45.37%",
    right: "9.33%",
    bottom: "30.93%",
    left: "9.33%",
  },
  lineView: {
    position: "absolute",
    height: "0.49%",
    top: "99.51%",
    right: 0,
    bottom: "0%",
    left: 0,
    backgroundColor: "#f3f6f8",
  },
  icon: {
    position: "absolute",
    height: "39.02%",
    width: "21.33%",
    top: "0%",
    right: "39.2%",
    bottom: "60.98%",
    left: "39.47%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  yourPaymentOccurre: {
    position: "absolute",
    height: "9.76%",
    width: "81.33%",
    top: "70.24%",
    right: "9.33%",
    bottom: "20%",
    left: "9.33%",
    fontSize: 14,
    letterSpacing: -0.4,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "center",
    opacity: 0.6,
  },
  orderFailedText: {
    position: "absolute",
    transform: [
      {
        translateY: 1.5,
      },
    ],
    width: "81.33%",
    top: "50%",
    right: "9.33%",
    left: "9.33%",
    fontSize: 24,
    letterSpacing: -0.8,
    lineHeight: 32,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "center",
  },
  topView: {
    position: "absolute",
    height: "37.96%",
    top: "0%",
    right: 0,
    bottom: "62.04%",
    left: 0,
  },
  bodyView: {
    position: "absolute",
    top: 238,
    left: 0,
    width: 375,
    height: 540,
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
  },
  iconsArrowsarrowLongLeft1: {
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
  orderFailedView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default OrderFailed;
