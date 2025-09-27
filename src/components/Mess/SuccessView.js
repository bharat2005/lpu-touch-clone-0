import { View, Text, Pressable, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import CountDown, {} from 'react-native-countdown-component'
import useCountDown from '../../hooks/useCountDown';
import { format } from 'date-fns'
import { useAuth } from '../../context/AuthContextProvider';
import RadialGradient, {} from 'react-native-radial-gradient'
import { Shadow } from 'react-native-shadow-2'
import AcceptedVideoView from '../AcceptedVideoView';


const SuccessView = ({meal, handleClose, valuesList}) => {
  const second = useCountDown(30)
  const [isImageLoaded, setisImageLoaded] = useState(false)


  useEffect(()=> {
    if (second === 0) {
      handleClose()
    }
  },[second])

  useEffect(()=>{
    const unsub = setTimeout(()=>setisImageLoaded(true),2000)
    return ()=> clearTimeout(unsub)
  },[])

  return (
    <View style={{height:'100%', width:'100%'}}>
        <View style={{width:'100%', justifyContent:'center', alignItems:'center', paddingBottom:20}}>
            <Text style={{fontSize:16, color:'white', fontFamily:'Nunito-Medium'}}>Mess Pass</Text>

            <Pressable onPress={handleClose} style={{position:'absolute', right:19, height:50}}>
            <AntDesign name="close" size={21} color="white" />
            </Pressable>
        </View>

        <View style={{flex:1, backgroundColor:'white', paddingTop:14, paddingHorizontal:10}}>

          <View style={{borderTopRightRadius:12, borderTopLeftRadius:12, height:'100%', width:'100%', borderWidth:1.5, borderColor:'silver', elevation:2}}>

            <View style={{width:'100%', flexDirection:'row-reverse', paddingTop:8, paddingHorizontal:8}}>
              <View style={{overflow:'hidden', borderRadius:19}}>
                <RadialGradient style={{width:50, height:42, justifyContent:'center', alignItems:'center'}} colors={['white', '#9c9c9c']} stops={[ 0.0001,1]} >
                <Text style={{fontSize:22, fontFamily:'Nunito-Medium'}}>{second}</Text>
                </RadialGradient>
              </View>
            </View>

            <View style={{flexDirection:'row', paddingHorizontal:8}}>

          
          <View style={{height:160,width:160, borderRadius:80, elevation:18, backgroundColor:'black', justifyContent:'center', alignItems:'center'}}>
                      {
                        isImageLoaded ? (
                          <Image style={{height:'97.4%', width:'97.4%', borderRadius:80}} source={require('../../../assets/images/me.jpg')} resizeMode='cover' />
                        ) : (
                          <View style={{height:'97.4%', width:'97.4%', borderRadius:80, backgroundColor:'white'}} />
                        )
                      }  
                </View>
     
                
                <View style={{paddingHorizontal:8, width:180, gap:12, paddingVertical:8}}>
                  <Text style={{fontFamily:'Nunito-Bold', fontSize:32, textShadowColor:'rgba(0, 0, 0, 0.3)', textShadowOffset:{width:2, height:2}, textShadowRadius:2}}>{meal}</Text>

                  <View style={{gap:6}}>
                  <Text style={{fontFamily:'Nunito-Bold', fontSize:18, textShadowColor:'rgba(0, 0, 0, 0.3)', textShadowOffset:{width:2, height:2}, textShadowRadius:2}}>{`12413923`}</Text>
                  <Text style={{fontFamily:'Nunito-Bold', fontSize:18,  textShadowColor:'rgba(0, 0, 0, 0.3)', textShadowOffset:{width:2, height:2}, textShadowRadius:2}}>{`Deshmukh Bharat Vasanta`}</Text>
                  <Text style={{fontFamily:'Nunito-Bold', fontSize:18,  textShadowColor:'rgba(0, 0, 0, 0.3)', textShadowOffset:{width:2, height:2}, textShadowRadius:2}}>{valuesList['messCode'] || 'Mess-1 BH-1'}</Text>
                  </View>
                 
                </View>
            </View>

            <Text style={{fontFamily:'Nunito-Medium', fontSize:18, paddingHorizontal:18, marginVertical:26}}>P132:B.Tech. (Computer Science and Engineering)(2024)</Text>

            <View style={{width:'100%', flexDirection:'row', marginVertical:18, paddingHorizontal:8}}>

              <View style={{flex:1, paddingHorizontal:12}}>
              <Text style={{fontFamily:'Nunito-Bold', fontSize:22}}>{format(new Date(), 'MMM dd, yyyy' )}</Text>
              </View>

              <View style={{flex:1, paddingHorizontal:12}}>
              <Text style={{fontFamily:'Nunito-Bold', fontSize:22}}>{format(new Date(), 'hh:mm a' )}</Text>
              </View>
           
            </View>

            <View style={{width:'100%', flex:1, marginTop:18}}>
                <Text style={{textAlign:'center', fontFamily:'Nunito-Bold', color:'rgb(89, 191, 26)', fontSize:30,  textShadowColor:'rgba(90, 189, 28, 0.5)', textShadowOffset:{width:2, height:2}, textShadowRadius:2}}>Meal Approved</Text>

                <View style={{width:'100%', flex:1, backgroundColor:'#246900', paddingTop:26, paddingRight:26, paddingLeft:26}}>
                  <View style={{backgroundColor:'white', height:'100%', width:'100%', overflow:'hidden', justifyContent:'center', alignItems:'center'}}>
                    <AcceptedVideoView />
                  </View>     
                </View>

            </View>
          </View>

        </View>
    </View>
  )
}

export default SuccessView