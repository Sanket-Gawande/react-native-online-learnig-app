import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Navigation from '../Components/Navigation'
import colors from '../../colors.json'
const Faculty = () => {
  return (
    <View style={styles.container}>
      <Text>Faculty</Text>
      <Navigation/>
    </View>
  )
}

export default Faculty

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: colors.wheat,
        fontFamily: "Padauk_400Regular",
        minHeight: 1000,
      }
})