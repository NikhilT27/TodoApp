import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { FlatList, ScrollView, TextInput } from "react-native-gesture-handler";
import EachTask from "./components/EachTask";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");
  const renderItem = ({ item }) => {
    return (
      <View>
        <EachTask item={item}></EachTask>
      </View>
    );
  };

  function handleEditButton(data) {
    let index = tasks.findIndex(data);
  }

  function onAddButton() {
    if (text !== "") {
      setTasks([...tasks, text]);
      setText("");
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.appTitleBox}>
        <Text style={styles.appTitle}>TODO APP</Text>
        <Text style={styles.appSub}>Add New Task !!</Text>
      </View>
      <View style={styles.addTaskBox}>
        <TextInput
          style={styles.taskInput}
          placeholder="Type here to translate!"
          onChangeText={(text) => setText(text)}
          value={text}
        ></TextInput>
        <Button
          onPress={onAddButton}
          title="Add Task"
          color="#841584"
          accessibilityLabel="Add Task"
        />
      </View>
      <View style={styles.storedTaskbox}>
        <FlatList
          data={tasks}
          renderItem={renderItem}
          keyExtractor={(item) => item}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  appTitleBox: {
    // flex: 3,
    paddingTop: 100,
    width: "100%",
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  addTaskBox: {
    // flex: 1,
    padding: 20,
    width: "100%",
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  taskInput: {
    padding: 10,
    width: 200,
    height: 50,
    backgroundColor: "white",
  },

  storedTaskbox: {
    // flex: 4,
    alignItems: "center",
    width: "100%",
  },

  appTitle: {
    fontSize: 30,
    fontWeight: "700",
  },

  appSub: {
    fontSize: 18,
    fontWeight: "400",
  },
});
