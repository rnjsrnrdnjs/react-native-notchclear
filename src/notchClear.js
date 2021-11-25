import React, { Children } from "react";
import { View, Text, Dimensions, StyleSheet, StatusBar } from "react-native";

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const NotchProvider = (props) => {
  return <SafeAreaProvider>{props.children}</SafeAreaProvider>;
};

const NotchView = (props) => {
  let top, bottom, main;
  if (props.top === undefined) top = "#ffffff";
  if (props.bottom === undefined) bottom = "#ffffff";
  if (props.main === undefined) main = "#ffffff";

  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height * 0.2;

  return (
    <View style={{ flex: 1, backgroundColor: props.top || top }}>
      <View
        style={{
          height: windowHeight,
          width: windowWidth,
          bottom: 0,
          position: "absolute",
          backgroundColor: props.bottom || bottom,
        }}
      />
      <SafeAreaView
        edges={props.edges}
        style={{
          flex: 1,
        }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: props.main || main,
          }}
        >
          {props.children}
        </View>
      </SafeAreaView>
    </View>
  );
};

module.exports = { NotchView, NotchProvider };
