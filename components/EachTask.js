import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";

import EachTaskEdit from "./EachTaskEdit";

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

  function onDeleteButtonPress() {
    setOpenEdit(false);
  }

  function onTextChange(text) {
    setEditText(text);
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
        <EachTaskEdit
          onEditButtonPress={onEditButtonPress}
          onDeleteButtonPress={onDeleteButtonPress}
          editText={editText}
          onTextChange={onTextChange}
        />
      ) : (
        <></>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  eachTaskBoxMain: {
    marginBottom: 10,
    borderRadius: 20,
  },

  bullet: {
    width: 10,
    height: 10,
    backgroundColor: "#0095ff",
    borderRadius: 10,
    marginTop: 10,
    marginRight: 10,
  },

  eachTaskBox: {
    width: "95%",
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-evenly",
  },

  eachTask: {
    fontSize: 20,
    width: "70%",
    color: "black",
    marginBottom: 10,
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

  options: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
});
