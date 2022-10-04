import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

const PersonalInformation = () => {
  return (
    <View style={styles.personalInformationView}>
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
        <Text style={styles.titleText}>Personal Information</Text>
      </View>
      <View style={styles.settingView}>
        <View style={styles.itemView}>
          <View style={styles.lineView} />
          <Image
            style={styles.iconR1}
            resizeMode="cover"
            source={require("../assets/-icon--r1.png")}
          />
          <Image
            style={styles.iconL1}
            resizeMode="cover"
            source={require("../assets/-menu-3.png")}
          />
          <Text style={styles.editYourInformatio}>
            Edit name and contact details
          </Text>
          <Text style={styles.myAccountText}>Profile Details</Text>
        </View>
      </View>
      <View style={styles.settingView1}>
        <View style={styles.itemView1}>
          <View style={styles.lineView1} />
          <Image
            style={styles.iconR2}
            resizeMode="cover"
            source={require("../assets/-icon--r1.png")}
          />
          <Image
            style={styles.iconL2}
            resizeMode="cover"
            source={require("../assets/-icon--l34.png")}
          />
          <Text style={styles.editYourInformatio1}>
            Add or edit your shipping address
          </Text>
          <Text style={styles.myAccountText1}>Shipping Address</Text>
        </View>
      </View>
      <View style={styles.settingView2}>
        <View style={styles.itemView2}>
          <View style={styles.lineView2} />
          <Image
            style={styles.iconR3}
            resizeMode="cover"
            source={require("../assets/-icon--r1.png")}
          />
          <Image
            style={styles.iconL3}
            resizeMode="cover"
            source={require("../assets/-icon--l35.png")}
          />
          <Text style={styles.editYourInformatio2}>Change your password</Text>
          <Text style={styles.myAccountText2}>Change password</Text>
        </View>
      </View>
      <View style={styles.settingView3}>
        <View style={styles.itemView3}>
          <View style={styles.lineView3} />
          <Image
            style={styles.iconR4}
            resizeMode="cover"
            source={require("../assets/-icon--r1.png")}
          />
          <Image
            style={styles.iconL4}
            resizeMode="cover"
            source={require("../assets/iconsbuttonslock.png")}
          />
          <Text style={styles.editYourInformatio3}>Change transaction pin</Text>
          <Text style={styles.myAccountText3}>Transaction Pin</Text>
        </View>
      </View>
      <View style={styles.groupView} />
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
  lineView: {
    position: "absolute",
    top: 64,
    right: 0,
    left: 0,
    backgroundColor: "#8f92a1",
    height: 1,
    opacity: 0.2,
  },
  iconR1: {
    position: "absolute",
    top: 12,
    right: 0,
    left: 281,
    maxWidth: "100%",
    overflow: "hidden",
    height: 24,
  },
  iconL1: {
    position: "absolute",
    top: 12,
    right: 281,
    left: 0,
    maxWidth: "100%",
    overflow: "hidden",
    height: 24,
  },
  editYourInformatio: {
    position: "absolute",
    top: 28,
    right: 64,
    left: 40,
    fontSize: 12,
    letterSpacing: -0.4,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
    opacity: 0.6,
  },
  myAccountText: {
    position: "absolute",
    top: 0,
    right: 64,
    left: 40,
    fontSize: 14,
    letterSpacing: -0.4,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
  },
  itemView: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    height: 65,
  },
  settingView: {
    position: "absolute",
    top: 124,
    right: 35,
    left: 35,
    height: 65,
  },
  lineView1: {
    position: "absolute",
    top: 64,
    right: 0,
    left: 0,
    backgroundColor: "#8f92a1",
    height: 1,
    opacity: 0.2,
  },
  iconR2: {
    position: "absolute",
    top: 12,
    right: 0,
    left: 281,
    maxWidth: "100%",
    overflow: "hidden",
    height: 24,
  },
  iconL2: {
    position: "absolute",
    top: 12,
    right: 281,
    left: 0,
    maxWidth: "100%",
    overflow: "hidden",
    height: 24,
  },
  editYourInformatio1: {
    position: "absolute",
    top: 28,
    right: 64,
    left: 40,
    fontSize: 12,
    letterSpacing: -0.4,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
    opacity: 0.6,
  },
  myAccountText1: {
    position: "absolute",
    top: 0,
    right: 64,
    left: 40,
    fontSize: 14,
    letterSpacing: -0.4,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
  },
  itemView1: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    height: 65,
  },
  settingView1: {
    position: "absolute",
    top: 213,
    right: 35,
    left: 35,
    height: 65,
  },
  lineView2: {
    position: "absolute",
    top: 64,
    right: 0,
    left: 0,
    backgroundColor: "#8f92a1",
    height: 1,
    opacity: 0.2,
  },
  iconR3: {
    position: "absolute",
    top: 12,
    right: 0,
    left: 281,
    maxWidth: "100%",
    overflow: "hidden",
    height: 24,
  },
  iconL3: {
    position: "absolute",
    top: 12,
    right: 281,
    left: 0,
    maxWidth: "100%",
    overflow: "hidden",
    height: 24,
  },
  editYourInformatio2: {
    position: "absolute",
    top: 28,
    right: 64,
    left: 40,
    fontSize: 12,
    letterSpacing: -0.4,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
    opacity: 0.6,
  },
  myAccountText2: {
    position: "absolute",
    top: 0,
    right: 64,
    left: 40,
    fontSize: 14,
    letterSpacing: -0.4,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
  },
  itemView2: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    height: 65,
  },
  settingView2: {
    position: "absolute",
    top: 302,
    right: 35,
    left: 35,
    height: 65,
  },
  lineView3: {
    position: "absolute",
    top: 64,
    right: 0,
    left: 0,
    backgroundColor: "#8f92a1",
    height: 1,
    opacity: 0.2,
  },
  iconR4: {
    position: "absolute",
    top: 12,
    right: 0,
    left: 281,
    maxWidth: "100%",
    overflow: "hidden",
    height: 24,
  },
  iconL4: {
    position: "absolute",
    top: 12,
    right: 281,
    left: 0,
    maxWidth: "100%",
    overflow: "hidden",
    height: 24,
  },
  editYourInformatio3: {
    position: "absolute",
    top: 28,
    right: 64,
    left: 40,
    fontSize: 12,
    letterSpacing: -0.4,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
    opacity: 0.6,
  },
  myAccountText3: {
    position: "absolute",
    top: 0,
    right: 64,
    left: 40,
    fontSize: 14,
    letterSpacing: -0.4,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
  },
  itemView3: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    height: 65,
  },
  settingView3: {
    position: "absolute",
    top: 391,
    right: 35,
    left: 35,
    height: 65,
  },
  groupView: {
    position: "absolute",
    right: 0,
    bottom: 0,
    left: 0,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 50,
    elevation: 50,
    shadowOpacity: 1,
    height: 110,
  },
  personalInformationView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default PersonalInformation;
