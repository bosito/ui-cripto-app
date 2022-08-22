import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Coin } from '../../interfaces/interfaces';

interface Props {
  item: Coin,
  onPress?: () => void;
};

export default function CardCoin(props: Props) {
  const { item, onPress } = props;
  const { icon, name, symbol, price } = item;

  return (
    <View style={styles.container}>
      <View style={styles.conTitle}>
        <Image
        source={{ uri: icon }}
        style={{ flex: 1, resizeMode: 'contain' }}
        />
      </View>
      <View style={{ flex: 1, marginLeft: 8 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold", color: 'white' }}>{name}</Text>
        <Text style={{ color: 'white' }}>{symbol} - {price.toFixed(2)} USD</Text>
      </View>
      <TouchableOpacity onPress={onPress} >
        <Entypo name="info-with-circle" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    marginVertical: 2
  },
  conTitle: {
    width: "24%",
    height: "70%",
    maxWidth: 100,
    borderRadius: 100,
  },
});
