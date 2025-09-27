import { View, Text, Pressable, Modal, Image } from 'react-native'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AntDesign from '@expo/vector-icons/AntDesign';
import { router, useFocusEffect, useLocalSearchParams } from 'expo-router'
import MyBottomSheet from '../../src/components/Mess/MyBottomSheet';
import { useAuth } from '../../src/context/AuthContextProvider'
import { LinearGradient } from 'expo-linear-gradient'
import MyColors, {} from '../../src/constants/MyColors'
import LoadingView from '../../src/components/LoadingView'





const Mess = () => {
  const {setMeal, meal, valuesList} = useAuth()
  const sheetRef = useRef(null)
  const [modalVisible, setModalVisible] = useState(false)

useFocusEffect(
  useCallback(()=>{
  setModalVisible(true)
  const timer = setTimeout(()=>setModalVisible(false),2000)
  return ()=> clearTimeout(timer)
},[])
)


useFocusEffect(
  useCallback(()=> {
  let timer
  if(meal !== null){
   timer = setTimeout(()=> sheetRef.current.present(), 2100)
  }
  return ()=> clearTimeout(timer)
},[meal])
)

const detailList = useMemo(()=> {
  return ([
  {
    title:`Father's Name`,
    subTitle: 'Deshmukh Vasanta (8888241563)'
  },
  {
    title:`Mother's Name`,
    subTitle: 'Pushpa (+91-7499286521)'
  },
  {
    title:`Program Name`,
    subTitle: 'P132:B.Tech. (Computer Science and Engineering)(2024)'
  },
  {
    title:`Hostel`,
    subTitle: valuesList['hostel'] || 'Boys Hostel-02- A602-Bed B (Std Non-AC 4 Seater)'
  },
])
},[valuesList])






  return (
    <SafeAreaView style={{flex:1, padding:8, backgroundColor:'white'}} edges={['bottom']}>

      <View style={{height:'100%', width:'100%', elevation:2, backgroundColor:'white'}}>


        <View style={{width:'100%', borderRadius:8, overflow:'hidden', padding:22, gap:24, paddingBottom:32}}>
          <LinearGradient style={{position:'absolute', top:0, bottom:0, right:0, left:0}} colors={[MyColors.left, MyColors.right]} start={{x:0, y:0}} end={{x:1, y:0}} />
          
          <View style={{width:'100%', justifyContent:'center', alignItems:'center', gap:4}}>
            <View style={{height:120, width:120}}>
            <Image source={require('../../assets/images/me.jpg')} resizeMode='stretch' style={{height:'100%', width:'100%', borderRadius:8}} />
            </View>
           
            <Text style={{fontFamily:'Nunito-Bold', fontSize:14, color:'#323232'}}>Deshmukh Bharat Vasanta</Text>
          </View>

          <View style={{gap:12}}>
            {
              detailList.map((item, index)=> (
                <View key={index} style={{width:'100%'}}>
                  <Text style={{fontFamily:'Nunito-Bold', fontSize:14, color:'#323232'}}>{item.title}</Text>
                  <Text style={{fontFamily:'Nunito-Medium', fontSize:14, color:'#323232'}}>{item.subTitle}</Text>
                  </View>
              ))
            }

          </View>
          
          
          
          
          
          
        
        </View>

        <View style={{width:'100%', justifyContent:'center', alignItems:'center', paddingHorizontal:30}}>

          <View style={{width:'100%', marginVertical:28, }}>
              <Text style={{fontSize:24, textAlign:'center',fontFamily:'Nunito-Regular'}}>Tap on the meal name to scan and avail food.</Text>
          </View>

          <View style={{width:'100%', flexDirection:'row', flexWrap:'wrap'}}>

            {
              ['BreakFast', 'Lunch', 'Dinner'].map((item, index) => (
                <View key={item} style={{width:'50%', height:90, justifyContent:'center', alignItems:'center', padding:8}}>
                  <LinearGradient colors={[MyColors.left, MyColors.right]} start={{x:0, y:0}} end={{x:1,y:0}} style={{ elevation:5,borderRadius:6, }}>
                  <Pressable onPress={()=> { router.push({pathname:'/qrscreen', params:{meal: item}}) }} style={{ flexDirection:'row',gap:6,  height:64, width:156, justifyContent:'center', alignItems:'center'}}>

                    <Text style={{fontSize:18, fontFamily:'Nunito-Medium', color:'#323232'}}>{item}</Text>
                    <AntDesign name="arrowright" size={20} color="#323232" />

                  </Pressable>
                  </LinearGradient>
                </View>
              ))
            }


          </View>

        </View>

      </View>

        <MyBottomSheet meal={meal} setMeal={setMeal} sheetRef={sheetRef} valuesList={valuesList}/>

        <Modal visible={modalVisible} backdropColor={1} animationType='fade'>
        <View style={{marginHorizontal:'auto', marginVertical:'auto'}}>
          <LoadingView />
        </View>
        </Modal>


    </SafeAreaView>
  )
}

export default Mess