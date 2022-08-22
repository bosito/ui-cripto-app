import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../screens/home/HomeScreen";
import InfoCoinScreen from "../../screens/home/InfoCoinScreen";
import { HomeNavigationParams } from "../interfaces";

const Stack = createNativeStackNavigator<HomeNavigationParams>();

export default function HomeNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="home_screen"
      screenOptions={{
        headerShadowVisible: false,
        headerTintColor: "white",
        headerTitleStyle: { fontWeight: "bold" },
        headerTransparent: true,
        animation: 'fade',
        statusBarStyle: 'light',
        statusBarTranslucent: true
      }}
    >
      <Stack.Screen
        name="home_screen"
        component={HomeScreen}
        options={{
          headerTitle: "BitiU",
        }}
      />
      <Stack.Screen name="info_coin_screen" component={InfoCoinScreen} />
    </Stack.Navigator>
  );
}
