import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import CustomKeybtn from "../components/CustomKeybtn";
import ContBtn from "../components/ContBtn";
import BackBtn from "../components/BackBtn";

const OTP = () => {
  return (
    <View style={styles.oTPView}>
      <View style={styles.bodyView}>
        <CustomKeybtn />
        <ContBtn />
        <View style={styles.codeNumberView}>
          <View style={styles.itemView}>
            <View style={styles.lineView} />
            <Text style={styles.numberText}>{` `}</Text>
          </View>
          <View style={styles.itemView1}>
            <View style={styles.lineView1} />
            <Text style={styles.numberText1}>4</Text>
          </View>
          <View style={styles.itemView2}>
            <View style={styles.lineView2} />
            <Text style={styles.numberText2}>8</Text>
          </View>
          <View style={styles.itemView3}>
            <View style={styles.lineView3} />
            <Text style={styles.numberText3}>6</Text>
          </View>
        </View>
        <View style={styles.titleView}>
          <Text style={styles.anAuthenticationCo}>
            An authentication code has been sent to (+234) 810 345 678
          </Text>
          <Text style={styles.oTPAuthenticationText}>OTP Authentication</Text>
        </View>
      </View>
      <View style={styles.topBarView}>
        <View style={styles.barsTopBarsV1View}>
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
            style={styles.iconR}
            resizeMode="cover"
            source={require("../assets/-icon--r1.png")}
          />
          <Image
            style={styles.iconL}
            resizeMode="cover"
            source={require("../assets/-icon--l1.png")}
          />
          <Text style={styles.titleText}>One-time password</Text>
        </View>
        <BackBtn />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  lineView: {
    position: "absolute",
    height: "3.08%",
    top: "96.92%",
    right: 0,
    bottom: "0%",
    left: 0,
    backgroundColor: "#8f92a1",
    opacity: 0.2,
  },
  numberText: {
    position: "absolute",
    transform: [
      {
        translateY: -15.5,
      },
    ],
    width: "100%",
    top: "50%",
    right: "0%",
    left: "0%",
    fontSize: 24,
    letterSpacing: -0.77,
    lineHeight: 32,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "center",
  },
  itemView: {
    position: "absolute",
    top: 0,
    left: 240,
    backgroundColor: "#fff",
    width: 65,
    height: 65,
  },
  lineView1: {
    position: "absolute",
    height: "3.08%",
    top: "96.92%",
    right: 0,
    bottom: "0%",
    left: 0,
    backgroundColor: "#171717",
    opacity: 0.2,
  },
  numberText1: {
    position: "absolute",
    transform: [
      {
        translateY: -15.5,
      },
    ],
    width: "100%",
    top: "50%",
    right: "0%",
    left: "0%",
    fontSize: 24,
    letterSpacing: -0.77,
    lineHeight: 32,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "center",
  },
  itemView1: {
    position: "absolute",
    top: 0,
    left: 160,
    backgroundColor: "#fff",
    width: 65,
    height: 65,
  },
  lineView2: {
    position: "absolute",
    height: "3.08%",
    top: "96.92%",
    right: 0,
    bottom: "0%",
    left: 0,
    backgroundColor: "#171717",
    opacity: 0.2,
  },
  numberText2: {
    position: "absolute",
    transform: [
      {
        translateY: -15.5,
      },
    ],
    width: "100%",
    top: "50%",
    right: "0%",
    left: "0%",
    fontSize: 24,
    letterSpacing: -0.77,
    lineHeight: 32,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "center",
  },
  itemView2: {
    position: "absolute",
    top: 0,
    left: 80,
    backgroundColor: "#fff",
    width: 65,
    height: 65,
  },
  lineView3: {
    position: "absolute",
    height: "3.08%",
    top: "96.92%",
    right: 0,
    bottom: "0%",
    left: 0,
    backgroundColor: "#171717",
    opacity: 0.2,
  },
  numberText3: {
    position: "absolute",
    transform: [
      {
        translateY: -15.5,
      },
    ],
    width: "100%",
    top: "50%",
    right: "0%",
    left: "0%",
    fontSize: 24,
    letterSpacing: -0.77,
    lineHeight: 32,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "center",
  },
  itemView3: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#fff",
    width: 65,
    height: 65,
  },
  codeNumberView: {
    position: "absolute",
    top: 128,
    left: 35,
    width: 305,
    height: 65,
  },
  anAuthenticationCo: {
    position: "absolute",
    height: "54.55%",
    width: "76.72%",
    top: "45.45%",
    right: "23.28%",
    bottom: "0%",
    left: "0%",
    fontSize: 14,
    letterSpacing: -0.4,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
    opacity: 0.6,
  },
  oTPAuthenticationText: {
    position: "absolute",
    transform: [
      {
        translateY: -44,
      },
    ],
    width: "100%",
    top: "50%",
    right: "0%",
    left: "0%",
    fontSize: 24,
    letterSpacing: -0.8,
    lineHeight: 32,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
  },
  titleView: {
    position: "absolute",
    height: "13.25%",
    width: "81.33%",
    top: "0%",
    right: "9.33%",
    bottom: "86.75%",
    left: "9.33%",
  },
  bodyView: {
    position: "absolute",
    height: "81.77%",
    width: "100%",
    top: "18.23%",
    right: "0%",
    bottom: "0%",
    left: "0%",
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
  iconR: {
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
  iconL: {
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
    display: "none",
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
  barsTopBarsV1View: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#fff",
    width: 375,
    height: 100,
  },
  topBarView: {
    position: "absolute",
    top: -16,
    left: 7,
    width: 375,
    height: 100,
  },
  oTPView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default OTP;
