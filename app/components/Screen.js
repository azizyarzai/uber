import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import Constants from "expo-constants";
import tw from "tailwind-react-native-classnames";

const Screen = ({ style, children }) => {
  return (
    <SafeAreaView style={[tw`bg-white h-full`, styles.screen, style]}>
      {children}
    </SafeAreaView>
  );
};

export default Screen;

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
  },
});
