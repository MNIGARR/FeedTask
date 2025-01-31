import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import Feed from "@/components/Feed";
// import Content from "@/components/Content";

import { View } from 'react-native';
import Content from '@/components/Content';
import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
   

  return (
    <View>
       {/* <Feed></Feed>  */}
       <Content></Content>
    </View>
  );
}
