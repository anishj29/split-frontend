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

export default function Insights() {
  return (
    <View>
      <View style={styles.walletBalance}>
        <Text style={styles.balance}>Wallet Balance</Text>
        <Text style={styles.dollar}>$556.90</Text>
        <Text style={styles.transfer}>Transfer</Text>
      </View>
      <View style={styles.iouContainer}>
        <View style={styles.requested}>
          <Text style={[styles.balance, {color: "black"}]}>Total Requested</Text>
          <Text style={[styles.dollar, {color: "black"}]}>$58.90</Text>
          <Text style={[styles.transfer, {color: "black"}]}>View Insights</Text>
        </View>
        <View style={styles.owed}>
          <Text style={[styles.balance, {color: "black"}]}>Total Owed</Text>
          <Text style={[styles.dollar, {color: "black"}]}>$20.40</Text>
          <Text style={[styles.transfer, {color: "black"}]}>View Owed</Text>
        </View>
      </View>
      <h4>Spending Limits</h4>
      <View style={styles.spendingMonth}>
        <Text style={styles.spendingText}>Max. Spending per Month</Text>
        <Text>$300</Text>
      </View>
      <View style={styles.lastMonth}>
        <Text style={[styles.balance, {color: "black"}]}>Last 1 Month</Text>
        <Text style={[styles.dollar, {color: "black"}]}>$246.50</Text>
        <Text style={[styles.transfer, {color: "black"}]}>View Insights</Text>
      </View>
      <View style={styles.withdrawl}>
        <View style={styles.withdrawlHeader}>
          <Text style={[styles.balance, {color: "black"}]}>Withdrawal History</Text>
          <Text>View all</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  walletBalance: {
    width: 400,
    height: 120,
    borderRadius: 20,
    justifyContent: 'center',
    boxShadow: "0px 0.5px 2px gray",
    backgroundColor: "#74CDA9",
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 10, // Add margin bottom to separate the boxes
  },
  spendingMonth: {
    flexDirection: "row",
    border: "gray solid 1px",
    width: 400,
    alignItems: "center",
    padding: "15px",
    backgroundColor: "white",
    justifyContent: "space-between",
    height: 40,
    borderRadius: 8,
  },
  iouContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    maxWidth: 400,
  },
  requested: {
    boxShadow: "0px 0.5px 2px gray",
    borderRadius: 20,
    width: 200,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "white",
    marginTop: 25,
    marginBottom: 10,
    marginRight: 10
  },
  owed: {
    boxShadow: "0px 0.5px 2px gray",
    borderRadius: 20,
    width: 200,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "white",
    marginTop: 25,
    marginBottom: 10,
  },
  lastMonth: {
    width: 400,
    boxShadow: "0px 0.5px 2px gray",
    height: 120,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "white",
    marginTop: 25,
    marginBottom: 10,
  },
  withdrawl: {
    width: 400,
    boxShadow: "0px 0.5px 2px gray",
    height: 200,
    borderRadius: 20,
    backgroundColor: "white",
    marginTop: 25,
    padding: "20px",
  },
  withdrawlHeader: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: "space-between"
  },
  spendingText: {
  },  
  dollar: {
    fontSize: 30,
    marginBottom: 5,
    color: "white"
  },
  balance: {
    fontSize: 20,
    color: "white"

  },
  transfer: {
    fontSize: 10,
    color: "white"

  }
});

