import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import StartBtn from "../components/StartBtn";

const AccountCreated = () => {
  return (
    <View style={styles.accountCreated}>
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
        <Image
          style={styles.iconsArrowsarrowLongLeft}
          resizeMode="cover"
          source={require("../assets/iconsarrowsarrowlongleft1.png")}
        />
      </View>
      <StartBtn />
      <View style={styles.confettiView12}>
        <Image
          style={styles.confettiIcon}
          resizeMode="cover"
          source={require("../assets/confetti.png")}
        />
        <Image
          style={styles.confettiIcon1}
          resizeMode="cover"
          source={require("../assets/confetti1.png")}
        />
        <Image
          style={styles.confettiIcon2}
          resizeMode="cover"
          source={require("../assets/confetti2.png")}
        />
        <Image
          style={styles.confettiIcon3}
          resizeMode="cover"
          source={require("../assets/confetti3.png")}
        />
        <Image
          style={styles.confettiIcon4}
          resizeMode="cover"
          source={require("../assets/confetti4.png")}
        />
        <Image
          style={styles.confettiIcon5}
          resizeMode="cover"
          source={require("../assets/confetti4.png")}
        />
        <Image
          style={styles.confettiIcon6}
          resizeMode="cover"
          source={require("../assets/confetti1.png")}
        />
        <Image
          style={styles.confettiIcon7}
          resizeMode="cover"
          source={require("../assets/confetti3.png")}
        />
        <Image
          style={styles.confettiIcon8}
          resizeMode="cover"
          source={require("../assets/confetti.png")}
        />
        <Image
          style={styles.confettiIcon9}
          resizeMode="cover"
          source={require("../assets/confetti4.png")}
        />
        <Image
          style={styles.confettiIcon10}
          resizeMode="cover"
          source={require("../assets/confetti10.png")}
        />
        <View style={styles.confettiView} />
        <View style={styles.confettiView1} />
        <View style={styles.confettiView2} />
        <View style={styles.confettiView3} />
        <View style={styles.confettiView4} />
        <View style={styles.confettiView5} />
        <View style={styles.confettiView6} />
        <View style={styles.confettiView7} />
        <View style={styles.confettiView8} />
        <View style={styles.confettiView9} />
        <View style={styles.confettiView10} />
        <View style={styles.confettiView11} />
        <View style={styles.groupView}>
          <Text style={styles.uniqueWatchesFrom}>Account created</Text>
          <Text style={styles.uniqueWatchesFrom1}>
            Registration completed successfully. Waste no time and start
            shopping.
          </Text>
          <Image
            style={styles.frameIcon}
            resizeMode="cover"
            source={require("../assets/frame.png")}
          />
        </View>
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
    display: "none",
  },
  barsTopBarsV1View: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#fff",
    width: 375,
    height: 100,
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
  topBarView: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 375,
    height: 100,
  },
  confettiIcon: {
    position: "absolute",
    top: 67,
    left: 89,
    width: 10,
    height: 10,
  },
  confettiIcon1: {
    position: "absolute",
    top: 464.89,
    left: 249.89,
    width: 10,
    height: 10,
  },
  confettiIcon2: {
    position: "absolute",
    top: 137,
    left: 194,
    width: 10,
    height: 10,
  },
  confettiIcon3: {
    position: "absolute",
    top: 479.89,
    left: 188.89,
    width: 10,
    height: 10,
  },
  confettiIcon4: {
    position: "absolute",
    top: 183,
    left: 71,
    width: 10,
    height: 10,
  },
  confettiIcon5: {
    position: "absolute",
    top: 23,
    left: 234,
    width: 10,
    height: 10,
  },
  confettiIcon6: {
    position: "absolute",
    top: 267.89,
    left: 20.89,
    width: 10,
    height: 10,
  },
  confettiIcon7: {
    position: "absolute",
    top: 15.89,
    left: 306.89,
    width: 10,
    height: 10,
  },
  confettiIcon8: {
    position: "absolute",
    top: 279,
    left: 267,
    width: 10,
    height: 10,
  },
  confettiIcon9: {
    position: "absolute",
    top: 407,
    left: 0,
    width: 10,
    height: 10,
  },
  confettiIcon10: {
    position: "absolute",
    top: 226.89,
    left: 124.89,
    width: 10,
    height: 10,
  },
  confettiView: {
    position: "absolute",
    top: 100.16,
    left: 91.8,
    borderRadius: 5,
    backgroundColor: "#4269f2",
    width: 5,
    height: 20,
    transform: [
      {
        rotate: "45deg",
      },
    ],
  },
  confettiView1: {
    position: "absolute",
    top: 234.61,
    left: 308.87,
    borderRadius: 5,
    backgroundColor: "#fe8668",
    width: 5,
    height: 20,
    transform: [
      {
        rotate: "-167.03deg",
      },
    ],
  },
  confettiView2: {
    position: "absolute",
    top: 214.67,
    left: 234.75,
    borderRadius: 5,
    backgroundColor: "#fdbc1f",
    width: 5,
    height: 20,
    transform: [
      {
        rotate: "119.96deg",
      },
    ],
  },
  confettiView3: {
    position: "absolute",
    top: 423.72,
    left: 289.18,
    borderRadius: 5,
    backgroundColor: "#fdbc1f",
    width: 5,
    height: 20,
    transform: [
      {
        rotate: "-92.07deg",
      },
    ],
  },
  confettiView4: {
    position: "absolute",
    top: 0,
    left: 16.44,
    borderRadius: 5,
    backgroundColor: "#4269f2",
    width: 5,
    height: 20,
    transform: [
      {
        rotate: "55.28deg",
      },
    ],
  },
  confettiView5: {
    position: "absolute",
    top: 52.51,
    left: 220.92,
    borderRadius: 5,
    backgroundColor: "#ffe202",
    width: 5,
    height: 20,
    transform: [
      {
        rotate: "108.29deg",
      },
    ],
  },
  confettiView6: {
    position: "absolute",
    top: 23.35,
    left: 138.59,
    borderRadius: 5,
    backgroundColor: "#fdbc1f",
    width: 5,
    height: 20,
    transform: [
      {
        rotate: "-156.75deg",
      },
    ],
  },
  confettiView7: {
    position: "absolute",
    top: 58.01,
    left: 297.92,
    borderRadius: 5,
    backgroundColor: "#4269f2",
    width: 5,
    height: 20,
    transform: [
      {
        rotate: "99.9deg",
      },
    ],
  },
  confettiView8: {
    position: "absolute",
    top: 159.44,
    left: 29.56,
    borderRadius: 5,
    backgroundColor: "#30d6b0",
    width: 5,
    height: 20,
    transform: [
      {
        rotate: "99.9deg",
      },
    ],
  },
  confettiView9: {
    position: "absolute",
    top: 251.17,
    left: 77.88,
    borderRadius: 5,
    backgroundColor: "#4269f2",
    width: 5,
    height: 20,
    transform: [
      {
        rotate: "-112.14deg",
      },
    ],
  },
  confettiView10: {
    position: "absolute",
    top: 430.36,
    left: 84.44,
    borderRadius: 5,
    backgroundColor: "#ffe202",
    width: 5,
    height: 20,
    transform: [
      {
        rotate: "111.6deg",
      },
    ],
  },
  confettiView11: {
    position: "absolute",
    top: 186.54,
    left: 130.91,
    borderRadius: 5,
    backgroundColor: "#fe8668",
    width: 5,
    height: 20,
    transform: [
      {
        rotate: "-100.43deg",
      },
    ],
  },
  uniqueWatchesFrom: {
    position: "absolute",
    height: "9.62%",
    width: "100%",
    top: "50%",
    right: "0%",
    bottom: "40.38%",
    left: "0%",
    fontSize: 24,
    letterSpacing: 1.2,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#212121",
    textAlign: "center",
  },
  uniqueWatchesFrom1: {
    position: "absolute",
    height: "34.62%",
    width: "79.02%",
    top: "65.38%",
    right: "10.49%",
    bottom: "0%",
    left: "10.49%",
    fontSize: 16,
    letterSpacing: 0.3,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: "DM Sans",
    color: "#959595",
    textAlign: "center",
  },
  frameIcon: {
    position: "absolute",
    top: 0,
    left: 113,
    width: 80,
    height: 80,
    overflow: "hidden",
  },
  groupView: {
    position: "absolute",
    height: "42.3%",
    width: "95.68%",
    top: "49.41%",
    right: "2.13%",
    bottom: "8.29%",
    left: "2.2%",
  },
  confettiView12: {
    position: "absolute",
    top: 124,
    left: 29,
    width: 318.78,
    height: 491.78,
  },
  accountCreated: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default AccountCreated;
