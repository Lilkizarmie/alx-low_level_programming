import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

const Search = () => {
  return (
    <View style={styles.searchView1}>
      <View style={styles.itemView}>
        <View style={styles.lineView} />
        <Image
          style={styles.iconR}
          resizeMode="cover"
          source={require("../assets/iconr.png")}
        />
        <Image
          style={styles.iconL}
          resizeMode="cover"
          source={require("../assets/iconl.png")}
        />
        <Text style={styles.beolit17Text}>Chanel</Text>
      </View>
      <View style={styles.itemView1}>
        <View style={styles.lineView1} />
        <Image
          style={styles.iconR1}
          resizeMode="cover"
          source={require("../assets/iconr.png")}
        />
        <Image
          style={styles.iconL1}
          resizeMode="cover"
          source={require("../assets/iconl.png")}
        />
        <Text style={styles.beosoundBalanceText}>Louis Vuitton</Text>
      </View>
      <View style={styles.itemView2}>
        <View style={styles.lineView2} />
        <Image
          style={styles.iconR2}
          resizeMode="cover"
          source={require("../assets/iconr.png")}
        />
        <Image
          style={styles.iconL2}
          resizeMode="cover"
          source={require("../assets/iconl.png")}
        />
        <Text style={styles.beosound1Text}>Nike</Text>
      </View>
      <Text style={styles.recentSearchesText}>Recent Searches</Text>
      <Text style={styles.recentSearchesText1}>Search Results (1 item)</Text>
      <View style={styles.groupView}>
        <View style={styles.searchView}>
          <View style={styles.lineView3} />
          <Image
            style={styles.iconsOtherclose}
            resizeMode="cover"
            source={require("../assets/iconsotherclose2.png")}
          />
          <Text style={styles.placeholderText}>Adid</Text>
        </View>
      </View>
      <View style={styles.adidasView}>
        <View style={styles.frameView}>
          <View style={styles.groupView1}>
            <Image
              style={styles.groupIcon}
              resizeMode="cover"
              source={require("../assets/group-68503.png")}
            />
            <Text style={styles.adidasText}>Adidas</Text>
          </View>
        </View>
      </View>
      <View style={styles.lineView4} />
      <View style={styles.frameView1}>
        <View style={styles.itemView3}>
          <View style={styles.baseView} />
          <Text style={styles.menText}>Shoes</Text>
        </View>
        <View style={styles.itemView4}>
          <View style={styles.baseView1} />
          <Text style={styles.bothText}>Children</Text>
        </View>
        <View style={styles.itemView5}>
          <View style={styles.baseView2} />
          <Text style={styles.womenText}>Books</Text>
        </View>
        <View style={styles.itemView6}>
          <View style={styles.baseView3} />
          <Text style={styles.bothText1}>Gadgets</Text>
        </View>
        <View style={styles.itemView7}>
          <View style={styles.baseView4} />
          <Text style={styles.womenText1}>Gaming</Text>
        </View>
        <View style={styles.itemView8}>
          <View style={styles.baseView5} />
          <Text style={styles.womenText2}>Lingerie</Text>
        </View>
        <View style={styles.itemView9}>
          <View style={styles.baseView6} />
          <Text style={styles.bothText2}>Cosmetics</Text>
        </View>
        <View style={styles.itemView10}>
          <View style={styles.baseView7} />
          <Text style={styles.womenText3}>Fashion</Text>
        </View>
        <View style={styles.itemView11}>
          <View style={styles.baseView8} />
          <Text style={styles.womenText4}>Fragrance</Text>
        </View>
      </View>
      <View style={styles.groupView2}>
        <Image
          style={styles.tabBarIcon}
          resizeMode="cover"
          source={require("../assets/tab-bar2.png")}
        />
        <Image
          style={styles.menu1Icon}
          resizeMode="cover"
          source={require("../assets/-menu-12.png")}
        />
        <Image
          style={styles.lucidewalletIcon}
          resizeMode="cover"
          source={require("../assets/lucidewallet2.png")}
        />
        <Image
          style={styles.iconsOthershoppingCart}
          resizeMode="cover"
          source={require("../assets/iconsothershoppingcart2.png")}
        />
        <Image
          style={styles.menu3Icon}
          resizeMode="cover"
          source={require("../assets/-menu-32.png")}
        />
        <View style={styles.baseView9} />
        <Text style={styles.storesText}>Stores</Text>
        <Image
          style={styles.store1Icon}
          resizeMode="cover"
          source={require("../assets/store-12.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  lineView: {
    position: "absolute",
    height: "2.44%",
    top: "97.56%",
    right: 0,
    bottom: "0%",
    left: 0,
    backgroundColor: "#8f92a1",
    opacity: 0.2,
  },
  iconR: {
    position: "absolute",
    height: "39.02%",
    width: "5.25%",
    top: "9.76%",
    right: "1.31%",
    bottom: "51.22%",
    left: "93.44%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  iconL: {
    position: "absolute",
    height: "58.54%",
    width: "7.87%",
    top: "0%",
    right: "92.13%",
    bottom: "41.46%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  beolit17Text: {
    position: "absolute",
    height: "58.54%",
    width: "75.08%",
    top: "0%",
    right: "11.8%",
    bottom: "41.46%",
    left: "13.11%",
    fontSize: 16,
    letterSpacing: -0.4,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
  },
  itemView: {
    position: "absolute",
    height: "5.05%",
    width: "81.33%",
    top: "42.61%",
    right: "9.6%",
    bottom: "52.34%",
    left: "9.07%",
    overflow: "hidden",
  },
  lineView1: {
    position: "absolute",
    height: "2.44%",
    top: "97.56%",
    right: 0,
    bottom: "0%",
    left: 0,
    backgroundColor: "#8f92a1",
    opacity: 0.2,
  },
  iconR1: {
    position: "absolute",
    height: "39.02%",
    width: "5.25%",
    top: "9.76%",
    right: "1.31%",
    bottom: "51.22%",
    left: "93.44%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  iconL1: {
    position: "absolute",
    height: "58.54%",
    width: "7.87%",
    top: "0%",
    right: "92.13%",
    bottom: "41.46%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  beosoundBalanceText: {
    position: "absolute",
    height: "58.54%",
    width: "75.08%",
    top: "0%",
    right: "11.8%",
    bottom: "41.46%",
    left: "13.11%",
    fontSize: 16,
    letterSpacing: -0.4,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
  },
  itemView1: {
    position: "absolute",
    height: "5.05%",
    width: "81.33%",
    top: "34.61%",
    right: "9.6%",
    bottom: "60.34%",
    left: "9.07%",
    overflow: "hidden",
  },
  lineView2: {
    position: "absolute",
    height: "2.44%",
    top: "97.56%",
    right: 0,
    bottom: "0%",
    left: 0,
    backgroundColor: "#8f92a1",
    opacity: 0.2,
  },
  iconR2: {
    position: "absolute",
    height: "39.02%",
    width: "5.25%",
    top: "9.76%",
    right: "1.31%",
    bottom: "51.22%",
    left: "93.44%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  iconL2: {
    position: "absolute",
    height: "58.54%",
    width: "7.87%",
    top: "0%",
    right: "92.13%",
    bottom: "41.46%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  beosound1Text: {
    position: "absolute",
    height: "58.54%",
    width: "75.08%",
    top: "0%",
    right: "11.8%",
    bottom: "41.46%",
    left: "13.11%",
    fontSize: 16,
    letterSpacing: -0.4,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
  },
  itemView2: {
    position: "absolute",
    height: "5.05%",
    width: "81.33%",
    top: "26.6%",
    right: "9.6%",
    bottom: "68.35%",
    left: "9.07%",
    overflow: "hidden",
  },
  recentSearchesText: {
    position: "absolute",
    transform: [
      {
        translateY: -234,
      },
    ],
    top: "50%",
    right: 227,
    left: 23,
    fontSize: 12,
    letterSpacing: 1,
    lineHeight: 20,
    textTransform: "uppercase",
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
    opacity: 0.4,
  },
  recentSearchesText1: {
    position: "absolute",
    transform: [
      {
        translateY: 5,
      },
    ],
    top: "50%",
    right: 183,
    left: 23,
    fontSize: 12,
    letterSpacing: 1,
    lineHeight: 20,
    textTransform: "uppercase",
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
    opacity: 0.4,
  },
  lineView3: {
    position: "absolute",
    height: "104.55%",
    top: "-2.27%",
    right: -1,
    bottom: "-2.27%",
    left: -1,
    borderRadius: 12,
    borderStyle: "solid",
    borderColor: "#f2b51d",
    borderWidth: 1,
  },
  iconsOtherclose: {
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
  searchView: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 305,
    height: 44,
  },
  groupView: {
    position: "absolute",
    top: 40,
    left: 34,
    width: 305,
    height: 44,
  },
  groupIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 70,
    height: 70,
  },
  adidasText: {
    position: "absolute",
    top: 74,
    left: 12,
    fontSize: 14,
    letterSpacing: -0.1,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
  },
  groupView1: {
    position: "absolute",
    top: 6,
    left: 14,
    width: 70,
    height: 94,
  },
  frameView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#f5f6fa",
    width: 98,
    height: 109,
  },
  adidasView: {
    position: "absolute",
    top: 455,
    left: 34,
    width: 98,
    height: 109,
  },
  lineView4: {
    position: "absolute",
    top: 168,
    left: -1,
    backgroundColor: "#fff",
    width: 375,
    height: 1,
  },
  baseView: {
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
    width: "42.11%",
    top: "50%",
    right: "29.47%",
    left: "28.42%",
    fontSize: 14,
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
    top: "0%",
    right: 242,
    bottom: "0%",
    left: 0,
  },
  baseView1: {
    position: "absolute",
    height: "102.5%",
    top: "-1.25%",
    right: -0.5,
    bottom: "-1.25%",
    left: -0.5,
    borderRadius: 180,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
  },
  bothText: {
    position: "absolute",
    transform: [
      {
        translateY: -10,
      },
    ],
    width: "57.89%",
    top: "50%",
    right: "20.53%",
    left: "21.58%",
    fontSize: 14,
    letterSpacing: -0.4,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "center",
  },
  itemView4: {
    position: "absolute",
    height: "100%",
    top: "0%",
    right: 141,
    bottom: "0%",
    left: 101,
  },
  baseView2: {
    position: "absolute",
    height: "102.5%",
    top: "-1.25%",
    right: -0.5,
    bottom: "-1.25%",
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
    width: "42.11%",
    top: "50%",
    right: "28.95%",
    left: "28.95%",
    fontSize: 14,
    letterSpacing: -0.4,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "center",
  },
  itemView5: {
    position: "absolute",
    height: "100%",
    top: "0%",
    right: 40,
    bottom: "0%",
    left: 202,
  },
  baseView3: {
    position: "absolute",
    height: "102.5%",
    top: "-1.25%",
    right: -0.5,
    bottom: "-1.25%",
    left: -0.5,
    borderRadius: 180,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
  },
  bothText1: {
    position: "absolute",
    transform: [
      {
        translateY: -9.09,
      },
    ],
    width: "57.89%",
    top: "50%",
    right: "20.53%",
    left: "21.58%",
    fontSize: 14,
    letterSpacing: -0.4,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "center",
    height: 18.18,
  },
  itemView6: {
    position: "absolute",
    height: "100%",
    top: "0%",
    right: -61,
    bottom: "0%",
    left: 303,
  },
  baseView4: {
    position: "absolute",
    height: "102.5%",
    top: "-1.25%",
    right: -0.5,
    bottom: "-1.25%",
    left: -0.5,
    borderRadius: 180,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
  },
  womenText1: {
    position: "absolute",
    transform: [
      {
        translateY: -8,
      },
    ],
    width: "53.68%",
    top: "50%",
    right: "22.63%",
    left: "23.68%",
    fontSize: 14,
    letterSpacing: -0.4,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "center",
  },
  itemView7: {
    position: "absolute",
    height: "100%",
    top: "0%",
    right: -166,
    bottom: "0%",
    left: 408,
  },
  baseView5: {
    position: "absolute",
    height: "102.5%",
    top: "-1.25%",
    right: -0.5,
    bottom: "-1.25%",
    left: -0.5,
    borderRadius: 180,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
  },
  womenText2: {
    position: "absolute",
    transform: [
      {
        translateY: -9.09,
      },
    ],
    width: "53.68%",
    top: "50%",
    right: "22.63%",
    left: "23.68%",
    fontSize: 14,
    letterSpacing: -0.4,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "center",
    height: 18.18,
  },
  itemView8: {
    position: "absolute",
    height: "100%",
    top: "0%",
    right: -271,
    bottom: "0%",
    left: 513,
  },
  baseView6: {
    position: "absolute",
    height: "102.5%",
    top: "-1.25%",
    right: -0.5,
    bottom: "-1.25%",
    left: -0.5,
    borderRadius: 180,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
  },
  bothText2: {
    position: "absolute",
    transform: [
      {
        translateY: -9.09,
      },
    ],
    width: "73.68%",
    top: "50%",
    right: "13.16%",
    left: "13.16%",
    fontSize: 14,
    letterSpacing: -0.4,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "center",
    height: 18.18,
  },
  itemView9: {
    position: "absolute",
    height: "100%",
    top: "0%",
    right: -376,
    bottom: "0%",
    left: 618,
  },
  baseView7: {
    position: "absolute",
    height: "102.5%",
    top: "-1.25%",
    right: -0.5,
    bottom: "-1.25%",
    left: -0.5,
    borderRadius: 180,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
  },
  womenText3: {
    position: "absolute",
    transform: [
      {
        translateY: -9.09,
      },
    ],
    width: "52.63%",
    top: "50%",
    right: "23.68%",
    left: "23.68%",
    fontSize: 14,
    letterSpacing: -0.4,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "center",
    height: 18.18,
  },
  itemView10: {
    position: "absolute",
    height: "100%",
    top: "0%",
    right: -481,
    bottom: "0%",
    left: 723,
  },
  baseView8: {
    position: "absolute",
    height: "102.5%",
    top: "-1.25%",
    right: -0.5,
    bottom: "-1.25%",
    left: -0.5,
    borderRadius: 180,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
  },
  womenText4: {
    position: "absolute",
    transform: [
      {
        translateY: -8,
      },
    ],
    width: "69.47%",
    top: "50%",
    right: "15.26%",
    left: "15.26%",
    fontSize: 14,
    letterSpacing: -0.4,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "center",
  },
  itemView11: {
    position: "absolute",
    height: "100%",
    top: "0%",
    right: -586,
    bottom: "0%",
    left: 828,
  },
  frameView1: {
    position: "absolute",
    top: 108,
    left: 23,
    width: 337,
    height: 40,
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
    height: "21.82%",
    width: "6.13%",
    top: "30%",
    right: "87.47%",
    bottom: "48.18%",
    left: "6.4%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  lucidewalletIcon: {
    position: "absolute",
    height: "21.82%",
    width: "6.4%",
    top: "30%",
    right: "38.4%",
    bottom: "48.18%",
    left: "55.2%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  iconsOthershoppingCart: {
    position: "absolute",
    height: "21.82%",
    width: "6.4%",
    top: "30%",
    right: "22.4%",
    bottom: "48.18%",
    left: "71.2%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  menu3Icon: {
    position: "absolute",
    height: "21.82%",
    width: "6.4%",
    top: "30%",
    right: "6.4%",
    bottom: "48.18%",
    left: "87.2%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  baseView9: {
    position: "absolute",
    height: "36.36%",
    width: "24.53%",
    top: "21.82%",
    right: "54.4%",
    bottom: "41.82%",
    left: "21.07%",
    borderRadius: 20,
    backgroundColor: "#f2b51d",
  },
  storesText: {
    position: "absolute",
    height: "18.18%",
    width: "9.33%",
    top: "30.91%",
    right: "57.6%",
    bottom: "50.91%",
    left: "33.07%",
    fontSize: 12,
    letterSpacing: -0.6,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#000",
    textAlign: "left",
  },
  store1Icon: {
    position: "absolute",
    height: "21.82%",
    width: "6.4%",
    top: "29.09%",
    right: "69.33%",
    bottom: "49.09%",
    left: "24.27%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  groupView2: {
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
    height: 86,
  },
  searchView1: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Search;
