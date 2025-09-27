import { View, Text, Button, BackHandler } from 'react-native'
import React, { useCallback, useEffect, useRef } from 'react'
import BottomSheet, { BottomSheetBackdrop, BottomSheetModal, BottomSheetView, useBottomSheetSpringConfigs } from '@gorhom/bottom-sheet'
import { useAuth } from '../../context/AuthContextProvider'
import SuccessView from './SuccessView'
import MyColors from '../../constants/MyColors'



const MyBottomSheet = ({meal, setMeal, sheetRef, valuesList}) => {
  const backPressRef = useRef(null)

      
  const handleClose = () => {
    sheetRef.current.dismiss()
    setMeal(null)
}

  const handleBackPress = useCallback(()=> {
    handleClose()
    return true
  })

  const handleChange = (index) => {
    if(index >= 0){
    backPressRef.current = BackHandler.addEventListener('hardwareBackPress', handleBackPress)
    } else {
      handleClose()
      backPressRef.current.remove()
      backPressRef.current = null
    }
  }

      const config = useBottomSheetSpringConfigs({
        damping: 60,     // higher = less bounce (default is ~30)
        stiffness: 300,  // higher = snappier
        mass: 0.8,       // lighter feel
        overshootClamping: false, // allow tiny overshoot but not crazy
        restDisplacementThreshold: 0.1,
        restSpeedThreshold: 0.1,
      });      



 
  return (
    <BottomSheetModal ref={sheetRef} snapPoints={['95%']} handleIndicatorStyle={{backgroundColor:'lightgrey', width:42, height:6}} backgroundStyle={{backgroundColor:MyColors.headerDark}}
    //enablePanDownToClose={false}
    onChange={handleChange}
    backdropComponent={(props)=>(
        <BottomSheetBackdrop
        {...props}
        appearsOnIndex={0}     
        disappearsOnIndex={-1}  
        opacity={0.2}  
         />
    )}
    animationConfigs={config}
    >
        <BottomSheetView style={{height:'100%', width:'100%'}} >
        <SuccessView meal={meal} sheetRef={sheetRef} handleClose={handleClose} valuesList={valuesList} />
        </BottomSheetView>
    </BottomSheetModal>
  )
}

export default MyBottomSheet