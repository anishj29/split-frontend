import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function CreateAccount({navigation}) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.halfCircleLeftTop} />
      <View style={styles.halfCircleRightTop} />
      <View style={{ flex: 1, justifyContent: 'center', padding: 35 }}>
        <Text style={{ fontSize: 32, marginTop: 5, marginBottom: 50, textAlign: 'center', fontWeight: 'bold', color:'#3F3F3F'}}>Create Account</Text>
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            marginBottom: 20,
            paddingLeft: 10,
            borderRadius: 7,
          }}
          placeholder="Full Name"
          placeholderTextColor='grey'
        />
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            marginBottom: 20,
            paddingLeft: 10,
            borderRadius: 7,
          }}
          placeholder="Username"
          autoComplete="off"
          placeholderTextColor='grey'
        />
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            marginBottom: 20,
            paddingLeft: 10,
            borderRadius: 7,
          }}
          placeholder="Email"
          autoComplete="off"
          placeholderTextColor='grey'
        />
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            marginBottom: 20,
            paddingLeft: 10,
            borderRadius: 7,
          }}
          placeholder="Phone number"
          autoComplete="off"
          placeholderTextColor='grey'
        />
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20, borderRadius: 5, borderColor: 'gray', borderWidth: 1 }}>
          <TextInput
            style={{
              flex: 1,
              height: 40,
              paddingLeft: 10,
              borderRadius: 7,
            }}
            placeholder="Password"
            secureTextEntry={!passwordVisible}
            placeholderTextColor='grey'
          />
          <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
            <MaterialCommunityIcons
              name={passwordVisible ? 'eye-off' : 'eye'}
              size={24}
              color="gray"
              style={{ marginRight: 10 }}
            />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20, borderRadius: 5, borderColor: 'gray', borderWidth: 1 }}>
          <TextInput
            style={{
              flex: 1,
              height: 40,
              paddingLeft: 10,
              borderRadius: 7,
            }}
            placeholder="Confirm Password"
            secureTextEntry={!passwordVisible}
            placeholderTextColor='grey'
          />
          <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
            <MaterialCommunityIcons
              name={passwordVisible ? 'eye-off' : 'eye'}
              size={24}
              color="gray"
              style={{ marginRight: 10 }}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: '#000',
            paddingVertical: 12,
            borderRadius: 20,
            marginBottom: 15,
          }}
          onPress={() => navigation.navigate('Activity')}
        >
          <Text style={{ color: '#fff', textAlign: 'center' }}>Sign Up</Text>
        </TouchableOpacity>

        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
          <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
          <Text style={{ marginHorizontal: 10, color: 'black' }}>OR</Text>
          <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: 'black',
            paddingVertical: 12,
            borderRadius: 20,
            marginBottom: 20,
            marginTop: 15,
            flexDirection: 'row-reverse',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => alert('Continue With Google')}
        >
          <MaterialCommunityIcons name="google" size={24} color="white" />
          <Text style={{ color: 'white', textAlign: 'center', marginRight: 10 }}>Sign Up with Google</Text>
        </TouchableOpacity>

        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Text style={{ color: 'black' }}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={{color: "green"}}>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.halfCircleLeftBottom} />
      <View style={styles.halfCircleRightBottom} />
    </View>
  );
}

const styles = StyleSheet.create({
  halfCircleLeftTop: {
    position: 'absolute',
    top: 0,
    right: -10, 
    width: 100, // Diameter of the half circle
    height: 100, // Diameter of the half circle
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
  halfCircleLeftBottom: {
    position: 'absolute',
    bottom: 0,
    left: -10, 
    width: 100, // Diameter of the half circle
    height: 80, // Diameter of the half circle
    borderRadius: 50, // Half of the width or height to create a half-circle
    backgroundColor: 'black', 
    transform: [{ translateY: 50 }], // Adjust for centering
  },
  halfCircleRightBottom: {
    position: 'absolute',
    bottom: 0,
    left: -50, 
    width: 100, // Diameter of the half circle
    height: 100, // Diameter of the half circle
    borderRadius: 50, // Half of the width or height to create a half-circle
    backgroundColor: '#9CCC65', 
    transform: [{ translateY: 50 }], // Adjust for centering
  },
});
