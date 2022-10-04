import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

const PaymentSuccessful = () => {
  return (
    <View style={styles.paymentSuccessfulView}>
      <View style={styles.bodyView}>
        <View style={styles.barsHomeIndicatorIPhone}>
          <View style={styles.homeIndicatorView} />
        </View>
        <View style={styles.buttonView}>
          <View style={styles.baseView} />
          <Image
            style={styles.iconsArrowsarrowLongRight}
            resizeMode="cover"
            source={require("../assets/iconsarrowsarrowlongright.png")}
          />
          <Text style={styles.text}>See order details</Text>
        </View>
        <View style={styles.productsView}>
          <View style={styles.itemView}>
            <Image
              style={styles.baseIcon}
              resizeMode="cover"
              source={require("../assets/base15.png")}
            />
            <Image
              style={styles.imageIcon}
              resizeMode="cover"
              source={require("../assets/-image5.png")}
            />
            <Text style={styles.beoplayHText}>
              ADIDAS X LEGO® SPORT PRO SHOES
            </Text>
          </View>
          <View style={styles.itemView1}>
            <Image
              style={styles.baseIcon1}
              resizeMode="cover"
              source={require("../assets/base15.png")}
            />
            <Image
              style={styles.imageIcon1}
              resizeMode="cover"
              source={require("../assets/-image6.png")}
            />
            <Text style={styles.beoplayA9Text}>
              ADIDAS X LEGO® SPORT PRO SHOES
            </Text>
          </View>
          <View style={styles.itemView2}>
            <Image
              style={styles.baseIcon2}
              resizeMode="cover"
              source={require("../assets/base15.png")}
            />
            <Image
              style={styles.imageIcon2}
              resizeMode="cover"
              source={require("../assets/-image7.png")}
            />
            <Text style={styles.beosoundText}>
              ADIDAS X LEGO® SPORT PRO SHOES
            </Text>
          </View>
          <View style={styles.itemView3}>
            <Image
              style={styles.baseIcon3}
              resizeMode="cover"
              source={require("../assets/base15.png")}
            />
            <Image
              style={styles.imageIcon3}
              resizeMode="cover"
              source={require("../assets/-image8.png")}
            />
            <Text style={styles.beosound1Text}>
              ADIDAS X LEGO® SPORT PRO SHOES
            </Text>
          </View>
        </View>
        <View style={styles.topView}>
          <View style={styles.lineView} />
          <Text style={styles.ordersWillArriveI}>
            You have successfully made an order
          </Text>
          <Text style={styles.paymentSuccessfulText}>Payment Successful!</Text>
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/icon5.png")}
          />
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
          <Text style={styles.titleText}>Order Complete</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homeIndicatorView: {
    position: "absolute",
    transform: [
      {
        translateX: -66.5,
      },
    ],
    bottom: 8,
    left: "50%",
    borderRadius: 100,
    backgroundColor: "#000",
    width: 134,
    height: 5,
    display: "none",
  },
  barsHomeIndicatorIPhone: {
    position: "absolute",
    top: 540,
    left: 0,
    width: 375,
    height: 34,
    opacity: 0.05,
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
    right: 87,
    left: 88,
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
    top: 496,
    left: 35,
    width: 305,
    height: 44,
  },
  baseIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 16,
    width: 64,
    height: 64,
  },
  imageIcon: {
    position: "absolute",
    top: 8,
    left: 8,
    borderRadius: 8,
    width: 48,
    height: 48,
  },
  beoplayHText: {
    position: "absolute",
    top: 72,
    left: 0,
    fontSize: 12,
    letterSpacing: -0.4,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "center",
    width: 64,
  },
  itemView: {
    position: "absolute",
    top: 0,
    left: 162,
    width: 64,
    height: 152,
  },
  baseIcon1: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 16,
    width: 64,
    height: 64,
  },
  imageIcon1: {
    position: "absolute",
    top: 8,
    left: 8,
    borderRadius: 8,
    width: 48,
    height: 48,
  },
  beoplayA9Text: {
    position: "absolute",
    top: 72,
    left: 0,
    fontSize: 12,
    letterSpacing: -0.4,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "center",
    width: 64,
  },
  itemView1: {
    position: "absolute",
    top: 0,
    left: 243,
    width: 64,
    height: 152,
  },
  baseIcon2: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 16,
    width: 64,
    height: 64,
  },
  imageIcon2: {
    position: "absolute",
    top: 8,
    left: 8,
    borderRadius: 8,
    width: 48,
    height: 48,
  },
  beosoundText: {
    position: "absolute",
    top: 72,
    left: 0,
    fontSize: 12,
    letterSpacing: -0.4,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "center",
    width: 64,
  },
  itemView2: {
    position: "absolute",
    top: 0,
    left: 81,
    width: 64,
    height: 152,
  },
  baseIcon3: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 16,
    width: 64,
    height: 64,
  },
  imageIcon3: {
    position: "absolute",
    top: 8,
    left: 8,
    borderRadius: 8,
    width: 48,
    height: 48,
  },
  beosound1Text: {
    position: "absolute",
    top: 72,
    left: 0,
    fontSize: 12,
    letterSpacing: -0.4,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "center",
    width: 64,
  },
  itemView3: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 64,
    height: 152,
  },
  productsView: {
    position: "absolute",
    top: 245,
    left: 34,
    width: 307,
    height: 152,
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
  ordersWillArriveI: {
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
  paymentSuccessfulText: {
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
  topView: {
    position: "absolute",
    height: "35.71%",
    top: "0%",
    right: 0,
    bottom: "64.29%",
    left: 0,
  },
  bodyView: {
    position: "absolute",
    top: 238,
    left: 0,
    width: 375,
    height: 574,
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
  paymentSuccessfulView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default PaymentSuccessful;
