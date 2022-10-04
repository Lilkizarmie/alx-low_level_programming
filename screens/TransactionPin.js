import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

const TransactionPin = () => {
  return (
    <View style={styles.transactionPinView}>
      <View style={styles.topBarView}>
        <View style={styles.baseView} />
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
          <Text style={styles.titleText}>Wallet</Text>
        </View>
        <Image
          style={styles.iconsButtonsmoreAlt1}
          resizeMode="cover"
          source={require("../assets/iconsbuttonsmorealt.png")}
        />
      </View>
      <Image
        style={styles.cardIcon}
        resizeMode="cover"
        source={require("../assets/card4.png")}
      />
      <Text style={styles.balanceInNaira}>Balance in Naira</Text>
      <View style={styles.groupView}>
        <Text style={styles.text}>217,365.09</Text>
        <View style={styles.nairaSymbolView}>
          <Text style={styles.nText1}>
            <Text style={styles.nText}>N</Text>
            <Text style={styles.text1}>{` `}</Text>
          </Text>
          <View style={styles.lineView} />
          <View style={styles.lineView1} />
        </View>
      </View>
      <View style={styles.frameView}>
        <Text style={styles.nGNText}>NGN</Text>
        <Image
          style={[styles.iconArtwork, styles.ml4]}
          resizeMode="cover"
          source={require("../assets/icon-artwork.png")}
        />
      </View>
      <View style={styles.menuView}>
        <View style={styles.itemView}>
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/icon21.png")}
          />
          <Text style={[styles.addMoneyText, styles.mt16]}>Add Money</Text>
        </View>
        <View style={styles.itemView1}>
          <Image
            style={styles.icon1}
            resizeMode="cover"
            source={require("../assets/icon12.png")}
          />
          <Text style={[styles.sendText, styles.mt16]}>Send</Text>
        </View>
        <View style={styles.itemView2}>
          <Image
            style={styles.icon2}
            resizeMode="cover"
            source={require("../assets/icon28.png")}
          />
          <Text style={[styles.withdrawText, styles.mt16]}>Withdraw</Text>
        </View>
      </View>
      <Text style={styles.recentTransactionsText}>Recent Transactions</Text>
      <View style={styles.itemView3}>
        <View style={styles.headerView}>
          <View style={styles.nameView}>
            <View style={styles.frameView1}>
              <Text style={styles.rCText}>RC</Text>
            </View>
            <Text style={[styles.bitcoinTransactionsText, styles.ml12]}>
              Bitcoin transactions
            </Text>
          </View>
          <Text style={styles.text2}>-$835.00</Text>
        </View>
        <View style={styles.footerView}>
          <View style={styles.dateView}>
            <Image
              style={styles.calendarIcon}
              resizeMode="cover"
              source={require("../assets/calendar.png")}
            />
            <Text style={[styles.jan162022, styles.ml4]}>Jan 16, 2022</Text>
          </View>
          <View style={styles.chipView}>
            <Text style={styles.successText}>Success</Text>
          </View>
        </View>
      </View>
      <View style={styles.itemView4}>
        <View style={styles.headerView1}>
          <View style={styles.nameView1}>
            <View style={styles.frameView2}>
              <Text style={styles.rCText1}>RC</Text>
            </View>
            <Text style={[styles.bitcoinTransactionsText1, styles.ml12]}>
              Bitcoin transactions
            </Text>
          </View>
          <Text style={styles.text3}>-$835.00</Text>
        </View>
        <View style={styles.footerView1}>
          <View style={styles.dateView1}>
            <Image
              style={styles.calendarIcon1}
              resizeMode="cover"
              source={require("../assets/calendar.png")}
            />
            <Text style={[styles.jan1620221, styles.ml4]}>Jan 16, 2022</Text>
          </View>
          <View style={styles.chipView1}>
            <Text style={styles.pendingText}>Pending</Text>
          </View>
        </View>
      </View>
      <View style={styles.itemView5}>
        <View style={styles.headerView2}>
          <View style={styles.nameView2}>
            <View style={styles.frameView3}>
              <Text style={styles.rCText2}>RC</Text>
            </View>
            <Text style={[styles.bitcoinTransactionsText2, styles.ml12]}>
              Bitcoin transactions
            </Text>
          </View>
          <Text style={styles.text4}>-$835.00</Text>
        </View>
        <View style={styles.footerView2}>
          <View style={styles.dateView2}>
            <Image
              style={styles.calendarIcon2}
              resizeMode="cover"
              source={require("../assets/calendar.png")}
            />
            <Text style={[styles.jan1620222, styles.ml4]}>Jan 16, 2022</Text>
          </View>
          <View style={styles.chipView2}>
            <Text style={styles.successText1}>Success</Text>
          </View>
        </View>
      </View>
      <View style={styles.itemView6}>
        <View style={styles.headerView3}>
          <View style={styles.nameView3}>
            <View style={styles.frameView4}>
              <Text style={styles.rCText3}>RC</Text>
            </View>
            <Text style={[styles.bitcoinTransactionsText3, styles.ml12]}>
              Bitcoin transactions
            </Text>
          </View>
          <Text style={styles.text5}>-$835.00</Text>
        </View>
        <View style={styles.footerView3}>
          <View style={styles.dateView3}>
            <Image
              style={styles.calendarIcon3}
              resizeMode="cover"
              source={require("../assets/calendar3.png")}
            />
            <Text style={[styles.jan1620223, styles.ml4]}>Jan 16, 2022</Text>
          </View>
          <View style={styles.chipView3}>
            <Text style={styles.failedText}>Failed</Text>
          </View>
        </View>
      </View>
      <View style={styles.dateView4}>
        <Text style={styles.last7Days}>Last 7 days</Text>
        <Image
          style={[styles.chevronDownIcon, styles.ml4]}
          resizeMode="cover"
          source={require("../assets/chevrondown.png")}
        />
      </View>
      <View style={styles.categoriesView}>
        <View style={styles.itemView7}>
          <View style={styles.baseView1} />
          <Text style={styles.menText}>All</Text>
        </View>
        <View style={[styles.itemView8, styles.ml25]}>
          <View style={styles.baseView2} />
          <Text style={styles.bothText}>Incoming</Text>
        </View>
        <View style={[styles.itemView9, styles.ml25]}>
          <View style={styles.baseView3} />
        </View>
      </View>
      <View style={styles.rectangleView} />
      <View style={styles.iPhone11ProX1}>
        <View style={styles.itemView10} />
        <View style={styles.lineView2} />
        <Image
          style={styles.iconsOtherclose}
          resizeMode="cover"
          source={require("../assets/iconsotherclose7.png")}
        />
        <View style={styles.keyboardsNumberView}>
          <View style={styles.baseView4} />
          <Text style={styles.text6}>1</Text>
          <Text style={styles.text7}>2</Text>
          <Text style={styles.text8}>3</Text>
          <Text style={styles.text9}>4</Text>
          <Text style={styles.text10}>5</Text>
          <Text style={styles.text11}>6</Text>
          <Text style={styles.text12}>7</Text>
          <Text style={styles.text13}>8</Text>
          <Text style={styles.text14}>9</Text>
          <Text style={styles.text15}>0</Text>
          <Image
            style={styles.icon3}
            resizeMode="cover"
            source={require("../assets/icon.png")}
          />
        </View>
        <View style={styles.titleView}>
          <Text style={styles.oTPAuthenticationText}>Enter your PIN</Text>
        </View>
        <Text style={styles.howMuchDoYou}>{`How much do you `}</Text>
        <View style={styles.codeNumberView}>
          <View style={styles.itemView11}>
            <View style={styles.lineView3} />
            <Text style={styles.numberText}>{` `}</Text>
          </View>
          <View style={styles.itemView12}>
            <View style={styles.lineView4} />
            <Text style={styles.numberText1}>3</Text>
          </View>
          <View style={styles.itemView13}>
            <View style={styles.lineView5} />
            <Text style={styles.numberText2}>1</Text>
          </View>
          <View style={styles.itemView14}>
            <View style={styles.lineView6} />
            <Text style={styles.numberText3}>7</Text>
          </View>
        </View>
        <Text style={styles.enterYour4DigitTransaction}>
          Enter your 4-digit transaction pin
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml4: {
    marginLeft: 4,
  },
  mt16: {
    marginTop: 16,
  },
  ml12: {
    marginLeft: 12,
  },
  ml25: {
    marginLeft: 25,
  },
  baseView: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#fff",
    width: 375,
    height: 100,
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
  },
  barsTopBarsV4View: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#fff",
    width: 375,
    height: 100,
  },
  iconsButtonsmoreAlt1: {
    position: "absolute",
    top: 60,
    right: 35,
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
  cardIcon: {
    position: "absolute",
    top: 124,
    right: 35,
    left: 35,
    maxWidth: "100%",
    overflow: "hidden",
    height: 136,
  },
  balanceInNaira: {
    position: "absolute",
    top: 176,
    left: 59,
    fontSize: 14,
    letterSpacing: 0.2,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#959595",
    textAlign: "left",
  },
  text: {
    position: "absolute",
    top: 0,
    left: 25,
    fontSize: 24,
    letterSpacing: 0.3,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#f5f4f7",
    textAlign: "left",
  },
  nText: {
    fontWeight: "700",
    fontFamily: "DM Sans",
  },
  text1: {
    fontWeight: "700",
    fontFamily: "Outfit",
  },
  nText1: {
    position: "absolute",
    top: 0,
    left: 1,
    fontSize: 24,
    color: "#f5f4f7",
    textAlign: "left",
  },
  lineView: {
    position: "absolute",
    top: 12,
    left: -2,
    borderStyle: "solid",
    borderColor: "#f3f3f5",
    borderTopWidth: 2,
    width: 24,
    height: 4,
  },
  lineView1: {
    position: "absolute",
    top: 16,
    left: -2,
    borderStyle: "solid",
    borderColor: "#f3f3f5",
    borderTopWidth: 2,
    width: 24,
    height: 4,
  },
  nairaSymbolView: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 20,
    height: 31,
  },
  groupView: {
    position: "absolute",
    top: 206,
    left: 59,
    width: 149,
    height: 31,
  },
  nGNText: {
    position: "relative",
    fontSize: 12,
    letterSpacing: 0.2,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#f5f4f7",
    textAlign: "left",
  },
  iconArtwork: {
    position: "relative",
    width: 12,
    height: 6,
    flexShrink: 0,
  },
  frameView: {
    position: "absolute",
    top: 148,
    left: 256,
    borderRadius: 8,
    backgroundColor: "#333",
    flexDirection: "row",
    paddingHorizontal: 8,
    paddingVertical: 4,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    position: "relative",
    borderRadius: 12,
    width: 56,
    height: 56,
    flexShrink: 0,
    overflow: "hidden",
  },
  addMoneyText: {
    position: "relative",
    fontSize: 14,
    letterSpacing: 0.2,
    lineHeight: 21,
    fontWeight: "600",
    fontFamily: "Manrope",
    color: "#718096",
    textAlign: "center",
  },
  itemView: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  icon1: {
    position: "relative",
    borderRadius: 12,
    width: 56,
    height: 56,
    flexShrink: 0,
    overflow: "hidden",
  },
  sendText: {
    position: "relative",
    fontSize: 14,
    letterSpacing: 0.2,
    lineHeight: 21,
    fontWeight: "600",
    fontFamily: "Manrope",
    color: "#718096",
    textAlign: "center",
  },
  itemView1: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  icon2: {
    position: "relative",
    borderRadius: 12,
    width: 56,
    height: 56,
    flexShrink: 0,
    overflow: "hidden",
  },
  withdrawText: {
    position: "relative",
    fontSize: 14,
    letterSpacing: 0.2,
    lineHeight: 21,
    fontWeight: "600",
    fontFamily: "Manrope",
    color: "#718096",
    textAlign: "center",
  },
  itemView2: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  menuView: {
    position: "absolute",
    top: 284,
    right: 45,
    left: 45,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  recentTransactionsText: {
    position: "absolute",
    top: 424,
    left: 35,
    fontSize: 16,
    letterSpacing: -0.1,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#1d1e20",
    textAlign: "left",
  },
  rCText: {
    position: "absolute",
    top: 8,
    left: 8,
    fontSize: 12,
    letterSpacing: -0.33,
    lineHeight: 16,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#000",
    textAlign: "left",
  },
  frameView1: {
    position: "relative",
    borderRadius: 800,
    backgroundColor: "#fefae6",
    width: 32,
    height: 32,
    flexShrink: 0,
    overflow: "hidden",
  },
  bitcoinTransactionsText: {
    position: "relative",
    fontSize: 14,
    letterSpacing: 0.2,
    lineHeight: 21,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#1a202c",
    textAlign: "left",
  },
  nameView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text2: {
    position: "relative",
    fontSize: 14,
    letterSpacing: 0.2,
    lineHeight: 21,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#1a202c",
    textAlign: "left",
  },
  headerView: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  calendarIcon: {
    position: "relative",
    width: 20,
    height: 20,
    flexShrink: 0,
  },
  jan162022: {
    position: "relative",
    fontSize: 14,
    letterSpacing: 0.2,
    lineHeight: 21,
    fontWeight: "500",
    fontFamily: "DM Sans",
    color: "#718096",
    textAlign: "left",
  },
  dateView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  successText: {
    position: "relative",
    fontSize: 12,
    letterSpacing: 0.4,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: "DM Sans",
    color: "#22c55e",
    textAlign: "right",
  },
  chipView: {
    borderRadius: 8,
    backgroundColor: "#f6fdf9",
    width: 80,
    height: 32,
    flexShrink: 0,
    flexDirection: "row",
    padding: 8,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  footerView: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingLeft: 44,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemView3: {
    position: "absolute",
    top: 535,
    left: 35,
    borderStyle: "solid",
    borderColor: "#edf2f7",
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 1,
    borderLeftWidth: 0,
    width: 305,
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingVertical: 4,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  rCText1: {
    position: "absolute",
    top: 8,
    left: 8,
    fontSize: 12,
    letterSpacing: -0.33,
    lineHeight: 16,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#000",
    textAlign: "left",
  },
  frameView2: {
    position: "relative",
    borderRadius: 800,
    backgroundColor: "#e8edff",
    width: 32,
    height: 32,
    flexShrink: 0,
    overflow: "hidden",
  },
  bitcoinTransactionsText1: {
    position: "relative",
    fontSize: 14,
    letterSpacing: 0.2,
    lineHeight: 21,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#1a202c",
    textAlign: "left",
  },
  nameView1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text3: {
    position: "relative",
    fontSize: 14,
    letterSpacing: 0.2,
    lineHeight: 21,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#1a202c",
    textAlign: "left",
  },
  headerView1: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  calendarIcon1: {
    position: "relative",
    width: 20,
    height: 20,
    flexShrink: 0,
  },
  jan1620221: {
    position: "relative",
    fontSize: 14,
    letterSpacing: 0.2,
    lineHeight: 21,
    fontWeight: "500",
    fontFamily: "DM Sans",
    color: "#718096",
    textAlign: "left",
  },
  dateView1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  pendingText: {
    position: "relative",
    fontSize: 12,
    letterSpacing: 0.4,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: "Manrope",
    color: "#ff784b",
    textAlign: "right",
  },
  chipView1: {
    borderRadius: 8,
    backgroundColor: "#fff7f5",
    width: 80,
    height: 32,
    flexShrink: 0,
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 8,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  footerView1: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingLeft: 44,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemView4: {
    position: "absolute",
    top: 609,
    left: 35,
    borderStyle: "solid",
    borderColor: "#edf2f7",
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 1,
    borderLeftWidth: 0,
    width: 305,
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingVertical: 4,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  rCText2: {
    position: "absolute",
    top: 8,
    left: 8,
    fontSize: 12,
    letterSpacing: -0.33,
    lineHeight: 16,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#000",
    textAlign: "left",
  },
  frameView3: {
    position: "relative",
    borderRadius: 800,
    backgroundColor: "#fefae6",
    width: 32,
    height: 32,
    flexShrink: 0,
    overflow: "hidden",
  },
  bitcoinTransactionsText2: {
    position: "relative",
    fontSize: 14,
    letterSpacing: 0.2,
    lineHeight: 21,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#1a202c",
    textAlign: "left",
  },
  nameView2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text4: {
    position: "relative",
    fontSize: 14,
    letterSpacing: 0.2,
    lineHeight: 21,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#1a202c",
    textAlign: "left",
  },
  headerView2: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  calendarIcon2: {
    position: "relative",
    width: 20,
    height: 20,
    flexShrink: 0,
  },
  jan1620222: {
    position: "relative",
    fontSize: 14,
    letterSpacing: 0.2,
    lineHeight: 21,
    fontWeight: "500",
    fontFamily: "DM Sans",
    color: "#718096",
    textAlign: "left",
  },
  dateView2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  successText1: {
    position: "relative",
    fontSize: 12,
    letterSpacing: 0.4,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: "DM Sans",
    color: "#22c55e",
    textAlign: "right",
  },
  chipView2: {
    borderRadius: 8,
    backgroundColor: "#f6fdf9",
    width: 80,
    height: 32,
    flexShrink: 0,
    flexDirection: "row",
    padding: 8,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  footerView2: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingLeft: 44,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemView5: {
    position: "absolute",
    top: 683,
    left: 35,
    borderStyle: "solid",
    borderColor: "#edf2f7",
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 1,
    borderLeftWidth: 0,
    width: 305,
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingVertical: 4,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  rCText3: {
    position: "absolute",
    top: 8,
    left: 8,
    fontSize: 12,
    letterSpacing: -0.33,
    lineHeight: 16,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#000",
    textAlign: "left",
  },
  frameView4: {
    position: "relative",
    borderRadius: 800,
    backgroundColor: "#f7fafc",
    width: 32,
    height: 32,
    flexShrink: 0,
    overflow: "hidden",
  },
  bitcoinTransactionsText3: {
    position: "relative",
    fontSize: 14,
    letterSpacing: 0.2,
    lineHeight: 21,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#1a202c",
    textAlign: "left",
  },
  nameView3: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text5: {
    position: "relative",
    fontSize: 14,
    letterSpacing: 0.2,
    lineHeight: 21,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#1a202c",
    textAlign: "left",
  },
  headerView3: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  calendarIcon3: {
    position: "relative",
    width: 20,
    height: 20,
    flexShrink: 0,
  },
  jan1620223: {
    position: "relative",
    fontSize: 14,
    letterSpacing: 0.2,
    lineHeight: 21,
    fontWeight: "500",
    fontFamily: "DM Sans",
    color: "#718096",
    textAlign: "left",
  },
  dateView3: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  failedText: {
    position: "relative",
    fontSize: 14,
    letterSpacing: 0.2,
    lineHeight: 21,
    fontWeight: "500",
    fontFamily: "Manrope",
    color: "#ff4747",
    textAlign: "right",
  },
  chipView3: {
    borderRadius: 8,
    backgroundColor: "#fff5f5",
    width: 70,
    height: 32,
    flexShrink: 0,
    flexDirection: "row",
    padding: 8,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  footerView3: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingLeft: 44,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemView6: {
    position: "absolute",
    top: 757,
    left: 35,
    borderStyle: "solid",
    borderColor: "#edf2f7",
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 1,
    borderLeftWidth: 0,
    width: 305,
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingVertical: 4,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  last7Days: {
    position: "relative",
    fontSize: 12,
    letterSpacing: 0.4,
    lineHeight: 18,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "right",
  },
  chevronDownIcon: {
    position: "relative",
    width: 16,
    height: 16,
    flexShrink: 0,
    overflow: "hidden",
  },
  dateView4: {
    position: "absolute",
    top: 417,
    right: 35,
    borderRadius: 8,
    backgroundColor: "#fafafa",
    flexDirection: "row",
    paddingHorizontal: 6,
    paddingVertical: 8,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  baseView1: {
    position: "absolute",
    height: "100%",
    top: "0%",
    right: 0,
    bottom: "0%",
    left: 0,
    borderRadius: 180,
    backgroundColor: "#f2b51d",
  },
  menText: {
    position: "absolute",
    transform: [
      {
        translateY: -10,
      },
    ],
    width: "26.56%",
    top: "50%",
    right: "35.94%",
    left: "37.5%",
    fontSize: 14,
    letterSpacing: -0.4,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "center",
  },
  itemView7: {
    position: "relative",
    width: 64,
    height: 36,
    flexShrink: 0,
  },
  baseView2: {
    position: "absolute",
    height: "102.78%",
    top: "-1.39%",
    right: -0.5,
    bottom: "-1.39%",
    left: -0.5,
    borderRadius: 180,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
  },
  bothText: {
    position: "absolute",
    top: 8,
    left: 18,
    fontSize: 14,
    letterSpacing: -0.4,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "center",
  },
  itemView8: {
    position: "relative",
    width: 96,
    height: 36,
    flexShrink: 0,
  },
  baseView3: {
    position: "absolute",
    height: "102.78%",
    top: "-1.39%",
    right: -0.5,
    bottom: "-1.39%",
    left: -0.5,
    borderRadius: 180,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
  },
  itemView9: {
    position: "relative",
    width: 95,
    height: 36,
    flexShrink: 0,
  },
  categoriesView: {
    position: "absolute",
    top: 475,
    left: 35,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  rectangleView: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#171717",
    width: 375,
    height: 812,
    opacity: 0.5,
  },
  itemView10: {
    position: "absolute",
    top: 308,
    left: 76,
    justifyContent: "flex-start",
    alignItems: "center",
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
  iconsOtherclose: {
    position: "absolute",
    height: "3.18%",
    width: "6.4%",
    top: "3.18%",
    right: "6.4%",
    bottom: "93.63%",
    left: "87.2%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  baseView4: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: "#fff",
  },
  text6: {
    position: "absolute",
    transform: [
      {
        translateY: -106,
      },
    ],
    width: "22.67%",
    top: "50%",
    right: "68%",
    left: "9.33%",
    fontSize: 24,
    letterSpacing: -0.2,
    lineHeight: 34,
    fontWeight: "500",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "center",
  },
  text7: {
    position: "absolute",
    transform: [
      {
        translateY: -106,
      },
    ],
    width: "22.67%",
    top: "50%",
    right: "38.67%",
    left: "38.67%",
    fontSize: 24,
    letterSpacing: -0.2,
    lineHeight: 34,
    fontWeight: "500",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "center",
  },
  text8: {
    position: "absolute",
    transform: [
      {
        translateY: -106,
      },
    ],
    width: "22.67%",
    top: "50%",
    right: "9.33%",
    left: "68%",
    fontSize: 24,
    letterSpacing: -0.2,
    lineHeight: 34,
    fontWeight: "500",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "center",
  },
  text9: {
    position: "absolute",
    transform: [
      {
        translateY: -40,
      },
    ],
    width: "22.67%",
    top: "50%",
    right: "68%",
    left: "9.33%",
    fontSize: 24,
    letterSpacing: -0.2,
    lineHeight: 34,
    fontWeight: "500",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "center",
  },
  text10: {
    position: "absolute",
    transform: [
      {
        translateY: -40,
      },
    ],
    width: "22.67%",
    top: "50%",
    right: "38.67%",
    left: "38.67%",
    fontSize: 24,
    letterSpacing: -0.2,
    lineHeight: 34,
    fontWeight: "500",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "center",
  },
  text11: {
    position: "absolute",
    transform: [
      {
        translateY: -40,
      },
    ],
    width: "22.67%",
    top: "50%",
    right: "9.33%",
    left: "68%",
    fontSize: 24,
    letterSpacing: -0.2,
    lineHeight: 34,
    fontWeight: "500",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "center",
  },
  text12: {
    position: "absolute",
    transform: [
      {
        translateY: 26,
      },
    ],
    width: "22.67%",
    top: "50%",
    right: "68%",
    left: "9.33%",
    fontSize: 24,
    letterSpacing: -0.2,
    lineHeight: 34,
    fontWeight: "500",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "center",
  },
  text13: {
    position: "absolute",
    transform: [
      {
        translateY: 26,
      },
    ],
    width: "22.67%",
    top: "50%",
    right: "38.67%",
    left: "38.67%",
    fontSize: 24,
    letterSpacing: -0.2,
    lineHeight: 34,
    fontWeight: "500",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "center",
  },
  text14: {
    position: "absolute",
    transform: [
      {
        translateY: 26,
      },
    ],
    width: "22.67%",
    top: "50%",
    right: "9.33%",
    left: "68%",
    fontSize: 24,
    letterSpacing: -0.2,
    lineHeight: 34,
    fontWeight: "500",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "center",
  },
  text15: {
    position: "absolute",
    transform: [
      {
        translateY: 88,
      },
    ],
    width: "22.67%",
    top: "50%",
    right: "38.67%",
    left: "38.67%",
    fontSize: 24,
    letterSpacing: -0.2,
    lineHeight: 34,
    fontWeight: "500",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "center",
  },
  icon3: {
    position: "absolute",
    height: "7.41%",
    width: "6.4%",
    top: "78.7%",
    right: "17.33%",
    bottom: "13.89%",
    left: "76.27%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  keyboardsNumberView: {
    position: "absolute",
    height: "42.97%",
    width: "100%",
    top: "57.03%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  oTPAuthenticationText: {
    position: "absolute",
    transform: [
      {
        translateY: -16,
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
    color: "#171717",
    textAlign: "left",
  },
  titleView: {
    position: "absolute",
    transform: [
      {
        translateY: -289,
      },
    ],
    width: "81.33%",
    top: "50%",
    right: "9.33%",
    left: "9.33%",
    height: 32,
  },
  howMuchDoYou: {
    position: "absolute",
    top: 287,
    left: 553,
    fontSize: 24,
    letterSpacing: -0.1,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#1d1e20",
    textAlign: "left",
  },
  lineView3: {
    position: "absolute",
    height: "3.08%",
    top: "96.92%",
    right: 0,
    bottom: "0%",
    left: 0,
    backgroundColor: "#8f92a1",
    opacity: 0.2,
  },
  numberText: {
    position: "absolute",
    transform: [
      {
        translateY: -15.5,
      },
    ],
    width: "100%",
    top: "50%",
    right: "0%",
    left: "0%",
    fontSize: 24,
    letterSpacing: -0.77,
    lineHeight: 32,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "center",
  },
  itemView11: {
    position: "absolute",
    top: 0,
    left: 240,
    backgroundColor: "#fff",
    width: 65,
    height: 65,
  },
  lineView4: {
    position: "absolute",
    height: "3.08%",
    top: "96.92%",
    right: 0,
    bottom: "0%",
    left: 0,
    backgroundColor: "#171717",
    opacity: 0.2,
  },
  numberText1: {
    position: "absolute",
    transform: [
      {
        translateY: -15.5,
      },
    ],
    width: "100%",
    top: "50%",
    right: "0%",
    left: "0%",
    fontSize: 24,
    letterSpacing: -0.77,
    lineHeight: 32,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "center",
  },
  itemView12: {
    position: "absolute",
    top: 0,
    left: 160,
    backgroundColor: "#fff",
    width: 65,
    height: 65,
  },
  lineView5: {
    position: "absolute",
    height: "3.08%",
    top: "96.92%",
    right: 0,
    bottom: "0%",
    left: 0,
    backgroundColor: "#171717",
    opacity: 0.2,
  },
  numberText2: {
    position: "absolute",
    transform: [
      {
        translateY: -15.5,
      },
    ],
    width: "100%",
    top: "50%",
    right: "0%",
    left: "0%",
    fontSize: 24,
    letterSpacing: -0.77,
    lineHeight: 32,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "center",
  },
  itemView13: {
    position: "absolute",
    top: 0,
    left: 80,
    backgroundColor: "#fff",
    width: 65,
    height: 65,
  },
  lineView6: {
    position: "absolute",
    height: "3.08%",
    top: "96.92%",
    right: 0,
    bottom: "0%",
    left: 0,
    backgroundColor: "#171717",
    opacity: 0.2,
  },
  numberText3: {
    position: "absolute",
    transform: [
      {
        translateY: -15.5,
      },
    ],
    width: "100%",
    top: "50%",
    right: "0%",
    left: "0%",
    fontSize: 24,
    letterSpacing: -0.77,
    lineHeight: 32,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "center",
  },
  itemView14: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#fff",
    width: 65,
    height: 65,
  },
  codeNumberView: {
    position: "absolute",
    top: 265,
    left: 35,
    width: 305,
    height: 65,
  },
  enterYour4DigitTransaction: {
    position: "absolute",
    top: 132,
    left: 35,
    fontSize: 18,
    letterSpacing: -0.8,
    lineHeight: 32,
    fontWeight: "500",
    fontFamily: "DM Sans",
    color: "#959595",
    textAlign: "center",
  },
  iPhone11ProX1: {
    position: "absolute",
    top: 62,
    left: 0,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: "#fff",
    width: 375,
    height: 754,
    overflow: "hidden",
  },
  transactionPinView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default TransactionPin;
