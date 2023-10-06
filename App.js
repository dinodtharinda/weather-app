
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React from 'react'
import CurrentWeather from './src/Components/CurrentWeather'
import UpcomingWeather from './src/Components/UpcomingWeather'
import OurChild from './src/Components/OurChild'




const App = () => {
  return (
    <View style={styles.container}>
     < UpcomingWeather/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    paddingTop:StatusBar.currentHeight,
    flex: 1
  }
})