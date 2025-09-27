import { View, Text, AppState } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { useVideoPlayer, VideoView } from 'expo-video'

const AcceptedVideoView = () => {
    const player = useVideoPlayer(require('../../assets/videos/accepted.mp4'), player => {
        player.loop = true;
        player.play();
    })
    const appState = useRef(AppState.currentState)

    useEffect(()=> {
      const sub = AppState.addEventListener('change',(nextAppState)=> {
        if((appState.current === 'inactive' || appState.current === 'background') && nextAppState === 'active'){
          player.play()
        }
        appState.current = nextAppState
      })

      return ()=> sub.remove()
    })


  return (
    <VideoView player={player} nativeControls={false} style={{height:'106%', width:'106%'}}  />
  )
}

export default AcceptedVideoView