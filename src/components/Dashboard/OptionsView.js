import { View, Text, Dimensions, Pressable, Image } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import { useAuth } from '../../../src/context/AuthContextProvider'
import MyColors from '../../constants/MyColors'
import { LinearGradient } from 'expo-linear-gradient'




const OptionsView = () => {
  const {valuesList} = useAuth()


const optionsList = ['announce', 'edu', 'fee', 'attendence', 'assingment', 'results', 'exam', 'rmsStatus', 'events', 'thrive', 'basics', 'mess', 'timeTable']
const optionsObject = {
  announce: {
    icon: require('../../../assets/images/announce.jpg'),
    title: "Announce",
    value: valuesList['announce'] || '0'
  },
  edu: {
    icon: require('../../../assets/images/edu.jpg'),
    title: "Edu   Revolution"
  },
  fee: {
    icon: require('../../../assets/images/fee.jpg'),
    title: "Fee Statment"
  },
  attendence: {
    icon: require('../../../assets/images/attendence.jpg'),
    title: "Attendance",
    value: valuesList['attendence'] || '0 %'
  },
  assingment: {
    icon: require('../../../assets/images/assingment.jpg'),
    title: "Assignment",
      value: valuesList['assingment'] || '0'
  },
  results: {
    icon: require('../../../assets/images/results.jpg'),
    title: "Results",
      value: valuesList['results'] || '2.00'
  },
  exam: {
    icon: require('../../../assets/images/exam.jpg'),
    title: "Exams",
      value: valuesList['exam'] || '0'
  },
  rmsStatus: {
    icon: require('../../../assets/images/rmsStatus.jpg'),
    title: "RMS Status"
  },
  events: {
    icon: require('../../../assets/images/events.jpg'),
    title: "Events"
  },
  thrive: {
    icon: require('../../../assets/images/thrive.jpg'),
    title: "10 to Thrive",
    value: valuesList['thrive'] || '0'
  },
  basics: {
    icon: require('../../../assets/images/basics.jpg'),
    title: "Back to Basics",
      value: valuesList["basics"] || '2'
  },
  mess: {
    icon: require('../../../assets/images/general.jpg'),
    title: "Mess Food Scanner",
    value: 'X'
  },
  timeTable: {
    icon: require('../../../assets/images/general.jpg'),
    title: "Time table",
      value: 'X'
  }
};

  return (
    <View style={{width:Dimensions.get('screen').width, flexDirection:'row', flexWrap:'wrap', paddingHorizontal:8, paddingVertical:4}}>

      {optionsList.map((option, index)=> (
        <View key={option} style={{justifyContent:'center', alignItems:'center', width:(Dimensions.get('screen').width /3) * 0.96, height:170, paddingHorizontal:9, paddingVertical:12}}>
          
          <Pressable onPress={()=> router.push('/mess')} style={{height:'100%', borderWidth:option === 'edu' ? 2 : 0.3, borderColor:option === 'edu' ? '#ee8b7d' : 'lightgrey', width:'100%', backgroundColor:MyColors.glamour, elevation:2, borderRadius:8, justifyContent:'center', alignItems:'center', paddingHorizontal:6, paddingTop:12, gap:12}}>
          
          <Image source={optionsObject[option]?.icon} style={{height:64, width:64}} />

          <View style={{ backgroundColor:MyColors.torchlight, borderRadius:5, width:'100%', paddingVertical:1.8}}>
            <Text style={{textAlign:'center', fontFamily:'Nunito-Regular'}}>{optionsObject[option]?.title}</Text>
          </View>

          </Pressable>

          {
            optionsObject[option]?.value && (
              <LinearGradient style={{position:'absolute', top:0, right:2, borderRadius:6}} colors={[MyColors.right, MyColors.left]} start={{x:0, y:0}} end={{x:1,y:0}}>
              <View style={{ justifyContent:'center', alignItems:'center', paddingHorizontal:8, paddingVertical:2 }}>
                <Text style={{fontFamily:'Nunito-Medium'}}>{optionsObject[option]?.value}</Text>
                </View>
                </LinearGradient>
            )
          }
        </View>
      ))

      }
      
    </View>
  )
}

export default OptionsView