import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function EachTask({ item }) {
  return (
    <View style={styles.eachTaskBox}>
      <Text>{item}</Text>
      <View style={styles.options}>
        <Button title="Edit" />
        <Button title="Delete" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  eachTaskBox: {
    width: "100%",
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  options: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
});
