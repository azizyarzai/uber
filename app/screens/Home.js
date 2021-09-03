import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Screen from "../components/Screen";
import tw from "tailwind-react-native-classnames";
import NavOptions from "../components/NavOptions";

const Home = () => {
  return (
    <Screen>
      <View style={tw`pl-5`}>
        <Image
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
          style={styles.img}
        />
        <NavOptions />
      </View>
    </Screen>
  );
};

export default Home;

const styles = StyleSheet.create({
  img: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
});
