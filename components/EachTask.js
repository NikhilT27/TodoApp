import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
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
        <Text>{item.task}</Text>
        {/* <TextInput
          defaultValue={item.task}
          // value={storeText}
          onChangeText={(text) => setEditText(text)}
        /> */}

        <View style={styles.options}>
          <Button
            onPress={() => setOpenEdit(!openEdit)}
            title="Edit"
            color="#841584"
            accessibilityLabel="Edit Task"
          />
          <Button
            onPress={() => handleDeleteButton(item.id)}
            title="Delete"
            color="#841584"
            accessibilityLabel="Delete Task"
          />
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
