import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

const UserProfileProfileDetails = () => {
  return (
    <View style={styles.userProfileProfileDetails}>
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
        <Text style={styles.titleText}>Profile Details</Text>
      </View>
      <View style={styles.profileSettingsView}>
        <View style={styles.form2FillView1}>
          <View style={styles.form2FillView}>
            <View style={styles.bgView} />
            <View style={styles.dividerView} />
            <Text style={styles.emailAddressText}>Full - name</Text>
            <Text style={styles.jideAhmedText}>Jide Ahmed</Text>
          </View>
        </View>
        <View style={styles.form2FillView3}>
          <View style={styles.form2FillView2}>
            <View style={styles.bgView1} />
            <View style={styles.dividerView1} />
            <Text style={styles.emailAddressText1}>Email address</Text>
            <Text style={styles.wahab2k19icloudcomText}>
              Jideahmed@gmail.com
            </Text>
          </View>
        </View>
        <View style={styles.form2FillView5}>
          <View style={styles.form2FillView4}>
            <View style={styles.bgView2} />
            <View style={styles.dividerView2} />
            <Text style={styles.emailAddressText2}>Phone number</Text>
            <Text style={styles.wahab2k19icloudcomText1}>+2348109933</Text>
          </View>
        </View>
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
  bgView: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#fff",
    width: 305,
    height: 65,
  },
  dividerView: {
    position: "absolute",
    height: "1.54%",
    width: "100%",
    top: "100%",
    right: "0%",
    bottom: "-1.54%",
    left: "0%",
    backgroundColor: "#f3f2f2",
  },
  emailAddressText: {
    position: "absolute",
    height: "33.85%",
    width: "40.22%",
    top: "1.54%",
    right: "59.78%",
    bottom: "64.62%",
    left: "0%",
    fontSize: 12,
    letterSpacing: -0.17,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#8f92a1",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
  },
  jideAhmedText: {
    position: "absolute",
    transform: [
      {
        translateY: -1.5,
      },
    ],
    width: "29.84%",
    top: "50%",
    right: "70.16%",
    left: "0%",
    fontSize: 16,
    letterSpacing: -0.28,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
  },
  form2FillView: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 305,
    height: 65,
  },
  form2FillView1: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 305,
    height: 65,
  },
  bgView1: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#fff",
    width: 305,
    height: 65,
  },
  dividerView1: {
    position: "absolute",
    height: "1.54%",
    width: "100%",
    top: "100%",
    right: "0%",
    bottom: "-1.54%",
    left: "0%",
    backgroundColor: "#f3f2f2",
  },
  emailAddressText1: {
    position: "absolute",
    height: "33.85%",
    width: "40.22%",
    top: "1.54%",
    right: "59.78%",
    bottom: "64.62%",
    left: "0%",
    fontSize: 12,
    letterSpacing: -0.17,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#8f92a1",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
  },
  wahab2k19icloudcomText: {
    position: "absolute",
    transform: [
      {
        translateY: -1.5,
      },
    ],
    width: "58.69%",
    top: "50%",
    right: "41.31%",
    left: "0%",
    fontSize: 16,
    letterSpacing: -0.28,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
  },
  form2FillView2: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 305,
    height: 65,
  },
  form2FillView3: {
    position: "absolute",
    top: 105,
    left: 0,
    width: 305,
    height: 65,
  },
  bgView2: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#fff",
    width: 305,
    height: 65,
  },
  dividerView2: {
    position: "absolute",
    height: "1.54%",
    width: "100%",
    top: "100%",
    right: "0%",
    bottom: "-1.54%",
    left: "0%",
    backgroundColor: "#f3f2f2",
  },
  emailAddressText2: {
    position: "absolute",
    height: "33.85%",
    width: "40.22%",
    top: "1.54%",
    right: "59.78%",
    bottom: "64.62%",
    left: "0%",
    fontSize: 12,
    letterSpacing: -0.17,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#8f92a1",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
  },
  wahab2k19icloudcomText1: {
    position: "absolute",
    transform: [
      {
        translateY: -1.5,
      },
    ],
    width: "33.44%",
    top: "50%",
    right: "66.56%",
    left: "0%",
    fontSize: 16,
    letterSpacing: -0.28,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
  },
  form2FillView4: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 305,
    height: 65,
  },
  form2FillView5: {
    position: "absolute",
    top: 210,
    left: 0,
    width: 305,
    height: 65,
  },
  profileSettingsView: {
    position: "absolute",
    top: 124,
    left: 35,
    width: 305,
    height: 275,
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
  userProfileProfileDetails: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default UserProfileProfileDetails;
