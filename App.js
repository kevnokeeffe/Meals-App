import React, { useState } from 'react';
//import { Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import {useScreens} from 'react-native-screens';

import MealsNavigator from './navigation/MealsNavigator';
//Speeds up screen transition. pulled in from the import above. runs independant
useScreens();

const fetchFonts = () => {
  try{
   return Font.loadAsync({
    'raleway-black': require('./assets/fonts/Raleway-Black.ttf'),
    'raleway-bold': require('./assets/fonts/Raleway-Bold.ttf')
  });
  //this.setState({ fontLoaded: true });
      //console.log('fonts are loaded');
}catch(error){console.log(error);
}

};



export default function App() {
  
  const [fontLoaded, setFontLoaded] = useState(false);

  if (fontLoaded === false) {
    return (<AppLoading startAsync={fetchFonts} onFinish={() => setFontLoaded(true)} />
    );
  }

  return (
    <MealsNavigator></MealsNavigator>
  );
}
