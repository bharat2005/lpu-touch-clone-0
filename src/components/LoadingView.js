import { View, Text, Image, ActivityIndicator } from 'react-native'
import React from 'react'
import MyColors, {} from '../../src/constants/MyColors'

const LoadingView = () => {
  return (
    <View style={{height:67, width:67}}>

        <ActivityIndicator color={'rgb(255, 153, 70)'} size={81} style={{position:'absolute', top:-6.5, left:-6.8}} />

        <Image source={require('../../assets/images/logo.png')} style={{width:'100%', height:'100%'}} />
    
    </View>
  )
}

export default LoadingView