import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const AddBox = () => {
  return (
    <View style={styles.checkboxPillGrowSelectedDe}>
      <View style={styles.pillGrowView}>
        <Image
          style={styles.outline16pxPlus}
          resizeMode="cover"
          source={require("../assets/outline-16px--plus.png")}
        />
        <Text style={[styles.checkboxLabelText, styles.ml8]}>Add</Text>
        <Image
          style={[styles.outline16pxChevronRight, styles.ml8]}
          resizeMode="cover"
          source={require("../assets/outline-16px--chevronright2.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml8: {
    marginLeft: 8,
  },
  outline16pxPlus: {
    position: "relative",
    width: 16,
    height: 16,
    flexShrink: 0,
    overflow: "hidden",
  },
  checkboxLabelText: {
    position: "relative",
    fontSize: 12,
    lineHeight: 12,
    fontWeight: "700",
    fontFamily: "DM Sans",
    color: "#fff",
    textAlign: "left",
  },
  outline16pxChevronRight: {
    position: "relative",
    width: 16,
    height: 16,
    flexShrink: 0,
    overflow: "hidden",
    display: "none",
  },
  pillGrowView: {
    position: "absolute",
    transform: [
      {
        translateY: -16,
      },
    ],
    top: "50%",
    left: 0,
    borderRadius: 8,
    backgroundColor: "#171717",
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 8,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  checkboxPillGrowSelectedDe: {
    position: "absolute",
    top: 16,
    right: 24,
    width: 78,
    height: 32,
  },
});

export default AddBox;
