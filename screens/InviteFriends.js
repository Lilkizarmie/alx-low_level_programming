import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

const InviteFriends = () => {
  return (
    <View style={styles.inviteFriendsView}>
      <View style={styles.bodyView}>
        <View style={styles.buttonView}>
          <View style={styles.baseView} />
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/icon57.png")}
          />
          <Text style={styles.text}>Share</Text>
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
            style={styles.iconsArrowsarrowLongLeft}
            resizeMode="cover"
            source={require("../assets/-icon--l1.png")}
          />
          <Text style={styles.titleText}>INvite friends</Text>
        </View>
      </View>
      <View style={styles.referToFriend}>
        <Text style={styles.referAFriendGetCash}>Refer a Friend, Get cash</Text>
        <Text style={styles.getWalletCashWhenSomeoneS}>
          Get wallet cash when someone signs up using your refer link
        </Text>
        <View style={styles.shareLinkView}>
          <View style={styles.rectangleView} />
          <Image
            style={styles.shapeIcon}
            resizeMode="cover"
            source={require("../assets/shape4.png")}
          />
          <Text style={styles.httpsui8net7673Text}>
            https://konix.app/76738b
          </Text>
        </View>
      </View>
      <View style={styles.itemView}>
        <View style={styles.baseView1} />
        <Text style={styles.text1}>Copy</Text>
      </View>
      <Image
        style={styles.icon1}
        resizeMode="cover"
        source={require("../assets/icon58.png")}
      />
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
  },
  text: {
    position: "absolute",
    transform: [
      {
        translateY: -10,
      },
    ],
    top: "50%",
    right: 130,
    left: 132,
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
    top: 0,
    left: 0,
    width: 305,
    height: 44,
  },
  bodyView: {
    position: "absolute",
    top: 673,
    left: 33,
    width: 305,
    height: 44,
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
  referAFriendGetCash: {
    position: "absolute",
    top: 0,
    left: 13,
    fontSize: 24,
    letterSpacing: 0.14,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#010f07",
    textAlign: "center",
  },
  getWalletCashWhenSomeoneS: {
    position: "absolute",
    top: 32,
    left: 0,
    fontSize: 14,
    letterSpacing: -0.4,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: "DM Sans",
    color: "#959595",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 305,
  },
  rectangleView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 6,
    backgroundColor: "#f8f8f8",
    width: 305,
    height: 44,
  },
  shapeIcon: {
    position: "absolute",
    top: 15,
    left: 17.43,
    width: 19.92,
    height: 14,
  },
  httpsui8net7673Text: {
    position: "absolute",
    top: 10,
    left: 41.08,
    fontSize: 16,
    letterSpacing: -0.4,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "center",
    width: 225.33,
  },
  shareLinkView: {
    position: "absolute",
    top: 96,
    left: 0,
    width: 305,
    height: 44,
  },
  referToFriend: {
    position: "absolute",
    top: 423,
    left: 35,
    width: 305,
    height: 140,
  },
  baseView1: {
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
  text1: {
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
    top: 733,
    left: 35,
    backgroundColor: "#fff",
    width: 305,
    height: 44,
  },
  icon1: {
    position: "absolute",
    top: 238,
    left: 119,
    width: 135,
    height: 145,
  },
  inviteFriendsView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default InviteFriends;
