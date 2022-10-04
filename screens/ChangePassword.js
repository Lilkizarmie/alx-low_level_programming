import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

const ChangePassword = () => {
  return (
    <View style={styles.changePasswordView}>
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
        <Text style={styles.titleText}>change password</Text>
      </View>
      <View style={styles.buttonView}>
        <View style={styles.baseView} />
        <Image
          style={styles.iconsArrowsarrowLongRight}
          resizeMode="cover"
          source={require("../assets/iconsarrowsarrowlongright.png")}
        />
        <Text style={styles.text}>Save Changes</Text>
      </View>
      <View style={styles.passwordView}>
        <View style={styles.inputView}>
          <View style={styles.lineView} />
          <Image
            style={styles.iconsOthereye}
            resizeMode="cover"
            source={require("../assets/iconsothereye.png")}
          />
          <Image
            style={styles.iconsButtonslock}
            resizeMode="cover"
            source={require("../assets/iconsbuttonslock.png")}
          />
          <Text style={styles.placeholderText}>• • • • • • • •</Text>
        </View>
        <Text style={styles.labelText}>New Password</Text>
      </View>
      <View style={styles.passwordView1}>
        <View style={styles.inputView1}>
          <View style={styles.lineView1} />
          <Image
            style={styles.iconsOthereye1}
            resizeMode="cover"
            source={require("../assets/iconsothereye.png")}
          />
          <Image
            style={styles.iconsButtonslock1}
            resizeMode="cover"
            source={require("../assets/iconsbuttonslock.png")}
          />
          <Text style={styles.placeholderText1}>• • • • • • • •</Text>
        </View>
        <Text style={styles.labelText1}>Confirm New Password</Text>
      </View>
      <View style={styles.passwordView2}>
        <View style={styles.inputView2}>
          <View style={styles.lineView2} />
          <Image
            style={styles.iconR1}
            resizeMode="cover"
            source={require("../assets/iconsothereye.png")}
          />
          <Image
            style={styles.iconsButtonslock2}
            resizeMode="cover"
            source={require("../assets/iconsbuttonslock.png")}
          />
          <Text style={styles.placeholderText2}>• • • • • • • •</Text>
        </View>
        <Text style={styles.labelText2}>Current Password</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    right: 101,
    left: 102,
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
    top: 725,
    left: 35,
    width: 305,
    height: 44,
  },
  lineView: {
    position: "absolute",
    height: "2.27%",
    top: "97.73%",
    right: 0,
    bottom: "0%",
    left: 0,
    backgroundColor: "#8f92a1",
    opacity: 0.2,
  },
  iconsOthereye: {
    position: "absolute",
    transform: [
      {
        translateY: -12,
      },
    ],
    top: "50%",
    right: 0,
    width: 24,
    height: 24,
  },
  iconsButtonslock: {
    position: "absolute",
    transform: [
      {
        translateY: -12,
      },
    ],
    top: "50%",
    left: 0,
    width: 24,
    height: 24,
    display: "none",
  },
  placeholderText: {
    position: "absolute",
    transform: [
      {
        translateY: -10,
      },
    ],
    top: "50%",
    right: 80,
    left: 0,
    fontSize: 16,
    letterSpacing: -0.2,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
  },
  inputView: {
    position: "absolute",
    top: 24,
    right: 0,
    left: 0,
    backgroundColor: "#fff",
    height: 44,
  },
  labelText: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    fontSize: 12,
    letterSpacing: -0.17,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#8f92a1",
    textAlign: "left",
  },
  passwordView: {
    position: "absolute",
    top: 232,
    left: 35,
    backgroundColor: "#fff",
    width: 305,
    height: 68,
  },
  lineView1: {
    position: "absolute",
    height: "2.27%",
    top: "97.73%",
    right: 0,
    bottom: "0%",
    left: 0,
    backgroundColor: "#8f92a1",
    opacity: 0.2,
  },
  iconsOthereye1: {
    position: "absolute",
    transform: [
      {
        translateY: -12,
      },
    ],
    top: "50%",
    right: 0,
    width: 24,
    height: 24,
  },
  iconsButtonslock1: {
    position: "absolute",
    transform: [
      {
        translateY: -12,
      },
    ],
    top: "50%",
    left: 0,
    width: 24,
    height: 24,
    display: "none",
  },
  placeholderText1: {
    position: "absolute",
    transform: [
      {
        translateY: -10,
      },
    ],
    top: "50%",
    right: 80,
    left: 0,
    fontSize: 16,
    letterSpacing: -0.2,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
  },
  inputView1: {
    position: "absolute",
    top: 24,
    right: 0,
    left: 0,
    backgroundColor: "#fff",
    height: 44,
  },
  labelText1: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    fontSize: 12,
    letterSpacing: -0.17,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#8f92a1",
    textAlign: "left",
  },
  passwordView1: {
    position: "absolute",
    top: 340,
    left: 35,
    backgroundColor: "#fff",
    width: 305,
    height: 68,
  },
  lineView2: {
    position: "absolute",
    height: "2.27%",
    top: "97.73%",
    right: 0,
    bottom: "0%",
    left: 0,
    backgroundColor: "#8f92a1",
    opacity: 0.2,
  },
  iconR1: {
    position: "absolute",
    transform: [
      {
        translateY: -12,
      },
    ],
    top: "50%",
    right: 0,
    width: 24,
    height: 24,
  },
  iconsButtonslock2: {
    position: "absolute",
    transform: [
      {
        translateY: -12,
      },
    ],
    top: "50%",
    left: 0,
    width: 24,
    height: 24,
    display: "none",
  },
  placeholderText2: {
    position: "absolute",
    transform: [
      {
        translateY: -10,
      },
    ],
    top: "50%",
    right: 80,
    left: 0,
    fontSize: 16,
    letterSpacing: -0.2,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
  },
  inputView2: {
    position: "absolute",
    top: 24,
    right: 0,
    left: 0,
    backgroundColor: "#fff",
    height: 44,
  },
  labelText2: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    fontSize: 12,
    letterSpacing: -0.17,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#8f92a1",
    textAlign: "left",
  },
  passwordView2: {
    position: "absolute",
    top: 124,
    left: 35,
    backgroundColor: "#fff",
    width: 305,
    height: 68,
  },
  changePasswordView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default ChangePassword;
