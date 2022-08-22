import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TapNavigation from "./tab-navigation/TapNavigation";
import * as NavigationBar from 'expo-navigation-bar';

import { NavigationParams } from "./interfaces";

const Stack = createNativeStackNavigator<NavigationParams>();

export default function Navigation() {

  useEffect(()=>{

    (async ()=>{
      await NavigationBar.setBackgroundColorAsync('#2724a2')
    })();
  },[]);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ animation: "fade", headerShown: false }}

      >
        <Stack.Screen name="tabs_navigation" component={TapNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
