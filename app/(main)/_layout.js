import { View, Text, StatusBar, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import MyColors from '../../src/constants/MyColors'
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const MainLayout = () => {
  return (
    <>
    <View style={{backgroundColor:MyColors.darkStatus, height:StatusBar.currentHeight}} />

<Tabs screenOptions={{
  tabBarActiveTintColor:MyColors.ornage,
  tabBarLabelStyle:{fontFamily:'Nunito-Medium', fontSize:11.5},
  headerTitleStyle:{fontFamily:'Nunito-Bold'},
  headerTitleAlign:'center',
  headerStatusBarHeight:0,
  headerLeft:()=><View style={{width:55, height:'100%', justifyContent:'center', alignItems:'center'}} ><Image style={{height:'70%', width:'70%'}} source={require('../../assets/images/menu.jpg')} /></View>,
}}>
    <Tabs.Screen name='dashboard' options={{
      tabBarLabel:'Dashboard',
       headerTitle:'Dashboard',
       tabBarIcon:({color})=> <MaterialIcons name="dashboard" size={24} color={color} />,
      headerRight:()=><View style={{width:60, height:'100%', justifyContent:'center', alignItems:'center'}} ><Image style={{height:'70%', width:'70%'}} source={require('../../assets/images/bell.jpg')} /></View> 
      }}/>

    <Tabs.Screen name='happening' 
    options={{
      tabBarLabel:'Happenings',
       headerTitle:'Happenings',
       tabBarIcon:({color})=> <Ionicons name="newspaper-outline" size={22} color={color} />
       }} />
    <Tabs.Screen name='rms' options={{
      tabBarLabel:'RMS',
      headerTitle:'RMS',
      tabBarIcon:({color})=><Feather name="edit" size={20} color={color} />


     }} />
    <Tabs.Screen name='quickquiz' 
    options={{
      tabBarLabel:'Quick Quiz',
      headerTitle:'Quick Quiz',
      tabBarIcon:({color})=><FontAwesome6 name="list-ul" size={20} color={color} />
      
      }}/>
</Tabs>
</>
  )
}

export default MainLayout