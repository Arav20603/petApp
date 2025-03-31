import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { images } from '../constants/images'

const index = () => {
  return (
    <ImageBackground style={styles.bgImg} source={images.bgimg}>
      <Text style={styles.title}>Welcome to the Pet World!</Text>
      <Pressable>
        <Link href='./Home' style={styles.goBtn}>Get Started</Link>
      </Pressable>
    </ImageBackground>
  )
}

export default index

const styles = StyleSheet.create({
  bgImg: {
    resizeMode:'contain',
    height: 850
  },
  goBtn: {
    position: 'absolute',
    width: 300,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 20,
    top: 650,
    left: 47,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 400
  },
  title:{
    fontSize: 20,
    position: 'relative',
    top: 10,
    left: 40,
    backgroundColor: '#F8F8FF',
    padding: 15,
    width: 300,
    textAlign: 'center',
    borderRadius: 20
  }
})