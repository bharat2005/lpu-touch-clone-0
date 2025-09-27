import { View, Text, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import TimetableView from '../../src/components/Dashboard/TimetableView'
import OptionsView from '../../src/components/Dashboard/OptionsView'

const Dashboard = () => {
  return (

    <ScrollView style={{flex:1, backgroundColor:'white'}}>

<TimetableView />

<OptionsView />


    </ScrollView>
  )
}

export default Dashboard