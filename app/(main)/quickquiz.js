import { View, Text, ScrollView, TextInput, Pressable, Button, KeyboardAvoidingView } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import getData from '../../src/utils/getData'
import AsyncStorage from '@react-native-async-storage/async-storage'
import storeData from '../../src/utils/storeData'
import { useFocusEffect } from 'expo-router'
import { useAuth } from '../../src/context/AuthContextProvider'

const list = [
   {
    title: "Announce",
    key: 'announce',
    ex:'12'
  },
   {
    key: "attendence",
    title: "Attendance",
    ex:'75 %'
  },
  {
    key: "assingment",
    title: "Assignment",
    ex:'5'
  },
  {
    key: "results",
    title: "Results",
    ex:'8.99'
  },
   {
    key: "exam",
    title: "Exams",
    ex:'3'
  },
   {
    key: "thrive",
    title: "10 to Thrive",
    ex:'7'
  },
   {
    key: "basics",
    title: "Back to Basics",
    ex:'2'
  },
  {
    key: "hostel",
    title: "Hostel",
    ex:'Boys Hostel-09- A908-Bed D (Std Non-AC 4 Seater)'
  },
  {
    key: "plaintext",
    title: "Plain Text",
    ex:'BH1M07'
  },
  {
    key: "messCode",
    title: "Mess Code",
    ex:'Mess-1 BH-1'
  },

]

const QuickQuiz = () => {
const {valuesList, handleSave} = useAuth()
const [localValuesList, setLocalValuesList] = useState(valuesList)

useFocusEffect(useCallback(()=> {
  setLocalValuesList(valuesList)
},[valuesList]))




  return (
    <KeyboardAvoidingView style={{flex:1}} behavior='height' keyboardVerticalOffset={120}>


    <ScrollView showsVerticalScrollIndicator={false} style={{flex:1, backgroundColor:'white'}}>
      
      {
        list.map((item, index)=> (
          <View key={item.key} style={{width:'100%', marginVertical:24, paddingHorizontal:28, justifyContent:'center', alignItems:'center', gap:8}}>

            <Text style={{fontSize:18}}>{item.title}</Text>

            {item.ex && (
              <Text style={{color:'grey', fontSize:14, textAlign:'center'}}>{'Example-  '}{item.ex}</Text>
            )
            }


            <TextInput multiline value={localValuesList[item.key]} onChangeText={(v)=> setLocalValuesList(prev => ({...prev, [item.key]:v}))} style={{width:'100%', borderWidth:2, borderColor:'orange', borderRadius:4}} />

            <Button title={'Save'} style={{width:180}} onPress={()=> handleSave(item.key, localValuesList[item.key]) } />

          </View>
        ))
      }

    </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default QuickQuiz