import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, Entypo } from "@expo/vector-icons";
import HomeNavigation from "../home-navigation/HomeNavigation";
import NewsNavigation from "../news-navigation/NewsNavigation";
import { LinearGradient } from "expo-linear-gradient";
import { TabNavigationParams } from "../interfaces";

const Tab = createBottomTabNavigator<TabNavigationParams>();

export default function TapNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="home_navigation"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "rgba(255, 255, 255, 0.205)f",
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: true,
        tabBarStyle: { backgroundColor: "#2724a2", borderWidth: 0 }
      }}
    >
      <Tab.Screen
        name="home_navigation"
        component={HomeNavigation}
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="news_navigation"
        component={NewsNavigation}
        options={{
          title: "News",
          tabBarIcon: ({ color, focused, size }) => (
            <Entypo name="new" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
