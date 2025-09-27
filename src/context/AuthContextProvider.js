import { View, Text } from 'react-native'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { router } from 'expo-router'
import getData, {} from '../../src/utils/getData'
import storeData, {} from '../../src/utils/storeData'

const AuthContext = createContext()

const list = [
  {
   title: "Announce",
   key: 'announce'
 },
  {
   key: "attendence",
   title: "Attendance",
 },
 {
   key: "assingment",
   title: "Assignment",
 },
 {
   key: "results",
   title: "Results",
 },
  {
   key: "exam",
   title: "Exams",
 },
  {
   key: "thrive",
   title: "10 to Thrive",
 },
  {
   key: "basics",
   title: "Back to Basics",
 },
  {
   key: "mess",
   title: "Mess Food Scanner",
 },
  {
   key: "timeTable",
   title: "Time table",
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


const AuthContextProvider = ({children}) => {
  const [meal, setMeal] = useState(null)
  const [valuesList , setValuesList] = useState({})

useEffect(() => {
 setTimeout(() => {
    router.replace('/auth')
 }, 2000)
}, [])

useEffect(()=>{
  loadData()
},[])

const loadData = async()=>{
  try{
    let data = {}
    for(const item of list){
      const v = await getData(item.key)
      data[item.key] = v || ""

    }
    setValuesList(data)

  } catch(error){
    console.error("Error from loadData", error)
  }
}


const handleSave = async(key, value)=> {
  try{
    await storeData(key, value)
    await loadData()
  }catch(error){
    console.error("Error from handleSave", error)
  }

}


  return (
  <AuthContext.Provider value={{meal, setMeal, handleSave, valuesList, setValuesList}}>
    {children}
  </AuthContext.Provider>
  )
}

export default AuthContextProvider

export const useAuth = () => useContext(AuthContext)