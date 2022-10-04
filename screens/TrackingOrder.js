import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

const TrackingOrder = () => {
  return (
    <View style={styles.trackingOrderView}>
      <View style={styles.settingView}>
        <View style={styles.itemView}>
          <View style={styles.lineView} />
          <Image
            style={styles.iconR}
            resizeMode="cover"
            source={require("../assets/-icon--r1.png")}
          />
          <Image
            style={styles.iconL}
            resizeMode="cover"
            source={require("../assets/-menu-3.png")}
          />
          <Text style={styles.editYourInformatio}>Edit your informations</Text>
          <Text style={styles.myAccountText}>My Account</Text>
        </View>
      </View>
      <View style={styles.tabBarView}>
        <Image
          style={styles.baseIcon}
          resizeMode="cover"
          source={require("../assets/base22.png")}
        />
        <View style={styles.barsHomeIndicatorIPhone}>
          <View style={styles.homeIndicatorView} />
        </View>
        <View style={styles.activeView}>
          <View style={styles.baseView} />
          <Text style={styles.userText}>User</Text>
          <Image
            style={styles.menu4Icon}
            resizeMode="cover"
            source={require("../assets/-menu-4.png")}
          />
        </View>
        <View style={styles.menu3View}>
          <Image
            style={styles.shoppingBagIcon}
            resizeMode="cover"
            source={require("../assets/shoppingbag.png")}
          />
          <Image
            style={styles.pathIcon}
            resizeMode="cover"
            source={require("../assets/path1.png")}
          />
          <View style={styles.counterBubbleView}>
            <Image
              style={styles.fondIcon}
              resizeMode="cover"
              source={require("../assets/fond.png")}
            />
            <Text style={styles.counterText}>1</Text>
          </View>
        </View>
        <Image
          style={styles.menu2Icon}
          resizeMode="cover"
          source={require("../assets/iconsothersearch1.png")}
        />
        <Image
          style={styles.menu1Icon}
          resizeMode="cover"
          source={require("../assets/-menu-17.png")}
        />
      </View>
      <View style={styles.topView}>
        <View style={styles.baseView1} />
        <View style={styles.orderView}>
          <View style={styles.baseView2} />
          <View style={styles.statusView}>
            <View style={styles.buttonView}>
              <View style={styles.baseView3} />
              <Text style={styles.text}>track</Text>
            </View>
            <Text style={styles.ordersWillArriveI}>
              Orders will arrive in 3 days!
            </Text>
            <Text style={styles.yourOrderIsOnIts}>
              Your order is on its way!
            </Text>
          </View>
          <View style={styles.productsView}>
            <View style={styles.lineView1} />
            <View style={styles.itemView1}>
              <Image
                style={styles.baseIcon1}
                resizeMode="cover"
                source={require("../assets/base19.png")}
              />
              <Image
                style={styles.imageIcon}
                resizeMode="cover"
                source={require("../assets/-image9.png")}
              />
              <Text style={styles.beoplayHText}>Beoplay H…</Text>
            </View>
            <View style={styles.itemView2}>
              <Image
                style={styles.baseIcon2}
                resizeMode="cover"
                source={require("../assets/base19.png")}
              />
              <Image
                style={styles.imageIcon1}
                resizeMode="cover"
                source={require("../assets/-image13.png")}
              />
              <Text style={styles.beosoundText}>Beosound…</Text>
            </View>
            <View style={styles.itemView3}>
              <Image
                style={styles.baseIcon3}
                resizeMode="cover"
                source={require("../assets/base19.png")}
              />
              <Image
                style={styles.imageIcon2}
                resizeMode="cover"
                source={require("../assets/-image11.png")}
              />
              <Text style={styles.beosound1Text}>Beosound 1</Text>
            </View>
          </View>
          <View style={styles.titleView}>
            <View style={styles.lineView2} />
            <Text style={styles.inProgressText}>• In Progress</Text>
            <Text style={styles.orderCS1020Text}>Order #CS1020</Text>
          </View>
        </View>
        <View style={styles.topBarView}>
          <View style={styles.userView}>
            <Text style={styles.hellocarrotlabsgmaText}>
              Adekosowo@gmail.com
            </Text>
            <Text style={styles.adeKosowoText}>Ade Kosowo</Text>
          </View>
          <View style={styles.barsStatusBariPhoneLightView}>
            <View style={styles.batteryView}>
              <View style={styles.borderView} />
              <Image
                style={styles.capIcon}
                resizeMode="cover"
                source={require("../assets/cap15.png")}
              />
              <View style={styles.capacityView} />
            </View>
            <Image
              style={styles.wifiIcon}
              resizeMode="cover"
              source={require("../assets/wifi15.png")}
            />
            <Image
              style={styles.cellularConnectionIcon}
              resizeMode="cover"
              source={require("../assets/cellular-connection15.png")}
            />
            <View style={styles.timeStyleView}>
              <Text style={styles.timeText}>9:41</Text>
            </View>
          </View>
        </View>
        <Image
          style={styles.avatar48pxIcon}
          resizeMode="cover"
          source={require("../assets/avatar48px.png")}
        />
      </View>
      <View style={styles.frontLayerView}>
        <View style={styles.overlayView} />
        <View style={styles.contentView}>
          <View style={styles.baseView4} />
          <View style={styles.buttonView1}>
            <View style={styles.baseView5} />
            <Text style={styles.text1}>Track Order</Text>
          </View>
          <View style={styles.imputCodeView}>
            <View style={styles.lineView3} />
            <Image
              style={styles.iconsOthersearch}
              resizeMode="cover"
              source={require("../assets/iconsothersearch1.png")}
            />
            <Text style={styles.placeholderText}>Enter code</Text>
          </View>
          <View style={styles.topView1}>
            <View style={styles.lineView4} />
            <Text style={styles.enterUpTo25Track}>
              Enter up to 25 tracking numbers, one per line.
            </Text>
            <Text style={styles.trackingOrderText}>Tracking Order</Text>
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/icon7.png")}
            />
          </View>
          <View style={styles.lineView5} />
        </View>
      </View>
      <View style={styles.avatarView} />
    </View>
  );
};

const styles = StyleSheet.create({
  lineView: {
    position: "absolute",
    height: "1.54%",
    top: "98.46%",
    right: 0,
    bottom: "0%",
    left: 0,
    backgroundColor: "#8f92a1",
    opacity: 0.2,
  },
  iconR: {
    position: "absolute",
    height: "36.92%",
    width: "7.87%",
    top: "18.46%",
    right: "0%",
    bottom: "44.62%",
    left: "92.13%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  iconL: {
    position: "absolute",
    height: "36.92%",
    width: "7.87%",
    top: "18.46%",
    right: "92.13%",
    bottom: "44.62%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  editYourInformatio: {
    position: "absolute",
    height: "30.77%",
    width: "65.9%",
    top: "43.08%",
    right: "20.98%",
    bottom: "26.15%",
    left: "13.11%",
    fontSize: 12,
    letterSpacing: -0.4,
    lineHeight: 20,
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
    opacity: 0.6,
  },
  myAccountText: {
    position: "absolute",
    transform: [
      {
        translateY: -32.5,
      },
    ],
    width: "65.9%",
    top: "50%",
    right: "20.98%",
    left: "13.11%",
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
    height: "100%",
    top: "0%",
    right: 0,
    bottom: "0%",
    left: 0,
  },
  settingView: {
    position: "absolute",
    height: "8%",
    top: "74.01%",
    right: 35,
    bottom: "17.98%",
    left: 35,
  },
  baseIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 375,
    height: 114,
  },
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
  },
  barsHomeIndicatorIPhone: {
    position: "absolute",
    top: 80,
    left: 0,
    width: 375,
    height: 34,
    opacity: 0.05,
  },
  baseView: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 20,
    backgroundColor: "#171717",
  },
  userText: {
    position: "absolute",
    transform: [
      {
        translateY: -10,
      },
    ],
    width: "28.41%",
    top: "50%",
    right: "21.59%",
    left: "50%",
    fontSize: 12,
    letterSpacing: -0.6,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
  },
  menu4Icon: {
    position: "absolute",
    height: "60%",
    width: "27.27%",
    top: "20%",
    right: "59.09%",
    bottom: "20%",
    left: "13.64%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  activeView: {
    position: "absolute",
    height: "35.09%",
    width: "23.47%",
    top: "21.05%",
    right: "4%",
    bottom: "43.86%",
    left: "72.53%",
  },
  shoppingBagIcon: {
    position: "relative",
    width: 20,
    height: 20,
  },
  pathIcon: {
    position: "absolute",
    height: "25%",
    width: "41.67%",
    top: "25%",
    right: "29.17%",
    bottom: "50%",
    left: "29.17%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  fondIcon: {
    position: "absolute",
    transform: [
      {
        translateY: -8,
      },
      {
        translateX: -8,
      },
    ],
    top: "50%",
    left: "50%",
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  counterText: {
    position: "absolute",
    height: "62.5%",
    width: "100%",
    top: "18.75%",
    right: "0%",
    bottom: "18.75%",
    left: "0%",
    fontSize: 8,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#fff",
    textAlign: "center",
  },
  counterBubbleView: {
    position: "absolute",
    height: "66.67%",
    width: "66.67%",
    top: "45.83%",
    right: "-12.5%",
    bottom: "-12.5%",
    left: "45.83%",
    display: "none",
  },
  menu3View: {
    position: "absolute",
    top: 32,
    left: 193,
    width: 24,
    height: 24,
  },
  menu2Icon: {
    position: "absolute",
    top: 32,
    left: 114,
    width: 24,
    height: 24,
  },
  menu1Icon: {
    position: "absolute",
    top: 32,
    left: 35,
    width: 24,
    height: 24,
  },
  tabBarView: {
    position: "absolute",
    top: 698,
    left: 0,
    width: 375,
    height: 114,
  },
  baseView1: {
    position: "absolute",
    top: 0,
    left: 0,
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
    backgroundColor: "#171717",
    width: 375,
    height: 553,
  },
  baseView2: {
    position: "absolute",
    transform: [
      {
        translateY: -156.5,
      },
    ],
    top: "50%",
    right: 0,
    left: 0,
    borderRadius: 12,
    backgroundColor: "#fff",
    height: 313,
  },
  baseView3: {
    position: "absolute",
    height: "100%",
    top: "0%",
    right: 0,
    bottom: "0%",
    left: 0,
    borderRadius: 6,
    backgroundColor: "#171717",
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
    color: "#fff",
    textAlign: "center",
  },
  buttonView: {
    position: "absolute",
    height: "31.07%",
    width: "56.42%",
    top: "68.93%",
    right: "21.79%",
    bottom: "0%",
    left: "21.79%",
  },
  ordersWillArriveI: {
    position: "absolute",
    height: "19.42%",
    width: "100%",
    top: "26.21%",
    right: "0%",
    bottom: "54.37%",
    left: "0%",
    fontSize: 12,
    letterSpacing: -0.4,
    lineHeight: 20,
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "center",
    opacity: 0.6,
  },
  yourOrderIsOnIts: {
    position: "absolute",
    transform: [
      {
        translateY: -51.5,
      },
    ],
    width: "100%",
    top: "50%",
    right: "0%",
    left: "0%",
    fontSize: 14,
    letterSpacing: -0.4,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "center",
  },
  statusView: {
    position: "absolute",
    height: "32.91%",
    width: "84.26%",
    top: "61.98%",
    right: "7.87%",
    bottom: "5.11%",
    left: "7.87%",
  },
  lineView1: {
    position: "absolute",
    height: "0.92%",
    top: "99.08%",
    right: 0,
    bottom: "0%",
    left: 0,
    backgroundColor: "#f3f6f8",
  },
  baseIcon1: {
    position: "absolute",
    height: "69.57%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "30.43%",
    left: "0%",
    borderRadius: 16,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  imageIcon: {
    position: "absolute",
    height: "69.57%",
    width: "79.75%",
    top: "0%",
    right: "10.13%",
    bottom: "30.43%",
    left: "10.13%",
    borderRadius: 8,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  beoplayHText: {
    position: "absolute",
    height: "21.74%",
    width: "100%",
    top: "78.26%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    fontSize: 12,
    letterSpacing: -0.4,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "center",
  },
  itemView1: {
    position: "absolute",
    height: "84.4%",
    width: "25.9%",
    top: "0%",
    right: "7.87%",
    bottom: "15.6%",
    left: "66.23%",
  },
  baseIcon2: {
    position: "absolute",
    height: "69.57%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "30.43%",
    left: "0%",
    borderRadius: 16,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  imageIcon1: {
    position: "absolute",
    height: "69.57%",
    width: "79.75%",
    top: "0%",
    right: "10.13%",
    bottom: "30.43%",
    left: "10.13%",
    borderRadius: 8,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  beosoundText: {
    position: "absolute",
    height: "21.74%",
    width: "100%",
    top: "78.26%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    fontSize: 12,
    letterSpacing: -0.4,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "center",
  },
  itemView2: {
    position: "absolute",
    height: "84.4%",
    width: "25.9%",
    top: "0%",
    right: "37.05%",
    bottom: "15.6%",
    left: "37.05%",
  },
  baseIcon3: {
    position: "absolute",
    height: "69.57%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "30.43%",
    left: "0%",
    borderRadius: 16,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  imageIcon2: {
    position: "absolute",
    height: "69.57%",
    width: "79.75%",
    top: "0%",
    right: "10.13%",
    bottom: "30.43%",
    left: "10.13%",
    borderRadius: 8,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  beosound1Text: {
    position: "absolute",
    height: "21.74%",
    width: "100%",
    top: "78.26%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    fontSize: 12,
    letterSpacing: -0.4,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "center",
  },
  itemView3: {
    position: "absolute",
    height: "84.4%",
    width: "25.9%",
    top: "0%",
    right: "66.23%",
    bottom: "15.6%",
    left: "7.87%",
  },
  productsView: {
    position: "absolute",
    height: "34.82%",
    top: "22.04%",
    right: 0,
    bottom: "43.13%",
    left: 0,
  },
  lineView2: {
    position: "absolute",
    height: "2.7%",
    top: "97.3%",
    right: 0,
    bottom: "0%",
    left: 0,
    backgroundColor: "#f3f6f8",
  },
  inProgressText: {
    position: "absolute",
    transform: [
      {
        translateY: -18.5,
      },
    ],
    width: "39.67%",
    top: "50%",
    right: "7.87%",
    left: "52.46%",
    fontSize: 10,
    letterSpacing: 0.8,
    lineHeight: 20,
    textTransform: "uppercase",
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#9923ff",
    textAlign: "right",
  },
  orderCS1020Text: {
    position: "absolute",
    transform: [
      {
        translateY: -18.5,
      },
    ],
    width: "39.67%",
    top: "50%",
    right: "52.46%",
    left: "7.87%",
    fontSize: 10,
    letterSpacing: 0.8,
    lineHeight: 20,
    textTransform: "uppercase",
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
  },
  titleView: {
    position: "absolute",
    height: "11.82%",
    top: "5.11%",
    right: 0,
    bottom: "83.07%",
    left: 0,
  },
  orderView: {
    position: "absolute",
    transform: [
      {
        translateY: -28.5,
      },
    ],
    top: "50%",
    right: 35,
    left: 35,
    height: 313,
  },
  hellocarrotlabsgmaText: {
    position: "absolute",
    height: "35.71%",
    width: "100%",
    top: "64.29%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    fontSize: 14,
    letterSpacing: -0.4,
    lineHeight: 20,
    fontFamily: "DM Sans",
    color: "rgba(255, 255, 255, 0.8)",
    textAlign: "center",
  },
  adeKosowoText: {
    position: "absolute",
    transform: [
      {
        translateY: -28,
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
    color: "#fff",
    textAlign: "center",
  },
  userView: {
    position: "absolute",
    height: "25.45%",
    width: "81.33%",
    top: "74.55%",
    right: "9.33%",
    bottom: "0%",
    left: "9.33%",
  },
  borderView: {
    position: "absolute",
    top: 0,
    right: 2.33,
    borderRadius: 2.67,
    borderStyle: "solid",
    borderColor: "#fff",
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
    backgroundColor: "#fff",
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
    color: "#fff",
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
    top: 0,
    left: 0,
    width: 375,
    height: 44,
  },
  topBarView: {
    position: "absolute",
    height: "38.66%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "61.34%",
    left: "0%",
  },
  avatar48pxIcon: {
    position: "absolute",
    height: "9.14%",
    width: "13.87%",
    top: "15.82%",
    right: "42.67%",
    bottom: "75.04%",
    left: "43.47%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  topView: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 375,
    height: 569,
  },
  overlayView: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#171717",
    width: 375,
    height: 812,
    opacity: 0.4,
  },
  baseView4: {
    position: "absolute",
    transform: [
      {
        translateY: -220,
      },
    ],
    top: "50%",
    right: 0,
    left: 0,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    backgroundColor: "#fff",
    height: 440,
  },
  baseView5: {
    position: "absolute",
    height: "100%",
    top: "0%",
    right: 0,
    bottom: "0%",
    left: 0,
    borderRadius: 6,
    backgroundColor: "#171717",
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
    color: "#fff",
    textAlign: "center",
  },
  buttonView1: {
    position: "absolute",
    height: "10%",
    width: "81.33%",
    top: "82.05%",
    right: "9.33%",
    bottom: "7.95%",
    left: "9.33%",
  },
  lineView3: {
    position: "absolute",
    height: "100%",
    top: "0%",
    right: 0,
    bottom: "0%",
    left: 0,
    borderRadius: 12,
    backgroundColor: "#f3f6f8",
  },
  iconsOthersearch: {
    position: "absolute",
    height: "54.55%",
    width: "7.87%",
    top: "22.73%",
    right: "5.25%",
    bottom: "22.73%",
    left: "86.89%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  placeholderText: {
    position: "absolute",
    transform: [
      {
        translateY: -10,
      },
    ],
    top: "50%",
    left: 16,
    fontSize: 16,
    letterSpacing: -0.2,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
    width: 233,
  },
  imputCodeView: {
    position: "absolute",
    height: "10%",
    width: "81.33%",
    top: "62.95%",
    right: "9.33%",
    bottom: "27.05%",
    left: "9.33%",
    backgroundColor: "#fff",
  },
  lineView4: {
    position: "absolute",
    height: "0.51%",
    top: "99.49%",
    right: 0,
    bottom: "0%",
    left: 0,
    backgroundColor: "#f3f6f8",
  },
  enterUpTo25Track: {
    position: "absolute",
    height: "10.15%",
    width: "81.33%",
    top: "73.1%",
    right: "9.33%",
    bottom: "16.75%",
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
  trackingOrderText: {
    position: "absolute",
    transform: [
      {
        translateY: 5.5,
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
    height: "40.61%",
    width: "21.33%",
    top: "0%",
    right: "39.2%",
    bottom: "59.39%",
    left: "39.47%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  topView1: {
    position: "absolute",
    height: "44.77%",
    top: "12.73%",
    right: 0,
    bottom: "42.5%",
    left: 0,
  },
  lineView5: {
    position: "absolute",
    height: "1.14%",
    width: "12.8%",
    top: "4.55%",
    right: "43.47%",
    bottom: "94.32%",
    left: "43.73%",
    borderRadius: 2.5,
    backgroundColor: "#f3f6f8",
  },
  contentView: {
    position: "absolute",
    transform: [
      {
        translateY: -34,
      },
    ],
    top: "50%",
    right: 0,
    left: 0,
    height: 440,
  },
  frontLayerView: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 375,
    height: 812,
  },
  avatarView: {
    position: "absolute",
    top: 92,
    left: 165,
    width: 48,
    height: 48,
  },
  trackingOrderView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default TrackingOrder;
