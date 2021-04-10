import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet, Pressable, Image } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function EachTask({
  item,
  handleEditButton,
  handleDeleteButton,
}) {
  const [editText, setEditText] = useState("");
  const [storeText, setStoreText] = useState("");
  const [openEdit, setOpenEdit] = useState(false);

  useEffect(() => {
    setStoreText(item.task);
  }, []);

  function onEditButtonPress() {
    if (editText != "") {
      handleEditButton(item.id, editText);
      setEditText("");
    }
  }

  return (
    <View>
      <View style={styles.eachTaskBox}>
        {/* <Text>{item.id}</Text> */}
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
          <Text>Edit Task</Text>
          <TextInput
            defaultValue={editText}
            // value={storeText}
            placeholder="Edit task"
            onChangeText={(text) => setEditText(text)}
            onSubmitEditing={onEditButtonPress}
          />
          <Button
            onPress={onEditButtonPress}
            title="Ok"
            color="#841584"
            accessibilityLabel="Edit Task"
          />
        </View>
      ) : (
        <></>
      )}
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

  eachTask: {
    fontSize: 20,
    width: "60%",
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
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 20,
    marginRight: 20,
  },

  options: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
});
