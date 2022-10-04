import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const ExchangeRates = () => {
  return (
    <View style={styles.exchangeRatesView}>
      <View style={styles.barsTopBarsV4View}>
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
        <Image
          style={styles.iconL1}
          resizeMode="cover"
          source={require("../assets/-icon--l1.png")}
        />
        <Text style={styles.titleText}>Exchange rates</Text>
      </View>
      <Image
        style={styles.iconL2}
        resizeMode="cover"
        source={require("../assets/iconsotherclose.png")}
      />
      <View style={styles.frameView}>
        <View style={styles.britishPoundView}>
          <View style={styles.groupView}>
            <Image
              style={styles.rectangleIcon}
              resizeMode="cover"
              source={require("../assets/rectangle-21.png")}
            />
          </View>
          <Text style={styles.britishPoundText}>British Pound</Text>
          <Image
            style={styles.stroke3Icon}
            resizeMode="cover"
            source={require("../assets/stroke-3.png")}
          />
          <Text style={styles.gBPText}>1 GBP</Text>
          <View style={styles.rectangleView} />
          <Text style={styles.text}>₦840</Text>
        </View>
        <View style={[styles.canadaDollarView, styles.mt40]}>
          <View style={styles.groupView1}>
            <Image
              style={styles.rectangleIcon1}
              resizeMode="cover"
              source={require("../assets/rectangle-211.png")}
            />
          </View>
          <Text style={styles.canadaDollarText}>Canada Dollar</Text>
          <Text style={styles.cADText}>1 CAD</Text>
          <View style={styles.rectangleView1} />
          <Image
            style={styles.stroke3Icon1}
            resizeMode="cover"
            source={require("../assets/stroke-3.png")}
          />
          <Text style={styles.text1}>₦550</Text>
        </View>
        <View style={[styles.euroView, styles.mt40]}>
          <View style={styles.groupView2}>
            <Image
              style={styles.rectangleIcon2}
              resizeMode="cover"
              source={require("../assets/rectangle-212.png")}
            />
          </View>
          <Text style={styles.euroText}>Euro</Text>
          <Image
            style={styles.stroke3Icon2}
            resizeMode="cover"
            source={require("../assets/stroke-3.png")}
          />
          <Text style={styles.eURText}>1 EUR</Text>
          <View style={styles.rectangleView2} />
          <Text style={styles.text2}>₦720</Text>
        </View>
        <View style={[styles.uSDollar, styles.mt40]}>
          <View style={styles.groupView3}>
            <Image
              style={styles.rectangleIcon3}
              resizeMode="cover"
              source={require("../assets/rectangle-213.png")}
            />
          </View>
          <Text style={styles.uSDollarText}>{`US Dollar `}</Text>
          <Text style={styles.uSDText}>1 USD</Text>
          <Image
            style={styles.stroke3Icon3}
            resizeMode="cover"
            source={require("../assets/stroke-3.png")}
          />
          <View style={styles.rectangleView3} />
          <Text style={styles.text3}>₦690</Text>
        </View>
      </View>
      <Text style={styles.ourCurrentRatesAtCheckout}>
        Our current rates at checkout
      </Text>
      <Text style={styles.noteTheseRatesAreInfluenc}>
        <Text style={styles.noteText1}>
          <Text style={styles.noteText}>{`Note: `}</Text>
        </Text>
        <Text style={styles.theseRatesAreInfluencedBy}>
          <Text style={styles.theseRatesAre}>
            These rates are influenced by market rates at the time of your
            purchase.
          </Text>
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ml8: {
    marginLeft: 8,
  },
  mt40: {
    marginTop: 40,
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
  iconL1: {
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
  iconL2: {
    position: "absolute",
    transform: [
      {
        translateY: -734,
      },
    ],
    top: "50%",
    left: 35,
    width: 24,
    height: 24,
  },
  rectangleIcon: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 28,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  groupView: {
    position: "absolute",
    height: "69.12%",
    width: "14.98%",
    top: "0%",
    right: "85.02%",
    bottom: "30.88%",
    left: "0%",
  },
  britishPoundText: {
    position: "absolute",
    height: "29.41%",
    width: "42.51%",
    top: "2.94%",
    right: "36.09%",
    bottom: "67.65%",
    left: "21.41%",
    fontSize: 16,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#23262f",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
  },
  stroke3Icon: {
    position: "absolute",
    height: "11.76%",
    width: "3.36%",
    top: "47.06%",
    right: "0%",
    bottom: "41.18%",
    left: "96.64%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    display: "none",
  },
  gBPText: {
    position: "absolute",
    height: "23.53%",
    width: "12.54%",
    top: "42.65%",
    right: "66.14%",
    bottom: "33.82%",
    left: "21.32%",
    fontSize: 13,
    lineHeight: 16,
    fontWeight: "500",
    fontFamily: "Poppins",
    color: "#969aa0",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
  },
  rectangleView: {
    position: "absolute",
    height: "1.47%",
    width: "100%",
    top: "98.53%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: "#f4f6f9",
  },
  text: {
    position: "absolute",
    height: "35.29%",
    width: "21.64%",
    top: "25%",
    right: "12.92%",
    bottom: "39.71%",
    left: "65.44%",
    fontSize: 24,
    letterSpacing: 1.4,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
  },
  britishPoundView: {
    position: "relative",
    width: 305,
    height: 68,
    flexShrink: 0,
  },
  rectangleIcon1: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 28,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  groupView1: {
    position: "absolute",
    height: "69.12%",
    width: "14.98%",
    top: "0%",
    right: "85.02%",
    bottom: "30.88%",
    left: "0%",
  },
  canadaDollarText: {
    position: "absolute",
    height: "29.41%",
    width: "42.51%",
    top: "2.94%",
    right: "36.09%",
    bottom: "67.65%",
    left: "21.41%",
    fontSize: 16,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#23262f",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
  },
  cADText: {
    position: "absolute",
    height: "23.53%",
    width: "12.54%",
    top: "42.65%",
    right: "66.14%",
    bottom: "33.82%",
    left: "21.32%",
    fontSize: 13,
    lineHeight: 16,
    fontWeight: "500",
    fontFamily: "Poppins",
    color: "#969aa0",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
  },
  rectangleView1: {
    position: "absolute",
    height: "1.47%",
    width: "100%",
    top: "98.53%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: "#f4f6f9",
  },
  stroke3Icon1: {
    position: "absolute",
    height: "11.76%",
    width: "3.36%",
    top: "205.88%",
    right: "0%",
    bottom: "-117.65%",
    left: "96.64%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    display: "none",
  },
  text1: {
    position: "absolute",
    height: "35.29%",
    width: "21.31%",
    top: "25%",
    right: "13.25%",
    bottom: "39.71%",
    left: "65.44%",
    fontSize: 24,
    letterSpacing: 1.4,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
  },
  canadaDollarView: {
    position: "relative",
    width: 305,
    height: 68,
    flexShrink: 0,
  },
  rectangleIcon2: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 28,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  groupView2: {
    position: "absolute",
    height: "69.12%",
    width: "14.98%",
    top: "0%",
    right: "85.02%",
    bottom: "30.88%",
    left: "0%",
  },
  euroText: {
    position: "absolute",
    height: "29.41%",
    width: "12.54%",
    top: "2.94%",
    right: "66.06%",
    bottom: "67.65%",
    left: "21.41%",
    fontSize: 16,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#23262f",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
  },
  stroke3Icon2: {
    position: "absolute",
    height: "11.76%",
    width: "3.36%",
    top: "364.71%",
    right: "0%",
    bottom: "-276.47%",
    left: "96.64%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    display: "none",
  },
  eURText: {
    position: "absolute",
    height: "23.53%",
    width: "12.54%",
    top: "42.65%",
    right: "66.14%",
    bottom: "33.82%",
    left: "21.32%",
    fontSize: 13,
    lineHeight: 16,
    fontWeight: "500",
    fontFamily: "Poppins",
    color: "#969aa0",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
  },
  rectangleView2: {
    position: "absolute",
    height: "1.47%",
    width: "100%",
    top: "98.53%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: "#f4f6f9",
  },
  text2: {
    position: "absolute",
    height: "35.29%",
    width: "20.33%",
    top: "25%",
    right: "14.23%",
    bottom: "39.71%",
    left: "65.44%",
    fontSize: 24,
    letterSpacing: 1.4,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
  },
  euroView: {
    position: "relative",
    width: 305,
    height: 68,
    flexShrink: 0,
  },
  rectangleIcon3: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 28,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  groupView3: {
    position: "absolute",
    height: "69.12%",
    width: "14.98%",
    top: "0%",
    right: "85.02%",
    bottom: "30.88%",
    left: "0%",
  },
  uSDollarText: {
    position: "absolute",
    height: "29.41%",
    width: "30.89%",
    top: "2.94%",
    right: "47.71%",
    bottom: "67.65%",
    left: "21.41%",
    fontSize: 16,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#23262f",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
  },
  uSDText: {
    position: "absolute",
    height: "23.53%",
    width: "12.54%",
    top: "42.65%",
    right: "66.14%",
    bottom: "33.82%",
    left: "21.32%",
    fontSize: 13,
    lineHeight: 16,
    fontWeight: "500",
    fontFamily: "Poppins",
    color: "#969aa0",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
  },
  stroke3Icon3: {
    position: "absolute",
    height: "11.76%",
    width: "3.36%",
    top: "523.53%",
    right: "0%",
    bottom: "-435.29%",
    left: "96.64%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    display: "none",
  },
  rectangleView3: {
    position: "absolute",
    height: "1.47%",
    width: "100%",
    top: "98.53%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: "#f4f6f9",
  },
  text3: {
    position: "absolute",
    height: "35.29%",
    width: "21.31%",
    top: "25%",
    right: "13.25%",
    bottom: "39.71%",
    left: "65.44%",
    fontSize: 24,
    letterSpacing: 1.4,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
  },
  uSDollar: {
    position: "relative",
    width: 305,
    height: 68,
    flexShrink: 0,
  },
  frameView: {
    position: "absolute",
    top: 193,
    left: 35,
    width: 305,
    height: 392,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  ourCurrentRatesAtCheckout: {
    position: "absolute",
    top: 148,
    left: 35,
    fontSize: 14,
    letterSpacing: 0.5,
    lineHeight: 21,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#000",
    textAlign: "left",
  },
  noteText: {
    color: "#000",
  },
  noteText1: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  theseRatesAre: {
    color: "#868686",
  },
  theseRatesAreInfluencedBy: {
    margin: 0,
  },
  noteTheseRatesAreInfluenc: {
    position: "absolute",
    top: 609,
    left: 35,
    fontSize: 14,
    letterSpacing: 0.4,
    lineHeight: 21,
    fontWeight: "500",
    fontFamily: "Archivo",
    textAlign: "left",
    width: 305,
  },
  exchangeRatesView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 906,
    overflow: "hidden",
  },
});

export default ExchangeRates;
