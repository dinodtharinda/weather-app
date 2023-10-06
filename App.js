
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from 'react-native'
import React from 'react'
import CurrentWeather from './src/screens/CurrentWeather'
import UpcomingWeather from './src/screens/UpcomingWeather'
import City from './src/screens/City'



const App = () => {
  return (
    <View style={styles.container}>
     <City/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})