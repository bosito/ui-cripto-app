import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { News } from "../../interfaces/interfaces";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";

interface Props {
  item: News;
  onPress: () => void;
}

/**
 * @description no hay un previu de la noticia para mostrar por lo que veo en el api que me pidieron
 * por lo que obte por poner el icon, se que eso esta mal pero no encontre otra solucion ya que eso esria problema del backend.
 * @param props
 * @returns
 */

export default function CardNews(props: Props) {
  const { item, onPress } = props;
  const { title, icon, imgURL } = item;

  return (
    <View style={styles.container}>
      <BlurView
        tint="default"
        intensity={50}
        style={{ flex: 1, borderRadius: 10 }}
      >
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          colors={["rgba(255, 255, 255, 0.39)", "rgba(0, 0, 0, 0.13)"]}
          style={{ flex: 1, borderRadius: 10 }}
        >
          <Image
            source={{ uri: imgURL }}
            style={{ flex: 1, resizeMode: "contain" }}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              height: 60,
              paddingHorizontal: 10,
            }}
          >
            <Text style={{ width: "68%", overflow: "hidden", color: "white" }}>
              {title}
            </Text>
            <TouchableOpacity onPress={onPress} style={styles.button}>
              <Text style={{ color: "white" }}>Ir a la nota</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </BlurView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 250,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  button: {
    alignSelf: "center",
  },
});
