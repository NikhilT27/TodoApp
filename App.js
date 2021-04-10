import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button, Pressable, Image } from "react-native";
import { FlatList, ScrollView, TextInput } from "react-native-gesture-handler";
import EachTask from "./components/EachTask";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");
  const renderItem = ({ item }) => {
    return (
      <View>
        <EachTask
          handleEditButton={handleEditButton}
          handleDeleteButton={handleDeleteButton}
          item={item}
        ></EachTask>
      </View>
    );
  };

  function handleEditButton(id, text) {
    console.log(id);
    console.log(text);

    let newTasks = tasks.map((each) => {
      if (text != "") {
        if (each.id === id) {
          return { id: id, task: text };
        }
      }

      return each;
    });

    setTasks([...newTasks]);
  }

  function handleDeleteButton(id) {
    let newTasks = tasks.filter((each) => each.id !== id);
    setTasks([...newTasks]);
  }

  function onAddButton() {
    if (text !== "") {
      let id =
        text.split(" ").join("") + Math.floor(Math.random() * 10000).toString();
      setTasks([...tasks, { id: id, task: text }]);
      setText("");
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.appTitleBox}>
        <Text style={styles.appTitle}>TODO APP</Text>
        <Text style={styles.appSub}>Add New Task !!</Text>
      </View>
      <View style={styles.addTaskBoxRelative}>
        <View style={styles.addTaskBox}>
          <View style={styles.taskInputBox}>
            <Text style={styles.taskInputTitle}>Add Task</Text>
            <TextInput
              style={styles.taskInput}
              placeholder="Enter Task"
              onChangeText={(text) => setText(text)}
              value={text}
            ></TextInput>
          </View>
          <Pressable style={styles.addButton} onPress={onAddButton}>
            <Text style={styles.addButtonText}>+</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.storedTaskbox}>
        <Text style={styles.tasksTitle}>TASKS</Text>
        <FlatList
          data={tasks}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  appTitleBox: {
    paddingTop: 100,
    paddingBottom: 100,
    width: "100%",
    backgroundColor: "#0095ff",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  taskInputBox: {
    width: "100%",
  },

  taskInputTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 10,
  },

  addTaskBoxRelative: {
    marginBottom: -60,
  },

  addTaskBox: {
    top: -60,
    alignSelf: "center",
    flexDirection: "row",
    padding: 20,
    width: "80%",
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
  },

  addButton: {
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    backgroundColor: "#0095ff",
    textAlign: "center",
  },

  addButtonText: {
    textAlign: "center",
    height: 40,
    fontSize: 30,
    color: "white",
    fontWeight: "200",
  },

  taskInput: {
    width: "100%",
    padding: 20,
    paddingTop: 0,
    fontSize: 24,
  },

  storedTaskbox: {
    flex: 4,
    alignItems: "center",
    width: "100%",
  },

  appTitle: {
    fontSize: 40,
    fontWeight: "700",
    color: "white",
  },

  appSub: {
    fontSize: 16,
    fontWeight: "400",
    color: "white",
  },

  tasksTitle: {
    marginLeft: "5%",
    marginTop: "5%",
    fontSize: 20,
    fontWeight: "700",
    alignSelf: "flex-start",
  },
});
