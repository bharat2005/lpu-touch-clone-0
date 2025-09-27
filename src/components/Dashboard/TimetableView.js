import { View, Text } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import MyColors from '../../constants/MyColors'
import AntDesign from '@expo/vector-icons/AntDesign';


const TimetableView = () => {
  return (
    <View style={{width:'100%', padding:14, gap:10}}>

      <View style={{flexDirection:'row', width:'100%', justifyContent:'space-between', alignItems:'center'}}>
        <Text style={{fontFamily:'Nunito-Regular', fontSize:20}}>{`Today's Timetable`}</Text>
        
        <LinearGradient colors={[MyColors.left, MyColors.right]} style={{borderRadius:6}} start={{x:0,y:0}} end={{x:1, y:0}}>
        <View style={{ paddingHorizontal:8}}>
          <Text style={{fontFamily:'Nunito-Regular', fontSize:16}}>Your Dost</Text>
        </View>
        </LinearGradient>

      </View>


      <View style={{borderRadius:6, borderColor:'lightgrey', borderWidth:0.8, justifyContent:'center', alignItems:'center', width:'100%', height:100}}>
        <Text style={{fontFamily:'Nunito-Medium', color:'grey', fontSize:22}}>No TimeTable Available</Text>
      </View>


      <View style={{flexDirection:'row', width:'100%'}}>

        <View style={{flex:1, gap:10}}>

          <Text style={{fontFamily:'Nunito-Regular', fontSize:20}}>Add More Tiles</Text>
          <Text style={{fontFamily:'Nunito-Regular', fontSize:14}}>Click on the plus button to add menu grids.</Text>

        </View>

        <AntDesign name="pluscircle" size={26} color="black" style={{marginTop:4}} />
        

      </View>
      
    </View>
  )
}

export default TimetableView