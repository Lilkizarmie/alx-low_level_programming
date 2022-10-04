import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import BackBtn from "../components/BackBtn";

const SignIn = () => {
  return (
    <View style={styles.signInView}>
      <View style={styles.bodyView}>
        <Text style={styles.dontHaveAnAccoun}>
          <Text style={styles.dontHaveAnAccount}>
            <Text style={styles.dontHaveAn}>Don't have an account?</Text>
            <Text style={styles.text}>{` `}</Text>
          </Text>
          <Text style={styles.signUpText1}>
            <Text style={styles.signUpText}>Sign up</Text>
          </Text>
        </Text>
        <View style={styles.buttonView}>
          <View style={styles.baseView} />
          <Image
            style={styles.iconsButtonslogIn}
            resizeMode="cover"
            source={require("../assets/iconsbuttonslogin.png")}
          />
          <Text style={styles.text1}>log In</Text>
        </View>
        <Text style={styles.forgotPasswordText1}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          <Text style={styles.resetPasswordText}> Reset password</Text>
        </Text>
        <View style={styles.passwordView}>
          <View style={styles.inputView}>
            <View style={styles.lineView} />
            <Image
              style={styles.iconsOthereye}
              resizeMode="cover"
              source={require("../assets/iconsothereye.png")}
            />
            <Image
              style={styles.iconsButtonslock}
              resizeMode="cover"
              source={require("../assets/iconsbuttonslock.png")}
            />
            <Text style={styles.placeholderText}>• • • • • • • •</Text>
          </View>
          <Text style={styles.labelText}> Password</Text>
        </View>
        <View style={styles.usernameOrEmail}>
          <View style={styles.inputView1}>
            <View style={styles.lineView1} />
            <Image
              style={styles.iconR}
              resizeMode="cover"
              source={require("../assets/-icon--r3.png")}
            />
            <Image
              style={styles.iconL}
              resizeMode="cover"
              source={require("../assets/-menu-3.png")}
            />
            <Text style={styles.placeholderText1}>Username</Text>
          </View>
          <Text style={styles.labelText1}>Username or Email</Text>
        </View>
        <View style={styles.titleView}>
          <Text style={styles.welcomeBackYouve}>
            Welcome back, you’ve been missed!
          </Text>
          <Text style={styles.letsSignYouIn}>Let’s Sign You In</Text>
        </View>
        <Image
          style={styles.google2Icon}
          resizeMode="cover"
          source={require("../assets/google-2.png")}
        />
        <View style={styles.appoleView}>
          <View style={styles.rectangleView} />
          <Image
            style={styles.image65Traced}
            resizeMode="cover"
            source={require("../assets/image-65-traced.png")}
          />
        </View>
        <View style={styles.groupView}>
          <View style={styles.lineView2} />
          <View style={styles.lineView3} />
          <Text style={styles.orContinueWith}>Or continue with</Text>
        </View>
      </View>
      <View style={styles.barsTopBarsV1View}>
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
            source={require("../assets/wifi4.png")}
          />
          <Image
            style={styles.cellularConnectionIcon}
            resizeMode="cover"
            source={require("../assets/cellular-connection4.png")}
          />
          <View style={styles.timeStyleView}>
            <Text style={styles.timeText}>9:41</Text>
          </View>
        </View>
        <Image
          style={styles.iconR1}
          resizeMode="cover"
          source={require("../assets/-icon--r1.png")}
        />
        <Image
          style={styles.iconL1}
          resizeMode="cover"
          source={require("../assets/-icon--l1.png")}
        />
        <Text style={styles.titleText}>Log in</Text>
      </View>
      <BackBtn />
      <View style={styles.storeResultsView}>
        <View style={styles.frameView19}>
          <View style={styles.adidasView}>
            <View style={styles.frameView}>
              <View style={styles.groupView1}>
                <Image
                  style={styles.groupIcon}
                  resizeMode="cover"
                  source={require("../assets/group-6850.png")}
                />
                <Text style={styles.adidasText}>Adidas</Text>
              </View>
            </View>
          </View>
          <View style={styles.adidasView1}>
            <View style={styles.frameView1}>
              <View style={styles.groupView4}>
                <View style={styles.groupView3}>
                  <View style={styles.groupView2}>
                    <View style={styles.rectangleView1} />
                  </View>
                  <Image
                    style={styles.sonyElectronicsPng0}
                    resizeMode="cover"
                    source={require("../assets/sony-electronics--png-0.png")}
                  />
                </View>
                <Text style={styles.sonyText}>Sony</Text>
              </View>
            </View>
          </View>
          <View style={styles.adidasView2}>
            <View style={styles.frameView2}>
              <View style={styles.groupView7}>
                <View style={styles.groupView6}>
                  <View style={styles.groupView5}>
                    <View style={styles.rectangleView2} />
                  </View>
                  <Image style={styles.lGElectronicsPng0} resizeMode="cover" />
                </View>
              </View>
              <Text style={styles.sonyText1}>{`LG `}</Text>
            </View>
          </View>
          <View style={styles.adidasView3}>
            <View style={styles.frameView3}>
              <View style={styles.groupView8}>
                <View style={styles.rectangleView3} />
                <Image
                  style={styles.esteeLauder31Icon}
                  resizeMode="cover"
                  source={require("../assets/esteelauder3-1.png")}
                />
              </View>
              <Text style={styles.esteeLauderText}>Estee Lauder</Text>
            </View>
          </View>
          <View style={styles.adidasView4}>
            <View style={styles.frameView4}>
              <View style={styles.groupView9}>
                <Image
                  style={styles.groupIcon1}
                  resizeMode="cover"
                  source={require("../assets/group-6850.png")}
                />
                <Text style={styles.rolexText}>Rolex</Text>
              </View>
            </View>
          </View>
          <View style={styles.adidasView5}>
            <View style={styles.frameView5}>
              <View style={styles.groupView10}>
                <Image
                  style={styles.groupIcon2}
                  resizeMode="cover"
                  source={require("../assets/group-6850.png")}
                />
                <Text style={styles.burberryText}>Burberry</Text>
              </View>
            </View>
          </View>
          <View style={styles.frameView6}>
            <View style={styles.groupView12}>
              <View style={styles.groupView11}>
                <View style={styles.rectangleView4} />
                <Image
                  style={styles.vectorIcon}
                  resizeMode="cover"
                  source={require("../assets/vector1.png")}
                />
              </View>
              <Text style={styles.nikeText}>Nike</Text>
            </View>
          </View>
          <View style={styles.frameView8}>
            <View style={styles.groupView13}>
              <View style={styles.rectangleView5} />
              <View style={styles.frameView7}>
                <Image
                  style={styles.beatsElectronicsPng0}
                  resizeMode="cover"
                  source={require("../assets/beats-electronics--png-0.png")}
                />
              </View>
            </View>
            <Text style={styles.beatsByDre}>Beats by Dre</Text>
          </View>
          <View style={styles.frameView9}>
            <View style={styles.groupView14}>
              <View style={styles.rectangleView6} />
              <Image
                style={styles.versacePng0}
                resizeMode="cover"
                source={require("../assets/versace--png-0.png")}
              />
            </View>
            <Text style={styles.versaceText}>Versace</Text>
          </View>
          <View style={styles.frameView10}>
            <View style={styles.groupView15}>
              <View style={styles.rectangleView7} />
            </View>
            <Image
              style={styles.clarins1Icon}
              resizeMode="cover"
              source={require("../assets/group-6850.png")}
            />
            <Text style={styles.clarinsText}>Clarins</Text>
          </View>
          <View style={styles.frameView11}>
            <View style={styles.groupView16}>
              <Image
                style={styles.groupIcon3}
                resizeMode="cover"
                source={require("../assets/group-6850.png")}
              />
              <Text style={styles.pradaText}>Prada</Text>
            </View>
          </View>
          <View style={styles.frameView12}>
            <View style={styles.groupView18}>
              <View style={styles.groupView17}>
                <View style={styles.rectangleView8} />
                <Image
                  style={styles.vectorIcon1}
                  resizeMode="cover"
                  source={require("../assets/vector1.png")}
                />
              </View>
              <Text style={styles.nikeText1}>Nike</Text>
            </View>
          </View>
          <View style={styles.frameView13}>
            <View style={styles.groupView19}>
              <View style={styles.rectangleView9} />
              <Image
                style={styles.samsungElectronicsPng0}
                resizeMode="cover"
                source={require("../assets/samsung-electronics--png-0.png")}
              />
            </View>
            <Text style={styles.samsungText}>Samsung</Text>
          </View>
          <View style={styles.frameView14}>
            <View style={styles.groupView20}>
              <View style={styles.rectangleView10} />
              <Image
                style={styles.iKEAPng0}
                resizeMode="cover"
                source={require("../assets/samsung-electronics--png-0.png")}
              />
            </View>
            <Text style={styles.iKEAText}>IKEA</Text>
          </View>
          <View style={styles.frameView15}>
            <Text style={styles.fentyText}>Fenty</Text>
            <View style={styles.rectangleView11} />
            <Image
              style={styles.vectorIcon2}
              resizeMode="cover"
              source={require("../assets/vector3.png")}
            />
          </View>
          <View style={styles.frameView16}>
            <Image
              style={styles.groupIcon4}
              resizeMode="cover"
              source={require("../assets/group-6850.png")}
            />
            <Text style={styles.fendiText}>Fendi</Text>
          </View>
          <View style={styles.frameView17}>
            <Image
              style={styles.groupIcon5}
              resizeMode="cover"
              source={require("../assets/group-6850.png")}
            />
            <Text style={styles.louisVuittonText}>Louis Vuitton</Text>
          </View>
          <View style={styles.frameView18}>
            <View style={styles.groupView21}>
              <View style={styles.rectangleView12} />
              <Image
                style={styles.samsungElectronicsPng01}
                resizeMode="cover"
                source={require("../assets/samsung-electronics--png-0.png")}
              />
            </View>
            <Text style={styles.samsungText1}>Samsung</Text>
          </View>
        </View>
        <Text style={styles.recentSearchesText}>Search Results (20 items)</Text>
        <View style={styles.frameView20}>
          <View style={styles.itemView}>
            <View style={styles.baseView1} />
            <Text style={styles.menText}>Shoes</Text>
          </View>
          <View style={styles.itemView1}>
            <View style={styles.baseView2} />
            <Text style={styles.bothText}>Children</Text>
          </View>
          <View style={styles.itemView2}>
            <View style={styles.baseView3} />
            <Text style={styles.womenText}>Books</Text>
          </View>
          <View style={styles.itemView3}>
            <View style={styles.baseView4} />
            <Text style={styles.bothText1}>Gadgets</Text>
          </View>
          <View style={styles.itemView4}>
            <View style={styles.baseView5} />
            <Text style={styles.womenText1}>Gaming</Text>
          </View>
          <View style={styles.itemView5}>
            <View style={styles.baseView6} />
            <Text style={styles.womenText2}>Lingerie</Text>
          </View>
          <View style={styles.itemView6}>
            <View style={styles.baseView7} />
            <Text style={styles.bothText2}>Cosmetics</Text>
          </View>
          <View style={styles.itemView7}>
            <View style={styles.baseView8} />
            <Text style={styles.womenText3}>Fashion</Text>
          </View>
          <View style={styles.itemView8}>
            <View style={styles.baseView9} />
            <Text style={styles.womenText4}>Fragrance</Text>
          </View>
        </View>
        <View style={styles.lineView4} />
        <View style={styles.searchView}>
          <View style={styles.lineView5} />
          <Image
            style={styles.iconsOtherclose}
            resizeMode="cover"
            source={require("../assets/iconsotherclose.png")}
          />
        </View>
        <View style={styles.groupView22}>
          <Image
            style={styles.tabBarIcon}
            resizeMode="cover"
            source={require("../assets/tab-bar1.png")}
          />
          <Image
            style={styles.menu1Icon}
            resizeMode="cover"
            source={require("../assets/-menu-11.png")}
          />
          <Image
            style={styles.lucidewalletIcon}
            resizeMode="cover"
            source={require("../assets/iconsotherclose.png")}
          />
          <Image
            style={styles.iconsOthershoppingCart}
            resizeMode="cover"
            source={require("../assets/iconsotherclose.png")}
          />
          <Image
            style={styles.menu3Icon}
            resizeMode="cover"
            source={require("../assets/iconsotherclose.png")}
          />
          <View style={styles.baseView10} />
          <Text style={styles.storesText}>Stores</Text>
          <Image
            style={styles.store1Icon}
            resizeMode="cover"
            source={require("../assets/iconsotherclose.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dontHaveAn: {
    color: "rgba(23, 23, 23, 0.6)",
  },
  text: {
    color: "#000",
  },
  dontHaveAnAccount: {
    fontFamily: "DM Sans",
  },
  signUpText: {
    fontWeight: "700",
    fontFamily: "DM Sans",
  },
  signUpText1: {
    color: "#000",
  },
  dontHaveAnAccoun: {
    position: "absolute",
    transform: [
      {
        translateY: 136,
      },
    ],
    width: "93.27%",
    top: "50%",
    right: "3.67%",
    left: "3.06%",
    fontSize: 13,
    letterSpacing: -0.2,
    textAlign: "center",
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
  iconsButtonslogIn: {
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
    color: "#fff",
    textAlign: "center",
  },
  buttonView: {
    position: "absolute",
    height: "7.46%",
    width: "93.27%",
    top: "62.88%",
    right: "3.67%",
    bottom: "29.66%",
    left: "3.06%",
  },
  forgotPasswordText: {
    color: "rgba(23, 23, 23, 0.6)",
  },
  resetPasswordText: {
    color: "#000",
  },
  forgotPasswordText1: {
    position: "absolute",
    transform: [
      {
        translateY: 1,
      },
    ],
    width: "93.27%",
    top: "50%",
    right: "3.67%",
    left: "3.06%",
    fontSize: 13,
    letterSpacing: -0.2,
    fontFamily: "DM Sans",
    textAlign: "left",
  },
  lineView: {
    position: "absolute",
    height: "2.27%",
    top: "97.73%",
    right: 0,
    bottom: "0%",
    left: 0,
    backgroundColor: "#8f92a1",
    opacity: 0.2,
  },
  iconsOthereye: {
    position: "absolute",
    transform: [
      {
        translateY: -12,
      },
    ],
    top: "50%",
    right: 0,
    width: 24,
    height: 24,
  },
  iconsButtonslock: {
    position: "absolute",
    transform: [
      {
        translateY: -12,
      },
    ],
    top: "50%",
    left: 0,
    width: 24,
    height: 24,
  },
  placeholderText: {
    position: "absolute",
    transform: [
      {
        translateY: -10,
      },
    ],
    top: "50%",
    right: 40,
    left: 40,
    fontSize: 16,
    letterSpacing: -0.2,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
  },
  inputView: {
    position: "absolute",
    top: 24,
    right: 0,
    left: 0,
    backgroundColor: "#fff",
    height: 44,
  },
  labelText: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    fontSize: 12,
    letterSpacing: -0.17,
    fontWeight: "500",
    fontFamily: "DM Sans",
    color: "#8f92a1",
    textAlign: "left",
  },
  passwordView: {
    position: "absolute",
    top: 212,
    left: 10,
    backgroundColor: "#fff",
    width: 305,
    height: 68,
  },
  lineView1: {
    position: "absolute",
    height: "2.27%",
    top: "97.73%",
    right: 0,
    bottom: "0%",
    left: 0,
    backgroundColor: "#8f92a1",
    opacity: 0.2,
  },
  iconR: {
    position: "absolute",
    transform: [
      {
        translateY: -12,
      },
    ],
    top: "50%",
    right: 0,
    width: 24,
    height: 24,
    display: "none",
  },
  iconL: {
    position: "absolute",
    transform: [
      {
        translateY: -12,
      },
    ],
    top: "50%",
    left: 0,
    width: 24,
    height: 24,
  },
  placeholderText1: {
    position: "absolute",
    transform: [
      {
        translateY: -10,
      },
    ],
    top: "50%",
    right: 40,
    left: 40,
    fontSize: 16,
    letterSpacing: -0.2,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
  },
  inputView1: {
    position: "absolute",
    top: 24,
    right: 0,
    left: 0,
    backgroundColor: "#fff",
    height: 44,
  },
  labelText1: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    fontSize: 12,
    letterSpacing: -0.17,
    fontWeight: "500",
    fontFamily: "DM Sans",
    color: "#8f92a1",
    textAlign: "left",
  },
  usernameOrEmail: {
    position: "absolute",
    top: 104,
    left: 10,
    backgroundColor: "#fff",
    width: 305,
    height: 68,
  },
  welcomeBackYouve: {
    position: "absolute",
    height: "37.5%",
    width: "100%",
    top: "62.5%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    fontSize: 14,
    letterSpacing: -0.4,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
    opacity: 0.6,
  },
  letsSignYouIn: {
    position: "absolute",
    transform: [
      {
        translateY: -32,
      },
    ],
    width: "100%",
    top: "50%",
    right: "0%",
    left: "0%",
    fontSize: 24,
    letterSpacing: -0.8,
    lineHeight: 32,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
  },
  titleView: {
    position: "absolute",
    height: "10.85%",
    width: "93.27%",
    top: "0%",
    right: "3.67%",
    bottom: "89.15%",
    left: "3.06%",
  },
  google2Icon: {
    position: "absolute",
    top: 540,
    left: 0,
    width: 155,
    height: 50,
  },
  rectangleView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 16,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#f4f6f9",
    borderWidth: 1,
    width: 155,
    height: 50,
  },
  image65Traced: {
    position: "absolute",
    height: "34%",
    width: "9.03%",
    top: "34%",
    right: "45.16%",
    bottom: "32%",
    left: "45.81%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  appoleView: {
    position: "absolute",
    top: 540,
    left: 172,
    width: 155,
    height: 50,
  },
  lineView2: {
    position: "absolute",
    height: "8.33%",
    top: "50%",
    right: 205,
    bottom: "41.67%",
    left: 0,
    backgroundColor: "#8f92a1",
    opacity: 0.2,
  },
  lineView3: {
    position: "absolute",
    height: "8.33%",
    top: "50%",
    right: 0,
    bottom: "41.67%",
    left: 205,
    backgroundColor: "#8f92a1",
    opacity: 0.2,
  },
  orContinueWith: {
    position: "absolute",
    top: 0,
    left: 104,
    fontSize: 12,
    lineHeight: 12,
    fontWeight: "500",
    fontFamily: "Poppins",
    color: "#969aa0",
    textAlign: "center",
  },
  groupView: {
    position: "absolute",
    height: "2.03%",
    top: "86.1%",
    right: 12,
    bottom: "11.86%",
    left: 10,
  },
  bodyView: {
    position: "absolute",
    transform: [
      {
        translateY: -258,
      },
    ],
    width: "87.2%",
    top: "50%",
    right: "6.13%",
    left: "6.67%",
    height: 590,
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
    height: 6.82,
  },
  cellularConnectionIcon: {
    position: "relative",
    width: 17,
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
  iconR1: {
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
    display: "none",
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
  barsTopBarsV1View: {
    position: "absolute",
    top: -9,
    left: 1,
    backgroundColor: "#fff",
    width: 375,
    height: 62,
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
    color: "#1d1e20",
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
    top: 0,
    left: 0,
    width: 98,
    height: 109,
  },
  rectangleView1: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#fefefe",
    width: 70,
    height: 70,
  },
  groupView2: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 70,
    height: 70,
  },
  sonyElectronicsPng0: {
    position: "absolute",
    top: 9,
    left: 9,
    borderRadius: 10,
    width: 51,
    height: 51,
  },
  groupView3: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 70,
    height: 70,
  },
  sonyText: {
    position: "absolute",
    top: 74,
    left: 18,
    fontSize: 14,
    letterSpacing: -0.1,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#1d1e20",
    textAlign: "left",
  },
  groupView4: {
    position: "absolute",
    top: 6,
    left: 14,
    width: 70,
    height: 94,
  },
  frameView1: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#f5f6fa",
    width: 98,
    height: 109,
  },
  adidasView1: {
    position: "absolute",
    top: 121,
    left: 0,
    width: 98,
    height: 109,
  },
  rectangleView2: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#fefefe",
    width: 70,
    height: 70,
  },
  groupView5: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 70,
    height: 70,
  },
  lGElectronicsPng0: {
    position: "absolute",
    top: 9,
    left: 9,
    borderRadius: 10,
    width: 51,
    height: 51,
  },
  groupView6: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 70,
    height: 70,
  },
  groupView7: {
    position: "absolute",
    top: 6,
    left: 14,
    width: 70,
    height: 70,
  },
  sonyText1: {
    position: "absolute",
    top: 80,
    left: 40,
    fontSize: 14,
    letterSpacing: -0.1,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#1d1e20",
    textAlign: "left",
  },
  frameView2: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#f5f6fa",
    width: 98,
    height: 109,
  },
  adidasView2: {
    position: "absolute",
    top: 242,
    left: 0,
    width: 98,
    height: 109,
  },
  rectangleView3: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#fefefe",
    width: 70,
    height: 70,
  },
  esteeLauder31Icon: {
    position: "absolute",
    top: 10,
    left: 5,
    width: 60,
    height: 50,
    overflow: "hidden",
  },
  groupView8: {
    position: "absolute",
    top: 6,
    left: 14,
    width: 70,
    height: 70,
  },
  esteeLauderText: {
    position: "absolute",
    top: 80,
    left: 5,
    fontSize: 14,
    letterSpacing: -0.1,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#1d1e20",
    textAlign: "left",
  },
  frameView3: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#f5f6fa",
    width: 98,
    height: 109,
  },
  adidasView3: {
    position: "absolute",
    top: 363,
    left: 0,
    width: 98,
    height: 109,
  },
  groupIcon1: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 70,
    height: 70,
  },
  rolexText: {
    position: "absolute",
    top: 74,
    left: 17,
    fontSize: 14,
    letterSpacing: -0.1,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#1d1e20",
    textAlign: "left",
  },
  groupView9: {
    position: "absolute",
    top: 6,
    left: 14,
    width: 70,
    height: 94,
  },
  frameView4: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#f5f6fa",
    width: 98,
    height: 109,
  },
  adidasView4: {
    position: "absolute",
    top: 484,
    left: 0,
    width: 98,
    height: 109,
  },
  groupIcon2: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 70,
    height: 70,
  },
  burberryText: {
    position: "absolute",
    top: 74,
    left: 6,
    fontSize: 14,
    letterSpacing: -0.1,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#1d1e20",
    textAlign: "left",
  },
  groupView10: {
    position: "absolute",
    top: 6,
    left: 14,
    width: 70,
    height: 94,
  },
  frameView5: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#f5f6fa",
    width: 98,
    height: 109,
  },
  adidasView5: {
    position: "absolute",
    top: 605,
    left: 0,
    width: 98,
    height: 109,
  },
  rectangleView4: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#fefefe",
    width: 70,
    height: 70,
  },
  vectorIcon: {
    position: "absolute",
    top: 24.5,
    left: 14,
    width: 45.5,
    height: 23.66,
  },
  groupView11: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 70,
    height: 70,
  },
  nikeText: {
    position: "absolute",
    top: 74,
    left: 20,
    fontSize: 14,
    letterSpacing: -0.1,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#1d1e20",
    textAlign: "left",
  },
  groupView12: {
    position: "absolute",
    top: 6,
    left: 14,
    width: 70,
    height: 94,
  },
  frameView6: {
    position: "absolute",
    top: 0,
    left: 114,
    borderRadius: 10,
    backgroundColor: "#f5f6fa",
    width: 98,
    height: 109,
    overflow: "hidden",
  },
  rectangleView5: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#fefefe",
    width: 70,
    height: 70,
  },
  beatsElectronicsPng0: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    width: 40,
    height: 40,
  },
  frameView7: {
    position: "absolute",
    top: 15,
    left: 15,
    width: 40,
    height: 40,
    overflow: "hidden",
  },
  groupView13: {
    position: "absolute",
    top: 6,
    left: 14,
    width: 70,
    height: 70,
  },
  beatsByDre: {
    position: "absolute",
    top: 80,
    left: 6,
    fontSize: 14,
    letterSpacing: -0.1,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#1d1e20",
    textAlign: "left",
  },
  frameView8: {
    position: "absolute",
    top: 121,
    left: 114,
    borderRadius: 10,
    backgroundColor: "#f5f6fa",
    width: 98,
    height: 109,
    overflow: "hidden",
  },
  rectangleView6: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#fefefe",
    width: 70,
    height: 70,
  },
  versacePng0: {
    position: "absolute",
    top: 10,
    left: 10,
    borderRadius: 10,
    width: 50,
    height: 50,
  },
  groupView14: {
    position: "absolute",
    top: 6,
    left: 14,
    width: 70,
    height: 70,
  },
  versaceText: {
    position: "absolute",
    top: 80,
    left: 22,
    fontSize: 14,
    letterSpacing: -0.1,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#1d1e20",
    textAlign: "left",
  },
  frameView9: {
    position: "absolute",
    top: 242,
    left: 114,
    borderRadius: 10,
    backgroundColor: "#f5f6fa",
    width: 98,
    height: 109,
    overflow: "hidden",
  },
  rectangleView7: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#fefefe",
    width: 70,
    height: 70,
  },
  groupView15: {
    position: "absolute",
    top: 6,
    left: 14,
    width: 70,
    height: 70,
  },
  clarins1Icon: {
    position: "absolute",
    top: 6,
    left: 14,
    width: 70,
    height: 70,
    overflow: "hidden",
  },
  clarinsText: {
    position: "absolute",
    top: 80,
    left: 26,
    fontSize: 14,
    letterSpacing: -0.1,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#1d1e20",
    textAlign: "left",
  },
  frameView10: {
    position: "absolute",
    top: 363,
    left: 114,
    borderRadius: 10,
    backgroundColor: "#f5f6fa",
    width: 98,
    height: 109,
    overflow: "hidden",
  },
  groupIcon3: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 70,
    height: 70,
  },
  pradaText: {
    position: "absolute",
    top: 74,
    left: 15,
    fontSize: 14,
    letterSpacing: -0.1,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#1d1e20",
    textAlign: "left",
  },
  groupView16: {
    position: "absolute",
    top: 6,
    left: 14,
    width: 70,
    height: 94,
  },
  frameView11: {
    position: "absolute",
    top: 484,
    left: 114,
    borderRadius: 10,
    backgroundColor: "#f5f6fa",
    width: 98,
    height: 109,
    overflow: "hidden",
  },
  rectangleView8: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#fefefe",
    width: 70,
    height: 70,
  },
  vectorIcon1: {
    position: "absolute",
    top: 24.5,
    left: 14,
    width: 45.5,
    height: 23.66,
  },
  groupView17: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 70,
    height: 70,
  },
  nikeText1: {
    position: "absolute",
    top: 74,
    left: 20,
    fontSize: 14,
    letterSpacing: -0.1,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#1d1e20",
    textAlign: "left",
  },
  groupView18: {
    position: "absolute",
    top: 6,
    left: 14,
    width: 70,
    height: 94,
  },
  frameView12: {
    position: "absolute",
    top: 605,
    left: 114,
    borderRadius: 10,
    backgroundColor: "#f5f6fa",
    width: 98,
    height: 109,
    overflow: "hidden",
  },
  rectangleView9: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#fefefe",
    width: 70,
    height: 70,
  },
  samsungElectronicsPng0: {
    position: "absolute",
    top: 8,
    left: 6,
    width: 58,
    height: 55,
  },
  groupView19: {
    position: "absolute",
    top: 6,
    left: 14,
    width: 70,
    height: 70,
  },
  samsungText: {
    position: "absolute",
    top: 82,
    left: 18,
    fontSize: 14,
    letterSpacing: -0.1,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#1d1e20",
    textAlign: "left",
  },
  frameView13: {
    position: "absolute",
    top: 0,
    left: 228,
    borderRadius: 10,
    backgroundColor: "#f5f6fa",
    width: 98,
    height: 109,
    overflow: "hidden",
  },
  rectangleView10: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#fefefe",
    width: 70,
    height: 70,
  },
  iKEAPng0: {
    position: "absolute",
    top: 8,
    left: 6,
    width: 58,
    height: 55,
  },
  groupView20: {
    position: "absolute",
    top: 6,
    left: 14,
    width: 70,
    height: 70,
  },
  iKEAText: {
    position: "absolute",
    top: 82,
    left: 34,
    fontSize: 14,
    letterSpacing: -0.1,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#1d1e20",
    textAlign: "left",
  },
  frameView14: {
    position: "absolute",
    top: 121,
    left: 228,
    borderRadius: 10,
    backgroundColor: "#f5f6fa",
    width: 98,
    height: 109,
    overflow: "hidden",
  },
  fentyText: {
    position: "absolute",
    top: 82,
    left: 34,
    fontSize: 14,
    letterSpacing: -0.1,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#1d1e20",
    textAlign: "left",
  },
  rectangleView11: {
    position: "absolute",
    top: 6,
    left: 14,
    borderRadius: 10,
    backgroundColor: "#fefefe",
    width: 70,
    height: 70,
  },
  vectorIcon2: {
    position: "absolute",
    height: "9.17%",
    width: "65.31%",
    top: "33.03%",
    right: "17.35%",
    bottom: "57.8%",
    left: "17.35%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  frameView15: {
    position: "absolute",
    top: 242,
    left: 228,
    borderRadius: 10,
    backgroundColor: "#f5f6fa",
    width: 98,
    height: 109,
    overflow: "hidden",
  },
  groupIcon4: {
    position: "absolute",
    top: 6,
    left: 14,
    width: 70,
    height: 70,
  },
  fendiText: {
    position: "absolute",
    top: 82,
    left: 31,
    fontSize: 14,
    letterSpacing: -0.1,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#1d1e20",
    textAlign: "left",
  },
  frameView16: {
    position: "absolute",
    top: 363,
    left: 228,
    borderRadius: 10,
    backgroundColor: "#f5f6fa",
    width: 98,
    height: 109,
    overflow: "hidden",
  },
  groupIcon5: {
    position: "absolute",
    top: 6,
    left: 14,
    width: 70,
    height: 70,
  },
  louisVuittonText: {
    position: "absolute",
    top: 82,
    left: 5,
    fontSize: 14,
    letterSpacing: -0.1,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#1d1e20",
    textAlign: "left",
  },
  frameView17: {
    position: "absolute",
    top: 484,
    left: 228,
    borderRadius: 10,
    backgroundColor: "#f5f6fa",
    width: 98,
    height: 109,
    overflow: "hidden",
  },
  rectangleView12: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#fefefe",
    width: 70,
    height: 70,
  },
  samsungElectronicsPng01: {
    position: "absolute",
    top: 8,
    left: 6,
    width: 58,
    height: 55,
  },
  groupView21: {
    position: "absolute",
    top: 6,
    left: 14,
    width: 70,
    height: 70,
  },
  samsungText1: {
    position: "absolute",
    top: 82,
    left: 18,
    fontSize: 14,
    letterSpacing: -0.1,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#1d1e20",
    textAlign: "left",
  },
  frameView18: {
    position: "absolute",
    top: 605,
    left: 228,
    borderRadius: 10,
    backgroundColor: "#f5f6fa",
    width: 98,
    height: 109,
    overflow: "hidden",
  },
  frameView19: {
    position: "absolute",
    top: 236,
    left: 25,
    width: 326,
    height: 714,
  },
  recentSearchesText: {
    position: "absolute",
    transform: [
      {
        translateY: -501,
      },
    ],
    top: "50%",
    right: 162,
    left: 24,
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
  baseView1: {
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
  itemView: {
    position: "absolute",
    height: "100%",
    top: "0%",
    right: 256,
    bottom: "0%",
    left: 0,
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
  itemView1: {
    position: "absolute",
    height: "100%",
    top: "0%",
    right: 155,
    bottom: "0%",
    left: 101,
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
  itemView2: {
    position: "absolute",
    height: "100%",
    top: "0%",
    right: 54,
    bottom: "0%",
    left: 202,
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
  itemView3: {
    position: "absolute",
    height: "100%",
    top: "0%",
    right: -47,
    bottom: "0%",
    left: 303,
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
  itemView4: {
    position: "absolute",
    height: "100%",
    top: "0%",
    right: -152,
    bottom: "0%",
    left: 408,
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
  itemView5: {
    position: "absolute",
    height: "100%",
    top: "0%",
    right: -257,
    bottom: "0%",
    left: 513,
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
  itemView6: {
    position: "absolute",
    height: "100%",
    top: "0%",
    right: -358,
    bottom: "0%",
    left: 614,
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
  itemView7: {
    position: "absolute",
    height: "100%",
    top: "0%",
    right: -463,
    bottom: "0%",
    left: 719,
  },
  baseView9: {
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
  itemView8: {
    position: "absolute",
    height: "100%",
    top: "0%",
    right: -568,
    bottom: "0%",
    left: 824,
  },
  frameView20: {
    position: "absolute",
    top: 128,
    left: 24,
    width: 351,
    height: 40,
  },
  lineView4: {
    position: "absolute",
    top: 188,
    left: 0,
    backgroundColor: "#fff",
    width: 375,
    height: 1,
  },
  lineView5: {
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
  searchView: {
    position: "absolute",
    top: 37,
    right: 35,
    left: 35,
    backgroundColor: "#fff",
    height: 44,
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
  baseView10: {
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
  groupView22: {
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
    height: 110,
  },
  storeResultsView: {
    position: "absolute",
    height: "170.69%",
    width: "100%",
    top: "150.25%",
    right: "380%",
    bottom: "-220.94%",
    left: "-380%",
    backgroundColor: "#fff",
    overflow: "hidden",
  },
  signInView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default SignIn;
