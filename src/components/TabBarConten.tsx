import { StyleSheet } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

export default function TabBarConten() {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={["#18234d", "#1b18a8"]}
      style={{ flex: 1, elevation: 0 }}
    ></LinearGradient>
  );
}

const styles = StyleSheet.create({});
