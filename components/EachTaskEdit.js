import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function EachTaskEdit({
  onEditButtonPress,
  onDeleteButtonPress,
  editText,
  onTextChange,
}) {
  return (
    <View style={styles.editTaskBox}>
      <View style={styles.editTaskInputBox}>
        <Text style={styles.editTaskTitle}>Edit Task</Text>
        <TextInput
          style={styles.editTaskInput}
          multiline={true}
          defaultValue={editText}
          placeholder="Edit task"
          onChangeText={onTextChange}
          onSubmitEditing={onEditButtonPress}
        />
      </View>
      <View style={styles.editTaskOption}>
        <Pressable
          onPress={onDeleteButtonPress}
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
  );
}

const styles = StyleSheet.create({
  editTaskTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "white",
    marginBottom: 10,
  },

  editTaskInputBox: {
    width: "100%",
  },

  editTaskInput: {
    width: 300,
    height: "auto",
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
});
