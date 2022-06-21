import React, {useState} from 'react'
import AppLoading from 'expo-app-loading'
import * as Font from 'expo-font';
import MainStack from './src/Navigate'

const fonts = () => Font.loadAsync({
  'comf-bold': require('./assets/fonts/Comfortaa-Bold.ttf'),
  'comf-light': require('./assets/fonts/Comfortaa-Light.ttf')
})

export default function App() {
  const [font, setFont] = useState(false)

  if(font){
    return (
      <MainStack/>
    )
  } else {
    return (
      <AppLoading 
      startAsync={fonts}
      onFinish={() => setFont(true)}
      onError={console.warn}
      />
    )
  }
}
