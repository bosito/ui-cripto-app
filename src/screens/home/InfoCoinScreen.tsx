import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ActivityIndicator,
  useWindowDimensions,
} from "react-native";
import { HomeNavigationParams } from "../../navigation/interfaces";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { BlurView } from "expo-blur";
import useFech from "../../hooks/useFech";
import { Grafics } from "../../interfaces/interfaces";
import { LineChart } from "react-native-chart-kit";
import BackGroundLinearGradient from "../../components/BackGroundLinearGradient";
import { useHeaderHeight } from "@react-navigation/elements";

interface Props
  extends NativeStackScreenProps<HomeNavigationParams, "info_coin_screen"> {}

export default function InfoCoinScreen(props: Props) {
  const { navigation, route } = props;
  const { name, id, icon, symbol, price } = route.params;
  const headerHeigth = useHeaderHeight();
  const { width } = useWindowDimensions();
  const { handleFechGet, loading } = useFech();
  const [loadingScreen, setLoadingScreen] = useState<boolean>(true);
  const [chartList, setChartList] = useState<number[][]>([]);
  const [valueChartList, setValueChartList] = useState<number[]>([]);

  const getFormatDateList = (): number[] => {
    let valueList: number[] = [];

    chartList.forEach((item) => {
      valueList.push(item[1]);
    });

    return valueList;
  };

  useEffect(() => {
    navigation.setOptions({
      title: name,
    });
  }, [navigation]);

  useEffect(() => {
    (async () => {
      const response = await handleFechGet(`/charts?period=1m&coinId=${id}`);

      if (response) {
        const { chart }: Grafics = response;
        setChartList(chart);
        setLoadingScreen(false);
      }
    })();
  }, []);

  useEffect(() => {
    if (chartList.length > 0) {
      const dateList = getFormatDateList();
      setValueChartList(dateList);
    }
  }, [chartList]);

  return (
    <BackGroundLinearGradient paddingTop={headerHeigth}>
      {loading || loadingScreen ? (
        <ActivityIndicator
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          size="large"
          color="blue"
        />
      ) : (
        <View style={{ flex: 1, alignItems: "center" }}>
          <BlurView
            tint="default"
            intensity={50}
            style={{
              width: "90%",
              height: 90,
              borderRadius: 15,
              alignSelf: "center",
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 10,
            }}
          >
            <Image
              source={{ uri: icon }}
              style={{
                width: 60,
                height: 60,
                borderRadius: 50,
              }}
            />
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontWeight: "bold", color: 'white' }}>Precio</Text>
              <Text style={{ color: 'white' }} >
                {symbol} - {price.toFixed(2)} USD
              </Text>
            </View>
          </BlurView>

          <View>
            <LineChart
              data={{
                labels: [],
                datasets: [
                  {
                    data: valueChartList,
                    strokeWidth: 1,
                  },
                ],
              }}
              width={width - 16}
              height={220}
              withDots={false}
              withInnerLines={false}
              withOuterLines={false}
              chartConfig={{
                backgroundColor: "rgba(17, 255, 0, 0)",
                backgroundGradientFrom: "rgba(255, 255, 255, 1)",
                backgroundGradientTo: "rgba(255, 255, 255, 1)",
                decimalPlaces: 1,
                color: (opacity) => `rgba(0, 0, 0, ${opacity})`,
                fillShadowGradientFrom: "rgb(255, 0, 0)",
                style: {
                  borderRadius: 16,
                },
                propsForDots: {
                  r: "0",
                  strokeWidth: "1",
                  stroke: "#ffa726",
                },
              }}
              style={{
                marginVertical: 8,
                borderRadius: 16,
              }}
              transparent={true}
              bezier={true}
            />
          </View>
        </View>
      )}
    </BackGroundLinearGradient>
  );
}

const styles = StyleSheet.create({});
