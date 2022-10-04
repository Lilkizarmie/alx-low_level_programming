import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

const ManageOrders = () => {
  return (
    <View style={styles.manageOrdersView}>
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
          <Text style={styles.titleText}>Manage orders</Text>
        </View>
      </View>
      <View style={styles.menuView}>
        <View style={styles.groupView1}>
          <View style={styles.frameView}>
            <Text style={styles.priceText}>All</Text>
            <Text style={[styles.typeText, styles.ml36]}>Processing</Text>
            <Text style={[styles.dietaryText, styles.ml36]}>Shipped</Text>
            <Text style={[styles.dietaryText1, styles.ml36]}>Delivered</Text>
          </View>
          <View style={styles.groupView}>
            <View style={styles.rectangleView} />
            <View style={styles.rectangleCopyView} />
          </View>
        </View>
      </View>
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
          <Text style={styles.x4Text}>x 4</Text>
          <Text style={styles.text}>{`₦1,600  `}</Text>
          <Text style={styles.beosound1Text}>
            ADIDAS X LEGO® SPORT PRO SHOES
          </Text>
        </View>
        <View style={styles.extraInfoView}>
          <Text style={styles.shippingText}>Delivered Wednesday</Text>
          <Image
            style={[styles.filled16pxCheck, styles.ml3]}
            resizeMode="cover"
            source={require("../assets/filled-16px--check.png")}
          />
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
          <Text style={styles.x4Text1}>x 4</Text>
          <Text style={styles.text1}>{`₦1,600  `}</Text>
          <Text style={styles.beosound1Text1}>
            ADIDAS X LEGO® SPORT PRO SHOES
          </Text>
        </View>
        <View style={styles.extraInfoView1}>
          <Text style={styles.shippingText1}>In transit</Text>
          <Image
            style={[styles.frameIcon, styles.ml3]}
            resizeMode="cover"
            source={require("../assets/frame-6848.png")}
          />
        </View>
      </View>
      <View style={styles.itemView2}>
        <Image
          style={styles.baseIcon2}
          resizeMode="cover"
          source={require("../assets/base28.png")}
        />
        <View style={styles.frameView1}>
          <View style={styles.imageView2}>
            <Image
              style={styles.imputImageIcon2}
              resizeMode="cover"
              source={require("../assets/-imput-image.png")}
            />
          </View>
          <Image
            style={styles.imputImageIcon3}
            resizeMode="cover"
            source={require("../assets/-imput-image12.png")}
          />
          <View style={styles.groupView2}>
            <Image
              style={styles.imputImageIcon4}
              resizeMode="cover"
              source={require("../assets/-imput-image13.png")}
            />
            <Text style={styles.itemsText1}>
              <Text style={styles.text2}>4</Text>
              <Text style={styles.itemsText}>items</Text>
            </Text>
          </View>
        </View>
        <View style={styles.extraInfoView2}>
          <Text style={styles.shippingText2}>Completed</Text>
        </View>
        <Text style={styles.orderText}>Order</Text>
        <Text style={styles.cS1020Text}> #CS1020</Text>
        <Text style={styles.text3}>{`Total: ₦1,600  `}</Text>
      </View>
      <View style={styles.itemView3}>
        <Image
          style={styles.baseIcon3}
          resizeMode="cover"
          source={require("../assets/base1.png")}
        />
        <View style={styles.imageView3}>
          <Image
            style={styles.imputImageIcon5}
            resizeMode="cover"
            source={require("../assets/-imput-image.png")}
          />
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
          <Text style={styles.x4Text2}>x 4</Text>
          <Text style={styles.text4}>{`₦1,600  `}</Text>
          <Text style={styles.beosound1Text2}>
            ADIDAS X LEGO® SPORT PRO SHOES
          </Text>
        </View>
        <View style={styles.extraInfoView3}>
          <Text style={styles.shippingText3}>Processing</Text>
          <Image
            style={[styles.filled16pxZap, styles.ml3]}
            resizeMode="cover"
            source={require("../assets/filled-16px--zap.png")}
          />
        </View>
      </View>
      <Text style={styles.yesterdayText}>Yesterday</Text>
      <Text style={styles.may122022}>May 12, 2022</Text>
      <Text style={styles.december302021}>December 30, 2021</Text>
      <View style={styles.dropdownView}>
        <View style={styles.baseView} />
        <View style={styles.iconView}>
          <View style={styles.baseView1} />
          <Image
            style={styles.colorIcon}
            resizeMode="cover"
            source={require("../assets/-color.png")}
          />
        </View>
        <Text style={styles.text5}>All time</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml36: {
    marginLeft: 36,
  },
  ml3: {
    marginLeft: 3,
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
  priceText: {
    position: "relative",
    fontSize: 14,
    letterSpacing: -0.4,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
  },
  typeText: {
    position: "relative",
    fontSize: 14,
    letterSpacing: -0.4,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#010f07",
    textAlign: "left",
    opacity: 0.64,
  },
  dietaryText: {
    position: "relative",
    fontSize: 14,
    letterSpacing: -0.4,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#010f07",
    textAlign: "left",
    opacity: 0.64,
  },
  dietaryText1: {
    position: "relative",
    fontSize: 14,
    letterSpacing: -0.4,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#010f07",
    textAlign: "left",
    opacity: 0.64,
  },
  frameView: {
    position: "absolute",
    top: 0,
    left: 11.01,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  rectangleView: {
    position: "absolute",
    top: 2,
    left: 11.01,
    backgroundColor: "#8f92a1",
    width: 340,
    height: 1,
    opacity: 0.3,
  },
  rectangleCopyView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 12,
    backgroundColor: "#171717",
    width: 36,
    height: 4,
  },
  groupView: {
    position: "absolute",
    top: 25,
    left: 0,
    width: 351.01,
    height: 4,
  },
  groupView1: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 351.01,
    height: 29,
  },
  menuView: {
    position: "absolute",
    top: 124,
    left: 23.99,
    width: 351.01,
    height: 29,
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
  shippingText: {
    position: "relative",
    fontSize: 14,
    textDecoration: "underline",
    letterSpacing: -0.1,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#51b960",
    textAlign: "left",
  },
  filled16pxCheck: {
    position: "relative",
    width: 16,
    height: 16,
    flexShrink: 0,
    overflow: "hidden",
  },
  extraInfoView: {
    position: "absolute",
    top: 110,
    right: 22,
    left: 116,
    height: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  itemView: {
    position: "absolute",
    top: 259,
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
  x4Text1: {
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
    top: 16,
    left: 116,
    width: 173,
    height: 92,
  },
  shippingText1: {
    position: "relative",
    fontSize: 14,
    textDecoration: "underline",
    letterSpacing: -0.1,
    lineHeight: 20,
    fontWeight: "800",
    fontFamily: "Lato",
    color: "#171717",
    textAlign: "left",
  },
  frameIcon: {
    position: "relative",
    width: 14,
    height: 14,
    flexShrink: 0,
  },
  extraInfoView1: {
    position: "absolute",
    top: 110,
    right: 114,
    left: 117,
    height: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  itemView1: {
    position: "absolute",
    top: 457,
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
    height: "100%",
    width: "32.12%",
    top: "0%",
    right: "67.88%",
    bottom: "0%",
    left: "0%",
  },
  imputImageIcon3: {
    position: "absolute",
    height: "100%",
    width: "32.12%",
    top: "0%",
    right: "33.94%",
    bottom: "0%",
    left: "33.94%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  imputImageIcon4: {
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
  text2: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  itemsText: {
    margin: 0,
  },
  itemsText1: {
    position: "absolute",
    top: 42,
    left: 24,
    fontSize: 14,
    letterSpacing: -0.1,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#fff",
    textAlign: "center",
  },
  groupView2: {
    position: "absolute",
    height: "100%",
    width: "32.12%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "67.88%",
  },
  frameView1: {
    position: "absolute",
    top: 29,
    left: 12,
    width: 274,
    height: 124,
  },
  shippingText2: {
    position: "relative",
    fontSize: 14,
    textDecoration: "underline",
    letterSpacing: -0.1,
    lineHeight: 20,
    fontWeight: "800",
    fontFamily: "Lato",
    color: "#171717",
    textAlign: "left",
  },
  extraInfoView2: {
    position: "absolute",
    top: 149,
    right: 224,
    left: 12,
    height: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  orderText: {
    position: "absolute",
    top: 12,
    left: 12,
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "DM Sans",
    color: "#000",
    textAlign: "right",
  },
  cS1020Text: {
    position: "absolute",
    top: 12,
    left: 54,
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "DM Sans",
    color: "#000",
    textAlign: "right",
  },
  text3: {
    position: "absolute",
    height: "10.36%",
    width: "29.84%",
    top: "78.76%",
    right: "3.93%",
    bottom: "10.88%",
    left: "66.23%",
    fontSize: 12,
    letterSpacing: 1.4,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
  },
  itemView2: {
    position: "absolute",
    top: 815,
    left: 35,
    backgroundColor: "#fff",
    width: 305,
    height: 193,
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
  imputImageIcon5: {
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
  x4Text2: {
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
  text4: {
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
  shippingText3: {
    position: "relative",
    fontSize: 14,
    textDecoration: "underline",
    letterSpacing: -0.1,
    lineHeight: 20,
    fontWeight: "800",
    fontFamily: "Lato",
    color: "#ffd15c",
    textAlign: "left",
  },
  filled16pxZap: {
    position: "relative",
    width: 16,
    height: 16,
    flexShrink: 0,
    overflow: "hidden",
  },
  extraInfoView3: {
    position: "absolute",
    top: 110,
    right: 102,
    left: 116,
    height: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  itemView3: {
    position: "absolute",
    top: 617,
    left: 35,
    backgroundColor: "#fff",
    width: 305,
    height: 148,
  },
  yesterdayText: {
    position: "absolute",
    top: 233,
    left: 35,
    fontSize: 14,
    letterSpacing: -0.1,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#1d1e20",
    textAlign: "left",
  },
  may122022: {
    position: "absolute",
    top: 431,
    left: 35,
    fontSize: 14,
    letterSpacing: -0.1,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#1d1e20",
    textAlign: "left",
  },
  december302021: {
    position: "absolute",
    top: 789,
    left: 35,
    fontSize: 14,
    letterSpacing: -0.1,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#1d1e20",
    textAlign: "left",
  },
  baseView: {
    position: "absolute",
    top: -0.5,
    right: -0.5,
    left: -0.5,
    borderRadius: 8,
    borderStyle: "solid",
    borderColor: "#171717",
    borderWidth: 1,
    height: 33,
  },
  baseView1: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    height: 16,
  },
  colorIcon: {
    position: "absolute",
    top: 6,
    right: 4.5,
    left: 4.5,
    maxWidth: "100%",
    overflow: "hidden",
    height: 4.15,
  },
  iconView: {
    position: "absolute",
    top: 8,
    right: 12,
    left: 70,
    height: 16,
  },
  text5: {
    position: "absolute",
    top: 6,
    right: 36,
    left: 12,
    fontSize: 14,
    letterSpacing: -0.4,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
  },
  dropdownView: {
    position: "absolute",
    top: 177,
    right: 242,
    left: 35,
    height: 32,
  },
  manageOrdersView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 1042,
    overflow: "hidden",
  },
});

export default ManageOrders;
