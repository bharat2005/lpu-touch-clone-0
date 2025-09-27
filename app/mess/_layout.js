import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import AntDesign from '@expo/vector-icons/AntDesign';
import { StatusBar } from 'expo-status-bar';
import MyColors, {} from '../../src/constants/MyColors'

const MessLayout = () => {
  return (
    <>
    <StatusBar style='light' />
<Stack screenOptions={{
  headerStyle:{backgroundColor:MyColors.headerDark},
  headerTitle:'Mess Coupon',
  headerTitleStyle:{fontFamily:'Nunito-Regular', fontSize:16},
  headerTintColor:'white',
  headerTitleAlign:'center',
  headerRight:()=> <Text style={{color:'white', fontFamily:'Nunito-Bold', fontSize:17}}>Mess History</Text>

  
  }} />
  </>
  )
}

export default MessLayout