import React from "react";
import { TextInput, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#eee',
    height: 34,
    alignSelf: 'stretch',
    padding: 10,
    marginTop: 10,
  }
})

const Input = ({ onChange, value, onSubmit}: any) => {

  return (
    <TextInput 
      onSubmitEditing={onSubmit}
      onChangeText={onChange}
      value={value}
      style={styles.input}
    />
  )
}
export default Input;