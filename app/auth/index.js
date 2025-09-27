import { View, Text, Pressable, Dimensions, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as LocalAuthentication from 'expo-local-authentication'
import Toast from 'react-native-toast-message'
import { router } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
//import { StatusBar } from 'expo-status-bar'
import MyColors, {} from '../../src/constants/MyColors'
import { StatusBar } from 'react-native'


const pinLength = 6;

const Auth = () => {
  const keyPadArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '←', '0', '✓']
  const [pin, setPin] = useState([])
  const [showWarning, setShowWarning] = useState(false)

  useEffect(()=> {

    const fingerAuth = async () => {
      const hasHardware = await LocalAuthentication.hasHardwareAsync()
      if(!hasHardware){
        Alert.alert('Error','hardware not supporrt fingerprint')
        return
      }

      const hasEnrolled = await LocalAuthentication.isEnrolledAsync()
      if(!hasEnrolled){
        Alert.alert("Error", 'fingerprint has not enrolled')
        return
      }

      const response = await LocalAuthentication.authenticateAsync({
        promptMessage:'Authenticate Now',
      })

      if(response.success){
        setTimeout(()=>router.replace('/dashboard'),300)
      } else{
        Toast.show({
          text1:'Fingerprint authentication cancelled.',
          type:'my_toast',
          swipeable:false
        })
      }

    }

    fingerAuth()
   
  }, [])


  const handleKeyPress = (key) => {
    if(['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].includes(key)) {
      if(pinLength > pin.length){
        setPin(prev => [...prev, key])
      }
    } else if(key === '←'){
      setPin(prev => prev.slice(0,-1))
    } else if(key === '✓'){
      handleTickPress()
    }
  }

  const handleTickPress = () => {
    if(pin.length < 6){
      setShowWarning(true)
    } else{
      setTimeout(()=>router.replace('/dashboard'), 300)
    }
   
  }

  const backtick = (key)=> {
    if(key === '←'){
      return <Ionicons name="backspace-outline" size={35} color="black" />
    } else if( key === '✓'){
      return (
        <View style={{backgroundColor:MyColors.green, borderRadius:'50%', padding:6}}>
            <MaterialIcons name="done" size={26} color="white" />
        </View>
      )
    } else{
      return key
    }
  }

  return (
    <>
    <View style={{backgroundColor:MyColors.darkStatus, height: StatusBar.currentHeight }}/>
    <SafeAreaView style={{flex:1, alignItems:'center', justifyContent:'space-between', backgroundColor:'white'}} edges={['bottom']}>

      <View style={{width:'100%', paddingTop:18, gap:14}}>

        <View style={{flexDirection:'row', paddingHorizontal:18}}>

          <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text style={{fontFamily:'Nunito-Regular', fontSize:20}}>Enter your LPUTouch PIN</Text>
          </View>

          
            <View style={{backgroundColor:'red', paddingVertical:4,paddingHorizontal:6, borderRadius:8}}>
              <Text style={{fontFamily:'Nunito-Bold', color:'white', fontSize:12}}>Reset Pin</Text>
            </View>

        
        </View>

        <View style={{width:'100%'}}>
          <Text style={{fontFamily:'Nunito-Regular', fontSize:12.5, paddingHorizontal:18}}>Please enter your secure PIN to access your application.</Text>
        </View>

        <View style={{justifyContent:'center', alignItems:'center', width:'100%', gap:11, flexDirection:'row', paddingVertical:6}}>

        {
        [...Array(pinLength)].map((_,index)=> (
          <View key={index} style={{width: 45, height: 45, borderWidth: 2, borderRadius:10, borderColor: 'black', justifyContent:'center', alignItems:'center'}}>
            <Text style={{fontSize:38, textAlign:'center', height:50}}>{pin[index] ? "•" : ""}</Text>
          </View>
        ))
       }

        </View>


        {
      showWarning && (
        <Text style={{color:'red',fontFamily:'Nunito-Regular', fontSize:12.5, paddingHorizontal:18, textAlign:'center'}}>PIN must be exactly 6 digits.</Text>
      )
     }

      </View>


      <View style={{width:'100%', flexDirection:'row', flexWrap:'wrap', borderTopColor:'gainsboro', borderTopWidth:2}}>
        {
          keyPadArray.map((key, index) => (
            <View key={index} style={{width:(Dimensions.get('screen').width / 3) * 0.999, height:57, justifyContent:'center', alignItems:'center'}}>
              <View style={{borderRadius:4, overflow:'hidden'}}>
              <Pressable android_ripple={{color:'lightgrey'}} onPress={()=>handleKeyPress(key)} style={{paddingHorizontal:28, paddingVertical:2}} >
                <Text style={{fontSize:24, fontFamily:'Nunito-Regular'}}>{backtick(key)}</Text>
              </Pressable>
              </View>
            </View>
          ))
        }
      </View>
    
    </SafeAreaView>
    </>
  )
}

export default Auth













