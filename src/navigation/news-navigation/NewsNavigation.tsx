import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NewsScreen from "../../screens/news/NewsScreen";
import InfoNewsScreen from "../../screens/news/InfoNewsScreen";
import { NewsNavigationParams } from "../interfaces";

const Stack = createNativeStackNavigator<NewsNavigationParams>();

export default function NewsNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="news_screen"
      screenOptions={{
        headerShadowVisible: false,
        headerTintColor: "white",
        headerTitleStyle: { fontWeight: "bold" },
        headerTransparent: true,
        animation: "fade",
        statusBarStyle: "light",
        statusBarTranslucent: true
      }}
    >
      <Stack.Screen
        name="news_screen"
        component={NewsScreen}
        options={{ headerTitle: "BitiU" }}
      />
      <Stack.Screen
        name="info_news_screen"
        component={InfoNewsScreen}
        options={{
          headerTitle: "News BitiU",
          headerStyle: { backgroundColor: "#2724a2" },
          headerTransparent: false,
        }}
      />
    </Stack.Navigator>
  );
}
