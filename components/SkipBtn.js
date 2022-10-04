import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const SkipBtn = () => {
  return (
    <View style={styles.tertiaryButtonDefault}>
      <View style={styles.regGrowView}>
        <View style={styles.buttonContentView}>
          <Image
            style={styles.outline16pxHeart}
            resizeMode="cover"
            source={require("../assets/outline-16px--heart.png")}
          />
          <Text style={[styles.buttonLabelText, styles.ml8]}>Skip</Text>
          <Image
            style={[styles.outline16pxChevronRight, styles.ml8]}
            resizeMode="cover"
            source={require("../assets/outline-16px--chevronright.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml8: {
    marginLeft: 8,
  },
  outline16pxHeart: {
    position: "relative",
    width: 16,
    height: 16,
    flexShrink: 0,
    overflow: "hidden",
    display: "none",
  },
  buttonLabelText: {
    position: "relative",
    fontSize: 16,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#171717",
    textAlign: "right",
  },
  outline16pxChevronRight: {
    position: "relative",
    width: 16,
    height: 16,
    flexShrink: 0,
    overflow: "hidden",
    display: "none",
  },
  buttonContentView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 15,
    height: 48,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  regGrowView: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    height: 48,
  },
  tertiaryButtonDefault: {
    position: "absolute",
    right: 30,
    bottom: 740,
    width: 38,
    height: 48,
  },
});

export default SkipBtn;
