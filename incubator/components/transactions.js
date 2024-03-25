import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.title}>Activity</Text>
        <View style={styles.iconsContainer}>
          <Feather name="bell" size={32} color="black" style={styles.icon} />
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
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

        <View style={[styles.box, styles.thirdBox]}>
          <MaterialCommunityIcons
            name="face-woman-profile"
            size={50}
            color="black"
            style={styles.iconLeft}
          />
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text
              style={[
                styles.boxTitle,
                styles.blackText,
                { marginRight: 5, left: -58, top: -36, marginTop: 39 },
              ]}>
              <Text style={styles.bold}>You</Text> paid{' '}
              <Text style={styles.bold}>Alex</Text>
            </Text>
            <Text
              style={[
                styles.smallText,
                styles.blackText,
                { marginLeft: 5, left: -188, top: -10, marginTop: 40 },
              ]}>
              6h
            </Text>
            <Text
              style={[
                styles.redText,
                styles.boxTitle,
                { position: 'absolute', left: 200, top: -36, marginTop: 40 },
              ]}>
              -$32.5
            </Text>
          </View>
          <View style={styles.line} />
          <Text
            style={[
              styles.boxTitle,
              styles.blackText,
              styles.bold,
              { right: 121, fontSize: 15 },
            ]}>
            Food
          </Text>
          <Text
            style={[
              styles.boxTitle,
              styles.blackText,
              { right: 50, fontSize: 15 },
            ]}>
            "Cheesecake Factory food!"
          </Text>
        </View>

        <View style={[styles.box, styles.fourthBox]}>
          <MaterialCommunityIcons
            name="face-woman-profile"
            size={50}
            color="black"
            style={styles.iconLeft}
          />
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text
              style={[
                styles.boxTitle,
                styles.blackText,
                { marginRight: 5, left: 17, top: -36 },
              ]}>
              <Text style={styles.bold}>Sam</Text> paid{' '}
              <Text style={styles.bold}>You</Text>
            </Text>
            <Text
              style={[
                styles.smallText,
                styles.blackText,
                { marginLeft: 5, left: -115, top: -10 },
              ]}>
              6h
            </Text>
            <Text
              style={[
                styles.greenText,
                styles.boxTitle,
                { position: 'absolute', left: 283, top: -36 },
              ]}>
              +$40
            </Text>

            <Text
              style={[
                styles.boxTitle,
                styles.blackText,
                styles.bold,
                { right: 131, fontSize: 15, top: 13 },
              ]}>
              Rent
            </Text>
            <Text
              style={[
                styles.boxTitle,
                styles.blackText,
                { right: 170, fontSize: 15, top: 35 },
              ]}>
              "Rent Payment"
            </Text>
          </View>
        </View>

        <View style={[styles.box, styles.fifthBox]}>
          <MaterialCommunityIcons
            name="face-woman-profile"
            size={50}
            color="black"
            style={styles.iconLeft}
          />
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text
              style={[
                styles.boxTitle,
                styles.blackText,
                { marginRight: 5, left: 30, top: -36 },
              ]}>
              <Text style={styles.bold}>Sam</Text> paid{' '}
              <Text style={styles.bold}>You</Text>
            </Text>
            <Text
              style={[
                styles.smallText,
                styles.blackText,
                { marginLeft: 5, left: -103, top: -10 },
              ]}>
              6h
            </Text>
            <Text
              style={[
                styles.greenText,
                styles.boxTitle,
                { position: 'absolute', left: 301, top: -34 },
              ]}>
              +$20
            </Text>
            <Text
              style={[
                styles.boxTitle,
                styles.blackText,
                styles.bold,
                { right: 120, fontSize: 15, top: 13 },
              ]}>
              Food
            </Text>
            <Text
              style={[
                styles.boxTitle,
                styles.blackText,
                { right: 157, fontSize: 15, top: 35 },
              ]}>
              "For Food- Thanks!"
            </Text>
          </View>
        </View>

        <View style={[styles.box, styles.sixthBox]}>
          <MaterialCommunityIcons
            name="face-woman-profile"
            size={50}
            color="black"
            style={styles.iconLeft}
          />
          <Text
            style={[
              styles.boxTitle,
              styles.blackText,
              { marginRight: 5, left: -75, top: -20 },
            ]}>
            <Text style={styles.bold}>Tim</Text> paid{' '}
            <Text style={styles.bold}>You</Text>
          </Text>
          <Text
            style={[
              styles.smallText,
              styles.blackText,
              { marginLeft: 5, left: -126, top: -14 },
            ]}>
            6h
          </Text>
          <Text
            style={[
              styles.greenText,
              styles.boxTitle,
              { position: 'absolute', left: 330, top: 17 },
            ]}>
            +$20
          </Text>
          <Text
            style={[
              styles.boxTitle,
              styles.blackText,
              styles.bold,
              { right: 113, fontSize: 15, top: -10 },
            ]}>
            Food
          </Text>
        </View>
      </View>
      <View style={styles.halfCircleLeftTop} />
      <View style={styles.halfCircleRightTop} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 70, // Adjust the padding top to lower the header
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 5, // Add margin bottom to lower the "Activity" text
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 10,
    marginBottom: 5, // Add margin bottom to lower the icons
  },
  boxContainer: {
    marginTop: 30,
  },
  box: {
    width: 220,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10, // Add margin bottom to separate the boxes
    position: 'absolute',
  },
  firstBox: {
    left: '22%',
    marginLeft: -75,
    backgroundColor: '#f5f5f5',
  },
  secondBox: {
    left: '28%',
    marginLeft: 75,
    backgroundColor: '#9CCC65',
  },
  thirdBox: {
    alignSelf: 'center',
    top: 70, // Adjust the top position
    backgroundColor: '#f5f5f5',
    height: 130,
    width: 400,
  },
  fourthBox: {
    alignSelf: 'center',
    top: 220, // Adjust the top position
    backgroundColor: '#f5f5f5',
    height: 130,
    width: 400,
  },
  fifthBox: {
    alignSelf: 'center',
    top: 320, // Adjust the top position
    backgroundColor: '#f5f5f5',
    height: 130,
    marginTop: 50,
    width: 400,
  },
  sixthBox: {
    alignSelf: 'center',
    top: 470, // Adjust the top position
    backgroundColor: '#f5f5f5',
    height: 130,
    marginTop: 50,
    width: 400,
  },
  iconLeft: {
    position: 'absolute',
    left: 10,
    top: 10,
  },
  boxTitle: {
    fontSize: 20,
  },
  whiteText: {
    color: 'black',
  },
  blackText: {
    color: 'black',
  },
  bold: {
    fontWeight: 'bold',
  },
  smallText: {
    fontSize: 14,
  },
  redText: {
    color: 'red',
  },
  greenText: {
    color: 'green',
  },
  line: {
    borderBottomColor: 'black',
    borderBottomWidth: 0.5,
    width: 330,
    marginBottom: 5,
    marginLeft: 30,
  },
  halfCircleLeftTop: {
    position: 'absolute',
    top: 0,
    right: -10,
    width: 100, // Diameter of the half circle
    height: 100,
    borderRadius: 50, // Half of the width or height to create a half-circle
    backgroundColor: 'black',
    transform: [{ translateY: -50 }], // Adjust for centering
  },
  halfCircleRightTop: {
    position: 'absolute',
    top: 0,
    right: -50,
    width: 100, // Diameter of the half circle
    height: 100, // Diameter of the half circle
    borderRadius: 50, // Half of the width or height to create a half-circle
    backgroundColor: '#9CCC65',
    transform: [{ translateY: -50 }], // Adjust for centering
  },
});

