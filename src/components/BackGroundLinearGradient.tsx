import { StyleSheet, useWindowDimensions } from "react-native";
import React, { ReactNode } from "react";
import { LinearGradient } from "expo-linear-gradient";

interface Props {
  children?: ReactNode;
  paddingTop?: string | number;
}

export default function BackGroundLinearGradient({ children, paddingTop }: Props) {
  const { height, width } = useWindowDimensions();
  return (
    <LinearGradient
      colors={["#211d8b", "#231f5c", "#181838"]}
      style={{ flex: 1, height: height, width: width, paddingTop: paddingTop  }}
      //locations={[0, 0.5, 0.6]}
      start={{ x: 0, y: 0.25 }}
      end={{x: 0.9, y: 1}}
    >
      {children}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({});
