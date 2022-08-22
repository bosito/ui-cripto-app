import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ActivityIndicator,
} from "react-native";

import CardNews from "../../components/news/CardNews";
import useFech from "../../hooks/useFech";
import BackGroundLinearGradient from "../../components/BackGroundLinearGradient";
import { Newslist, News } from "../../interfaces/interfaces";
import { NewsNavigationParams } from "../../navigation/interfaces";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useHeaderHeight } from "@react-navigation/elements";

interface Props
  extends NativeStackScreenProps<NewsNavigationParams, "news_screen"> {}

export default function NewsScreen(props: Props) {
  const { navigation } = props;
  const headerHeigth = useHeaderHeight();
  const { loading, handleFechGet, error } = useFech();
  const [listNews, setListNews] = useState<News[]>([]);
  const [loadingScreen, setLoadingScreen] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      const response = await handleFechGet("/news/latest?skip=0&limit=20");

      if (response) {
        const { news }: Newslist = response;
        setListNews(news);
        setLoadingScreen(false);
      }
    })();
  }, []);

  return (
    <BackGroundLinearGradient paddingTop={headerHeigth} >
      <ScrollView>
        {loading || loadingScreen ? (
          <ActivityIndicator
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
            size="large"
            color="blue"
          />
        ) : listNews.length === 0 ? (
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text>No hay noticias</Text>
          </View>
        ) : (
          listNews.map((item) => {
            return (
              <CardNews
                key={item.id}
                item={item}
                onPress={() =>
                  navigation.navigate("info_news_screen", { link: item.link })
                }
              />
            );
          })
        )}
      </ScrollView>
    </BackGroundLinearGradient>
  );
}

const styles = StyleSheet.create({});
