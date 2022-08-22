import React from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import { NewsNavigationParams } from "../../navigation/interfaces";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { WebView } from "react-native-webview";

interface Props
  extends NativeStackScreenProps<NewsNavigationParams, "info_news_screen"> {}

export default function InfoNewsScreen(props: Props) {
  const { route } = props;
  const { link } = route.params;

  return (
    <View style={{ flex: 1 }}>
      <WebView
        style={{ flex: 1 }}
        startInLoadingState={true}
        source={{ uri: link }}
        renderLoading={() => (
          <ActivityIndicator
            color="blue"
            size="large"
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
