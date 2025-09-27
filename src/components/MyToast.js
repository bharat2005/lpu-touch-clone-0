import { View, Text } from 'react-native'
import React from 'react'
import MyColors, {} from '../constants/MyColors'

const MyToast = ({text1}) => {
  return (
    <View style={{width:'95%',borderRadius:4, backgroundColor:MyColors.darkStatus, paddingHorizontal:18, paddingVertical:12}}>
      <Text style={{color:'white', fontFamily:'Nunito-Regular', fontSize:14}}>{text1}</Text>
    </View>
  )
}

export default MyToast