import * as React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import CategoryFrame from "../components/CategoryFrame";
import FrameComponent from "../components/FrameComponent";
import StickyNavigation from "../components/StickyNavigation";

const Home = () => {
  return (
    <View style={styles.homeView}>
      <View style={styles.tabBarView}>
        <View style={styles.barsHomeIndicatorIPhone}>
          <View style={styles.homeIndicatorView} />
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
                source={require("../assets/cap.png")}
              />
              <View style={styles.capacityView} />
            </View>
            <Image
              style={styles.wifiIcon}
              resizeMode="cover"
              source={require("../assets/wifi.png")}
            />
            <Image
              style={styles.cellularConnectionIcon}
              resizeMode="cover"
              source={require("../assets/cellular-connection.png")}
            />
            <View style={styles.timeStyleView}>
              <Text style={styles.timeText}>9:41</Text>
            </View>
          </View>
          <View style={styles.rightView}>
            <Image
              style={styles.iconsDevicesqr}
              resizeMode="cover"
              source={require("../assets/iconsdevicesqr.png")}
            />
            <Text style={[styles.hanoiVietnamText, styles.ml8]}>Scan</Text>
          </View>
          <Image
            style={styles.iconL}
            resizeMode="cover"
            source={require("../assets/-icon--l.png")}
          />
        </View>
        <Image
          style={styles.notificationsIcon}
          resizeMode="cover"
          source={require("../assets/notifications.png")}
        />
        <Text style={styles.konixText}>Konix</Text>
      </View>
      <View style={styles.groupView}>
        <Text style={styles.categoriesText}>Categories</Text>
        <View style={styles.frameView1}>
          <CategoryFrame />
          <View style={[styles.frameView, styles.mt12]}>
            <View style={styles.fashionView}>
              <Text style={styles.text}>Fashion</Text>
              <Image style={styles.fashion01Icon} resizeMode="cover" />
            </View>
            <View style={[styles.fragranceView, styles.ml9]}>
              <Text style={styles.text1}>Fragrance</Text>
              <Image
                style={styles.unsplashjmSl8pSJDFMIcon}
                resizeMode="cover"
              />
              <Image
                style={styles.unsplash7ic3yF64FS8Icon}
                resizeMode="cover"
              />
            </View>
            <View style={[styles.kidsView, styles.ml9]}>
              <Text style={styles.text2}>Gadgets</Text>
              <Image
                style={styles.electronics07Icon}
                resizeMode="cover"
                source={require("../assets/electronics-07.png")}
              />
            </View>
          </View>
          <FrameComponent />
        </View>
      </View>
      <View style={styles.searchView}>
        <View style={styles.lineView} />
        <Image
          style={styles.iconsOthersearch}
          resizeMode="cover"
          source={require("../assets/iconsothersearch.png")}
        />
        <Text style={styles.placeholderText}>Find that special item</Text>
      </View>
      <Text style={styles.shopYourFavoriteLuxuryProd}>
        Shop Your Favorite Luxury Product
      </Text>
      <View style={styles.groupView1}>
        <View style={styles.frameView6}>
          <View style={styles.adidasView}>
            <View style={styles.frameView2}>
              <View style={styles.rectangleView} />
            </View>
            <View style={styles.rectangleView1} />
            <Image
              style={styles.adidasIcon}
              resizeMode="cover"
              source={require("../assets/adidas.png")}
            />
            <Text style={styles.adidasText}>Adidas</Text>
          </View>
          <View style={[styles.frameView3, styles.ml12]}>
            <View style={styles.nikeView}>
              <View style={styles.rectangleView2} />
              <View style={styles.rectangleView3} />
              <Image
                style={styles.vectorIcon}
                resizeMode="cover"
                source={require("../assets/vector.png")}
              />
              <Text style={styles.nikeText}>Nike</Text>
            </View>
          </View>
          <View style={[styles.frameView4, styles.ml12]}>
            <View style={styles.filaView}>
              <View style={styles.rectangleView4} />
              <View style={styles.rectangleView5} />
              <Text style={styles.filaText}>Fila</Text>
              <Image
                style={styles.fila91Icon}
                resizeMode="cover"
                source={require("../assets/fila9-1.png")}
              />
            </View>
          </View>
          <View style={[styles.frameView5, styles.ml12]}>
            <View style={styles.filaView1}>
              <View style={styles.rectangleView6} />
              <View style={styles.rectangleView7} />
              <Text style={styles.filaText1}>Fila</Text>
              <Image
                style={styles.fila91Icon1}
                resizeMode="cover"
                source={require("../assets/fila9-11.png")}
              />
            </View>
          </View>
          <View style={[styles.pumaView, styles.ml12]}>
            <View style={styles.rectangleView8} />
            <View style={styles.rectangleView9} />
            <Text style={styles.pumaText}>Puma</Text>
            <Image
              style={styles.pumaLogo1Icon}
              resizeMode="cover"
              source={require("../assets/pumalogo-1.png")}
            />
          </View>
        </View>
        <Text style={styles.seeAllText}>See All</Text>
        <Text style={styles.recommendedStoresText}>
          <Text style={styles.recommenText}>Recommen</Text>
          <Text style={styles.dText}>d</Text>
          <Text style={styles.edStoresText}>ed stores</Text>
        </Text>
      </View>
      <View style={styles.groupView2}>
        <View style={styles.rectangleView10} />
        <Text style={styles.inviteYourFriendAndGetAG}>
          <Text style={styles.inviteYour}>{`Invite your  Friend `}</Text>
          <Text style={styles.andGetA}>and get a gift in your wallet</Text>
        </Text>
        <Text style={styles.inviteAndEarn}>Invite and Earn</Text>
        <View style={styles.frameView7}>
          <Text style={styles.referNowText}>Refer Now</Text>
        </View>
        <Image
          style={styles.groupIcon}
          resizeMode="cover"
          source={require("../assets/group-101.png")}
        />
        <Image
          style={styles.groupIcon1}
          resizeMode="cover"
          source={require("../assets/group.png")}
        />
        <Image
          style={styles.groupIcon2}
          resizeMode="cover"
          source={require("../assets/group1.png")}
        />
      </View>
      <View style={styles.groupView3}>
        <Image
          style={styles.tabBarIcon}
          resizeMode="cover"
          source={require("../assets/tab-bar.png")}
        />
        <StickyNavigation />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml8: {
    marginLeft: 8,
  },
  ml9: {
    marginLeft: 9,
  },
  mt12: {
    marginTop: 12,
  },
  ml12: {
    marginLeft: 12,
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
    backgroundColor: "#171717",
    width: 134,
    height: 5,
  },
  barsHomeIndicatorIPhone: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 375,
    height: 34,
    opacity: 0.05,
  },
  tabBarView: {
    position: "absolute",
    top: 746,
    left: 0,
    width: 375,
    height: 34,
  },
  borderView: {
    position: "absolute",
    top: 0,
    right: 2.33,
    borderRadius: 2.67,
    borderStyle: "solid",
    borderColor: "#171717",
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
    backgroundColor: "#171717",
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
    color: "#171717",
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
  iconsDevicesqr: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
  },
  hanoiVietnamText: {
    position: "relative",
    fontSize: 12,
    letterSpacing: -0.2,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "right",
  },
  rightView: {
    position: "absolute",
    top: 60,
    right: 35,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
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
  barsTopBarsV4View: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#fff",
    width: 375,
    height: 100,
  },
  notificationsIcon: {
    position: "absolute",
    top: 52,
    left: 303,
    borderRadius: 1000,
    width: 48,
    height: 48,
    overflow: "hidden",
  },
  konixText: {
    position: "absolute",
    top: 55,
    left: 142,
    fontSize: 32,
    letterSpacing: -0.2,
    fontStyle: "italic",
    fontWeight: "900",
    fontFamily: "Playfair Display",
    color: "#000",
    textAlign: "left",
  },
  topBarView: {
    position: "absolute",
    top: -30,
    left: -15,
    width: 375,
    height: 100,
  },
  categoriesText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    letterSpacing: -0.4,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 113,
    height: 12,
  },
  text: {
    position: "absolute",
    top: 20,
    right: 19,
    left: 19,
    fontSize: 18,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: "Outfit",
    color: "#333",
    textAlign: "left",
  },
  fashion01Icon: {
    position: "absolute",
    transform: [
      {
        translateY: -19.76,
      },
      {
        translateX: -55.14,
      },
    ],
    top: "50%",
    left: "50%",
    width: 115.29,
    height: 74.51,
  },
  fashionView: {
    position: "relative",
    borderRadius: 10,
    backgroundColor: "#afc1ff",
    shadowColor: "rgba(0, 0, 0, 0.04)",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    width: 103,
    height: 139,
    flexShrink: 0,
  },
  text1: {
    position: "absolute",
    top: 20,
    right: 8,
    left: 8,
    fontSize: 18,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: "Outfit",
    color: "#333",
    textAlign: "left",
  },
  unsplashjmSl8pSJDFMIcon: {
    position: "absolute",
    top: 27,
    left: 26,
    width: 77,
    height: 102,
  },
  unsplash7ic3yF64FS8Icon: {
    position: "absolute",
    top: 44,
    left: 1,
    width: 71,
    height: 95,
  },
  fragranceView: {
    position: "relative",
    borderRadius: 10,
    backgroundColor: "#ecd5b6",
    shadowColor: "rgba(0, 0, 0, 0.04)",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    width: 103,
    height: 139,
    flexShrink: 0,
    overflow: "hidden",
  },
  text2: {
    position: "absolute",
    top: 20,
    right: 20,
    left: 12,
    fontSize: 18,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: "Outfit",
    color: "#333",
    textAlign: "left",
  },
  electronics07Icon: {
    position: "absolute",
    transform: [
      {
        translateY: -18.5,
      },
      {
        translateX: -44.5,
      },
    ],
    top: "50%",
    left: "50%",
    width: 89,
    height: 88,
  },
  kidsView: {
    position: "relative",
    borderRadius: 10,
    backgroundColor: "#b9aeff",
    shadowColor: "rgba(0, 0, 0, 0.04)",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    width: 103,
    height: 139,
    flexShrink: 0,
    overflow: "hidden",
  },
  frameView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  frameView1: {
    position: "absolute",
    top: 28,
    left: 0,
    height: 619,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  groupView: {
    position: "absolute",
    top: 600,
    left: 24,
    width: 327,
    height: 647,
  },
  lineView: {
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
    color: "rgba(23, 23, 23, 0.4)",
    textAlign: "left",
    width: 233,
  },
  searchView: {
    position: "absolute",
    top: 200,
    left: 24,
    backgroundColor: "#fff",
    width: 327,
    height: 44,
  },
  shopYourFavoriteLuxuryProd: {
    position: "absolute",
    top: 116,
    left: 24,
    fontSize: 27,
    letterSpacing: -0.4,
    lineHeight: 30,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
    width: 305,
  },
  rectangleView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#f5f6fa",
    width: 115,
    height: 50,
  },
  frameView2: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#f5f6fa",
    width: 115,
    height: 50,
  },
  rectangleView1: {
    position: "absolute",
    top: 5,
    left: 5,
    borderRadius: 10,
    backgroundColor: "#fefefe",
    width: 40,
    height: 40,
  },
  adidasIcon: {
    position: "absolute",
    top: 17,
    left: 12,
    width: 25,
    height: 17,
    overflow: "hidden",
  },
  adidasText: {
    position: "absolute",
    top: 15,
    left: 55,
    fontSize: 14,
    letterSpacing: -0.1,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
  },
  adidasView: {
    position: "relative",
    width: 115,
    height: 50,
    flexShrink: 0,
  },
  rectangleView2: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#f5f6fa",
    width: 98,
    height: 50,
  },
  rectangleView3: {
    position: "absolute",
    top: 5,
    left: 6,
    borderRadius: 10,
    backgroundColor: "#fefefe",
    width: 40,
    height: 40,
  },
  vectorIcon: {
    position: "absolute",
    top: 19,
    left: 14,
    width: 26,
    height: 13.52,
  },
  nikeText: {
    position: "absolute",
    top: 15,
    left: 56,
    fontSize: 14,
    letterSpacing: -0.1,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
  },
  nikeView: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 98,
    height: 50,
  },
  frameView3: {
    position: "relative",
    width: 98,
    height: 50,
    flexShrink: 0,
  },
  rectangleView4: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#f5f6fa",
    width: 91,
    height: 50,
  },
  rectangleView5: {
    position: "absolute",
    top: 5,
    left: 6,
    borderRadius: 10,
    backgroundColor: "#fefefe",
    width: 40,
    height: 40,
  },
  filaText: {
    position: "absolute",
    top: 15,
    left: 56,
    fontSize: 14,
    letterSpacing: -0.1,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
  },
  fila91Icon: {
    position: "absolute",
    top: 21,
    left: 14,
    width: 25,
    height: 9,
    overflow: "hidden",
  },
  filaView: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 91,
    height: 50,
  },
  frameView4: {
    position: "relative",
    width: 91,
    height: 50,
    flexShrink: 0,
  },
  rectangleView6: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#f5f6fa",
    width: 91,
    height: 50,
  },
  rectangleView7: {
    position: "absolute",
    top: 5,
    left: 6,
    borderRadius: 10,
    backgroundColor: "#fefefe",
    width: 40,
    height: 40,
  },
  filaText1: {
    position: "absolute",
    top: 15,
    left: 56,
    fontSize: 14,
    letterSpacing: -0.1,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
  },
  fila91Icon1: {
    position: "absolute",
    top: 21,
    left: 14,
    width: 25,
    height: 9,
    overflow: "hidden",
  },
  filaView1: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 91,
    height: 50,
  },
  frameView5: {
    position: "relative",
    width: 91,
    height: 50,
    flexShrink: 0,
  },
  rectangleView8: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#f5f6fa",
    width: 106,
    height: 50,
  },
  rectangleView9: {
    position: "absolute",
    top: 5,
    left: 5,
    borderRadius: 10,
    backgroundColor: "#fefefe",
    width: 40,
    height: 40,
  },
  pumaText: {
    position: "absolute",
    top: 17,
    left: 55,
    fontSize: 15,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#171717",
    textAlign: "left",
  },
  pumaLogo1Icon: {
    position: "absolute",
    top: 18,
    left: 13,
    width: 25,
    height: 13,
    overflow: "hidden",
  },
  pumaView: {
    position: "relative",
    width: 106,
    height: 50,
    flexShrink: 0,
  },
  frameView6: {
    position: "absolute",
    top: 37,
    right: 0,
    left: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  seeAllText: {
    position: "absolute",
    top: 1,
    left: 288,
    fontSize: 12,
    textDecoration: "underline",
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "rgba(23, 23, 23, 0.4)",
    textAlign: "left",
  },
  recommenText: {
    letterSpacing: "-0.4%",
  },
  dText: {
    letterSpacing: -0.4,
  },
  edStoresText: {
    letterSpacing: "-0.4%",
  },
  recommendedStoresText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
  },
  groupView1: {
    position: "absolute",
    top: 276,
    right: 0,
    left: 23,
    height: 87,
  },
  rectangleView10: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 12,
    backgroundColor: "#171717",
    shadowColor: "rgba(0, 0, 0, 0.08)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 335,
    height: 160,
  },
  inviteYour: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  andGetA: {
    margin: 0,
  },
  inviteYourFriendAndGetAG: {
    position: "absolute",
    top: 49,
    left: 20,
    fontSize: 18,
    fontWeight: "500",
    fontFamily: "DM Sans",
    color: "#fff",
    whiteSpace: "pre-wrap",
    textAlign: "left",
    width: 236,
  },
  inviteAndEarn: {
    position: "absolute",
    top: 24,
    left: 19.53,
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#fff",
    textAlign: "left",
  },
  referNowText: {
    position: "relative",
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "center",
  },
  frameView7: {
    position: "absolute",
    top: 113,
    left: 20,
    borderRadius: 4,
    backgroundColor: "#f8f9fa",
    shadowColor: "rgba(0, 0, 0, 0.08)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 8,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  groupIcon: {
    position: "absolute",
    height: "46.53%",
    width: "22.22%",
    top: "44.38%",
    right: "2.86%",
    bottom: "9.1%",
    left: "74.93%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  groupIcon1: {
    position: "absolute",
    height: "23.54%",
    width: "24.1%",
    top: "70.63%",
    right: "24.26%",
    bottom: "5.84%",
    left: "51.64%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  groupIcon2: {
    position: "absolute",
    height: "6.67%",
    width: "14.89%",
    top: "79.06%",
    right: "30.73%",
    bottom: "14.27%",
    left: "54.38%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  groupView2: {
    position: "absolute",
    top: 387,
    left: 20,
    width: 335,
    height: 160,
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
  groupView3: {
    position: "absolute",
    right: 0,
    bottom: 32,
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
  homeView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 1200,
    overflow: "hidden",
  },
});

export default Home;
