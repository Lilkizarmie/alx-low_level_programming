import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

const InTransit1 = () => {
  return (
    <View style={styles.inTransitView}>
      <View style={styles.lineView} />
      <View style={styles.lineView1} />
      <View style={styles.bodyView}>
        <View style={styles.buttonView}>
          <View style={styles.itemView}>
            <View style={styles.baseView} />
            <Image
              style={styles.iconsArrowsarrowLongLeft}
              resizeMode="cover"
              source={require("../assets/-icon--l1.png")}
            />
            <Text style={styles.text}>sEE ALL ORDERS</Text>
          </View>
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
          <Text style={styles.titleText}>Delivery Status</Text>
        </View>
      </View>
      <View style={styles.cardProcessView}>
        <Text style={styles.pM2June2022}>11.45 PM, 2 June 2022</Text>
        <Image
          style={styles.groupIcon}
          resizeMode="cover"
          source={require("../assets/group-68551.png")}
        />
        <Image
          style={styles.checkIcon}
          resizeMode="cover"
          source={require("../assets/check1.png")}
        />
        <Text style={styles.orderProcessedText}>Order Processed</Text>
        <Image
          style={styles.scheduleIcon}
          resizeMode="cover"
          source={require("../assets/schedule.png")}
        />
      </View>
      <Text style={styles.estimatedDeliveryTime}>Estimated Delivery time</Text>
      <View style={styles.cardTransitView}>
        <Image
          style={styles.containerIcon}
          resizeMode="cover"
          source={require("../assets/group-68551.png")}
        />
        <View style={styles.groupView}>
          <Text style={styles.reachedDestinationText}>Reached Destination</Text>
          <Text style={styles.pM2June20221}>11.45 PM, 2 June 2022</Text>
          <Image
            style={styles.scheduleIcon1}
            resizeMode="cover"
            source={require("../assets/schedule5.png")}
          />
        </View>
        <Image
          style={styles.checkIcon1}
          resizeMode="cover"
          source={require("../assets/check1.png")}
        />
      </View>
      <Text style={styles.june20220530PM}>12 June 2022 - 05:30 PM</Text>
      <Text style={styles.orderText}>Order</Text>
      <Text style={styles.cS1020Text}> #CS1020</Text>
      <Text style={styles.parcel25kgText}>Parcel, 25kg</Text>
      <View style={styles.lineView2} />
      <View style={styles.cardSentView}>
        <Image
          style={styles.containerIcon1}
          resizeMode="cover"
          source={require("../assets/group-68551.png")}
        />
        <View style={styles.groupView2}>
          <View style={styles.groupView1}>
            <Text style={styles.lastMileDispatch}>Last mile Dispatch</Text>
            <Text style={styles.pM2June20222}>11.45 PM, 2 June 2022</Text>
          </View>
          <Image
            style={styles.scheduleIcon2}
            resizeMode="cover"
            source={require("../assets/schedule5.png")}
          />
        </View>
        <Image
          style={styles.checkIcon2}
          resizeMode="cover"
          source={require("../assets/check1.png")}
        />
      </View>
      <View style={styles.groupView4}>
        <Image
          style={styles.groupIcon1}
          resizeMode="cover"
          source={require("../assets/group-68573.png")}
        />
        <View style={styles.groupView3}>
          <Text style={styles.pM2June20223}>11.45 PM, 2 June 2022</Text>
          <Text style={styles.packageDeliveryText}>Package Delivery</Text>
          <Image
            style={styles.scheduleIcon3}
            resizeMode="cover"
            source={require("../assets/schedule5.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  lineView: {
    position: "absolute",
    top: 332.5,
    left: 62.5,
    borderStyle: "dashed",
    borderColor: "#718096",
    borderRadius: 0.001,
    borderRightWidth: 1,
    width: 1,
    height: 88,
  },
  lineView1: {
    position: "absolute",
    top: 430.5,
    left: 62.5,
    borderStyle: "dashed",
    borderColor: "#718096",
    borderRadius: 0.001,
    borderRightWidth: 1,
    width: 1,
    height: 88,
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
  text: {
    position: "absolute",
    transform: [
      {
        translateY: -10,
      },
    ],
    top: "50%",
    right: 97,
    left: 99,
    fontSize: 12,
    letterSpacing: 1,
    lineHeight: 20,
    textTransform: "uppercase",
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#fff",
    textAlign: "center",
  },
  itemView: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 305,
    height: 44,
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
    top: 734,
    left: 35,
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
  pM2June2022: {
    position: "absolute",
    height: "28.57%",
    width: "39.67%",
    top: "58.93%",
    right: "30.82%",
    bottom: "12.5%",
    left: "29.51%",
    fontSize: 12,
    fontWeight: "500",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "right",
  },
  groupIcon: {
    position: "absolute",
    height: "100%",
    width: "18.36%",
    top: "0%",
    right: "81.64%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  checkIcon: {
    position: "absolute",
    height: "64.29%",
    width: "11.8%",
    top: "17.86%",
    right: "84.92%",
    bottom: "17.86%",
    left: "3.28%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  orderProcessedText: {
    position: "absolute",
    height: "32.14%",
    width: "37.7%",
    top: "16.07%",
    right: "40%",
    bottom: "51.79%",
    left: "22.3%",
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "center",
  },
  scheduleIcon: {
    position: "absolute",
    height: "28.57%",
    width: "5.25%",
    top: "58.93%",
    right: "72.46%",
    bottom: "12.5%",
    left: "22.3%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  cardProcessView: {
    position: "absolute",
    top: 301,
    left: 35,
    width: 305,
    height: 56,
  },
  estimatedDeliveryTime: {
    position: "absolute",
    top: 124,
    left: 122,
    fontSize: 12,
    fontFamily: "DM Sans",
    color: "#000",
    textAlign: "right",
  },
  containerIcon: {
    position: "absolute",
    height: "100%",
    width: "18.36%",
    top: "0%",
    right: "81.64%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  reachedDestinationText: {
    position: "absolute",
    height: "45%",
    width: "98.6%",
    top: "0%",
    right: "1.4%",
    bottom: "55%",
    left: "0%",
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
  },
  pM2June20221: {
    position: "absolute",
    height: "40%",
    width: "84.62%",
    top: "60%",
    right: "0%",
    bottom: "0%",
    left: "15.38%",
    fontSize: 12,
    fontWeight: "500",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "right",
  },
  scheduleIcon1: {
    position: "absolute",
    height: "40%",
    width: "11.19%",
    top: "60%",
    right: "88.81%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  groupView: {
    position: "absolute",
    height: "71.43%",
    width: "46.89%",
    top: "16.07%",
    right: "30.82%",
    bottom: "12.5%",
    left: "22.3%",
  },
  checkIcon1: {
    position: "absolute",
    height: "64.29%",
    width: "11.8%",
    top: "17.86%",
    right: "84.92%",
    bottom: "17.86%",
    left: "3.28%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  cardTransitView: {
    position: "absolute",
    top: 397,
    left: 35,
    width: 305,
    height: 56,
  },
  june20220530PM: {
    position: "absolute",
    top: 146,
    left: 55,
    fontSize: 24,
    letterSpacing: -0.8,
    lineHeight: 32,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "center",
  },
  orderText: {
    position: "absolute",
    top: 230,
    left: 35,
    fontSize: 18,
    fontWeight: "500",
    fontFamily: "DM Sans",
    color: "#000",
    textAlign: "right",
  },
  cS1020Text: {
    position: "absolute",
    top: 230,
    left: 91,
    fontSize: 18,
    fontWeight: "500",
    fontFamily: "DM Sans",
    color: "#000",
    textAlign: "right",
  },
  parcel25kgText: {
    position: "absolute",
    height: "2.22%",
    width: "20.53%",
    top: "28.82%",
    right: "9.33%",
    bottom: "68.97%",
    left: "70.13%",
    fontSize: 14,
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
  },
  lineView2: {
    position: "absolute",
    top: 515.5,
    left: 62.5,
    borderStyle: "dashed",
    borderColor: "#718096",
    borderRadius: 0.001,
    borderRightWidth: 1,
    width: 1,
    height: 88,
  },
  containerIcon1: {
    position: "absolute",
    height: "100%",
    width: "18.36%",
    top: "0%",
    right: "81.64%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  lastMileDispatch: {
    position: "absolute",
    height: "45%",
    width: "88.11%",
    top: "0%",
    right: "11.89%",
    bottom: "55%",
    left: "0%",
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
  },
  pM2June20222: {
    position: "absolute",
    height: "40%",
    width: "84.62%",
    top: "60%",
    right: "0%",
    bottom: "0%",
    left: "15.38%",
    fontSize: 12,
    fontWeight: "500",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "right",
  },
  groupView1: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  scheduleIcon2: {
    position: "absolute",
    height: "40%",
    width: "11.19%",
    top: "60%",
    right: "88.81%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  groupView2: {
    position: "absolute",
    height: "71.43%",
    width: "46.89%",
    top: "16.07%",
    right: "30.82%",
    bottom: "12.5%",
    left: "22.3%",
  },
  checkIcon2: {
    position: "absolute",
    height: "64.29%",
    width: "11.8%",
    top: "17.86%",
    right: "84.92%",
    bottom: "17.86%",
    left: "3.28%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  cardSentView: {
    position: "absolute",
    top: 493,
    left: 35,
    width: 305,
    height: 56,
  },
  groupIcon1: {
    position: "absolute",
    height: "100%",
    width: "26.54%",
    top: "0%",
    right: "73.46%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  pM2June20223: {
    position: "absolute",
    height: "40%",
    width: "84.62%",
    top: "60%",
    right: "0%",
    bottom: "0%",
    left: "15.38%",
    fontSize: 12,
    fontWeight: "500",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "right",
  },
  packageDeliveryText: {
    position: "absolute",
    height: "45%",
    width: "81.12%",
    top: "0%",
    right: "18.18%",
    bottom: "55%",
    left: "0.7%",
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "center",
  },
  scheduleIcon3: {
    position: "absolute",
    height: "40%",
    width: "11.19%",
    top: "60%",
    right: "88.81%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  groupView3: {
    position: "absolute",
    height: "71.43%",
    width: "67.77%",
    top: "16.07%",
    right: "0%",
    bottom: "12.5%",
    left: "32.23%",
  },
  groupView4: {
    position: "absolute",
    height: "6.9%",
    width: "56.27%",
    top: "72.54%",
    right: "34.4%",
    bottom: "20.57%",
    left: "9.33%",
  },
  inTransitView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default InTransit1;
