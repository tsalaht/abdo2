import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'; // Import from installed library
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider, extendTheme } from "native-base";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useEffect } from 'react';
import Screens from './Views/Navigation';

export default function App() {
  SplashScreen.preventAutoHideAsync();
  let [fontsLoaded] = useFonts({
    Almarai_Regular: require('./assets/fonts/Almarai/Almarai-Regular.ttf'),
    Almarai_Bold: require('./assets/fonts/Almarai/Almarai-Bold.ttf'),
    Almarai_Light: require('./assets/fonts/Almarai/Almarai-Light.ttf'),
  });

  const newFontTheme = {
    fontConfig: {
      Almarai: {
        400: {
          normal: 'Almarai_Regular',
        },
        600: {
          normal: 'Almarai_Bold',
        },
        300: {
          normal: 'Almarai_Light',
        },
      },
    },
  };

  const theme = extendTheme({
    fontConfig: newFontTheme,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;
  const plagin = require('./assets/plagin.png');

  return (
    <NavigationContainer>
        <NativeBaseProvider theme={theme}>
          <GestureHandlerRootView>
        
             
              <Screens/>
          
          </GestureHandlerRootView>
        </NativeBaseProvider>
    </NavigationContainer>
  );
}