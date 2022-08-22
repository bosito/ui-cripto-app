import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  ActivityIndicator,
  Text,
} from "react-native";
import CardCoin from "../../components/home/CardCoin";
import BackGroundLinearGradient from "../../components/BackGroundLinearGradient";
import { useHeaderHeight } from "@react-navigation/elements";
import useFech from "../../hooks/useFech";

import { ListCoins, Coin } from "../../interfaces/interfaces";
import { HomeNavigationParams } from "../../navigation/interfaces";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

interface Props
  extends NativeStackScreenProps<HomeNavigationParams, "home_screen"> {}

export default function HomeScreen(props: Props) {
  const { navigation } = props;
  const { loading, handleFechGet, error } = useFech();
  const [listCoints, setlistCoints] = useState<Coin[]>([]);
  const [loadingScreen, setLoadingScreen] = useState<boolean>(true);
  const headerHeigth = useHeaderHeight();

  useEffect(() => {
    (async () => {
      const response = await handleFechGet(
        "/coins?skip=0&limit=10&currency=USD"
      );

      if (response) {
        const { coins }: ListCoins = response;
        setlistCoints(coins);
        setLoadingScreen(false);
      }
    })();
  }, []);

  return (
    <BackGroundLinearGradient paddingTop={headerHeigth} >
      <ScrollView >
        {loading || loadingScreen ? (
          <ActivityIndicator
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
            size="large"
            color="blue"
          />
        ) : listCoints.length === 0 ? (
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text>No hay monedas</Text>
          </View>
        ) : (
          listCoints.map((item, index) => {
            return (
              <CardCoin
                key={item.id}
                item={item}
                onPress={() => navigation.navigate("info_coin_screen", item)}
              />
            );
          })
        )}
      </ScrollView>
    </BackGroundLinearGradient>
  );
}

const styles = StyleSheet.create({});
