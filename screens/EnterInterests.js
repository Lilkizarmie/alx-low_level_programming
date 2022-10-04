import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import AddBox from "../components/AddBox";
import InterestBtn from "../components/InterestBtn";

const EnterInterests = () => {
  return (
    <View style={styles.enterInterestsView}>
      <View style={styles.topBarView}>
        <View style={styles.iPhoneXStatusBarsStatusBa1}>
          <View style={styles.bgView} />
          <View style={styles.iPhoneXStatusBarsStatusBa}>
            <View style={styles.rectangleView} />
            <View style={styles.batteryView}>
              <View style={styles.borderView} />
              <Image
                style={styles.capIcon}
                resizeMode="cover"
                source={require("../assets/cap2.png")}
              />
              <View style={styles.capacityView} />
            </View>
            <Image
              style={styles.wifiIcon}
              resizeMode="cover"
              source={require("../assets/wifi2.png")}
            />
            <Image
              style={styles.cellularConnectionIcon}
              resizeMode="cover"
              source={require("../assets/cellular-connection2.png")}
            />
            <View style={styles.timeStyleView}>
              <Text style={styles.timeText}>
                <Text style={styles.text}>9:4</Text>1
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.icon34closeView1}>
          <View style={styles.icon34closeView}>
            <View style={styles.baseView} />
            <View style={styles.combinedShapeView}>
              <View style={styles.rectangle185View} />
              <View style={styles.rectangle185CopyView} />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.listItemView}>
        <Text style={styles.booksText}>Books</Text>
        <View style={styles.horizontalRuleView} />
        <AddBox />
      </View>
      <View style={styles.listItemView1}>
        <Text style={styles.childrenText}>Children</Text>
        <View style={styles.horizontalRuleView1} />
        <AddBox />
      </View>
      <View style={styles.listItemView2}>
        <Text style={styles.fragranceText}>Fragrance</Text>
        <View style={styles.horizontalRuleView2} />
        <AddBox />
      </View>
      <View style={styles.listItemView3}>
        <Text style={styles.gamingText}>Gaming</Text>
        <View style={styles.horizontalRuleView3} />
        <AddBox />
      </View>
      <View style={styles.listItemView4}>
        <Text style={styles.lingerieText}>Lingerie</Text>
        <View style={styles.horizontalRuleView4} />
        <AddBox />
      </View>
      <View style={styles.listItemView5}>
        <Text style={styles.cosmeticsText}>Cosmetics</Text>
        <View style={styles.horizontalRuleView5} />
        <View style={styles.checkboxPillGrowSelectedDe}>
          <View style={styles.pillGrowView}>
            <Image
              style={styles.outline16pxCheck}
              resizeMode="cover"
              source={require("../assets/outline-16px--check.png")}
            />
            <Text style={[styles.checkboxLabelText, styles.ml8]}>Added</Text>
            <Image
              style={[styles.outline16pxChevronRight, styles.ml8]}
              resizeMode="cover"
              source={require("../assets/outline-16px--chevronright2.png")}
            />
          </View>
        </View>
      </View>
      <View style={styles.listItemView6}>
        <Text style={styles.fashionText}>Fashion</Text>
        <View style={styles.horizontalRuleView6} />
        <View style={styles.checkboxPillGrowSelectedDe1}>
          <View style={styles.pillGrowView1}>
            <Image
              style={styles.outline16pxCheck1}
              resizeMode="cover"
              source={require("../assets/outline-16px--check.png")}
            />
            <Text style={[styles.checkboxLabelText1, styles.ml8]}>Added</Text>
            <Image
              style={[styles.outline16pxChevronRight1, styles.ml8]}
              resizeMode="cover"
              source={require("../assets/outline-16px--chevronright2.png")}
            />
          </View>
        </View>
      </View>
      <View style={styles.listItemView7}>
        <Text style={styles.gadgetsText}>Gadgets</Text>
        <View style={styles.horizontalRuleView7} />
        <View style={styles.checkboxPillGrowSelectedDe2}>
          <View style={styles.pillGrowView2}>
            <Image
              style={styles.outline16pxCheck2}
              resizeMode="cover"
              source={require("../assets/outline-16px--check.png")}
            />
            <Text style={[styles.checkboxLabelText2, styles.ml8]}>Added</Text>
            <Image
              style={[styles.outline16pxChevronRight2, styles.ml8]}
              resizeMode="cover"
              source={require("../assets/outline-16px--chevronright2.png")}
            />
          </View>
        </View>
      </View>
      <View style={styles.listItemView8}>
        <Text style={styles.shoesText}>Shoes</Text>
        <View style={styles.horizontalRuleView8} />
        <View style={styles.checkboxPillGrowSelectedDe3}>
          <View style={styles.pillGrowView3}>
            <Image
              style={styles.outline16pxCheck3}
              resizeMode="cover"
              source={require("../assets/outline-16px--check.png")}
            />
            <Text style={[styles.checkboxLabelText3, styles.ml8]}>Added</Text>
            <Image
              style={[styles.outline16pxChevronRight3, styles.ml8]}
              resizeMode="cover"
              source={require("../assets/outline-16px--chevronright2.png")}
            />
          </View>
        </View>
      </View>
      <InterestBtn />
      <View style={styles.textView}>
        <Text style={styles.tellUsYourInterests}>Tell us your interests</Text>
      </View>
      <View style={styles.tertiaryButtonDefault}>
        <View style={styles.regGrowView}>
          <View style={styles.buttonContentView}>
            <Image
              style={styles.outline16pxHeart}
              resizeMode="cover"
              source={require("../assets/outline-16px--heart.png")}
            />
            <Text style={[styles.buttonLabelText, styles.ml8]}>Skip</Text>
            <Image
              style={[styles.outline16pxChevronRight4, styles.ml8]}
              resizeMode="cover"
              source={require("../assets/outline-16px--chevronright.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml8: {
    marginLeft: 8,
  },
  bgView: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#fff",
    width: 375,
    height: 44,
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
  borderView: {
    position: "absolute",
    height: "100%",
    width: "90.43%",
    top: "0%",
    right: "9.57%",
    bottom: "0%",
    left: "0%",
    borderRadius: 2.67,
    borderStyle: "solid",
    borderColor: "#171717",
    borderWidth: 1,
    opacity: 0.35,
  },
  capIcon: {
    position: "absolute",
    height: "35.29%",
    width: "5.46%",
    top: "32.35%",
    right: "0%",
    bottom: "32.35%",
    left: "94.54%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    opacity: 0.4,
  },
  capacityView: {
    position: "absolute",
    height: "64.71%",
    width: "73.99%",
    top: "17.65%",
    right: "17.79%",
    bottom: "17.65%",
    left: "8.22%",
    borderRadius: 1.33,
    backgroundColor: "#171717",
  },
  batteryView: {
    position: "absolute",
    height: "25.76%",
    width: "6.49%",
    top: "39.39%",
    right: "3.91%",
    bottom: "34.85%",
    left: "89.6%",
  },
  wifiIcon: {
    position: "relative",
    width: 15.27,
    height: 10.97,
  },
  cellularConnectionIcon: {
    position: "relative",
    width: 17,
    height: 10.67,
  },
  text: {
    letterSpacing: -0.28,
  },
  timeText: {
    position: "absolute",
    transform: [
      {
        translateY: -7.5,
      },
    ],
    width: "100%",
    top: "50%",
    right: "0%",
    left: "0%",
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Outfit",
    color: "#171717",
    textAlign: "center",
  },
  timeStyleView: {
    position: "absolute",
    top: 13,
    left: 21,
    width: 54,
    height: 21,
  },
  iPhoneXStatusBarsStatusBa: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    display: "none",
  },
  iPhoneXStatusBarsStatusBa1: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 375,
    height: 44,
  },
  baseView: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  rectangle185View: {
    position: "absolute",
    height: "16.81%",
    width: "134.46%",
    top: "184.46%",
    right: "-123.84%",
    bottom: "-101.27%",
    left: "89.38%",
    borderRadius: 1,
    backgroundColor: "#000",
    transform: [
      {
        rotate: "-45deg",
      },
    ],
  },
  rectangle185CopyView: {
    position: "absolute",
    height: "16.81%",
    width: "134.46%",
    top: "89.38%",
    right: "-135.73%",
    bottom: "-6.19%",
    left: "101.27%",
    borderRadius: 1,
    backgroundColor: "#000",
    transform: [
      {
        rotate: "45deg",
      },
    ],
    opacity: 0.3,
  },
  combinedShapeView: {
    position: "relative",
    backgroundColor: "#171717",
    width: 11.9,
    height: 11.9,
  },
  icon34closeView: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  icon34closeView1: {
    position: "absolute",
    top: 54,
    left: 20,
    width: 34,
    height: 34,
  },
  topBarView: {
    position: "absolute",
    top: -24,
    left: 0,
    width: 375,
    height: 88,
  },
  booksText: {
    position: "absolute",
    top: 20,
    right: 118,
    left: 24,
    fontSize: 16,
    letterSpacing: -0.4,
    lineHeight: 24,
    fontFamily: "Mulish",
    color: "#171717",
    textAlign: "left",
  },
  horizontalRuleView: {
    position: "absolute",
    top: 63.5,
    left: -0.5,
    borderStyle: "solid",
    borderColor: "#f8f7fa",
    borderTopWidth: 1,
    width: 336,
    height: 1,
  },
  listItemView: {
    position: "absolute",
    top: 147,
    right: 20,
    left: 20,
    height: 64,
  },
  childrenText: {
    position: "absolute",
    top: 20,
    right: 118,
    left: 24,
    fontSize: 16,
    letterSpacing: -0.4,
    lineHeight: 24,
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
  },
  horizontalRuleView1: {
    position: "absolute",
    top: 63.5,
    left: -0.5,
    borderStyle: "solid",
    borderColor: "#f8f7fa",
    borderTopWidth: 1,
    width: 336,
    height: 1,
  },
  listItemView1: {
    position: "absolute",
    top: 210,
    right: 20,
    left: 20,
    height: 64,
  },
  fragranceText: {
    position: "absolute",
    top: 20,
    right: 118,
    left: 24,
    fontSize: 16,
    letterSpacing: -0.4,
    lineHeight: 24,
    fontFamily: "Mulish",
    color: "#171717",
    textAlign: "left",
  },
  horizontalRuleView2: {
    position: "absolute",
    top: 63.5,
    left: -0.5,
    borderStyle: "solid",
    borderColor: "#f8f7fa",
    borderTopWidth: 1,
    width: 336,
    height: 1,
  },
  listItemView2: {
    position: "absolute",
    top: 401,
    right: 20,
    left: 20,
    height: 64,
  },
  gamingText: {
    position: "absolute",
    top: 20,
    right: 118,
    left: 24,
    fontSize: 16,
    letterSpacing: -0.4,
    lineHeight: 24,
    fontFamily: "Mulish",
    color: "#171717",
    textAlign: "left",
  },
  horizontalRuleView3: {
    position: "absolute",
    top: 63.5,
    left: -0.5,
    borderStyle: "solid",
    borderColor: "#f8f7fa",
    borderTopWidth: 1,
    width: 336,
    height: 1,
  },
  listItemView3: {
    position: "absolute",
    top: 529,
    right: 20,
    left: 20,
    height: 64,
  },
  lingerieText: {
    position: "absolute",
    top: 20,
    right: 118,
    left: 24,
    fontSize: 16,
    letterSpacing: -0.4,
    lineHeight: 24,
    fontFamily: "Mulish",
    color: "#171717",
    textAlign: "left",
  },
  horizontalRuleView4: {
    position: "absolute",
    top: 63.5,
    left: -0.5,
    borderStyle: "solid",
    borderColor: "#f8f7fa",
    borderTopWidth: 1,
    width: 336,
    height: 1,
  },
  listItemView4: {
    position: "absolute",
    top: 593,
    right: 20,
    left: 20,
    height: 64,
  },
  cosmeticsText: {
    position: "absolute",
    top: 22,
    right: 131,
    left: 24,
    fontSize: 16,
    letterSpacing: -0.4,
    lineHeight: 24,
    fontFamily: "Mulish",
    color: "#171717",
    textAlign: "left",
  },
  horizontalRuleView5: {
    position: "absolute",
    top: 63.5,
    left: -0.5,
    borderStyle: "solid",
    borderColor: "#f8f7fa",
    borderTopWidth: 1,
    width: 336,
    height: 1,
  },
  outline16pxCheck: {
    position: "relative",
    width: 16,
    height: 16,
    flexShrink: 0,
    overflow: "hidden",
  },
  checkboxLabelText: {
    position: "relative",
    fontSize: 12,
    lineHeight: 12,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
  },
  outline16pxChevronRight: {
    position: "relative",
    width: 16,
    height: 16,
    flexShrink: 0,
    overflow: "hidden",
    display: "none",
  },
  pillGrowView: {
    position: "absolute",
    transform: [
      {
        translateY: -16,
      },
    ],
    top: "50%",
    left: 0,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#171717",
    borderWidth: 1,
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 8,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  checkboxPillGrowSelectedDe: {
    position: "absolute",
    top: 16,
    right: 24,
    width: 91,
    height: 32,
  },
  listItemView5: {
    position: "absolute",
    top: 273,
    right: 20,
    left: 20,
    height: 64,
  },
  fashionText: {
    position: "absolute",
    top: 22,
    right: 131,
    left: 24,
    fontSize: 16,
    letterSpacing: -0.4,
    lineHeight: 24,
    fontFamily: "Mulish",
    color: "#171717",
    textAlign: "left",
  },
  horizontalRuleView6: {
    position: "absolute",
    top: 63.5,
    left: -0.5,
    borderStyle: "solid",
    borderColor: "#f8f7fa",
    borderTopWidth: 1,
    width: 376,
    height: 1,
  },
  outline16pxCheck1: {
    position: "relative",
    width: 16,
    height: 16,
    flexShrink: 0,
    overflow: "hidden",
  },
  checkboxLabelText1: {
    position: "relative",
    fontSize: 12,
    lineHeight: 12,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
  },
  outline16pxChevronRight1: {
    position: "relative",
    width: 16,
    height: 16,
    flexShrink: 0,
    overflow: "hidden",
    display: "none",
  },
  pillGrowView1: {
    position: "absolute",
    transform: [
      {
        translateY: -16,
      },
    ],
    top: "50%",
    left: 0,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#171717",
    borderWidth: 1,
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 8,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  checkboxPillGrowSelectedDe1: {
    position: "absolute",
    top: 16,
    right: 24,
    width: 91,
    height: 32,
  },
  listItemView6: {
    position: "absolute",
    top: 337,
    right: 20,
    left: 20,
    height: 64,
  },
  gadgetsText: {
    position: "absolute",
    top: 22,
    right: 131,
    left: 24,
    fontSize: 16,
    letterSpacing: -0.4,
    lineHeight: 24,
    fontFamily: "Mulish",
    color: "#171717",
    textAlign: "left",
  },
  horizontalRuleView7: {
    position: "absolute",
    top: 63.5,
    left: -0.5,
    borderStyle: "solid",
    borderColor: "#f8f7fa",
    borderTopWidth: 1,
    width: 376,
    height: 1,
  },
  outline16pxCheck2: {
    position: "relative",
    width: 16,
    height: 16,
    flexShrink: 0,
    overflow: "hidden",
  },
  checkboxLabelText2: {
    position: "relative",
    fontSize: 12,
    lineHeight: 12,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
  },
  outline16pxChevronRight2: {
    position: "relative",
    width: 16,
    height: 16,
    flexShrink: 0,
    overflow: "hidden",
    display: "none",
  },
  pillGrowView2: {
    position: "absolute",
    transform: [
      {
        translateY: -16,
      },
    ],
    top: "50%",
    left: 0,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#171717",
    borderWidth: 1,
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 8,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  checkboxPillGrowSelectedDe2: {
    position: "absolute",
    top: 16,
    right: 24,
    width: 91,
    height: 32,
  },
  listItemView7: {
    position: "absolute",
    top: 465,
    right: 20,
    left: 20,
    height: 64,
  },
  shoesText: {
    position: "absolute",
    top: 22,
    right: 131,
    left: 24,
    fontSize: 16,
    letterSpacing: -0.4,
    lineHeight: 24,
    fontFamily: "Mulish",
    color: "#171717",
    textAlign: "left",
  },
  horizontalRuleView8: {
    position: "absolute",
    top: 63.5,
    left: -0.5,
    borderStyle: "solid",
    borderColor: "#f8f7fa",
    borderTopWidth: 1,
    width: 376,
    height: 1,
  },
  outline16pxCheck3: {
    position: "relative",
    width: 16,
    height: 16,
    flexShrink: 0,
    overflow: "hidden",
  },
  checkboxLabelText3: {
    position: "relative",
    fontSize: 12,
    lineHeight: 12,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
  },
  outline16pxChevronRight3: {
    position: "relative",
    width: 16,
    height: 16,
    flexShrink: 0,
    overflow: "hidden",
    display: "none",
  },
  pillGrowView3: {
    position: "absolute",
    transform: [
      {
        translateY: -16,
      },
    ],
    top: "50%",
    left: 0,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#171717",
    borderWidth: 1,
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 8,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  checkboxPillGrowSelectedDe3: {
    position: "absolute",
    top: 16,
    right: 24,
    width: 91,
    height: 32,
  },
  listItemView8: {
    position: "absolute",
    top: 657,
    right: 20,
    left: 20,
    height: 64,
  },
  tellUsYourInterests: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 24,
    letterSpacing: 0.14,
    lineHeight: 32,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 287,
    height: 25,
  },
  textView: {
    position: "absolute",
    top: 110,
    left: 44,
    width: 287,
    height: 25,
  },
  outline16pxHeart: {
    position: "relative",
    width: 16,
    height: 16,
    flexShrink: 0,
    overflow: "hidden",
    display: "none",
  },
  buttonLabelText: {
    position: "relative",
    fontSize: 16,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "right",
  },
  outline16pxChevronRight4: {
    position: "relative",
    width: 16,
    height: 16,
    flexShrink: 0,
    overflow: "hidden",
    display: "none",
  },
  buttonContentView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 15,
    height: 48,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  regGrowView: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    height: 48,
  },
  tertiaryButtonDefault: {
    position: "absolute",
    right: 20,
    bottom: 751,
    width: 38,
    height: 48,
  },
  enterInterestsView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default EnterInterests;
