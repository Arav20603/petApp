import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Profile = () => {
  return (
    <View style={styles.body}>
      <Text>Profile</Text>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'white',
    flex: 1,
  }
})