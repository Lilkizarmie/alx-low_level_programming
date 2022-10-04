import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

const CartPreview = () => {
  return (
    <View style={styles.cartPreview}>
      <View style={styles.bodyView}>
        <View style={styles.baseView} />
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
          <View style={styles.iconsOthershoppingBagView}>
            <Image
              style={styles.shoppingBagIcon}
              resizeMode="cover"
              source={require("../assets/shoppingbag.png")}
            />
            <Image
              style={styles.pathIcon}
              resizeMode="cover"
              source={require("../assets/path.png")}
            />
            <View style={styles.counterBubbleView}>
              <Image
                style={styles.fondIcon}
                resizeMode="cover"
                source={require("../assets/fond.png")}
              />
              <Text style={styles.counterText}>1</Text>
            </View>
          </View>
          <Image
            style={styles.iconsArrowsarrowLongLeft}
            resizeMode="cover"
            source={require("../assets/-icon--l1.png")}
          />
          <Text style={styles.titleText}>{` `}</Text>
        </View>
      </View>
      <View style={styles.frontLayerView}>
        <View style={styles.overlayView} />
        <View style={styles.barsHomeIndicatorIPhone}>
          <View style={styles.homeIndicatorView} />
        </View>
        <View style={styles.contentView}>
          <View style={styles.baseView1} />
          <View style={styles.buttonView}>
            <View style={styles.baseView2} />
            <Image
              style={styles.iconsArrowsarrowLongRight}
              resizeMode="cover"
              source={require("../assets/iconsarrowsarrowlongright9.png")}
            />
            <Text style={styles.text}>Checkout</Text>
          </View>
          <View style={styles.topView}>
            <View style={styles.numberView}>
              <View style={styles.rectangleView} />
              <Text style={styles.text1}>2</Text>
            </View>
            <Text style={styles.myCartText}>My Cart</Text>
          </View>
        </View>
        <View style={styles.lineView} />
        <Text style={styles.konixText}>Konix</Text>
      </View>
      <Image
        style={styles.iconsOtherclose}
        resizeMode="cover"
        source={require("../assets/iconsotherclose2.png")}
      />
      <View style={styles.itemView}>
        <Image
          style={styles.baseIcon}
          resizeMode="cover"
          source={require("../assets/base1.png")}
        />
        <View style={styles.imageView}>
          <Image
            style={styles.imputImageIcon}
            resizeMode="cover"
            source={require("../assets/-imput-image.png")}
          />
        </View>
        <View style={styles.infoView}>
          <View style={styles.sizeView}>
            <Text style={styles.sizeText}>Size</Text>
            <View style={styles.rectangleView1} />
            <Text style={styles.sText}>S</Text>
          </View>
          <View style={styles.colorView}>
            <Text style={styles.colorText}>Color:</Text>
          </View>
          <Text style={styles.shockblueText}>Shockblue</Text>
        </View>
        <View style={styles.nameView}>
          <Text style={styles.text4}>
            <Text style={styles.text2}>$</Text>
            <Text style={styles.text3}>1,600</Text>
          </Text>
          <Text style={styles.beosound1Text}>
            ADIDAS X LEGO® SPORT PRO SHOES
          </Text>
        </View>
        <View style={styles.quantityView}>
          <View style={styles.baseView3} />
          <Image
            style={styles.iconR}
            resizeMode="cover"
            source={require("../assets/-icon--r8.png")}
          />
          <Image
            style={styles.iconL}
            resizeMode="cover"
            source={require("../assets/-icon--l8.png")}
          />
          <Text style={styles.text5}>4</Text>
        </View>
      </View>
      <View style={styles.itemView1}>
        <Image
          style={styles.baseIcon1}
          resizeMode="cover"
          source={require("../assets/base1.png")}
        />
        <View style={styles.imageView1}>
          <Image
            style={styles.imputImageIcon1}
            resizeMode="cover"
            source={require("../assets/-imput-image.png")}
          />
        </View>
        <View style={styles.infoView1}>
          <View style={styles.sizeView1}>
            <Text style={styles.sizeText1}>Size</Text>
            <View style={styles.rectangleView2} />
            <Text style={styles.sText1}>S</Text>
          </View>
          <View style={styles.colorView1}>
            <Text style={styles.colorText1}>Color:</Text>
          </View>
          <Text style={styles.shockblueText1}>Shockblue</Text>
        </View>
        <View style={styles.nameView1}>
          <Text style={styles.text8}>
            <Text style={styles.text6}>$</Text>
            <Text style={styles.text7}>1,600</Text>
          </Text>
          <Text style={styles.beosound1Text1}>
            ADIDAS X LEGO® SPORT PRO SHOES
          </Text>
        </View>
        <View style={styles.quantityView1}>
          <View style={styles.baseView4} />
          <Image
            style={styles.iconR1}
            resizeMode="cover"
            source={require("../assets/-icon--r8.png")}
          />
          <Image
            style={styles.iconL1}
            resizeMode="cover"
            source={require("../assets/-icon--l8.png")}
          />
          <Text style={styles.text9}>4</Text>
        </View>
      </View>
      <View style={styles.itemView2}>
        <Image
          style={styles.baseIcon2}
          resizeMode="cover"
          source={require("../assets/base1.png")}
        />
        <View style={styles.imageView2}>
          <Image
            style={styles.imputImageIcon2}
            resizeMode="cover"
            source={require("../assets/-imput-image.png")}
          />
        </View>
        <View style={styles.quantityView2}>
          <View style={styles.baseView5} />
          <Image
            style={styles.iconR2}
            resizeMode="cover"
            source={require("../assets/-icon--r8.png")}
          />
          <Image
            style={styles.iconL2}
            resizeMode="cover"
            source={require("../assets/-icon--l8.png")}
          />
          <Text style={styles.text10}>4</Text>
        </View>
        <View style={styles.infoView2}>
          <View style={styles.sizeView2}>
            <Text style={styles.sizeText2}>Size</Text>
            <View style={styles.rectangleView3} />
            <Text style={styles.sText2}>S</Text>
          </View>
          <View style={styles.colorView2}>
            <Text style={styles.colorText2}>Color:</Text>
          </View>
          <Text style={styles.shockblueText2}>Shockblue</Text>
        </View>
        <View style={styles.nameView2}>
          <Text style={styles.beosound1Text2}>
            ADIDAS X LEGO® SPORT PRO SHOES
          </Text>
        </View>
        <Text style={styles.text13}>
          <Text style={styles.text11}>$</Text>
          <Text style={styles.text12}>1,600</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  baseView: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#f3f6f8",
    width: 375,
    height: 812,
  },
  bodyView: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 375,
    height: 812,
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
  shoppingBagIcon: {
    position: "relative",
    width: 20,
    height: 20,
  },
  pathIcon: {
    position: "absolute",
    height: "25%",
    width: "41.67%",
    top: "25%",
    right: "29.17%",
    bottom: "50%",
    left: "29.17%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  fondIcon: {
    position: "absolute",
    transform: [
      {
        translateY: -8,
      },
      {
        translateX: -8,
      },
    ],
    top: "50%",
    left: "50%",
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  counterText: {
    position: "absolute",
    height: "62.5%",
    width: "100%",
    top: "18.75%",
    right: "0%",
    bottom: "18.75%",
    left: "0%",
    fontSize: 8,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#fff",
    textAlign: "center",
  },
  counterBubbleView: {
    position: "absolute",
    height: "66.67%",
    width: "66.67%",
    top: "45.83%",
    right: "-12.5%",
    bottom: "-12.5%",
    left: "45.83%",
  },
  iconsOthershoppingBagView: {
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
  overlayView: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#171717",
    width: 375,
    height: 812,
    opacity: 0.5,
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
    backgroundColor: "#000",
    width: 134,
    height: 5,
  },
  barsHomeIndicatorIPhone: {
    position: "absolute",
    top: 778,
    left: 0,
    width: 375,
    height: 34,
    opacity: 0.05,
  },
  baseView1: {
    position: "absolute",
    transform: [
      {
        translateY: -384,
      },
    ],
    top: "50%",
    right: 0,
    left: 0,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    backgroundColor: "#fff",
    height: 768,
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
  iconsArrowsarrowLongRight: {
    position: "absolute",
    transform: [
      {
        translateY: -12.35,
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
        translateY: -10.35,
      },
    ],
    top: "50%",
    right: 116,
    left: 117,
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
    height: "7.38%",
    width: "81.33%",
    top: "86.91%",
    right: "9.33%",
    bottom: "5.7%",
    left: "9.33%",
  },
  rectangleView: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 8,
    backgroundColor: "#f2b51d",
  },
  text1: {
    position: "absolute",
    transform: [
      {
        translateY: -8,
      },
    ],
    width: "50%",
    top: "50%",
    right: "25%",
    left: "25%",
    fontSize: 10,
    letterSpacing: -0.33,
    lineHeight: 16,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "center",
    height: 16,
  },
  numberView: {
    position: "absolute",
    height: "58.2%",
    width: "18.9%",
    top: "12.5%",
    right: "0%",
    bottom: "29.3%",
    left: "81.1%",
  },
  myCartText: {
    position: "absolute",
    transform: [
      {
        translateY: -20.62,
      },
    ],
    width: "69.29%",
    top: "50%",
    right: "30.71%",
    left: "0%",
    fontSize: 24,
    letterSpacing: -0.8,
    lineHeight: 32,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
    height: 41.23,
  },
  topView: {
    position: "absolute",
    height: "5.37%",
    width: "33.87%",
    top: "14.06%",
    right: "60.8%",
    bottom: "80.57%",
    left: "5.33%",
  },
  contentView: {
    position: "absolute",
    transform: [
      {
        translateY: -362,
      },
    ],
    top: "50%",
    right: 0,
    left: 0,
    height: 768,
  },
  lineView: {
    position: "absolute",
    top: 60,
    left: 164,
    borderRadius: 2.5,
    backgroundColor: "#f3f6f8",
    width: 48,
    height: 5,
  },
  konixText: {
    position: "absolute",
    top: 88,
    left: 139,
    fontSize: 36,
    letterSpacing: -0.2,
    fontStyle: "italic",
    fontWeight: "700",
    fontFamily: "Playfair Display",
    color: "#000",
    textAlign: "left",
  },
  frontLayerView: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 375,
    height: 812,
  },
  iconsOtherclose: {
    position: "absolute",
    height: "2.96%",
    width: "6.4%",
    top: "9.48%",
    right: "6.4%",
    bottom: "87.56%",
    left: "87.2%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  baseIcon: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 24,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  imputImageIcon: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  imageView: {
    position: "absolute",
    height: "83.78%",
    width: "28.85%",
    top: "8.11%",
    right: "67.21%",
    bottom: "8.11%",
    left: "3.93%",
  },
  sizeText: {
    position: "absolute",
    transform: [
      {
        translateY: -8,
      },
    ],
    width: "45%",
    top: "50%",
    right: "55%",
    left: "0%",
    fontSize: 10,
    letterSpacing: -0.33,
    lineHeight: 16,
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
    opacity: 0.6,
  },
  rectangleView1: {
    position: "absolute",
    height: "100%",
    width: "40%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "60%",
    borderRadius: 4,
    backgroundColor: "#fff",
  },
  sText: {
    position: "absolute",
    transform: [
      {
        translateY: -8,
      },
    ],
    width: "20%",
    top: "50%",
    right: "10%",
    left: "70%",
    fontSize: 10,
    letterSpacing: -0.33,
    lineHeight: 16,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#8f92a1",
    textAlign: "center",
  },
  sizeView: {
    position: "absolute",
    transform: [
      {
        translateY: -8,
      },
    ],
    width: "31.5%",
    top: "50%",
    right: "0%",
    left: "68.5%",
    height: 16,
  },
  colorText: {
    position: "absolute",
    transform: [
      {
        translateY: -8,
      },
    ],
    width: "100%",
    top: "50%",
    right: "0%",
    left: "0%",
    fontSize: 10,
    letterSpacing: -0.33,
    lineHeight: 16,
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
    opacity: 0.6,
  },
  colorView: {
    position: "absolute",
    transform: [
      {
        translateY: -8,
      },
    ],
    width: "20.47%",
    top: "50%",
    right: "79.53%",
    left: "0%",
    height: 16,
  },
  shockblueText: {
    position: "absolute",
    top: 0,
    left: 29,
    fontSize: 10,
    letterSpacing: -0.33,
    lineHeight: 16,
    fontWeight: "500",
    fontFamily: "DM Sans",
    color: "rgba(23, 23, 23, 0.6)",
    textAlign: "left",
  },
  infoView: {
    position: "absolute",
    transform: [
      {
        translateY: -8,
      },
    ],
    width: "41.64%",
    top: "50%",
    right: "20.33%",
    left: "38.03%",
    height: 16,
  },
  text2: {
    fontFamily: "DM Sans",
  },
  text3: {
    fontWeight: "700",
    fontFamily: "DM Sans",
  },
  text4: {
    position: "absolute",
    height: "21.74%",
    width: "100%",
    top: "78.26%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    fontSize: 12,
    letterSpacing: 1.4,
    lineHeight: 20,
    color: "#171717",
    textAlign: "left",
  },
  beosound1Text: {
    position: "absolute",
    height: "52.17%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "47.83%",
    left: "0%",
    fontSize: 16,
    letterSpacing: -0.4,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
  },
  nameView: {
    position: "absolute",
    height: "62.16%",
    width: "56.72%",
    top: "10.81%",
    right: "5.25%",
    bottom: "27.03%",
    left: "38.03%",
  },
  baseView3: {
    position: "absolute",
    height: "100%",
    width: "40%",
    top: "0%",
    right: "30%",
    bottom: "0%",
    left: "30%",
    borderRadius: 4,
    backgroundColor: "#fff",
  },
  iconR: {
    position: "absolute",
    height: "66.67%",
    width: "20%",
    top: "16.67%",
    right: "0%",
    bottom: "16.67%",
    left: "80%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  iconL: {
    position: "absolute",
    height: "66.67%",
    width: "20%",
    top: "16.67%",
    right: "80%",
    bottom: "16.67%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  text5: {
    position: "absolute",
    transform: [
      {
        translateY: -10,
      },
    ],
    top: "50%",
    left: 32,
    fontSize: 12,
    letterSpacing: -0.4,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "center",
    width: 16,
  },
  quantityView: {
    position: "absolute",
    height: "16.22%",
    width: "26.23%",
    top: "75.68%",
    right: "35.74%",
    bottom: "8.11%",
    left: "38.03%",
  },
  itemView: {
    position: "absolute",
    top: 213,
    left: 35,
    backgroundColor: "#fff",
    width: 305,
    height: 148,
  },
  baseIcon1: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 24,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  imputImageIcon1: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  imageView1: {
    position: "absolute",
    height: "83.78%",
    width: "28.85%",
    top: "8.11%",
    right: "67.21%",
    bottom: "8.11%",
    left: "3.93%",
  },
  sizeText1: {
    position: "absolute",
    transform: [
      {
        translateY: -8,
      },
    ],
    width: "45%",
    top: "50%",
    right: "55%",
    left: "0%",
    fontSize: 10,
    letterSpacing: -0.33,
    lineHeight: 16,
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
    opacity: 0.6,
  },
  rectangleView2: {
    position: "absolute",
    height: "100%",
    width: "40%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "60%",
    borderRadius: 4,
    backgroundColor: "#fff",
  },
  sText1: {
    position: "absolute",
    transform: [
      {
        translateY: -8,
      },
    ],
    width: "20%",
    top: "50%",
    right: "10%",
    left: "70%",
    fontSize: 10,
    letterSpacing: -0.33,
    lineHeight: 16,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#8f92a1",
    textAlign: "center",
  },
  sizeView1: {
    position: "absolute",
    transform: [
      {
        translateY: -8,
      },
    ],
    width: "31.5%",
    top: "50%",
    right: "0%",
    left: "68.5%",
    height: 16,
  },
  colorText1: {
    position: "absolute",
    transform: [
      {
        translateY: -8,
      },
    ],
    width: "100%",
    top: "50%",
    right: "0%",
    left: "0%",
    fontSize: 10,
    letterSpacing: -0.33,
    lineHeight: 16,
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
    opacity: 0.6,
  },
  colorView1: {
    position: "absolute",
    transform: [
      {
        translateY: -8,
      },
    ],
    width: "20.47%",
    top: "50%",
    right: "79.53%",
    left: "0%",
    height: 16,
  },
  shockblueText1: {
    position: "absolute",
    top: 0,
    left: 29,
    fontSize: 10,
    letterSpacing: -0.33,
    lineHeight: 16,
    fontWeight: "500",
    fontFamily: "DM Sans",
    color: "rgba(23, 23, 23, 0.6)",
    textAlign: "left",
  },
  infoView1: {
    position: "absolute",
    transform: [
      {
        translateY: -8,
      },
    ],
    width: "41.64%",
    top: "50%",
    right: "20.33%",
    left: "38.03%",
    height: 16,
  },
  text6: {
    fontFamily: "DM Sans",
  },
  text7: {
    fontWeight: "700",
    fontFamily: "DM Sans",
  },
  text8: {
    position: "absolute",
    height: "21.74%",
    width: "100%",
    top: "78.26%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    fontSize: 12,
    letterSpacing: 1.4,
    lineHeight: 20,
    color: "#171717",
    textAlign: "left",
  },
  beosound1Text1: {
    position: "absolute",
    height: "52.17%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "47.83%",
    left: "0%",
    fontSize: 16,
    letterSpacing: -0.4,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
  },
  nameView1: {
    position: "absolute",
    height: "62.16%",
    width: "56.72%",
    top: "10.81%",
    right: "5.25%",
    bottom: "27.03%",
    left: "38.03%",
  },
  baseView4: {
    position: "absolute",
    height: "100%",
    width: "40%",
    top: "0%",
    right: "30%",
    bottom: "0%",
    left: "30%",
    borderRadius: 4,
    backgroundColor: "#fff",
  },
  iconR1: {
    position: "absolute",
    height: "66.67%",
    width: "20%",
    top: "16.67%",
    right: "0%",
    bottom: "16.67%",
    left: "80%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  iconL1: {
    position: "absolute",
    height: "66.67%",
    width: "20%",
    top: "16.67%",
    right: "80%",
    bottom: "16.67%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  text9: {
    position: "absolute",
    transform: [
      {
        translateY: -10,
      },
    ],
    top: "50%",
    left: 32,
    fontSize: 12,
    letterSpacing: -0.4,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "center",
    width: 16,
  },
  quantityView1: {
    position: "absolute",
    height: "16.22%",
    width: "26.23%",
    top: "75.68%",
    right: "35.74%",
    bottom: "8.11%",
    left: "38.03%",
  },
  itemView1: {
    position: "absolute",
    top: 367,
    left: 35,
    backgroundColor: "#fff",
    width: 305,
    height: 148,
  },
  baseIcon2: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 24,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  imputImageIcon2: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  imageView2: {
    position: "absolute",
    height: "83.78%",
    width: "28.85%",
    top: "8.11%",
    right: "67.21%",
    bottom: "8.11%",
    left: "3.93%",
  },
  baseView5: {
    position: "absolute",
    height: "100%",
    width: "40%",
    top: "0%",
    right: "30%",
    bottom: "0%",
    left: "30%",
    borderRadius: 4,
    backgroundColor: "#fff",
  },
  iconR2: {
    position: "absolute",
    height: "66.67%",
    width: "20%",
    top: "16.67%",
    right: "0%",
    bottom: "16.67%",
    left: "80%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  iconL2: {
    position: "absolute",
    height: "66.67%",
    width: "20%",
    top: "16.67%",
    right: "80%",
    bottom: "16.67%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  text10: {
    position: "absolute",
    transform: [
      {
        translateY: -10,
      },
    ],
    top: "50%",
    left: 32,
    fontSize: 12,
    letterSpacing: -0.4,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "center",
    width: 16,
  },
  quantityView2: {
    position: "absolute",
    height: "16.22%",
    width: "26.23%",
    top: "75.68%",
    right: "35.74%",
    bottom: "8.11%",
    left: "38.03%",
  },
  sizeText2: {
    position: "absolute",
    transform: [
      {
        translateY: -8,
      },
    ],
    width: "45%",
    top: "50%",
    right: "55%",
    left: "0%",
    fontSize: 10,
    letterSpacing: -0.33,
    lineHeight: 16,
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
    opacity: 0.6,
  },
  rectangleView3: {
    position: "absolute",
    height: "100%",
    width: "40%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "60%",
    borderRadius: 4,
    backgroundColor: "#fff",
  },
  sText2: {
    position: "absolute",
    transform: [
      {
        translateY: -8,
      },
    ],
    width: "20%",
    top: "50%",
    right: "10%",
    left: "70%",
    fontSize: 10,
    letterSpacing: -0.33,
    lineHeight: 16,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#8f92a1",
    textAlign: "center",
  },
  sizeView2: {
    position: "absolute",
    transform: [
      {
        translateY: -8,
      },
    ],
    width: "31.5%",
    top: "50%",
    right: "0%",
    left: "68.5%",
    height: 16,
  },
  colorText2: {
    position: "absolute",
    transform: [
      {
        translateY: -8,
      },
    ],
    width: "100%",
    top: "50%",
    right: "0%",
    left: "0%",
    fontSize: 10,
    letterSpacing: -0.33,
    lineHeight: 16,
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
    opacity: 0.6,
  },
  colorView2: {
    position: "absolute",
    transform: [
      {
        translateY: -8,
      },
    ],
    width: "20.47%",
    top: "50%",
    right: "79.53%",
    left: "0%",
    height: 16,
  },
  shockblueText2: {
    position: "absolute",
    top: 0,
    left: 29,
    fontSize: 10,
    letterSpacing: -0.33,
    lineHeight: 16,
    fontWeight: "500",
    fontFamily: "DM Sans",
    color: "rgba(23, 23, 23, 0.6)",
    textAlign: "left",
  },
  infoView2: {
    position: "absolute",
    transform: [
      {
        translateY: -8,
      },
    ],
    width: "41.64%",
    top: "50%",
    right: "20.33%",
    left: "38.03%",
    height: 16,
  },
  beosound1Text2: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    fontSize: 16,
    letterSpacing: -0.4,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
  },
  nameView2: {
    position: "absolute",
    height: "32.43%",
    width: "56.72%",
    top: "10.81%",
    right: "5.25%",
    bottom: "56.76%",
    left: "38.03%",
  },
  text11: {
    fontFamily: "DM Sans",
  },
  text12: {
    fontWeight: "700",
    fontFamily: "DM Sans",
  },
  text13: {
    position: "absolute",
    height: "13.51%",
    width: "56.72%",
    top: "59.46%",
    right: "5.25%",
    bottom: "27.03%",
    left: "38.03%",
    fontSize: 12,
    letterSpacing: -0.4,
    lineHeight: 20,
    color: "#171717",
    textAlign: "left",
  },
  itemView2: {
    position: "absolute",
    top: 521,
    left: 35,
    backgroundColor: "#fff",
    width: 305,
    height: 148,
  },
  cartPreview: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default CartPreview;
