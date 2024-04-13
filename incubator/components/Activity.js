import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import Insights from "../components/Insights.js";
import Transactions from "../components/Transactions.js";

export default function Activity() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Activity</Text>
        <View style={styles.iconsContainer}>
          <Feather name="bell" size={32} color="black" style={styles.icon} />
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialCommunityIcons
              name="face-woman-profile"
              size={32}
              color="black"
              style={styles.icon}
            />
          </View>
        </View>
      </View>
      <View style={styles.boxContainer}>
        <View style={[styles.box, styles.firstBox]}>
          <Text style={[styles.boxTitle, styles.whiteText]}>Insights</Text>
        </View>
        <View style={[styles.box, styles.secondBox]}>
          <Text style={[styles.boxTitle, styles.blackText]}>Transactions</Text>
        </View>
        <View style={styles.comp}>
          <Transactions />
        </View>
      </View>
      <View style={styles.halfCircleLeftTop} />
      <View style={styles.halfCircleRightTop} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F6F6",
    "overflow-y": "auto",
    "overflow-x": "hidden",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 70, // Adjust the padding top to lower the header
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 5, // Add margin bottom to lower the "Activity" text
  },
  iconsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginLeft: 10,
    marginBottom: 5, // Add margin bottom to lower the icons
  },
  boxContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: 30,
  },
  comp: {
    marginTop: 30
  },
  box: {
    width: 220,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10, // Add margin bottom to separate the boxes
    position: "absolute",
  },
  firstBox: {
    left: "41%",
    backgroundColor: "#E7E7E7",
    marginLeft: -75,
  },
  secondBox: {
    left: "44%",
    marginLeft: 75,
    backgroundColor: "#74CDA9",
    color: "white",
  },
  halfCircleLeftTop: {
    position: "absolute",
    top: 0,
    right: -10,
    width: 100, // Diameter of the half circle
    height: 100,
    borderRadius: 50, // Half of the width or height to create a half-circle
    backgroundColor: "black",
    transform: [{ translateY: -50 }], // Adjust for centering
  },
  halfCircleRightTop: {
    position: "absolute",
    top: 0,
    right: -50,
    width: 100, // Diameter of the half circle
    height: 100, // Diameter of the half circle
    borderRadius: 50, // Half of the width or height to create a half-circle
    backgroundColor: "#9CCC65",
    transform: [{ translateY: -50 }], // Adjust for centering
  },
});
