import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import CustomKeybtn from "../components/CustomKeybtn";
import ContBtn from "../components/ContBtn";
import BackBtn from "../components/BackBtn";

const ResetPassword = () => {
  return (
    <View style={styles.resetPasswordView}>
      <View style={styles.bodyView}>
        <CustomKeybtn />
        <ContBtn text="Continue" />
        <View style={styles.phoneNumberView}>
          <View style={styles.lineView} />
          <Image
            style={styles.iconR}
            resizeMode="cover"
            source={require("../assets/-icon--r.png")}
          />
          <Text style={styles.text}>810 345 678</Text>
          <Text style={styles.text1}>+234</Text>
          <Image
            style={styles.flagIcon}
            resizeMode="cover"
            source={require("../assets/flag.png")}
          />
          <Text style={styles.labelText}>Phone Number</Text>
        </View>
        <View style={styles.titleView}>
          <Text style={styles.enterYourPhoneNum}>
            Enter your Phone number to recover your password
          </Text>
          <Text style={styles.passwordRecoveryText}>Password Recovery</Text>
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
              source={require("../assets/wifi1.png")}
            />
            <Image
              style={styles.cellularConnectionIcon}
              resizeMode="cover"
              source={require("../assets/cellular-connection1.png")}
            />
            <View style={styles.timeStyleView}>
              <Text style={styles.timeText}>9:41</Text>
            </View>
          </View>
          <Image
            style={styles.iconR1}
            resizeMode="cover"
            source={require("../assets/-icon--r1.png")}
          />
          <Image
            style={styles.iconL}
            resizeMode="cover"
            source={require("../assets/-icon--l1.png")}
          />
          <Text style={styles.titleText}>Reset Password</Text>
        </View>
        <BackBtn />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  lineView: {
    position: "absolute",
    height: "1.43%",
    top: "100%",
    right: 0,
    bottom: "-1.43%",
    left: 0,
    backgroundColor: "#8f92a1",
    opacity: 0.2,
  },
  iconR: {
    position: "absolute",
    transform: [
      {
        translateY: -1,
      },
    ],
    top: "50%",
    right: 0,
    width: 24,
    height: 24,
  },
  text: {
    position: "absolute",
    transform: [
      {
        translateY: -1,
      },
    ],
    top: "50%",
    right: 40,
    left: 94,
    fontSize: 16,
    letterSpacing: -0.28,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
  },
  text1: {
    position: "absolute",
    transform: [
      {
        translateY: -1,
      },
    ],
    top: "50%",
    left: 54,
    fontSize: 16,
    letterSpacing: -0.28,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
    opacity: 0.6,
  },
  flagIcon: {
    position: "absolute",
    transform: [
      {
        translateY: 2,
      },
    ],
    top: "50%",
    left: 0,
    width: 37.5,
    height: 18,
  },
  labelText: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    fontSize: 12,
    letterSpacing: -0.17,
    fontWeight: "500",
    fontFamily: "DM Sans",
    color: "#8f92a1",
    textAlign: "left",
  },
  phoneNumberView: {
    position: "absolute",
    top: 128,
    left: 35,
    backgroundColor: "#fff",
    width: 305,
    height: 70,
  },
  enterYourPhoneNum: {
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
  passwordRecoveryText: {
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
    height: 4.84,
  },
  cellularConnectionIcon: {
    position: "relative",
    width: 17,
    height: 4.69,
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
  iconR1: {
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
    height: 44,
  },
  topBarView: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 375,
    height: 57,
  },
  resetPasswordView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default ResetPassword;
