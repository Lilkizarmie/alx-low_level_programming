import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

const AddNewCard = () => {
  return (
    <View style={styles.addNewCard}>
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
          <Text style={styles.text}>Continue</Text>
        </View>
        <Image
          style={styles.applePayIcon}
          resizeMode="cover"
          source={require("../assets/-icon--r11.png")}
        />
        <Text style={styles.balanceText}>₦83,000</Text>
        <View style={styles.groupView}>
          <View style={styles.lineView} />
          <Image
            style={styles.iconR}
            resizeMode="cover"
            source={require("../assets/-icon--r12.png")}
          />
          <View style={styles.iconL}>
            <View style={styles.rectangleView} />
            <Image
              style={styles.shapeIcon}
              resizeMode="cover"
              source={require("../assets/shape.png")}
            />
          </View>
          <Text style={styles.balanceText1}>₦83,000</Text>
          <Text style={styles.konixCashWallet}>Konix Cash Wallet</Text>
        </View>
        <View style={styles.lineView1} />
        <Image
          style={styles.iconL1}
          resizeMode="cover"
          source={require("../assets/-icon--l20.png")}
        />
        <Text style={styles.creditCardText}>Credit Card</Text>
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
          <Text style={styles.titleText}>Payment Method</Text>
        </View>
      </View>
      <View style={styles.rectangleView1} />
      <View style={styles.iPhone11ProX2}>
        <Text style={styles.selectACard}>{`Select A Card `}</Text>
        <Text style={styles.pickFromYourSavedCardsOr}>
          Pick from your saved cards or use a new one
        </Text>
        <View style={styles.itemView} />
        <Text style={styles.text1}>Use another card</Text>
        <View style={styles.lineView2} />
        <View style={styles.groupView1}>
          <View style={styles.cardView}>
            <View style={styles.baseView1} />
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/icon37.png")}
            />
            <Text style={styles.text2}>5399 83******9000</Text>
          </View>
          <Image
            style={styles.applePayIcon1}
            resizeMode="cover"
            source={require("../assets/-icon--r11.png")}
          />
        </View>
        <View style={styles.groupView2}>
          <View style={styles.cardView1}>
            <View style={styles.baseView2} />
            <Image
              style={styles.icon1}
              resizeMode="cover"
              source={require("../assets/icon37.png")}
            />
            <Text style={styles.text3}>5399 83******9000</Text>
          </View>
          <Image
            style={styles.iconR1}
            resizeMode="cover"
            source={require("../assets/-icon--r12.png")}
          />
        </View>
      </View>
      <View style={styles.iPhone11ProX3}>
        <Text style={styles.addANewCard}>Add a new card</Text>
        <View style={styles.itemView1} />
        <View style={styles.lineView3} />
        <View style={styles.buttonView1}>
          <View style={styles.baseView3} />
          <Image
            style={styles.iconsArrowsarrowLongRight1}
            resizeMode="cover"
            source={require("../assets/iconsarrowsarrowlongright.png")}
          />
          <Text style={styles.text4}>Add new Card</Text>
        </View>
        <View style={styles.itemView2}>
          <View style={styles.inputView}>
            <View style={styles.lineView4} />
            <Image
              style={styles.iconR2}
              resizeMode="cover"
              source={require("../assets/-icon--r3.png")}
            />
            <Image
              style={styles.iconsMultimediacreditCard}
              resizeMode="cover"
              source={require("../assets/-icon--l20.png")}
            />
            <Text style={styles.placeholderText}>5988 9942 6686 9000</Text>
          </View>
          <Text style={styles.labelText}>Card Number</Text>
        </View>
        <View style={styles.itemView3}>
          <View style={styles.inputView1}>
            <View style={styles.lineView5} />
            <Image
              style={styles.iconR3}
              resizeMode="cover"
              source={require("../assets/-icon--r3.png")}
            />
            <Image
              style={styles.iconsAlertscalendar}
              resizeMode="cover"
              source={require("../assets/iconsalertscalendar.png")}
            />
            <Text style={styles.placeholderText1}>01/2022</Text>
          </View>
          <Text style={styles.labelText1}>Expiry Date</Text>
        </View>
        <View style={styles.itemView4}>
          <View style={styles.inputView2}>
            <View style={styles.lineView6} />
            <Image
              style={styles.iconR4}
              resizeMode="cover"
              source={require("../assets/-icon--r3.png")}
            />
            <Image
              style={styles.iconsButtonslock}
              resizeMode="cover"
              source={require("../assets/iconsbuttonslock.png")}
            />
            <Text style={styles.placeholderText2}>000</Text>
          </View>
          <Text style={styles.labelText2}>CVV</Text>
        </View>
        <View style={styles.itemView5}>
          <View style={styles.inputView3}>
            <View style={styles.lineView7} />
            <Image
              style={styles.iconR5}
              resizeMode="cover"
              source={require("../assets/-icon--r3.png")}
            />
            <Image
              style={styles.iconL2}
              resizeMode="cover"
              source={require("../assets/-menu-3.png")}
            />
            <Text style={styles.placeholderText3}>Jide Ahmed</Text>
          </View>
          <Text style={styles.labelText3}>Card Holder</Text>
        </View>
        <View style={styles.titleView}>
          <Image
            style={styles.iconL3}
            resizeMode="cover"
            source={require("../assets/-icon--l28.png")}
          />
          <Text style={styles.saveToMyCards}>Save to My Cards</Text>
        </View>
        <Image
          style={styles.iconsOtherclose}
          resizeMode="cover"
          source={require("../assets/iconsotherclose2.png")}
        />
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
  },
  barsHomeIndicatorIPhone: {
    position: "absolute",
    top: 646,
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
    right: 118,
    left: 119,
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
    top: 602,
    left: 35,
    width: 305,
    height: 44,
  },
  applePayIcon: {
    position: "absolute",
    top: 8,
    right: 35,
    width: 32,
    height: 32,
  },
  balanceText: {
    position: "absolute",
    height: "2.94%",
    width: "53.6%",
    top: "4.12%",
    right: "26.67%",
    bottom: "92.94%",
    left: "19.73%",
    fontSize: 14,
    letterSpacing: 0.4,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
    opacity: 0.6,
  },
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
    height: "49.23%",
    width: "8.53%",
    top: "12.31%",
    right: "9.33%",
    bottom: "38.46%",
    left: "82.13%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  rectangleView: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  shapeIcon: {
    position: "absolute",
    height: "56.25%",
    width: "62.5%",
    top: "21.88%",
    right: "18.75%",
    bottom: "21.88%",
    left: "18.75%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  iconL: {
    position: "absolute",
    height: "49.23%",
    width: "8.53%",
    top: "6.15%",
    right: "82.4%",
    bottom: "44.62%",
    left: "9.07%",
  },
  balanceText1: {
    position: "absolute",
    height: "30.77%",
    width: "53.6%",
    top: "43.08%",
    right: "27.2%",
    bottom: "26.15%",
    left: "19.2%",
    fontSize: 14,
    letterSpacing: 0.4,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
    opacity: 0.6,
  },
  konixCashWallet: {
    position: "absolute",
    transform: [
      {
        translateY: -32.5,
      },
    ],
    width: "53.6%",
    top: "50%",
    right: "27.2%",
    left: "19.2%",
    fontSize: 16,
    letterSpacing: -0.4,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
  },
  groupView: {
    position: "absolute",
    height: "9.56%",
    top: "13.09%",
    right: 0,
    bottom: "77.35%",
    left: 0,
  },
  lineView1: {
    position: "absolute",
    height: "0.15%",
    top: "9.41%",
    right: 0,
    bottom: "90.44%",
    left: 0,
    backgroundColor: "#8f92a1",
    opacity: 0.2,
  },
  iconL1: {
    position: "absolute",
    top: 11,
    bottom: 645,
    left: 35,
    maxHeight: "100%",
    width: 24,
  },
  creditCardText: {
    position: "absolute",
    top: 0,
    left: 73,
    fontSize: 14,
    letterSpacing: -0.4,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
  },
  bodyView: {
    position: "absolute",
    top: 132,
    left: 0,
    width: 375,
    height: 680,
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
  rectangleView1: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#171717",
    width: 375,
    height: 812,
    opacity: 0.5,
  },
  selectACard: {
    position: "absolute",
    top: 45,
    left: 35,
    fontSize: 24,
    letterSpacing: -0.1,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#1d1e20",
    textAlign: "left",
  },
  pickFromYourSavedCardsOr: {
    position: "absolute",
    top: 71,
    left: 35,
    fontSize: 14,
    letterSpacing: -0.1,
    fontWeight: "500",
    fontFamily: "DM Sans",
    color: "#959595",
    textAlign: "left",
  },
  itemView: {
    position: "absolute",
    top: 308,
    left: 76,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  text1: {
    position: "absolute",
    transform: [
      {
        translateY: 209.5,
      },
    ],
    top: "50%",
    right: 129,
    left: 113,
    fontSize: 12,
    letterSpacing: 1,
    lineHeight: 20,
    textTransform: "uppercase",
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "center",
  },
  lineView2: {
    position: "absolute",
    top: 16,
    left: 164,
    borderRadius: 2.5,
    backgroundColor: "#f3f6f8",
    width: 48,
    height: 5,
  },
  baseView1: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 12,
    backgroundColor: "#171717",
  },
  icon: {
    position: "absolute",
    height: "50%",
    width: "13.58%",
    top: "25%",
    right: "4.53%",
    bottom: "25%",
    left: "81.89%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  text2: {
    position: "absolute",
    transform: [
      {
        translateY: -12,
      },
    ],
    width: "56.23%",
    top: "50%",
    right: "35.9%",
    left: "7.87%",
    fontSize: 16,
    letterSpacing: -0.4,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#fff",
    textAlign: "left",
  },
  cardView: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 265,
    height: 48,
  },
  applePayIcon1: {
    position: "absolute",
    top: 9,
    right: 0,
    width: 32,
    height: 32,
  },
  groupView1: {
    position: "absolute",
    top: 129,
    left: 35,
    width: 305,
    height: 48,
  },
  baseView2: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 12,
    backgroundColor: "#f5f6fa",
  },
  icon1: {
    position: "absolute",
    height: "50%",
    width: "13.58%",
    top: "25%",
    right: "4.53%",
    bottom: "25%",
    left: "81.89%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  text3: {
    position: "absolute",
    transform: [
      {
        translateY: -12,
      },
    ],
    width: "56.23%",
    top: "50%",
    right: "35.9%",
    left: "7.87%",
    fontSize: 16,
    letterSpacing: -0.4,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
  },
  cardView1: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 265,
    height: 48,
  },
  iconR1: {
    position: "absolute",
    height: "66.67%",
    width: "10.49%",
    top: "16.67%",
    right: "0%",
    bottom: "16.67%",
    left: "89.51%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  groupView2: {
    position: "absolute",
    top: 201,
    left: 35,
    width: 305,
    height: 48,
  },
  iPhone11ProX2: {
    position: "absolute",
    top: 205,
    left: 0,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: "#fff",
    width: 375,
    height: 607,
    overflow: "hidden",
  },
  addANewCard: {
    position: "absolute",
    top: 45,
    left: 35,
    fontSize: 24,
    letterSpacing: -0.1,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#1d1e20",
    textAlign: "left",
  },
  itemView1: {
    position: "absolute",
    top: 308,
    left: 76,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  lineView3: {
    position: "absolute",
    top: 16,
    left: 164,
    borderRadius: 2.5,
    backgroundColor: "#f3f6f8",
    width: 48,
    height: 5,
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
  iconsArrowsarrowLongRight1: {
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
  text4: {
    position: "absolute",
    transform: [
      {
        translateY: -10,
      },
    ],
    top: "50%",
    right: 100,
    left: 101,
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
    top: 634,
    left: 35,
    width: 305,
    height: 44,
  },
  lineView4: {
    position: "absolute",
    height: "2.27%",
    top: "97.73%",
    right: 0,
    bottom: "0%",
    left: 0,
    backgroundColor: "#8f92a1",
    opacity: 0.2,
  },
  iconR2: {
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
    display: "none",
  },
  iconsMultimediacreditCard: {
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
  },
  placeholderText: {
    position: "absolute",
    transform: [
      {
        translateY: -10,
      },
    ],
    top: "50%",
    right: 40,
    left: 40,
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
    fontWeight: "500",
    fontFamily: "DM Sans",
    color: "#8f92a1",
    textAlign: "left",
  },
  itemView2: {
    position: "absolute",
    top: 205,
    left: 35,
    backgroundColor: "#fff",
    width: 305,
    height: 68,
  },
  lineView5: {
    position: "absolute",
    height: "2.27%",
    top: "97.73%",
    right: 0,
    bottom: "0%",
    left: 0,
    backgroundColor: "#8f92a1",
    opacity: 0.2,
  },
  iconR3: {
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
    display: "none",
  },
  iconsAlertscalendar: {
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
  },
  placeholderText1: {
    position: "absolute",
    transform: [
      {
        translateY: -10,
      },
    ],
    top: "50%",
    right: 40,
    left: 40,
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
    fontWeight: "500",
    fontFamily: "DM Sans",
    color: "#8f92a1",
    textAlign: "left",
  },
  itemView3: {
    position: "absolute",
    top: 305,
    left: 35,
    backgroundColor: "#fff",
    width: 145,
    height: 68,
  },
  lineView6: {
    position: "absolute",
    height: "2.27%",
    top: "97.73%",
    right: 0,
    bottom: "0%",
    left: 0,
    backgroundColor: "#8f92a1",
    opacity: 0.2,
  },
  iconR4: {
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
    display: "none",
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
  },
  placeholderText2: {
    position: "absolute",
    transform: [
      {
        translateY: -10,
      },
    ],
    top: "50%",
    right: 40,
    left: 40,
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
    fontWeight: "500",
    fontFamily: "DM Sans",
    color: "#8f92a1",
    textAlign: "left",
  },
  itemView4: {
    position: "absolute",
    top: 305,
    left: 195,
    backgroundColor: "#fff",
    width: 145,
    height: 68,
  },
  lineView7: {
    position: "absolute",
    height: "2.27%",
    top: "97.73%",
    right: 0,
    bottom: "0%",
    left: 0,
    backgroundColor: "#8f92a1",
    opacity: 0.2,
  },
  iconR5: {
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
    display: "none",
  },
  iconL2: {
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
  },
  placeholderText3: {
    position: "absolute",
    transform: [
      {
        translateY: -10,
      },
    ],
    top: "50%",
    right: 40,
    left: 40,
    fontSize: 16,
    letterSpacing: -0.2,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
  },
  inputView3: {
    position: "absolute",
    top: 24,
    right: 0,
    left: 0,
    backgroundColor: "#fff",
    height: 44,
  },
  labelText3: {
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
  itemView5: {
    position: "absolute",
    top: 105,
    left: 35,
    backgroundColor: "#fff",
    width: 305,
    height: 68,
  },
  iconL3: {
    position: "absolute",
    height: "100%",
    width: "15.79%",
    top: "0%",
    right: "84.21%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  saveToMyCards: {
    position: "absolute",
    transform: [
      {
        translateY: -12,
      },
    ],
    width: "73.68%",
    top: "50%",
    right: "0%",
    left: "26.32%",
    fontSize: 14,
    letterSpacing: -0.4,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
  },
  titleView: {
    position: "absolute",
    height: "3.37%",
    width: "40.53%",
    top: "56.88%",
    right: "50.13%",
    bottom: "39.75%",
    left: "9.33%",
  },
  iconsOtherclose: {
    position: "absolute",
    height: "3.37%",
    width: "6.4%",
    top: "3.37%",
    right: "6.4%",
    bottom: "93.26%",
    left: "87.2%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  iPhone11ProX3: {
    position: "absolute",
    top: 100,
    left: 0,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: "#fff",
    width: 375,
    height: 712,
    overflow: "hidden",
  },
  addNewCard: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default AddNewCard;
