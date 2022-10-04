import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import SkipBtn from "../components/SkipBtn";

const Onboarding3 = () => {
  return (
    <View style={styles.onboardingView}>
      <View style={styles.contentView}>
        <View style={styles.buttonView}>
          <View style={styles.baseView} />
          <Image
            style={styles.iconsArrowsarrowLongRight}
            resizeMode="cover"
            source={require("../assets/iconsarrowsarrowlongright.png")}
          />
          <Text style={styles.text}>Sign up</Text>
        </View>
      </View>
      <View style={styles.contentView1}>
        <View style={styles.buttonView1}>
          <View style={styles.baseView1} />
          <Image
            style={styles.iconsArrowsarrowLongRight1}
            resizeMode="cover"
            source={require("../assets/iconsarrowsarrowlongright.png")}
          />
          <Text style={styles.text1}>LOg in</Text>
        </View>
      </View>
      <Text style={styles.konixText}>Konix</Text>
      <Text style={styles.theLuxuryStoreThatOffersA}>
        The luxury store that offers all
      </Text>
      <View style={styles.frameView9}>
        <View style={styles.frameView}>
          <Image
            style={styles.d00a1b2dedef49daaef5ad710099a4Icon}
            resizeMode="cover"
          />
        </View>
        <View style={styles.frameView1}>
          <Image
            style={styles.d00a1b2dedef49daaef5ad710099a4Icon1}
            resizeMode="cover"
          />
        </View>
        <View style={styles.frameView2}>
          <Image
            style={styles.d0795c740a4849Ac04Dccc0d67Icon}
            resizeMode="cover"
            source={require("../assets/97d0795c740a4849ac04dccc0d67a558-1.png")}
          />
        </View>
        <View style={styles.frameView3}>
          <Image
            style={styles.louisVuittonTambourHorizonIcon}
            resizeMode="cover"
            source={require("../assets/louisvuittontambourhorizonlightupconnectedwatchwatchesandjewelryqbb186-pm2-front-view-1.png")}
          />
        </View>
        <View style={styles.frameView4}>
          <Image
            style={styles.louisVuittonCapucinesBbN9Icon}
            resizeMode="cover"
            source={require("../assets/louisvuittoncapucinesbbn93275-pm2-front-view-1.png")}
          />
        </View>
        <View style={styles.frameView5}>
          <Image
            style={styles.cq5damwebhebebed100010001Icon}
            resizeMode="cover"
            source={require("../assets/cq5damwebhebebed10001000-1.png")}
          />
        </View>
        <View style={styles.frameView6}>
          <Image
            style={styles.cq5damwebhebebed100010001Icon1}
            resizeMode="cover"
            source={require("../assets/cq5damwebhebebed10001000-11.png")}
          />
        </View>
        <View style={styles.frameView7}>
          <Image style={styles.n1Icon} resizeMode="cover" />
        </View>
        <View style={styles.frameView8}>
          <Image
            style={styles.louisVuittonCapucinesBbN9Icon1}
            resizeMode="cover"
            source={require("../assets/louisvuittoncapucinesbbn93275-pm2-front-view-11.png")}
          />
        </View>
      </View>
      <SkipBtn />
    </View>
  );
};

const styles = StyleSheet.create({
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
    display: "none",
  },
  text: {
    position: "absolute",
    transform: [
      {
        translateY: -10,
      },
    ],
    top: "50%",
    right: 125,
    left: 127,
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
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  contentView: {
    position: "absolute",
    height: "5.42%",
    width: "81.33%",
    top: "77.71%",
    right: "9.33%",
    bottom: "16.87%",
    left: "9.33%",
  },
  baseView1: {
    position: "absolute",
    height: "102.27%",
    top: "-1.14%",
    right: -0.5,
    bottom: "-1.14%",
    left: -0.5,
    borderRadius: 6,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#171717",
    borderWidth: 1,
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
    display: "none",
  },
  text1: {
    position: "absolute",
    transform: [
      {
        translateY: -10,
      },
    ],
    top: "50%",
    right: 129,
    left: 131,
    fontSize: 12,
    letterSpacing: 1,
    lineHeight: 20,
    textTransform: "uppercase",
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "center",
  },
  buttonView1: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  contentView1: {
    position: "absolute",
    height: "5.42%",
    width: "81.33%",
    top: "86.08%",
    right: "9.33%",
    bottom: "8.5%",
    left: "9.33%",
  },
  konixText: {
    position: "absolute",
    top: 472,
    left: 119,
    fontSize: 48,
    letterSpacing: -0.2,
    fontStyle: "italic",
    fontWeight: "900",
    fontFamily: "Playfair Display",
    color: "#000",
    textAlign: "left",
  },
  theLuxuryStoreThatOffersA: {
    position: "absolute",
    top: 539,
    left: 73,
    fontSize: 18,
    letterSpacing: -0.8,
    lineHeight: 32,
    fontWeight: "500",
    fontFamily: "DM Sans",
    color: "rgba(0, 0, 0, 0.5)",
    textAlign: "center",
  },
  d00a1b2dedef49daaef5ad710099a4Icon: {
    position: "absolute",
    top: 0,
    left: 5,
    borderRadius: 10,
    width: 115,
    height: 140,
  },
  frameView: {
    position: "absolute",
    top: 28,
    left: -5,
    borderRadius: 6,
    backgroundColor: "#eceff1",
    width: 120,
    height: 140,
    overflow: "hidden",
  },
  d00a1b2dedef49daaef5ad710099a4Icon1: {
    position: "absolute",
    top: 124,
    left: 0,
    borderRadius: 10,
    width: 120,
    height: 16,
  },
  frameView1: {
    position: "absolute",
    top: -124,
    left: 0,
    borderRadius: 6,
    backgroundColor: "#eceff1",
    width: 120,
    height: 140,
    overflow: "hidden",
  },
  d0795c740a4849Ac04Dccc0d67Icon: {
    position: "absolute",
    top: 30,
    left: 0,
    width: 120,
    height: 110,
  },
  frameView2: {
    position: "absolute",
    top: -30,
    left: 127,
    borderRadius: 6,
    backgroundColor: "#f3f3f3",
    width: 120,
    height: 140,
    overflow: "hidden",
  },
  louisVuittonTambourHorizonIcon: {
    position: "absolute",
    top: 51,
    left: 0,
    width: 211,
    height: 211,
  },
  frameView3: {
    position: "absolute",
    top: -51,
    left: 259,
    borderRadius: 6,
    backgroundColor: "#eceff1",
    width: 120,
    height: 140,
    overflow: "hidden",
  },
  louisVuittonCapucinesBbN9Icon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 170,
    height: 179,
  },
  frameView4: {
    position: "absolute",
    top: 176,
    left: 12,
    borderRadius: 6,
    backgroundColor: "#e7e7e7",
    width: 120,
    height: 140,
    overflow: "hidden",
  },
  cq5damwebhebebed100010001Icon: {
    position: "absolute",
    top: 10,
    left: 0,
    width: 157,
    height: 120,
  },
  frameView5: {
    position: "absolute",
    top: 122,
    left: 145,
    borderRadius: 6,
    backgroundColor: "#e7e7e7",
    width: 120,
    height: 140,
    overflow: "hidden",
  },
  cq5damwebhebebed100010001Icon1: {
    position: "absolute",
    top: 10,
    left: 0,
    width: 157,
    height: 120,
  },
  frameView6: {
    position: "absolute",
    top: 101,
    left: 285,
    borderRadius: 6,
    backgroundColor: "#e7e7e7",
    width: 120,
    height: 140,
    overflow: "hidden",
  },
  n1Icon: {
    position: "absolute",
    top: -120,
    left: 0,
    width: 140,
    height: 106,
  },
  frameView7: {
    position: "absolute",
    top: 394,
    left: 165,
    borderRadius: 6,
    backgroundColor: "#f6f6f6",
    width: 120,
    height: 140,
    overflow: "hidden",
    transform: [
      {
        rotate: "-90deg",
      },
    ],
  },
  louisVuittonCapucinesBbN9Icon1: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 161,
    height: 170,
  },
  frameView8: {
    position: "absolute",
    top: 342,
    left: 25,
    borderRadius: 6,
    backgroundColor: "#e7e7e7",
    width: 120,
    height: 140,
    overflow: "hidden",
  },
  frameView9: {
    position: "absolute",
    top: 80,
    left: 35,
    borderRadius: 12,
    width: 305,
    height: 380,
    overflow: "hidden",
  },
  onboardingView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Onboarding3;
