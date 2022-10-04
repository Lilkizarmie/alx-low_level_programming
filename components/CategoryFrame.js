import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import CategoryBar from "../components/CategoryBar";

const CategoryFrame = () => {
  return (
    <View style={styles.frameView}>
      <CategoryBar text="Books" />
      <View style={[styles.gadgetsView, styles.ml9]}>
        <Text style={styles.text}>Children</Text>
        <Image
          style={styles.carterBaran75IgLbgqRlsUnsplIcon}
          resizeMode="cover"
        />
      </View>
      <View style={[styles.cosmeticsView, styles.ml9]}>
        <Text style={styles.text1}>Cosmetics</Text>
        <Image style={styles.book03Icon} resizeMode="cover" />
        <Image style={styles.book02Icon} resizeMode="cover" />
        <Image style={styles.book01Icon} resizeMode="cover" />
        <Image style={styles.electronics07Icon} resizeMode="cover" />
        <View style={styles.autoAddedFrameView}>
          <Image
            style={styles.electronics06Icon}
            resizeMode="cover"
            source={require("../assets/electronics-06.png")}
          />
        </View>
        <Image style={styles.electronics05Icon} resizeMode="cover" />
        <Image
          style={styles.electronics04Icon}
          resizeMode="cover"
          source={require("../assets/electronics-04.png")}
        />
        <View style={styles.autoAddedFrameView1}>
          <Image style={styles.electronics03Icon} resizeMode="cover" />
        </View>
        <View style={styles.autoAddedFrameView2}>
          <Image style={styles.electronics02Icon} resizeMode="cover" />
        </View>
        <View style={styles.autoAddedFrameView3}>
          <Image style={styles.electronics01Icon} resizeMode="cover" />
        </View>
        <Image style={styles.fashion09Icon} resizeMode="cover" />
        <Image style={styles.fashion08Icon} resizeMode="cover" />
        <Image
          style={styles.fashion07Icon}
          resizeMode="cover"
          source={require("../assets/fashion-07.png")}
        />
        <Image style={styles.fashion06Icon} resizeMode="cover" />
        <Image style={styles.fashion05Icon} resizeMode="cover" />
        <Image style={styles.fashion04Icon} resizeMode="cover" />
        <Image style={styles.fashion03Icon} resizeMode="cover" />
        <Image style={styles.fashion02Icon} resizeMode="cover" />
        <Image style={styles.fashion01Icon} resizeMode="cover" />
        <Image
          style={styles.music03Icon}
          resizeMode="cover"
          source={require("../assets/music-03.png")}
        />
        <Image
          style={styles.music02Icon}
          resizeMode="cover"
          source={require("../assets/music-02.png")}
        />
        <Image style={styles.music01Icon} resizeMode="cover" />
        <Image style={styles.unsplashlgODpII88DEIcon} resizeMode="cover" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml9: {
    marginLeft: 9,
  },
  text: {
    position: "absolute",
    top: 20,
    right: 16,
    left: 16,
    fontSize: 18,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: "Outfit",
    color: "#333",
    textAlign: "left",
  },
  carterBaran75IgLbgqRlsUnsplIcon: {
    position: "absolute",
    top: 32,
    left: 15,
    width: 73,
    height: 96,
  },
  gadgetsView: {
    position: "relative",
    borderRadius: 10,
    backgroundColor: "#86d1e2",
    shadowColor: "rgba(0, 0, 0, 0.04)",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    width: 103,
    height: 139,
    flexShrink: 0,
    overflow: "hidden",
  },
  text1: {
    position: "absolute",
    top: 20,
    right: 9,
    left: 8,
    fontSize: 18,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: "Outfit",
    color: "#333",
    textAlign: "left",
  },
  book03Icon: {
    position: "absolute",
    transform: [
      {
        translateY: -50.5,
      },
      {
        translateX: 4.5,
      },
    ],
    top: "50%",
    left: "50%",
    width: 63,
    height: 95,
    display: "none",
  },
  book02Icon: {
    position: "absolute",
    transform: [
      {
        translateY: -40.5,
      },
      {
        translateX: -39,
      },
    ],
    top: "50%",
    left: "50%",
    width: 63,
    height: 96,
    display: "none",
  },
  book01Icon: {
    position: "absolute",
    transform: [
      {
        translateY: -40.5,
      },
      {
        translateX: -39,
      },
    ],
    top: "50%",
    left: "50%",
    width: 63,
    height: 94,
    display: "none",
  },
  electronics07Icon: {
    position: "absolute",
    transform: [
      {
        translateY: -40.5,
      },
      {
        translateX: -56.5,
      },
    ],
    top: "50%",
    left: "50%",
    width: 98,
    height: 98,
    display: "none",
  },
  electronics06Icon: {
    position: "relative",
    width: 162,
    height: 121,
    flexShrink: 0,
  },
  autoAddedFrameView: {
    position: "absolute",
    top: 48,
    left: -58,
    width: 162,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    display: "none",
  },
  electronics05Icon: {
    position: "absolute",
    transform: [
      {
        translateY: -40.5,
      },
      {
        translateX: -42.5,
      },
    ],
    top: "50%",
    left: "50%",
    width: 70,
    height: 96,
    display: "none",
  },
  electronics04Icon: {
    position: "absolute",
    transform: [
      {
        translateY: -40.5,
      },
      {
        translateX: -39,
      },
    ],
    top: "50%",
    left: "50%",
    width: 63,
    height: 98,
    display: "none",
  },
  electronics03Icon: {
    position: "relative",
    width: 188,
    height: 107,
    flexShrink: 0,
  },
  autoAddedFrameView1: {
    position: "absolute",
    top: 48,
    left: 10,
    width: 188,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-start",
    display: "none",
  },
  electronics02Icon: {
    position: "relative",
    width: 191,
    height: 94,
    flexShrink: 0,
  },
  autoAddedFrameView2: {
    position: "absolute",
    top: 48,
    left: -58,
    width: 191,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    display: "none",
  },
  electronics01Icon: {
    position: "relative",
    width: 192,
    height: 80,
    flexShrink: 0,
  },
  autoAddedFrameView3: {
    position: "absolute",
    top: 48,
    left: 6,
    width: 192,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-start",
    display: "none",
  },
  fashion09Icon: {
    position: "absolute",
    transform: [
      {
        translateY: -40.5,
      },
      {
        translateX: -52.43,
      },
    ],
    top: "50%",
    left: "50%",
    width: 89.85,
    height: 96,
    display: "none",
  },
  fashion08Icon: {
    position: "absolute",
    transform: [
      {
        translateY: -40.5,
      },
      {
        translateX: -51.82,
      },
    ],
    top: "50%",
    left: "50%",
    width: 88.65,
    height: 96,
    display: "none",
  },
  fashion07Icon: {
    position: "absolute",
    transform: [
      {
        translateY: -40.5,
      },
      {
        translateX: -53.25,
      },
    ],
    top: "50%",
    left: "50%",
    width: 91.5,
    height: 96,
    display: "none",
  },
  fashion06Icon: {
    position: "absolute",
    transform: [
      {
        translateY: -40.5,
      },
      {
        translateX: -69,
      },
    ],
    top: "50%",
    left: "50%",
    width: 123,
    height: 72,
    display: "none",
  },
  fashion05Icon: {
    position: "absolute",
    transform: [
      {
        translateY: -40.5,
      },
      {
        translateX: -53.5,
      },
    ],
    top: "50%",
    left: "50%",
    width: 92,
    height: 58,
    display: "none",
  },
  fashion04Icon: {
    position: "absolute",
    transform: [
      {
        translateY: -40.5,
      },
      {
        translateX: -68.5,
      },
    ],
    top: "50%",
    left: "50%",
    width: 122,
    height: 72,
    display: "none",
  },
  fashion03Icon: {
    position: "absolute",
    transform: [
      {
        translateY: -40.5,
      },
      {
        translateX: -60.5,
      },
    ],
    top: "50%",
    left: "50%",
    width: 106,
    height: 72,
    display: "none",
  },
  fashion02Icon: {
    position: "absolute",
    transform: [
      {
        translateY: -40.5,
      },
      {
        translateX: -72,
      },
    ],
    top: "50%",
    left: "50%",
    width: 129,
    height: 58,
    display: "none",
  },
  fashion01Icon: {
    position: "absolute",
    transform: [
      {
        translateY: -40.5,
      },
      {
        translateX: -72,
      },
    ],
    top: "50%",
    left: "50%",
    width: 129,
    height: 58,
    display: "none",
  },
  music03Icon: {
    position: "absolute",
    top: 40,
    right: 38,
    left: 22,
    maxWidth: "100%",
    overflow: "hidden",
    height: 96,
    display: "none",
  },
  music02Icon: {
    position: "absolute",
    top: 40,
    right: 38,
    left: 22,
    maxWidth: "100%",
    overflow: "hidden",
    height: 96,
    display: "none",
  },
  music01Icon: {
    position: "absolute",
    transform: [
      {
        translateY: -48.5,
      },
      {
        translateX: -76,
      },
    ],
    top: "50%",
    left: "50%",
    width: 137,
    height: 79,
    display: "none",
  },
  unsplashlgODpII88DEIcon: {
    position: "absolute",
    top: 46,
    left: 5,
    width: 95,
    height: 93,
  },
  cosmeticsView: {
    position: "relative",
    borderRadius: 10,
    backgroundColor: "#f1cdc2",
    shadowColor: "rgba(0, 0, 0, 0.04)",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    width: 103,
    height: 139,
    flexShrink: 0,
    overflow: "hidden",
  },
  frameView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CategoryFrame;
