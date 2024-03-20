import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.halfCircleLeftTop} />
      <View style={styles.halfCircleRightTop} />
      <View style={{ flex: 1, justifyContent: 'center', padding: 35 }}>
        <Text style={{ fontSize: 24, marginTop: 5, marginBottom: 50, textAlign: 'center', fontWeight: 'bold' }}>Log in</Text>
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            marginBottom: 20,
            paddingLeft: 10,
            borderRadius: 7,
          }}
          placeholder="Email, username or phone number"
          placeholderTextColor='grey'
        />
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, borderRadius: 5, borderColor: 'gray', borderWidth: 1 }}>
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
        <TouchableOpacity onPress={() => alert('Forgot Password?')}>
          <Text style={{ textAlign: 'right', marginBottom: 20, color: 'green' }}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: '#000',
            paddingVertical: 12,
            borderRadius: 20,
            marginBottom: 15,
          }}
        >
          <Text style={{ color: '#fff', textAlign: 'center' }}>Log in</Text>
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
          <Text style={{ color: 'white', textAlign: 'center', marginRight: 10 }}>Continue with Google</Text>
        </TouchableOpacity>

        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Text style={{ color: 'black' }}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => alert('Sign Up')}>
            <Text style={{ color: 'green' }}>Sign up</Text>
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
