import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";

const Cart = () => {
  return (
    <View style={styles.cartView}>
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
          <Text style={styles.text2}>
            <Text style={styles.text}>$</Text>
            <Text style={styles.text1}>1,600</Text>
          </Text>
          <Text style={styles.beosound1Text}>
            ADIDAS X LEGO® SPORT PRO SHOES
          </Text>
        </View>
        <View style={styles.quantityView}>
          <View style={styles.baseView} />
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
          <Text style={styles.text3}>4</Text>
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
            <View style={styles.rectangleView1} />
            <Text style={styles.sText1}>S</Text>
          </View>
          <View style={styles.colorView1}>
            <Text style={styles.colorText1}>Color:</Text>
          </View>
          <Text style={styles.shockblueText1}>Shockblue</Text>
        </View>
        <View style={styles.nameView1}>
          <Text style={styles.text6}>
            <Text style={styles.text4}>$</Text>
            <Text style={styles.text5}>1,600</Text>
          </Text>
          <Text style={styles.beosound1Text1}>
            ADIDAS X LEGO® SPORT PRO SHOES
          </Text>
        </View>
        <View style={styles.quantityView1}>
          <View style={styles.baseView1} />
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
          <Text style={styles.text7}>4</Text>
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
        <View style={styles.infoView2}>
          <View style={styles.sizeView2}>
            <Text style={styles.sizeText2}>Size</Text>
            <View style={styles.rectangleView2} />
            <Text style={styles.sText2}>S</Text>
          </View>
          <View style={styles.colorView2}>
            <Text style={styles.colorText2}>Color:</Text>
          </View>
          <Text style={styles.shockblueText2}>Shockblue</Text>
        </View>
        <View style={styles.nameView2}>
          <Text style={styles.text10}>
            <Text style={styles.text8}>$</Text>
            <Text style={styles.text9}>1,600</Text>
          </Text>
          <Text style={styles.beosound1Text2}>
            ADIDAS X LEGO® SPORT PRO SHOES
          </Text>
        </View>
        <View style={styles.quantityView2}>
          <View style={styles.baseView2} />
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
          <Text style={styles.text11}>4</Text>
        </View>
      </View>
      <View style={styles.frameView}>
        <View style={styles.groupView}>
          <View style={styles.primaryButtonDefault}>
            <View style={styles.regFixedView}>
              <View style={styles.buttonContentView}>
                <View style={styles.contentView}>
                  <Text style={styles.buttonLabelText}>Apply</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.promoCodeView}>
            <View style={styles.placeholderUnselectedView}>
              <View style={styles.inputView}>
                <View style={styles.contentAreaView}>
                  <View style={styles.textIcon}>
                    <Text style={styles.text12}>Promo code</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.shippingView, styles.mt6]}>
          <View style={styles.baseView3} />
          <Image
            style={styles.iconL3}
            resizeMode="cover"
            source={require("../assets/icon-l.png")}
          />
          <Text style={styles.shippingText}>Shipping</Text>
          <Text style={styles.daysText}>2-3 days</Text>
          <Text style={styles.text13}>$1,600</Text>
        </View>
      </View>
      <View style={styles.frameView1}>
        <View style={styles.buttonView}>
          <View style={styles.baseView4} />
          <Image
            style={styles.iconsArrowsarrowLongRight}
            resizeMode="cover"
            source={require("../assets/-icon--r1.png")}
          />
          <Text style={styles.text14}>Checkout</Text>
        </View>
        <View style={styles.rectangleView3} />
        <View style={styles.groupView1}>
          <Text style={styles.text15}>₦9,800</Text>
          <Text style={styles.totalText}>Total:</Text>
        </View>
        <View style={styles.groupView2}>
          <Text style={styles.text16}>₦9,800</Text>
          <Text style={styles.totalText1}>Custom/Delivery fee:</Text>
        </View>
        <View style={styles.groupView3}>
          <Text style={styles.text17}>₦9,800</Text>
          <Text style={styles.totalText2}>Shipping fee:</Text>
        </View>
        <View style={styles.groupView4}>
          <Text style={styles.text18}>₦3,312,000</Text>
          <Text style={styles.totalText3}>Items (3):</Text>
        </View>
      </View>
      <View style={styles.groupView7}>
        <Image
          style={styles.tabBarIcon}
          resizeMode="cover"
          source={require("../assets/tab-bar3.png")}
        />
        <View style={styles.groupView6}>
          <Image
            style={styles.menu1Icon}
            resizeMode="cover"
            source={require("../assets/-menu-13.png")}
          />
          <Image
            style={styles.lucidewalletIcon}
            resizeMode="cover"
            source={require("../assets/lucidewallet3.png")}
          />
          <Image
            style={styles.store1Icon}
            resizeMode="cover"
            source={require("../assets/store-1.png")}
          />
          <View style={styles.groupView5}>
            <View style={styles.baseView5} />
            <Image
              style={styles.iconsOthershoppingCart}
              resizeMode="cover"
              source={require("../assets/iconsothershoppingcart.png")}
            />
            <Text style={styles.cartText}>Cart</Text>
          </View>
          <Image
            style={styles.menu3Icon}
            resizeMode="cover"
            source={require("../assets/-menu-3.png")}
          />
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
              source={require("../assets/wifi7.png")}
            />
            <Image
              style={styles.cellularConnectionIcon}
              resizeMode="cover"
              source={require("../assets/cellular-connection7.png")}
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
          <Text style={styles.titleText}> My Cart</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt6: {
    marginTop: 6,
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
  text: {
    fontFamily: "DM Sans",
  },
  text1: {
    fontWeight: "700",
    fontFamily: "DM Sans",
  },
  text2: {
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
  baseView: {
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
  text3: {
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
    top: 100,
    left: 36,
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
  text4: {
    fontFamily: "DM Sans",
  },
  text5: {
    fontWeight: "700",
    fontFamily: "DM Sans",
  },
  text6: {
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
  baseView1: {
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
  text7: {
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
    top: 254,
    left: 36,
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
  text8: {
    fontFamily: "DM Sans",
  },
  text9: {
    fontWeight: "700",
    fontFamily: "DM Sans",
  },
  text10: {
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
    height: "62.16%",
    width: "56.72%",
    top: "10.81%",
    right: "5.25%",
    bottom: "27.03%",
    left: "38.03%",
  },
  baseView2: {
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
  text11: {
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
  itemView2: {
    position: "absolute",
    top: 408,
    left: 36,
    backgroundColor: "#fff",
    width: 305,
    height: 148,
  },
  buttonLabelText: {
    position: "relative",
    fontSize: 16,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#fff",
    textAlign: "center",
  },
  contentView: {
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  buttonContentView: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    borderRadius: 15,
    backgroundColor: "#171717",
    overflow: "hidden",
    flexDirection: "column",
    paddingHorizontal: 24,
    paddingVertical: 14,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  regFixedView: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    height: 48,
  },
  primaryButtonDefault: {
    position: "absolute",
    right: 0,
    bottom: 16,
    width: 99,
    height: 48,
  },
  text12: {
    position: "relative",
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "Lato",
    color: "#a0a0a0",
    textAlign: "left",
  },
  textIcon: {
    position: "absolute",
    top: -2,
    left: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  contentAreaView: {
    position: "absolute",
    top: 30,
    right: 36,
    left: 16,
    height: 20,
    overflow: "hidden",
  },
  inputView: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 24,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#f3f6f8",
    borderWidth: 2,
  },
  placeholderUnselectedView: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    height: 80,
  },
  promoCodeView: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 200,
    height: 80,
  },
  groupView: {
    position: "relative",
    width: 305,
    height: 80,
    flexShrink: 0,
  },
  baseView3: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 24,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#f3f6f8",
    borderWidth: 2,
    width: 305,
    height: 80,
  },
  iconL3: {
    position: "absolute",
    top: 27.69,
    left: 24,
    width: 24,
    height: 24.62,
  },
  shippingText: {
    position: "absolute",
    top: 17.18,
    left: 72,
    fontSize: 16,
    letterSpacing: -0.4,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
    width: 161,
    height: 24.65,
  },
  daysText: {
    position: "absolute",
    top: 43.08,
    left: 72,
    fontSize: 12,
    letterSpacing: -0.4,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
    width: 161,
    height: 20.51,
    opacity: 0.6,
  },
  text13: {
    position: "absolute",
    top: 30,
    left: 235,
    fontSize: 12,
    letterSpacing: 1.4,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
    width: 46,
    height: 20,
  },
  shippingView: {
    position: "relative",
    width: 305,
    height: 80,
    flexShrink: 0,
  },
  frameView: {
    position: "absolute",
    top: 580,
    left: 36,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  baseView4: {
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
  text14: {
    position: "absolute",
    transform: [
      {
        translateY: -10,
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
    right: 35,
    bottom: 0,
    left: 35,
    height: 44,
  },
  rectangleView3: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    backgroundColor: "#8f92a1",
    height: 1,
    opacity: 0.2,
  },
  text15: {
    position: "absolute",
    right: 0,
    bottom: 0,
    left: 160,
    fontSize: 16,
    letterSpacing: 1.4,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "right",
    height: 24,
  },
  totalText: {
    position: "absolute",
    right: 265,
    bottom: 0,
    left: 0,
    fontSize: 16,
    letterSpacing: -0.4,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
  },
  groupView1: {
    position: "absolute",
    right: 35,
    bottom: 68,
    left: 35,
    height: 24,
  },
  text16: {
    position: "absolute",
    right: 0,
    bottom: 0,
    left: 160,
    fontSize: 16,
    letterSpacing: 1.4,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "right",
    height: 24,
  },
  totalText1: {
    position: "absolute",
    right: 157,
    bottom: 0,
    left: 0,
    fontSize: 16,
    letterSpacing: -0.4,
    lineHeight: 24,
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
  },
  groupView2: {
    position: "absolute",
    right: 35,
    bottom: 96,
    left: 35,
    height: 24,
  },
  text17: {
    position: "absolute",
    right: 0,
    bottom: 0,
    left: 160,
    fontSize: 16,
    letterSpacing: 1.4,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "right",
    height: 24,
  },
  totalText2: {
    position: "absolute",
    right: 215,
    bottom: 0,
    left: 0,
    fontSize: 16,
    letterSpacing: -0.4,
    lineHeight: 24,
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
  },
  groupView3: {
    position: "absolute",
    right: 35,
    bottom: 124,
    left: 35,
    height: 24,
  },
  text18: {
    position: "absolute",
    right: 0,
    bottom: 0,
    left: 160,
    fontSize: 16,
    letterSpacing: 1.4,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "right",
    height: 24,
  },
  totalText3: {
    position: "absolute",
    right: 238,
    bottom: 0,
    left: 0,
    fontSize: 16,
    letterSpacing: -0.4,
    lineHeight: 24,
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
  },
  groupView4: {
    position: "absolute",
    right: 35,
    bottom: 152,
    left: 35,
    height: 24,
  },
  frameView1: {
    position: "absolute",
    right: -1,
    bottom: 133,
    left: 1,
    backgroundColor: "#fff",
    height: 186,
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
    height: "60%",
    width: "7.03%",
    top: "20%",
    right: "92.97%",
    bottom: "20%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  lucidewalletIcon: {
    position: "absolute",
    height: "60%",
    width: "7.34%",
    top: "20%",
    right: "56.27%",
    bottom: "20%",
    left: "36.39%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  store1Icon: {
    position: "absolute",
    height: "60%",
    width: "7.34%",
    top: "20%",
    right: "74.62%",
    bottom: "20%",
    left: "18.04%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  baseView5: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 20,
    backgroundColor: "#f2b51d",
  },
  iconsOthershoppingCart: {
    position: "absolute",
    height: "60%",
    width: "26.09%",
    top: "20%",
    right: "60.87%",
    bottom: "20%",
    left: "13.04%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  cartText: {
    position: "absolute",
    height: "50%",
    width: "26.09%",
    top: "25%",
    right: "21.74%",
    bottom: "25%",
    left: "52.17%",
    fontSize: 12,
    letterSpacing: -0.6,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#000",
    textAlign: "left",
  },
  groupView5: {
    position: "absolute",
    height: "100%",
    width: "28.13%",
    top: "0%",
    right: "18.35%",
    bottom: "0%",
    left: "53.52%",
  },
  menu3Icon: {
    position: "absolute",
    height: "60%",
    width: "7.34%",
    top: "20%",
    right: "0%",
    bottom: "20%",
    left: "92.66%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  groupView6: {
    position: "absolute",
    height: "36.36%",
    width: "87.2%",
    top: "21.82%",
    right: "6.4%",
    bottom: "41.82%",
    left: "6.4%",
  },
  groupView7: {
    position: "absolute",
    right: 0,
    bottom: -1,
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
    width: 15.17,
    height: 6.82,
  },
  cellularConnectionIcon: {
    position: "relative",
    width: 16.82,
    height: 6.61,
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
    width: 371,
    height: 62,
  },
  topBarView: {
    position: "absolute",
    top: 0,
    left: 5,
    width: 371,
    height: 62,
  },
  cartView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 1109,
    overflow: "hidden",
  },
});

export default Cart;
