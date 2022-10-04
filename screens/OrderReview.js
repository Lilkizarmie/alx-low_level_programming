import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

const OrderReview = () => {
  return (
    <View style={styles.orderReview}>
      <View style={styles.bodyView}>
        <View style={styles.buttonView}>
          <View style={styles.baseView} />
          <Image
            style={styles.iconsArrowsarrowLongRight}
            resizeMode="cover"
            source={require("../assets/iconsarrowsarrowlongright.png")}
          />
          <Text style={styles.text}>Place Order</Text>
        </View>
        <View style={styles.totalView1}>
          <View style={styles.totalView}>
            <Text style={styles.text1}>₦9,800</Text>
            <Text style={styles.totalText}>Total:</Text>
          </View>
          <View style={styles.shippingView}>
            <Text style={styles.freeText}>₦1,600</Text>
            <Text style={styles.shippingText}>Shipping</Text>
          </View>
        </View>
        <View style={styles.infoView}>
          <View style={styles.lineView} />
          <View style={styles.paymentView}>
            <View style={styles.itemView}>
              <View style={styles.baseView1} />
              <Image
                style={styles.icon}
                resizeMode="cover"
                source={require("../assets/icon4.png")}
              />
              <Text style={styles.text2}>* * * * 9000</Text>
              <View style={styles.editView}>
                <View style={styles.rectangleView} />
                <Text style={styles.changeText}>Change</Text>
              </View>
            </View>
            <Text style={styles.paymentText}>Payment</Text>
          </View>
          <View style={styles.shippingView2}>
            <View style={styles.shippingView1}>
              <View style={styles.baseView2} />
              <Text style={styles.text3}>₦1,600</Text>
              <Image
                style={styles.iconR}
                resizeMode="cover"
                source={require("../assets/icon-r1.png")}
              />
              <Image
                style={styles.iconL}
                resizeMode="cover"
                source={require("../assets/iconsothershoppingcart.png")}
              />
              <Text style={styles.standardText}>Standard</Text>
              <Text style={styles.daysText}>2-3 days</Text>
            </View>
            <View style={styles.itemView1}>
              <Image
                style={styles.iconL1}
                resizeMode="cover"
                source={require("../assets/-icon--l11.png")}
              />
              <Text style={styles.broadwayBrooklText}>
                178 Allen Avenue, Ikeja
              </Text>
              <View style={styles.editView1}>
                <View style={styles.rectangleView1} />
                <Text style={styles.changeText1}>Change</Text>
              </View>
            </View>
            <Text style={styles.shippingText1}>Shipping</Text>
          </View>
        </View>
        <View style={styles.productView}>
          <View style={styles.lineView1} />
          <View style={styles.frameView}>
            <View style={styles.itemView2}>
              <Image
                style={styles.baseIcon}
                resizeMode="cover"
                source={require("../assets/base10.png")}
              />
              <Image
                style={styles.imageIcon}
                resizeMode="cover"
                source={require("../assets/-image.png")}
              />
              <Text style={styles.beosound1Text}>
                ADIDAS X LEGO® SPORT PRO SHOES
              </Text>
            </View>
            <View style={[styles.itemView3, styles.ml16]}>
              <Image
                style={styles.baseIcon1}
                resizeMode="cover"
                source={require("../assets/base10.png")}
              />
              <Image
                style={styles.imageIcon1}
                resizeMode="cover"
                source={require("../assets/-image1.png")}
              />
              <Text style={styles.beosoundBaText}>
                ADIDAS X LEGO® SPORT PRO SHOES
              </Text>
            </View>
            <View style={[styles.itemView4, styles.ml16]}>
              <Image
                style={styles.baseIcon2}
                resizeMode="cover"
                source={require("../assets/base10.png")}
              />
              <Image
                style={styles.imageIcon2}
                resizeMode="cover"
                source={require("../assets/-image2.png")}
              />
              <Text style={styles.beoplayH42}>
                ADIDAS X LEGO® SPORT PRO SHOES
              </Text>
            </View>
            <View style={[styles.itemView5, styles.ml16]}>
              <Image
                style={styles.baseIcon3}
                resizeMode="cover"
                source={require("../assets/base13.png")}
              />
              <Image
                style={styles.imageIcon3}
                resizeMode="cover"
                source={require("../assets/-image3.png")}
              />
              <Text style={styles.beoplayA9Text}>
                ADIDAS X LEGO® SPORT PRO SHOes
              </Text>
            </View>
            <View style={[styles.itemView6, styles.ml16]}>
              <Image
                style={styles.baseIcon4}
                resizeMode="cover"
                source={require("../assets/base14.png")}
              />
              <Image
                style={styles.imageIcon4}
                resizeMode="cover"
                source={require("../assets/-image4.png")}
              />
              <Text style={styles.beosoundBaText1}>
                ADIDAS X LEGO® SPORT PRO SHOES
              </Text>
            </View>
          </View>
          <View style={styles.titleView}>
            <Text style={styles.productsText}>Products</Text>
          </View>
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
          <Text style={styles.titleText}>Order Review</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml16: {
    marginLeft: 16,
  },
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
  },
  text: {
    position: "absolute",
    transform: [
      {
        translateY: -10,
      },
    ],
    top: "50%",
    right: 106,
    left: 108,
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
    top: 610,
    left: 35,
    width: 305,
    height: 44,
  },
  text1: {
    position: "absolute",
    top: 0,
    left: 160,
    fontSize: 16,
    letterSpacing: -0.4,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "right",
    width: 145,
  },
  totalText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 16,
    letterSpacing: -0.4,
    lineHeight: 24,
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
    width: 145,
  },
  totalView: {
    position: "absolute",
    top: 32,
    left: 0,
    width: 305,
    height: 24,
  },
  freeText: {
    position: "absolute",
    transform: [
      {
        translateY: -12,
      },
    ],
    width: "47.54%",
    top: "50%",
    right: "0%",
    left: "52.46%",
    fontSize: 12,
    letterSpacing: 1.4,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "right",
  },
  shippingText: {
    position: "absolute",
    transform: [
      {
        translateY: -12,
      },
    ],
    width: "47.54%",
    top: "50%",
    right: "52.46%",
    left: "0%",
    fontSize: 14,
    letterSpacing: -0.4,
    lineHeight: 24,
    fontFamily: "DM Sans",
    color: "#8f92a1",
    textAlign: "left",
  },
  shippingView: {
    position: "absolute",
    transform: [
      {
        translateY: -28,
      },
    ],
    width: "100%",
    top: "50%",
    right: "0%",
    left: "0%",
    height: 24,
  },
  totalView1: {
    position: "absolute",
    top: 504,
    left: 35,
    width: 305,
    height: 56,
  },
  lineView: {
    position: "absolute",
    height: "0.36%",
    top: "99.64%",
    right: 0,
    bottom: "0%",
    left: 0,
    backgroundColor: "#f3f6f8",
  },
  baseView1: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 16,
    backgroundColor: "#171717",
  },
  icon: {
    position: "absolute",
    height: "49.94%",
    width: "11.88%",
    top: "25%",
    right: "82.87%",
    bottom: "25.06%",
    left: "5.25%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  text2: {
    position: "absolute",
    transform: [
      {
        translateY: -12,
      },
    ],
    width: "49.84%",
    top: "50%",
    right: "27.54%",
    left: "22.62%",
    fontSize: 16,
    letterSpacing: -0.4,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#fff",
    textAlign: "left",
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
  changeText: {
    position: "absolute",
    transform: [
      {
        translateY: -12,
      },
    ],
    width: "100%",
    top: "50%",
    right: "0%",
    left: "0%",
    fontSize: 10,
    letterSpacing: -0.4,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "center",
  },
  editView: {
    position: "absolute",
    height: "50%",
    width: "18.36%",
    top: "25%",
    right: "3.93%",
    bottom: "25%",
    left: "77.7%",
    overflow: "hidden",
  },
  itemView: {
    position: "absolute",
    height: "60%",
    width: "100%",
    top: "40%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    overflow: "hidden",
  },
  paymentText: {
    position: "absolute",
    transform: [
      {
        translateY: -40,
      },
    ],
    top: "50%",
    right: 253,
    left: 0,
    fontSize: 10,
    letterSpacing: 1,
    lineHeight: 20,
    textTransform: "uppercase",
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
    opacity: 0.4,
  },
  paymentView: {
    position: "absolute",
    height: "29.09%",
    width: "81.33%",
    top: "61.82%",
    right: "9.33%",
    bottom: "9.09%",
    left: "9.33%",
  },
  baseView2: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 24,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#f3f6f8",
    borderWidth: 2,
  },
  text3: {
    position: "absolute",
    top: 28.96,
    left: 196,
    fontSize: 12,
    letterSpacing: 1.4,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
    width: 46,
    height: 19.98,
  },
  iconR: {
    position: "absolute",
    height: "34.29%",
    width: "7.87%",
    top: "32.86%",
    right: "7.87%",
    bottom: "32.86%",
    left: "84.26%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  iconL: {
    position: "absolute",
    height: "34.29%",
    width: "7.87%",
    top: "38.57%",
    right: "84.26%",
    bottom: "27.14%",
    left: "7.87%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  standardText: {
    position: "absolute",
    transform: [
      {
        translateY: -23,
      },
    ],
    width: "22.62%",
    top: "50%",
    right: "53.77%",
    left: "23.61%",
    fontSize: 16,
    letterSpacing: -0.4,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
  },
  daysText: {
    position: "absolute",
    height: "28.57%",
    width: "15.41%",
    top: "54.29%",
    right: "60.98%",
    bottom: "17.14%",
    left: "23.61%",
    fontSize: 12,
    letterSpacing: -0.4,
    lineHeight: 20,
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
    opacity: 0.6,
  },
  shippingView1: {
    position: "absolute",
    height: "47.95%",
    width: "100%",
    top: "52.05%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  iconL1: {
    position: "absolute",
    height: "100%",
    width: "7.87%",
    top: "0%",
    right: "92.13%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  broadwayBrooklText: {
    position: "absolute",
    transform: [
      {
        translateY: -12,
      },
    ],
    width: "63.28%",
    top: "50%",
    right: "23.61%",
    left: "13.11%",
    fontSize: 16,
    letterSpacing: -0.4,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
  },
  rectangleView1: {
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
  changeText1: {
    position: "absolute",
    transform: [
      {
        translateY: -12,
      },
    ],
    width: "100%",
    top: "50%",
    right: "0%",
    left: "0%",
    fontSize: 10,
    letterSpacing: -0.4,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "center",
  },
  editView1: {
    position: "absolute",
    height: "100%",
    width: "18.36%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "81.64%",
  },
  itemView1: {
    position: "absolute",
    height: "16.44%",
    width: "100%",
    top: "24.66%",
    right: "0%",
    bottom: "58.9%",
    left: "0%",
  },
  shippingText1: {
    position: "absolute",
    transform: [
      {
        translateY: -73,
      },
    ],
    top: "50%",
    right: 252,
    left: 0,
    fontSize: 10,
    letterSpacing: 1,
    lineHeight: 20,
    textTransform: "uppercase",
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
    opacity: 0.4,
  },
  shippingView2: {
    position: "absolute",
    height: "53.09%",
    width: "81.33%",
    top: "0%",
    right: "9.33%",
    bottom: "46.91%",
    left: "9.33%",
  },
  infoView: {
    position: "absolute",
    height: "42.05%",
    top: "31.35%",
    right: 0,
    bottom: "26.61%",
    left: 0,
  },
  lineView1: {
    position: "absolute",
    height: "0.51%",
    top: "91.84%",
    right: 0,
    bottom: "7.65%",
    left: 0,
    backgroundColor: "#f3f6f8",
  },
  baseIcon: {
    position: "absolute",
    height: "54.05%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "45.95%",
    left: "0%",
    borderRadius: 24,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  imageIcon: {
    position: "absolute",
    height: "43.24%",
    width: "80%",
    top: "5.41%",
    right: "10%",
    bottom: "51.35%",
    left: "10%",
    borderRadius: 16,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  beosound1Text: {
    position: "absolute",
    height: "40.54%",
    width: "100%",
    top: "59.46%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    fontSize: 12,
    letterSpacing: -0.4,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "center",
  },
  itemView2: {
    position: "relative",
    width: 80,
    height: 148,
    flexShrink: 0,
  },
  baseIcon1: {
    position: "absolute",
    height: "54.05%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "45.95%",
    left: "0%",
    borderRadius: 24,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  imageIcon1: {
    position: "absolute",
    height: "43.24%",
    width: "80%",
    top: "5.41%",
    right: "10%",
    bottom: "51.35%",
    left: "10%",
    borderRadius: 16,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  beosoundBaText: {
    position: "absolute",
    height: "40.54%",
    width: "100%",
    top: "59.46%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    fontSize: 12,
    letterSpacing: -0.4,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "center",
  },
  itemView3: {
    position: "relative",
    width: 80,
    height: 148,
    flexShrink: 0,
  },
  baseIcon2: {
    position: "absolute",
    height: "54.05%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "45.95%",
    left: "0%",
    borderRadius: 24,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  imageIcon2: {
    position: "absolute",
    height: "43.24%",
    width: "80%",
    top: "5.41%",
    right: "10%",
    bottom: "51.35%",
    left: "10%",
    borderRadius: 16,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  beoplayH42: {
    position: "absolute",
    height: "40.54%",
    width: "100%",
    top: "59.46%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    fontSize: 12,
    letterSpacing: -0.4,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "center",
  },
  itemView4: {
    position: "relative",
    width: 80,
    height: 148,
    flexShrink: 0,
  },
  baseIcon3: {
    position: "absolute",
    height: "54.05%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "45.95%",
    left: "0%",
    borderRadius: 24,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  imageIcon3: {
    position: "absolute",
    height: "43.24%",
    width: "80%",
    top: "5.41%",
    right: "10%",
    bottom: "51.35%",
    left: "10%",
    borderRadius: 16,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  beoplayA9Text: {
    position: "absolute",
    height: "40.54%",
    width: "100%",
    top: "59.46%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    fontSize: 12,
    letterSpacing: -0.4,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "center",
  },
  itemView5: {
    position: "relative",
    width: 80,
    height: 148,
    flexShrink: 0,
  },
  baseIcon4: {
    position: "absolute",
    height: "54.05%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "45.95%",
    left: "0%",
    borderRadius: 24,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  imageIcon4: {
    position: "absolute",
    height: "43.24%",
    width: "80%",
    top: "5.41%",
    right: "10%",
    bottom: "51.35%",
    left: "10%",
    borderRadius: 16,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  beosoundBaText1: {
    position: "absolute",
    height: "40.54%",
    width: "100%",
    top: "59.46%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    fontSize: 12,
    letterSpacing: -0.4,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "center",
  },
  itemView6: {
    position: "relative",
    width: 80,
    height: 148,
    flexShrink: 0,
  },
  frameView: {
    position: "absolute",
    top: 48,
    left: 35,
    width: 340,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  productsText: {
    position: "absolute",
    transform: [
      {
        translateY: -12,
      },
    ],
    width: "100%",
    top: "50%",
    right: "0%",
    left: "0%",
    fontSize: 14,
    letterSpacing: -0.4,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
  },
  titleView: {
    position: "absolute",
    transform: [
      {
        translateY: -98,
      },
    ],
    width: "15.73%",
    top: "50%",
    right: "74.93%",
    left: "9.33%",
    height: 24,
  },
  productView: {
    position: "absolute",
    height: "29.97%",
    top: "0%",
    right: 0,
    bottom: "70.03%",
    left: 0,
  },
  bodyView: {
    position: "absolute",
    top: 124,
    left: 0,
    width: 375,
    height: 654,
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
  orderReview: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default OrderReview;
