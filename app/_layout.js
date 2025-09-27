import { Stack } from "expo-router";
import AuthContextProvider from "../src/context/AuthContextProvider";
import Toast from 'react-native-toast-message'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import MyToast from '../src/components/MyToast'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { useFonts } from 'expo-font'
import { StatusBar } from "react-native";
import MyColors from "../src/constants/MyColors";




export default function RootLayout() {
  useFonts({
    'Roboto-Light':require('../assets/fonts/Roboto-Light.ttf'),
    'Roboto-Medium':require('../assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Regular':require('../assets/fonts/Roboto-Regular.ttf'),
    'Nunito-Light':require('../assets/fonts/Nunito-Light.ttf'),
    'Nunito-Medium':require('../assets/fonts/Nunito-Medium.ttf'),
    'Nunito-Regular':require('../assets/fonts/Nunito-Regular.ttf'),
    'Nunito-Black':require('../assets/fonts/Nunito-Black.ttf'),
    'Nunito-Bold':require('../assets/fonts/Nunito-Bold.ttf'),
    'Nunito-SemiBold':require('../assets/fonts/Nunito-SemiBold.ttf'),
  })
  
  return (
    <GestureHandlerRootView style={{flex:1}}>
      <BottomSheetModalProvider >
    <AuthContextProvider>
    <StatusBar 
        barStyle="light-content"   
        translucent={true}        />
        
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index"  />
      <Stack.Screen name='auth'options={{animation:'none'}}/>
      <Stack.Screen name="(main)" options={{animation:'none'}}  />
      <Stack.Screen name="mess" options={{animation:'fade_from_bottom'}} />
      <Stack.Screen name="qrscreen" options={{animation: 'none'}}/>
    </Stack>
    <Toast config={{my_toast: ({text1})=> <MyToast {...{text1}}/>}}/>
    </AuthContextProvider>
    </BottomSheetModalProvider>
    </GestureHandlerRootView>
    
  )
}