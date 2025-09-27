import { View, Text, TouchableOpacity, StyleSheet, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import { CameraView, useCameraPermissions } from 'expo-camera'
import { router, useLocalSearchParams } from 'expo-router'
import Animated, { useSharedValue, withTiming, useAnimatedStyle , Easing, withRepeat  } from 'react-native-reanimated'
import { useAudioPlayer } from 'expo-audio'
import { useAuth } from '../../src/context/AuthContextProvider'


const QRScanner = () => {
  const {meal} = useLocalSearchParams()
  const player = useAudioPlayer(require('../../assets/sfx/beep.mp3'))
  const [permission, requestPermission] = useCameraPermissions()
  const lineAnimation = useSharedValue(0)
  const [scanned, setScanned] = useState(false)
  const insets = useSafeAreaInsets()
  const { setMeal, valuesList} = useAuth()


  useEffect(()=> {
    lineAnimation.value = withRepeat(withTiming(248, {duration:2000, easing:Easing.linear}), -1, true)
  },[])


  const onScanPress = () => {
    player.play()
    setMeal(meal)
    setScanned(true)
   
    setTimeout(()=> {
      router.back()
    }, 2600)

  }




   const animatedStyle = useAnimatedStyle(()=> {
    return {
      transform: [{translateY:lineAnimation.value}]
    }
   })

  useEffect(()=> {
    if(permission && !permission.granted){
      requestPermission()
    }

  },[permission])

  if(!permission){
    return <View />
  }

  return (
    <SafeAreaView style={{flex:1}}>
      <CameraView style={{flex:1}} />

{/* scaner overlay */}
    <View style={{position:'absolute', bottom:insets.bottom, left:0, right:0, top:0}}>
      {/* top part */}
      <View style={{flex:1, backgroundColor:scanned ? 'rgba(0, 0, 0, 0.7)' : 'rgba(0, 0, 0, 0.3)'}} />

      {/* middle part */}
      <View style={{width:'100%', flexDirection:'row'}} >
        <View style={{flex:1, backgroundColor:scanned ? 'rgba(0, 0, 0, 0.7)' : 'rgba(0, 0, 0, 0.3)'}} />

        {/* Scanner Box */}
        <View style={{width:262, height:262}} >
        <Pressable onPress={onScanPress} style={{flex:1, width:'100%'}}>
        <Animated.View style={[scanned || animatedStyle, {width:'100%', height:0.8, backgroundColor:'red'}]} />
        </Pressable>
        </View>

        <View style={{flex:1, backgroundColor:scanned ? 'rgba(0, 0, 0, 0.7)' : 'rgba(0, 0, 0, 0.3)'}} />
      </View>

      {/* bottom part */}
        <View style={{flex:1, backgroundColor:scanned ? 'rgba(0, 0, 0, 0.7)' : 'rgba(0, 0, 0, 0.3)'}} />

      <View style={{width:'100%',justifyContent:'center', alignItems:'center', position:'absolute', bottom:2}} >
        <Text style={{color:'white', fontSize:15}}> 
          {
          scanned ? 
          `Found plain text:${valuesList['plaintext'] || 'BH1M07'}`
           : 
        "Place a barcode inside the viewfinder rectangle to scan it."
          }</Text>
      </View>
      </View>

    </SafeAreaView>


              

  )
}




export default QRScanner