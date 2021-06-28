import React, { useState, } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList} from "react-native";
import ListItem from "../ListItem";
import { connect } from "react-redux";
import Input from "../Input";
import { complete, saveTodo } from "../../reducers/todos";

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    margin: 10,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  list: {
    alignSelf: "stretch",
  },
  fadingContainer: {
    padding: 20,
    backgroundColor: "powderblue"
  },
  fadingText: {
    fontSize: 28
  },
  buttonRow: {
    flexBasis: 100,
    justifyContent: "space-evenly",
    marginVertical: 16
  }
});

const ListItems = ({ data, complete, submit }: any) => {
  const [value, setValue] = useState("");

  const handleChange = (val: any) => {
    setValue(val);
  };

  const handleSubmit = (val: any) => {
    submit(value);
    //vaciamos TextInput
    setValue("");
  };

  return(
    <View style={styles.container}>
      <Text>Lista Productos</Text>
      <Text>Lista Productos</Text>
      <Input 
        onSubmit={handleSubmit} 
        onChange={handleChange} 
        value={value} 
      />
      <FlatList
        style={styles.list}
        data={data}
        keyExtractor={(x) => String(x.id)}
        renderItem={({ item }) => (
          <ListItem
            completed={item.completed}
            onPress={() => complete(item.id)}
            desc={item.desc}
          />
        )}
      />
      <Text>Lista Productos</Text>

      <StatusBar style="auto" />
    </View>
  )
}
const mapStateToProps = (state: any) => {
  return { data: state.todos };
};

const mapDispatchToProps = (dispatch: any) => ({
  complete: (id: any) => dispatch(complete(id)),
  submit: (val: any) => dispatch(saveTodo(val)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListItems);