import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import SkipBtn from "../components/SkipBtn";
import NarrowBox from "../components/NarrowBox";

const InterestSpecificity = () => {
  return (
    <View style={styles.interestSpecificityView}>
      <View style={styles.textView}>
        <Text style={styles.narrowItDown}>{`Narrow it down `}</Text>
        <Text style={styles.weAimToProvideMaximumSati}>
          We aim to provide maximum satisfaction by meeting your specific need.
        </Text>
      </View>
      <View style={styles.topBarView}>
        <View style={styles.icon34closeView1}>
          <View style={styles.icon34closeView}>
            <View style={styles.baseView} />
            <View style={styles.combinedShapeView}>
              <View style={styles.rectangle185View} />
              <View style={styles.rectangle185CopyView} />
            </View>
          </View>
        </View>
        <SkipBtn />
      </View>
      <Text style={styles.titleText}>Cosmetics</Text>
      <Text style={styles.titleText1}>Gadgets</Text>
      <Text style={styles.titleText2}>Fashion</Text>
      <Text style={styles.titleText3}>Shoes</Text>
      <View style={styles.contentLeftUnselectedDefaul}>
        <View style={styles.checkboxLeftView}>
          <Text style={styles.text}>Eyeliner</Text>
          <NarrowBox />
        </View>
      </View>
      <View style={styles.contentLeftUnselectedDefaul1}>
        <View style={styles.checkboxLeftView1}>
          <Text style={styles.text1}>Accessories</Text>
          <NarrowBox />
        </View>
      </View>
      <View style={styles.contentLeftUnselectedDefaul2}>
        <View style={styles.checkboxLeftView2}>
          <Text style={styles.text2}>Clothing</Text>
          <NarrowBox />
        </View>
      </View>
      <View style={styles.contentLeftUnselectedDefaul3}>
        <View style={styles.checkboxLeftView3}>
          <Text style={styles.text3}>Sneakers</Text>
          <NarrowBox />
        </View>
      </View>
      <View style={styles.contentLeftUnselectedDefaul4}>
        <View style={styles.checkboxLeftView4}>
          <Text style={styles.text4}>Lip stick</Text>
          <NarrowBox />
        </View>
      </View>
      <View style={styles.contentLeftUnselectedDefaul5}>
        <View style={styles.checkboxLeftView5}>
          <Text style={styles.text5}>Pc’s</Text>
          <NarrowBox />
        </View>
      </View>
      <View style={styles.contentLeftUnselectedDefaul6}>
        <View style={styles.checkboxLeftView6}>
          <Text style={styles.text6}>Glasses</Text>
          <NarrowBox />
        </View>
      </View>
      <View style={styles.contentLeftUnselectedDefaul7}>
        <View style={styles.checkboxLeftView7}>
          <Text style={styles.text7}>{`Oxfords `}</Text>
          <NarrowBox />
        </View>
      </View>
      <View style={styles.contentLeftUnselectedDefaul8}>
        <View style={styles.checkboxLeftView8}>
          <Text style={styles.text8}>Mask</Text>
          <NarrowBox />
        </View>
      </View>
      <View style={styles.contentLeftUnselectedDefaul9}>
        <View style={styles.checkboxLeftView9}>
          <Text style={styles.text9}>Mobile Devices</Text>
          <NarrowBox />
        </View>
      </View>
      <View style={styles.contentLeftUnselectedDefaul10}>
        <View style={styles.checkboxLeftView10}>
          <Text style={styles.text10}>Suits</Text>
          <NarrowBox />
        </View>
      </View>
      <View style={styles.contentLeftUnselectedDefaul11}>
        <View style={styles.checkboxLeftView11}>
          <Text style={styles.text11}>Safety</Text>
          <NarrowBox />
        </View>
      </View>
      <View style={styles.horizontalRuleView} />
      <View style={styles.horizontalRuleView1} />
      <View style={styles.horizontalRuleView2} />
      <View style={styles.horizontalRuleView3} />
      <View style={styles.buttonView}>
        <View style={styles.baseView1} />
        <Image
          style={styles.iconsArrowsarrowLongRight}
          resizeMode="cover"
          source={require("../assets/iconsarrowsarrowlongright.png")}
        />
        <Text style={styles.text12}>Continue</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  narrowItDown: {
    position: "absolute",
    top: 0,
    left: 15,
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
  weAimToProvideMaximumSati: {
    position: "absolute",
    top: 37,
    left: 0,
    fontSize: 16,
    letterSpacing: -0.4,
    lineHeight: 24,
    fontFamily: "DM Sans",
    color: "#868686",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 318,
    height: 35,
  },
  textView: {
    position: "absolute",
    top: 101,
    left: 29,
    width: 318,
    height: 72,
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
    top: 10,
    left: 0,
    width: 34,
    height: 34,
  },
  topBarView: {
    position: "absolute",
    top: 16,
    left: 22,
    width: 331,
    height: 48,
  },
  titleText: {
    position: "absolute",
    top: 207,
    right: 24,
    left: 24,
    fontSize: 24,
    letterSpacing: 0.14,
    lineHeight: 32,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
    display: "flex",
    alignItems: "flex-end",
  },
  titleText1: {
    position: "absolute",
    top: 583,
    right: 24,
    left: 24,
    fontSize: 24,
    letterSpacing: 0.14,
    lineHeight: 32,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
    display: "flex",
    alignItems: "flex-end",
  },
  titleText2: {
    position: "absolute",
    top: 395,
    right: 24,
    left: 24,
    fontSize: 24,
    letterSpacing: 0.14,
    lineHeight: 32,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
    display: "flex",
    alignItems: "flex-end",
  },
  titleText3: {
    position: "absolute",
    top: 771,
    right: 24,
    left: 24,
    fontSize: 24,
    letterSpacing: 0.14,
    lineHeight: 32,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
    display: "flex",
    alignItems: "flex-end",
  },
  text: {
    position: "absolute",
    top: 2,
    right: 40,
    left: 0,
    fontSize: 16,
    letterSpacing: -0.4,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
  },
  checkboxLeftView: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    height: 24,
  },
  contentLeftUnselectedDefaul: {
    position: "absolute",
    top: 255,
    left: 24,
    width: 327,
    height: 24,
  },
  text1: {
    position: "absolute",
    top: 2,
    right: 40,
    left: 0,
    fontSize: 16,
    letterSpacing: -0.4,
    lineHeight: 24,
    fontFamily: "Mulish",
    color: "#171717",
    textAlign: "left",
  },
  checkboxLeftView1: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    height: 24,
  },
  contentLeftUnselectedDefaul1: {
    position: "absolute",
    top: 631,
    left: 24,
    width: 327,
    height: 24,
  },
  text2: {
    position: "absolute",
    top: 2,
    right: 40,
    left: 0,
    fontSize: 16,
    letterSpacing: -0.4,
    lineHeight: 24,
    fontFamily: "Mulish",
    color: "#171717",
    textAlign: "left",
  },
  checkboxLeftView2: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    height: 24,
  },
  contentLeftUnselectedDefaul2: {
    position: "absolute",
    top: 443,
    left: 24,
    width: 327,
    height: 24,
  },
  text3: {
    position: "absolute",
    top: 2,
    right: 40,
    left: 0,
    fontSize: 16,
    letterSpacing: -0.4,
    lineHeight: 24,
    fontFamily: "Mulish",
    color: "#171717",
    textAlign: "left",
  },
  checkboxLeftView3: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    height: 24,
  },
  contentLeftUnselectedDefaul3: {
    position: "absolute",
    top: 819,
    left: 24,
    width: 327,
    height: 24,
  },
  text4: {
    position: "absolute",
    top: 2,
    right: 40,
    left: 0,
    fontSize: 16,
    letterSpacing: -0.4,
    lineHeight: 24,
    fontFamily: "Mulish",
    color: "#171717",
    textAlign: "left",
  },
  checkboxLeftView4: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    height: 24,
  },
  contentLeftUnselectedDefaul4: {
    position: "absolute",
    top: 295,
    left: 24,
    width: 327,
    height: 24,
  },
  text5: {
    position: "absolute",
    top: 2,
    right: 40,
    left: 0,
    fontSize: 16,
    letterSpacing: -0.4,
    lineHeight: 24,
    fontFamily: "Mulish",
    color: "#171717",
    textAlign: "left",
  },
  checkboxLeftView5: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    height: 24,
  },
  contentLeftUnselectedDefaul5: {
    position: "absolute",
    top: 671,
    left: 24,
    width: 327,
    height: 24,
  },
  text6: {
    position: "absolute",
    top: 2,
    right: 40,
    left: 0,
    fontSize: 16,
    letterSpacing: -0.4,
    lineHeight: 24,
    fontFamily: "Mulish",
    color: "#171717",
    textAlign: "left",
  },
  checkboxLeftView6: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    height: 24,
  },
  contentLeftUnselectedDefaul6: {
    position: "absolute",
    top: 483,
    left: 24,
    width: 327,
    height: 24,
  },
  text7: {
    position: "absolute",
    top: 2,
    right: 40,
    left: 0,
    fontSize: 16,
    letterSpacing: -0.4,
    lineHeight: 24,
    fontFamily: "Mulish",
    color: "#171717",
    textAlign: "left",
  },
  checkboxLeftView7: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    height: 24,
  },
  contentLeftUnselectedDefaul7: {
    position: "absolute",
    top: 859,
    left: 24,
    width: 327,
    height: 24,
  },
  text8: {
    position: "absolute",
    top: 2,
    right: 40,
    left: 0,
    fontSize: 16,
    letterSpacing: -0.4,
    lineHeight: 24,
    fontFamily: "Mulish",
    color: "#171717",
    textAlign: "left",
  },
  checkboxLeftView8: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    height: 24,
  },
  contentLeftUnselectedDefaul8: {
    position: "absolute",
    top: 335,
    left: 24,
    width: 327,
    height: 24,
  },
  text9: {
    position: "absolute",
    top: 2,
    right: 40,
    left: 0,
    fontSize: 16,
    letterSpacing: -0.4,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
  },
  checkboxLeftView9: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    height: 24,
  },
  contentLeftUnselectedDefaul9: {
    position: "absolute",
    top: 711,
    left: 24,
    width: 327,
    height: 24,
  },
  text10: {
    position: "absolute",
    top: 2,
    right: 40,
    left: 0,
    fontSize: 16,
    letterSpacing: -0.4,
    lineHeight: 24,
    fontFamily: "Mulish",
    color: "#171717",
    textAlign: "left",
  },
  checkboxLeftView10: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    height: 24,
  },
  contentLeftUnselectedDefaul10: {
    position: "absolute",
    top: 523,
    left: 24,
    width: 327,
    height: 24,
  },
  text11: {
    position: "absolute",
    top: 2,
    right: 40,
    left: 0,
    fontSize: 16,
    letterSpacing: -0.4,
    lineHeight: 24,
    fontFamily: "Mulish",
    color: "#171717",
    textAlign: "left",
  },
  checkboxLeftView11: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    height: 24,
  },
  contentLeftUnselectedDefaul11: {
    position: "absolute",
    top: 899,
    left: 24,
    width: 327,
    height: 24,
  },
  horizontalRuleView: {
    position: "absolute",
    top: 358.5,
    left: 23.5,
    borderStyle: "solid",
    borderColor: "rgba(202, 200, 218, 0.2)",
    borderTopWidth: 1,
    width: 328,
    height: 1,
  },
  horizontalRuleView1: {
    position: "absolute",
    top: 554.5,
    left: 23.5,
    borderStyle: "solid",
    borderColor: "rgba(202, 200, 218, 0.2)",
    borderTopWidth: 1,
    width: 328,
    height: 1,
  },
  horizontalRuleView2: {
    position: "absolute",
    top: 742.5,
    left: 23.5,
    borderStyle: "solid",
    borderColor: "rgba(202, 200, 218, 0.2)",
    borderTopWidth: 1,
    width: 328,
    height: 1,
  },
  horizontalRuleView3: {
    position: "absolute",
    top: 922.5,
    left: 23.5,
    borderStyle: "solid",
    borderColor: "rgba(202, 200, 218, 0.2)",
    borderTopWidth: 1,
    width: 328,
    height: 1,
  },
  baseView1: {
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
  text12: {
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
    right: 35,
    bottom: 101,
    left: 35,
    height: 44,
  },
  interestSpecificityView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 1100,
    overflow: "hidden",
  },
});

export default InterestSpecificity;
