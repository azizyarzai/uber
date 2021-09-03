import React from "react";
import { FlatList, Text, View } from "react-native";

const data = [
  {
    id: 1,
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: 2,
    title: "Order food",
    image: "https://links.papareact.com/28w",
    screen: "EatsScreen",
  },
];

const NavOptions = () => {
  return <FlatList />;
};

export default NavOptions;
