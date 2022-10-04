import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

const UserProfile = () => {
  return (
    <View style={styles.userProfileView}>
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
      <View style={styles.topView}>
        <View style={styles.baseView} />
        <View style={styles.orderView}>
          <View style={styles.baseView1} />
          <View style={styles.statusView}>
            <View style={styles.buttonView}>
              <View style={styles.baseView2} />
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
                style={styles.baseIcon}
                resizeMode="cover"
                source={require("../assets/base19.png")}
              />
              <Image
                style={styles.imageIcon}
                resizeMode="cover"
                source={require("../assets/-image9.png")}
              />
              <Text style={styles.beoplayHText}>ADIDAS X LEGO® SPORT</Text>
            </View>
            <View style={styles.itemView2}>
              <Image
                style={styles.baseIcon1}
                resizeMode="cover"
                source={require("../assets/base19.png")}
              />
              <Image
                style={styles.imageIcon1}
                resizeMode="cover"
                source={require("../assets/-image10.png")}
              />
              <Text style={styles.beosoundText}>{`ADIDAS X LEGO® SPORT `}</Text>
            </View>
            <View style={styles.itemView3}>
              <Image
                style={styles.baseIcon2}
                resizeMode="cover"
                source={require("../assets/base19.png")}
              />
              <Image
                style={styles.imageIcon2}
                resizeMode="cover"
                source={require("../assets/-image11.png")}
              />
              <Text
                style={styles.beosound1Text}
              >{`ADIDAS X LEGO® SPORT `}</Text>
            </View>
          </View>
          <View style={styles.titleView}>
            <View style={styles.lineView2} />
            <Text style={styles.inProgressText}>• Processing</Text>
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
        </View>
      </View>
      <Image
        style={styles.avatarIcon}
        resizeMode="cover"
        source={require("../assets/avatar.png")}
      />
      <View style={styles.groupView1}>
        <Image
          style={styles.tabBarIcon}
          resizeMode="cover"
          source={require("../assets/tab-bar.png")}
        />
        <View style={styles.groupView}>
          <View style={styles.baseView3} />
          <Image
            style={styles.menu1Icon}
            resizeMode="cover"
            source={require("../assets/-menu-13.png")}
          />
          <Image
            style={styles.lucidewalletIcon}
            resizeMode="cover"
            source={require("../assets/lucidewallet3.png")}
          />
          <Image
            style={styles.store1Icon}
            resizeMode="cover"
            source={require("../assets/store-1.png")}
          />
          <Image
            style={styles.iconsOthershoppingCart}
            resizeMode="cover"
            source={require("../assets/iconsothershoppingcart.png")}
          />
          <Image
            style={styles.menu3Icon}
            resizeMode="cover"
            source={require("../assets/-menu-3.png")}
          />
          <Text style={styles.accountText}>Account</Text>
        </View>
      </View>
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
    fontWeight: "500",
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
  baseView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
    backgroundColor: "#171717",
    width: 375,
    height: 553,
  },
  baseView1: {
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
  baseView2: {
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
    fontSize: 14,
    letterSpacing: -0.4,
    lineHeight: 20,
    fontWeight: "500",
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
    height: "0.89%",
    top: "96.43%",
    right: 0,
    bottom: "2.68%",
    left: 0,
    backgroundColor: "#f3f6f8",
  },
  baseIcon: {
    position: "absolute",
    height: "57.14%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "42.86%",
    left: "0%",
    borderRadius: 16,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  imageIcon: {
    position: "absolute",
    height: "57.14%",
    width: "79.75%",
    top: "0%",
    right: "10.13%",
    bottom: "42.86%",
    left: "10.13%",
    borderRadius: 8,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  beoplayHText: {
    position: "absolute",
    height: "35.71%",
    width: "100%",
    top: "64.29%",
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
    height: "100%",
    width: "25.9%",
    top: "0%",
    right: "7.87%",
    bottom: "0%",
    left: "66.23%",
  },
  baseIcon1: {
    position: "absolute",
    height: "57.14%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "42.86%",
    left: "0%",
    borderRadius: 16,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  imageIcon1: {
    position: "absolute",
    height: "57.14%",
    width: "79.75%",
    top: "0%",
    right: "10.13%",
    bottom: "42.86%",
    left: "10.13%",
    borderRadius: 8,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  beosoundText: {
    position: "absolute",
    height: "35.71%",
    width: "100%",
    top: "64.29%",
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
    height: "100%",
    width: "25.9%",
    top: "0%",
    right: "37.05%",
    bottom: "0%",
    left: "37.05%",
  },
  baseIcon2: {
    position: "absolute",
    height: "57.14%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "42.86%",
    left: "0%",
    borderRadius: 16,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  imageIcon2: {
    position: "absolute",
    height: "57.14%",
    width: "79.75%",
    top: "0%",
    right: "10.13%",
    bottom: "42.86%",
    left: "10.13%",
    borderRadius: 8,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  beosound1Text: {
    position: "absolute",
    height: "35.71%",
    width: "100%",
    top: "64.29%",
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
    height: "100%",
    width: "25.9%",
    top: "0%",
    right: "66.23%",
    bottom: "0%",
    left: "7.87%",
  },
  productsView: {
    position: "absolute",
    height: "35.78%",
    top: "22.04%",
    right: 0,
    bottom: "42.17%",
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
    fontWeight: "500",
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
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  topBarView: {
    position: "absolute",
    height: "9.84%",
    width: "81.33%",
    top: "28.82%",
    right: "9.33%",
    bottom: "61.34%",
    left: "9.33%",
  },
  topView: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 375,
    height: 569,
  },
  avatarIcon: {
    position: "absolute",
    top: 90,
    left: 163,
    width: 52,
    height: 52,
  },
  tabBarIcon: {
    position: "absolute",
    height: "100%",
    width: "99.73%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0.27%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  baseView3: {
    position: "absolute",
    height: "100%",
    width: "28.13%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "71.87%",
    borderRadius: 20,
    backgroundColor: "#f2b51d",
  },
  menu1Icon: {
    position: "absolute",
    height: "60%",
    width: "7.03%",
    top: "20%",
    right: "92.97%",
    bottom: "20%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  lucidewalletIcon: {
    position: "absolute",
    height: "60%",
    width: "7.34%",
    top: "20%",
    right: "56.27%",
    bottom: "20%",
    left: "36.39%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  store1Icon: {
    position: "absolute",
    height: "60%",
    width: "7.34%",
    top: "20%",
    right: "74.62%",
    bottom: "20%",
    left: "18.04%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  iconsOthershoppingCart: {
    position: "absolute",
    height: "60%",
    width: "7.34%",
    top: "20%",
    right: "37.92%",
    bottom: "20%",
    left: "54.74%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  menu3Icon: {
    position: "absolute",
    height: "60%",
    width: "7.34%",
    top: "20%",
    right: "18.35%",
    bottom: "20%",
    left: "74.31%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  accountText: {
    position: "absolute",
    height: "50%",
    width: "14.07%",
    top: "25%",
    right: "3.36%",
    bottom: "25%",
    left: "82.57%",
    fontSize: 12,
    letterSpacing: -0.6,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#000",
    textAlign: "left",
  },
  groupView: {
    position: "absolute",
    height: "36.36%",
    width: "87.2%",
    top: "20.91%",
    right: "6.4%",
    bottom: "42.73%",
    left: "6.4%",
  },
  groupView1: {
    position: "absolute",
    right: 0,
    bottom: 4,
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
  userProfileView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default UserProfile;
