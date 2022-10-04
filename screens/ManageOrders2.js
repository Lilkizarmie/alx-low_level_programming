import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

const ManageOrders2 = () => {
  return (
    <View style={styles.manageOrdersView}>
      <View style={styles.bodyView}>
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
          <Text style={styles.titleText}>Order Details</Text>
        </View>
      </View>
      <View style={styles.groupView}>
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
              <View style={styles.rectangleView} />
              <Text style={styles.sText}>S</Text>
            </View>
            <View style={styles.colorView}>
              <Text style={styles.colorText}>Color:</Text>
            </View>
            <Text style={styles.shockblueText}>Shockblue</Text>
          </View>
          <View style={styles.nameView}>
            <Text style={styles.x4Text}>x 4</Text>
            <Text style={styles.text}>{`₦1,600  `}</Text>
            <Text style={styles.beosound1Text}>
              ADIDAS X LEGO® SPORT PRO SHOES
            </Text>
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
              source={require("../assets/-imput-image16.png")}
            />
          </View>
          <View style={styles.infoView1}>
            <View style={styles.sizeView1}>
              <Text style={styles.sizeText1}>Size</Text>
              <View style={styles.rectangleView1} />
              <Text style={styles.sText1}>S</Text>
            </View>
            <View style={styles.colorView1}>
              <Text style={styles.colorText1}>Color:</Text>
            </View>
            <Text style={styles.shockblueText1}>Shockblue</Text>
          </View>
          <View style={styles.nameView1}>
            <Text style={styles.x3Text}>x 3</Text>
            <Text style={styles.text1}>{`₦2,650  `}</Text>
            <Text style={styles.beosound1Text1}>
              Prada street wear jacket Winter wear
            </Text>
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
              source={require("../assets/-imput-image12.png")}
            />
          </View>
          <View style={styles.infoView2}>
            <View style={styles.sizeView2}>
              <Text style={styles.sizeText2}>Size</Text>
              <View style={styles.rectangleView2} />
              <Text style={styles.sText2}>M</Text>
            </View>
            <View style={styles.colorView2}>
              <Text style={styles.colorText2}>Color:</Text>
            </View>
            <Text style={styles.blackTanText}>Black tan</Text>
          </View>
          <View style={styles.nameView2}>
            <Text style={styles.x2Text}>x 2</Text>
            <Text style={styles.text2}>{`₦1,600  `}</Text>
            <Text style={styles.beosound1Text2}>
              ADIDAS X LEGO® SPORT PRO SHOES
            </Text>
          </View>
        </View>
        <View style={styles.itemView3}>
          <Image
            style={styles.baseIcon3}
            resizeMode="cover"
            source={require("../assets/base1.png")}
          />
          <View style={styles.imageView3}>
            <Image
              style={styles.imputImageIcon3}
              resizeMode="cover"
              source={require("../assets/-imput-image12.png")}
            />
          </View>
          <View style={styles.infoView3}>
            <View style={styles.sizeView3}>
              <Text style={styles.sizeText3}>Size</Text>
              <View style={styles.rectangleView3} />
              <Text style={styles.sText3}>M</Text>
            </View>
            <View style={styles.colorView3}>
              <Text style={styles.colorText3}>Color:</Text>
            </View>
            <Text style={styles.blackTanText1}>Black tan</Text>
          </View>
          <View style={styles.nameView3}>
            <Text style={styles.x2Text1}>x 2</Text>
            <Text style={styles.text3}>{`₦1,600  `}</Text>
            <Text style={styles.beosound1Text3}>
              ADIDAS X LEGO® SPORT PRO SHOES
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.groupView3}>
        <Image
          style={styles.iconsOutlineLocation}
          resizeMode="cover"
          source={require("../assets/-icon--l34.png")}
        />
        <View style={styles.groupView1}>
          <Text style={styles.adeKosowoText}>Ade Kosowo</Text>
          <Text style={styles.text4}>+234109457120</Text>
        </View>
        <View style={styles.groupView2}>
          <Text style={styles.allenAvenueIkejaText}>
            178 Allen Avenue,Ikeja
          </Text>
        </View>
      </View>
      <View style={styles.groupView5}>
        <Image
          style={styles.uilclipboardBlankIcon}
          resizeMode="cover"
          source={require("../assets/uilclipboardblank1.png")}
        />
        <View style={styles.groupView4}>
          <Text style={styles.orderPlacedOnDecember302}>
            Order Placed On: December 30,2021
          </Text>
        </View>
        <Text style={styles.orderIDText}>Order ID:</Text>
        <Text style={styles.cS1020Text}> #CS1020</Text>
        <Text style={styles.copyText}>Copy</Text>
      </View>
      <View style={styles.extraInfoView}>
        <Text style={styles.shippingText}>Completed</Text>
      </View>
      <Text style={styles.yourOrderHasBeenDelivered}>
        Your Order has been delivered.
      </Text>
      <View style={styles.totalView}>
        <View style={styles.rectangleView4} />
        <View style={styles.lineView} />
        <Text style={styles.text5}>₦9,800</Text>
        <Text style={styles.totalText}>Total:</Text>
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
    right: 0,
    bottom: 0,
    width: 375,
    height: 34,
    opacity: 0.05,
  },
  bodyView: {
    position: "absolute",
    right: 0,
    bottom: 0,
    width: 375,
    height: 34,
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
  rectangleView: {
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
  x4Text: {
    position: "absolute",
    top: 74,
    left: 53,
    fontSize: 10,
    letterSpacing: -0.33,
    lineHeight: 16,
    fontFamily: "DM Sans",
    color: "#6f7071",
    textAlign: "left",
  },
  text: {
    position: "absolute",
    height: "21.74%",
    width: "27.17%",
    top: "78.26%",
    right: "72.83%",
    bottom: "0%",
    left: "0%",
    fontSize: 12,
    letterSpacing: 1.4,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "DM Sans",
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
    top: 16,
    left: 116,
    width: 173,
    height: 92,
  },
  itemView: {
    position: "absolute",
    top: 0,
    left: 0,
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
  x3Text: {
    position: "absolute",
    top: 74,
    left: 53,
    fontSize: 10,
    letterSpacing: -0.33,
    lineHeight: 16,
    fontFamily: "DM Sans",
    color: "#6f7071",
    textAlign: "left",
  },
  text1: {
    position: "absolute",
    height: "21.74%",
    width: "28.32%",
    top: "78.26%",
    right: "71.68%",
    bottom: "0%",
    left: "0%",
    fontSize: 12,
    letterSpacing: 1.4,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "DM Sans",
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
    textTransform: "uppercase",
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
  },
  nameView1: {
    position: "absolute",
    top: 16,
    left: 116,
    width: 173,
    height: 92,
  },
  itemView1: {
    position: "absolute",
    top: 320,
    left: 0,
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
  blackTanText: {
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
  x2Text: {
    position: "absolute",
    top: 74,
    left: 53,
    fontSize: 10,
    letterSpacing: -0.33,
    lineHeight: 16,
    fontFamily: "DM Sans",
    color: "#6f7071",
    textAlign: "left",
  },
  text2: {
    position: "absolute",
    height: "21.74%",
    width: "27.17%",
    top: "78.26%",
    right: "72.83%",
    bottom: "0%",
    left: "0%",
    fontSize: 12,
    letterSpacing: 1.4,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
  },
  beosound1Text2: {
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
  nameView2: {
    position: "absolute",
    top: 16,
    left: 116,
    width: 173,
    height: 92,
  },
  itemView2: {
    position: "absolute",
    top: 160,
    left: 0,
    backgroundColor: "#fff",
    width: 305,
    height: 148,
  },
  baseIcon3: {
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
  imputImageIcon3: {
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
  imageView3: {
    position: "absolute",
    height: "83.78%",
    width: "28.85%",
    top: "8.11%",
    right: "67.21%",
    bottom: "8.11%",
    left: "3.93%",
  },
  sizeText3: {
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
  sText3: {
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
  sizeView3: {
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
  colorText3: {
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
  colorView3: {
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
  blackTanText1: {
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
  infoView3: {
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
  x2Text1: {
    position: "absolute",
    top: 74,
    left: 53,
    fontSize: 10,
    letterSpacing: -0.33,
    lineHeight: 16,
    fontFamily: "DM Sans",
    color: "#6f7071",
    textAlign: "left",
  },
  text3: {
    position: "absolute",
    height: "21.74%",
    width: "27.17%",
    top: "78.26%",
    right: "72.83%",
    bottom: "0%",
    left: "0%",
    fontSize: 12,
    letterSpacing: 1.4,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
  },
  beosound1Text3: {
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
  nameView3: {
    position: "absolute",
    top: 16,
    left: 116,
    width: 173,
    height: 92,
  },
  itemView3: {
    position: "absolute",
    top: 480,
    left: 0,
    backgroundColor: "#fff",
    width: 305,
    height: 148,
  },
  groupView: {
    position: "absolute",
    top: 433,
    left: 35,
    width: 305,
    height: 628,
  },
  iconsOutlineLocation: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 24,
    height: 24,
  },
  adeKosowoText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "DM Sans",
    color: "#000",
    textAlign: "right",
  },
  text4: {
    position: "absolute",
    top: 29,
    left: 0,
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "DM Sans",
    color: "#000",
    textAlign: "right",
  },
  groupView1: {
    position: "absolute",
    top: 0,
    left: 36,
    width: 104,
    height: 47,
  },
  allenAvenueIkejaText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 16,
    letterSpacing: -0.4,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "right",
  },
  groupView2: {
    position: "absolute",
    top: 56,
    left: 36,
    width: 159,
    height: 24,
  },
  groupView3: {
    position: "absolute",
    top: 232,
    left: 35,
    width: 195,
    height: 80,
  },
  uilclipboardBlankIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  orderPlacedOnDecember302: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "DM Sans",
    color: "#000",
    textAlign: "right",
  },
  groupView4: {
    position: "absolute",
    top: 27,
    left: 36,
    width: 241,
    height: 18,
  },
  orderIDText: {
    position: "absolute",
    top: 3,
    left: 36,
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "DM Sans",
    color: "#000",
    textAlign: "right",
  },
  cS1020Text: {
    position: "absolute",
    top: 3,
    left: 98,
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "DM Sans",
    color: "#000",
    textAlign: "right",
  },
  copyText: {
    position: "absolute",
    top: 4,
    left: 176,
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#4285f4",
    textAlign: "right",
  },
  groupView5: {
    position: "absolute",
    top: 340,
    left: 35,
    width: 277,
    height: 45,
  },
  shippingText: {
    position: "relative",
    fontSize: 16,
    textDecoration: "underline",
    letterSpacing: -0.1,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
  },
  extraInfoView: {
    position: "absolute",
    top: 148,
    right: 144,
    left: 144,
    height: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  yourOrderHasBeenDelivered: {
    position: "absolute",
    top: 180,
    left: 35,
    fontSize: 14,
    letterSpacing: -0.4,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: "DM Sans",
    color: "#959595",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 305,
  },
  rectangleView4: {
    position: "absolute",
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "#fff",
    height: 50,
  },
  lineView: {
    position: "absolute",
    right: 0,
    bottom: 50.02,
    left: 0,
    backgroundColor: "#fff",
    height: 0.96,
    opacity: 0.2,
  },
  text5: {
    position: "absolute",
    right: 35,
    bottom: 11.95,
    left: 195,
    fontSize: 16,
    letterSpacing: 1.4,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "right",
    height: 23.03,
  },
  totalText: {
    position: "absolute",
    right: 195,
    bottom: 11.95,
    left: 35,
    fontSize: 16,
    letterSpacing: -0.4,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
    height: 23.03,
  },
  totalView: {
    position: "absolute",
    right: 0,
    bottom: -0.98,
    left: 0,
    height: 50.98,
  },
  manageOrdersView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 1150,
    overflow: "hidden",
  },
});

export default ManageOrders2;
