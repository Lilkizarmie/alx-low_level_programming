import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import BackBtn from "../components/BackBtn";

const SignUp = () => {
  return (
    <View style={styles.signUpView}>
      <View style={styles.bodyView}>
        <View style={styles.lineView} />
        <Text style={styles.alreadyHaveAnAcco}>
          <Text style={styles.alreadyHaveAn}>Already have an account?</Text>
          <Text style={styles.logInText}>
            <Text style={styles.logText}> Log</Text>
            <Text style={styles.inText}> in</Text>
          </Text>
        </Text>
        <View style={styles.buttonView}>
          <View style={styles.baseView} />
          <Image
            style={styles.iconsButtonslogIn}
            resizeMode="cover"
            source={require("../assets/iconsbuttonslogin1.png")}
          />
          <Text style={styles.text}>Sign Up</Text>
        </View>
        <Text style={styles.byCreatingAnAccou}>
          <Text style={styles.byCreatingAnAccountYouAg}>
            <Text style={styles.byCreatingAn}>
              By creating an account, you agree to our
            </Text>
          </Text>
          <Text style={styles.termConditions1}>
            <Text style={styles.termConditions}>{`Term & Conditions`}</Text>
          </Text>
        </Text>
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/icon2.png")}
        />
        <View style={styles.formView}>
          <View style={styles.passwordView}>
            <View style={styles.inputView}>
              <View style={styles.lineView1} />
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
          <View style={styles.passwordView1}>
            <View style={styles.inputView1}>
              <View style={styles.lineView2} />
              <Image
                style={styles.iconsOthereye1}
                resizeMode="cover"
                source={require("../assets/iconsothereye.png")}
              />
              <Image
                style={styles.iconsButtonslock1}
                resizeMode="cover"
                source={require("../assets/iconsbuttonslock.png")}
              />
              <Text style={styles.placeholderText1}>• • • • • • • •</Text>
            </View>
            <Text style={styles.labelText1}>Who refered you?</Text>
            <Text style={styles.placeholderText2}>Adigun0211</Text>
            <Image
              style={styles.iconsArrowscheck}
              resizeMode="cover"
              source={require("../assets/-icon--r.png")}
            />
          </View>
          <View style={styles.usernameView}>
            <View style={styles.inputView2}>
              <View style={styles.lineView3} />
              <Image
                style={styles.iconsArrowscheck1}
                resizeMode="cover"
                source={require("../assets/-icon--r.png")}
              />
              <Image
                style={styles.iconL}
                resizeMode="cover"
                source={require("../assets/-menu-3.png")}
              />
              <Text style={styles.placeholderText3}>Jidecomrade01</Text>
            </View>
            <Text style={styles.labelText2}>Username</Text>
          </View>
          <View style={styles.emailView}>
            <View style={styles.inputView3}>
              <View style={styles.lineView4} />
              <Image
                style={styles.iconR}
                resizeMode="cover"
                source={require("../assets/-icon--r3.png")}
              />
              <Image
                style={styles.iconsOthermail}
                resizeMode="cover"
                source={require("../assets/iconsothermail.png")}
              />
              <Text style={styles.placeholderText4}>Jideahmed@gmail.com</Text>
            </View>
            <Text style={styles.labelText3}>Email</Text>
          </View>
        </View>
        <View style={styles.titleView}>
          <Text style={styles.createAnAccountTo}>
            Create an account to continue!
          </Text>
          <Text style={styles.gettingStartedText}>Getting Started</Text>
        </View>
      </View>
      <View style={styles.topBarView}>
        <View style={styles.barsTopBarsV1View}>
          <View style={styles.barsStatusBariPhoneLightView}>
            <View style={styles.batteryView}>
              <View style={styles.borderView} />
              <Image
                style={styles.capIcon}
                resizeMode="cover"
                source={require("../assets/cap5.png")}
              />
              <View style={styles.capacityView} />
            </View>
            <Image
              style={styles.wifiIcon}
              resizeMode="cover"
              source={require("../assets/wifi5.png")}
            />
            <Image
              style={styles.cellularConnectionIcon}
              resizeMode="cover"
              source={require("../assets/cellular-connection5.png")}
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
          <Text style={styles.titleText}>Sign up</Text>
        </View>
        <BackBtn />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  lineView: {
    position: "absolute",
    height: "0.15%",
    top: "99.85%",
    right: 0,
    bottom: "0%",
    left: 0,
    backgroundColor: "#f3f6f8",
  },
  alreadyHaveAn: {
    fontFamily: "DM Sans",
    color: "rgba(23, 23, 23, 0.6)",
  },
  logText: {
    fontWeight: "500",
    fontFamily: "DM Sans",
  },
  inText: {
    fontWeight: "700",
    fontFamily: "DM Sans",
  },
  logInText: {
    color: "#000",
  },
  alreadyHaveAnAcco: {
    position: "absolute",
    transform: [
      {
        translateY: 275,
      },
    ],
    width: "81.33%",
    top: "50%",
    right: "9.33%",
    left: "9.33%",
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
    height: "6.69%",
    width: "81.33%",
    top: "82.67%",
    right: "9.33%",
    bottom: "10.64%",
    left: "9.33%",
  },
  byCreatingAn: {
    fontFamily: "DM Sans",
  },
  byCreatingAnAccountYouAg: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  termConditions: {
    fontWeight: "700",
    fontFamily: "DM Sans",
  },
  termConditions1: {
    margin: 0,
  },
  byCreatingAnAccou: {
    position: "absolute",
    transform: [
      {
        translateY: 151,
      },
    ],
    width: "72.8%",
    top: "50%",
    right: "9.33%",
    left: "17.87%",
    fontSize: 12,
    letterSpacing: -0.2,
    lineHeight: 20,
    color: "#000",
    textAlign: "left",
  },
  icon: {
    position: "absolute",
    height: "2.43%",
    width: "4.27%",
    top: "73.56%",
    right: "86.4%",
    bottom: "24.01%",
    left: "9.33%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
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
    top: 200,
    left: 0,
    backgroundColor: "#fff",
    width: 305,
    height: 68,
  },
  lineView2: {
    position: "absolute",
    height: "2.27%",
    top: "97.73%",
    right: 0,
    bottom: "0%",
    left: 0,
    backgroundColor: "#8f92a1",
    opacity: 0.2,
  },
  iconsOthereye1: {
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
  iconsButtonslock1: {
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
    display: "none",
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
    display: "none",
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
  placeholderText2: {
    position: "absolute",
    transform: [
      {
        translateY: 2,
      },
    ],
    top: "50%",
    right: 80,
    left: 0,
    fontSize: 16,
    letterSpacing: -0.2,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "left",
  },
  iconsArrowscheck: {
    position: "absolute",
    transform: [
      {
        translateY: 0,
      },
    ],
    top: "50%",
    right: 0,
    width: 24,
    height: 24,
  },
  passwordView1: {
    position: "absolute",
    top: 292,
    left: 0,
    backgroundColor: "#fff",
    width: 305,
    height: 68,
  },
  lineView3: {
    position: "absolute",
    height: "2.27%",
    top: "97.73%",
    right: 0,
    bottom: "0%",
    left: 0,
    backgroundColor: "#02c697",
    opacity: 0.2,
  },
  iconsArrowscheck1: {
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
  placeholderText3: {
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
  inputView2: {
    position: "absolute",
    top: 24,
    right: 0,
    left: 0,
    backgroundColor: "#fff",
    height: 44,
  },
  labelText2: {
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
  usernameView: {
    position: "absolute",
    top: 108,
    left: 0,
    backgroundColor: "#fff",
    width: 305,
    height: 68,
  },
  lineView4: {
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
  iconsOthermail: {
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
  placeholderText4: {
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
  inputView3: {
    position: "absolute",
    top: 24,
    right: 0,
    left: 0,
    backgroundColor: "#fff",
    height: 44,
  },
  labelText3: {
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
  emailView: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#fff",
    width: 305,
    height: 68,
  },
  formView: {
    position: "absolute",
    top: 104,
    left: 35,
    width: 305,
    height: 360,
  },
  createAnAccountTo: {
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
  gettingStartedText: {
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
    height: "9.73%",
    width: "81.33%",
    top: "0%",
    right: "9.33%",
    bottom: "90.27%",
    left: "9.33%",
  },
  bodyView: {
    position: "absolute",
    height: "81.03%",
    top: "13.79%",
    right: 0,
    bottom: "5.17%",
    left: 0,
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
    top: 0,
    left: 0,
    backgroundColor: "#fff",
    width: 375,
    height: 100,
  },
  topBarView: {
    position: "absolute",
    top: -24,
    left: 0,
    width: 375,
    height: 100,
  },
  signUpView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default SignUp;
