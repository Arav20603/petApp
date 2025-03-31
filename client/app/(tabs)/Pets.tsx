import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Pets = () => {
  return (
    <View style={styles.body}>
      <Text>Pets</Text>
    </View>
  )
}

export default Pets

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'white',
    flex: 1,
  }
})