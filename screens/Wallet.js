import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

const Wallet = () => {
  return (
    <View style={styles.walletView}>
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
        source={require("../assets/card.png")}
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
            source={require("../assets/icon8.png")}
          />
          <Text style={[styles.addMoneyText, styles.mt16]}>Add Money</Text>
        </View>
        <View style={styles.itemView1}>
          <Image
            style={styles.icon1}
            resizeMode="cover"
            source={require("../assets/icon9.png")}
          />
          <Text style={[styles.sendText, styles.mt16]}>Send</Text>
        </View>
        <View style={styles.itemView2}>
          <Image
            style={styles.icon2}
            resizeMode="cover"
            source={require("../assets/icon10.png")}
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
            <Text style={[styles.paidOrder110xxx, styles.ml12]}>
              Paid Order #110xxx
            </Text>
          </View>
          <Text style={styles.text2}>-₦835.00</Text>
        </View>
        <View style={styles.footerView}>
          <View style={styles.dateView}>
            <Text style={styles.jan162022}>Jan 16, 2022</Text>
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
            <Text style={[styles.bitcoinTransactionsText, styles.ml12]}>
              Bitcoin transactions
            </Text>
          </View>
          <Text style={styles.text3}>-₦835.00</Text>
        </View>
        <View style={styles.footerView1}>
          <View style={styles.dateView1}>
            <Text style={styles.jan1620221}>Jan 16, 2022</Text>
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
            <Text style={[styles.bitcoinTransactionsText1, styles.ml12]}>
              Bitcoin transactions
            </Text>
          </View>
          <Text style={styles.text4}>-₦835.00</Text>
        </View>
        <View style={styles.footerView2}>
          <View style={styles.dateView2}>
            <Text style={styles.jan1620222}>Jan 16, 2022</Text>
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
            <Text style={[styles.bitcoinTransactionsText2, styles.ml12]}>
              Bitcoin transactions
            </Text>
          </View>
          <Text style={styles.text5}>-₦835.00</Text>
        </View>
        <View style={styles.footerView3}>
          <View style={styles.dateView3}>
            <Text style={styles.jan1620223}>Jan 16, 2022</Text>
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
          <Text style={styles.womenText}>Outgoing</Text>
        </View>
      </View>
      <View style={styles.tooltipView}>
        <View style={styles.itemView10}>
          <Text style={styles.labelText}>View saved Cards</Text>
        </View>
      </View>
      <View style={styles.groupView3}>
        <Image
          style={styles.tabBarIcon}
          resizeMode="cover"
          source={require("../assets/tab-bar.png")}
        />
        <View style={styles.groupView2}>
          <Image
            style={styles.menu1Icon}
            resizeMode="cover"
            source={require("../assets/-menu-13.png")}
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
          <View style={styles.groupView1}>
            <View style={styles.baseView4} />
            <Image
              style={styles.lucidewalletIcon}
              resizeMode="cover"
              source={require("../assets/lucidewallet3.png")}
            />
            <Text style={styles.walletText}>Wallet</Text>
          </View>
          <Image
            style={styles.menu3Icon}
            resizeMode="cover"
            source={require("../assets/-menu-3.png")}
          />
        </View>
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
    top: 13,
    left: 12,
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
    top: 61,
    right: 35,
    width: 24,
    height: 24,
  },
  topBarView: {
    position: "absolute",
    top: -13,
    left: -12,
    width: 387,
    height: 113,
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
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#959595",
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
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#959595",
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
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#959595",
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
  paidOrder110xxx: {
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
    top: 619,
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
    top: 703,
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
    top: 787,
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
    height: "3.45%",
    width: "26.93%",
    top: "42.29%",
    right: "9.33%",
    bottom: "54.26%",
    left: "63.73%",
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
  womenText: {
    position: "absolute",
    transform: [
      {
        translateY: -10,
      },
    ],
    width: "63.16%",
    top: "50%",
    right: "18.42%",
    left: "18.42%",
    fontSize: 14,
    letterSpacing: -0.4,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "center",
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
  labelText: {
    position: "relative",
    fontSize: 12,
    letterSpacing: 0.4,
    lineHeight: 18,
    fontWeight: "600",
    fontFamily: "Manrope",
    color: "#959595",
    textAlign: "left",
  },
  itemView10: {
    width: 106,
    height: 32,
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  tooltipView: {
    position: "absolute",
    top: 79,
    left: 211,
    borderRadius: 12,
    backgroundColor: "#fff",
    shadowColor: "rgba(23, 23, 23, 0.15)",
    shadowOffset: {
      width: 8,
      height: 12,
    },
    shadowRadius: 24,
    elevation: 24,
    shadowOpacity: 1,
    flexDirection: "column",
    paddingHorizontal: 12,
    paddingVertical: 8,
    boxSizing: "border-box",
    alignItems: "flex-end",
    justifyContent: "center",
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
    right: "18.35%",
    bottom: "20%",
    left: "74.31%",
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
    borderRadius: 20,
    backgroundColor: "#f2b51d",
  },
  lucidewalletIcon: {
    position: "absolute",
    height: "60%",
    width: "26.09%",
    top: "20%",
    right: "58.7%",
    bottom: "20%",
    left: "15.22%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  walletText: {
    position: "absolute",
    height: "50%",
    width: "36.96%",
    top: "25%",
    right: "13.04%",
    bottom: "25%",
    left: "50%",
    fontSize: 12,
    letterSpacing: -0.6,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#000",
    textAlign: "left",
  },
  groupView1: {
    position: "absolute",
    height: "100%",
    width: "28.13%",
    top: "0%",
    right: "36.7%",
    bottom: "0%",
    left: "35.17%",
  },
  menu3Icon: {
    position: "absolute",
    height: "60%",
    width: "7.34%",
    top: "20%",
    right: "0%",
    bottom: "20%",
    left: "92.66%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  groupView2: {
    position: "absolute",
    height: "36.36%",
    width: "87.2%",
    top: "21.82%",
    right: "6.4%",
    bottom: "41.82%",
    left: "6.4%",
  },
  groupView3: {
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
  walletView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 986,
    overflow: "hidden",
  },
});

export default Wallet;
