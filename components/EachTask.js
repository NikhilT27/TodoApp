import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet, Pressable, Image } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function EachTask({
  item,
  handleEditButton,
  handleDeleteButton,
}) {
  const [editText, setEditText] = useState("");
  const [openEdit, setOpenEdit] = useState(false);

  function onEditButtonPress() {
    if (editText != "") {
      handleEditButton(item.id, editText);
      setEditText("");
      setOpenEdit(false);
    }
  }

  return (
    <View style={styles.eachTaskBoxMain}>
      <View style={styles.eachTaskBox}>
        <View style={styles.bullet}></View>
        <Text style={styles.eachTask}>{item.task}</Text>

        <View style={styles.options}>
          <Pressable
            onPress={() => setOpenEdit(!openEdit)}
            accessibilityLabel="Edit Task"
            style={styles.buttonPressable}
          >
            <Image
              style={styles.editLogo}
              source={require("../assets/images/edit.png")}
            ></Image>
          </Pressable>
          <Pressable
            onPress={() => handleDeleteButton(item.id)}
            accessibilityLabel="Delete Task"
            style={styles.buttonPressable}
          >
            <Image
              style={styles.editLogo}
              source={require("../assets/images/trash-bin.png")}
            ></Image>
          </Pressable>
        </View>
      </View>
      {openEdit ? (
        <View style={styles.editTaskBox}>
          <View style={styles.editTaskInputBox}>
            {/* <Text style={styles.editTaskTitle}>Edit Task</Text> */}
            <TextInput
              style={styles.editTaskInput}
              multiline={true}
              defaultValue={editText}
              placeholder="Edit task"
              onChangeText={(text) => setEditText(text)}
              onSubmitEditing={onEditButtonPress}
            />
          </View>
          <View style={styles.editTaskOption}>
            <Pressable
              onPress={() => setOpenEdit(false)}
              accessibilityLabel="Close Edit Task"
            >
              <Text style={styles.cancelButton}>Cancel</Text>
            </Pressable>
            <Pressable
              onPress={onEditButtonPress}
              accessibilityLabel="Submit Edit Task"
            >
              <Text style={styles.optionButton}>OK</Text>
            </Pressable>
          </View>
        </View>
      ) : (
        <></>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  bullet: {
    width: 10,
    height: 10,
    backgroundColor: "#0095ff",
    borderRadius: 10,
  },
  eachTaskBoxMain: {
    marginBottom: 10,
    borderRadius: 20,
  },

  eachTaskBox: {
    width: "95%",
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  eachTask: {
    fontSize: 20,
    width: "60%",
    color: "black",
  },

  editTaskTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "black",
    marginBottom: 10,
  },

  editTaskInputBox: {
    width: "100%",
  },

  editTaskInput: {
    textAlignVertical: "top",
    width: "100%",
    fontSize: 20,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 10,
  },

  editTaskOption: {
    flexDirection: "row",
    marginTop: 10,
  },

  optionButton: {
    fontSize: 16,
    fontWeight: "700",
    color: "#0095ff",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    marginLeft: 10,
  },

  cancelButton: {
    fontSize: 16,
    fontWeight: "700",
    color: "white",
    backgroundColor: "#0095ff",
    borderRadius: 10,
    padding: 10,
    marginLeft: 10,
  },

  buttonPressable: {
    padding: 10,
  },

  editLogo: {
    width: 20,
    height: 20,
  },

  editTaskBox: {
    alignSelf: "flex-end",
    width: "90%",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
    borderRadius: 20,
    borderColor: "lightgray",
    padding: 20,
    marginRight: 20,
    backgroundColor: "#0095ff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 2,
  },

  options: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
});
