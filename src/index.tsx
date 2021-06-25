import React, { useState, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import { Animated, StyleSheet, Text, View, FlatList, SafeAreaView, Button} from "react-native";
import ListItem from "./components/ListItem";
import { connect } from "react-redux";
import Input from "./components/Input";
import { complete, saveTodo } from "./reducers/todos";

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
//complete and submit no son los importados de reducers/todos, sino los atributos de mapDispatchToProps
const App = ({ data, complete, submit }: any) => {
  const [value, setValue] = useState("");

  // fadeAnim will be used as the value for opacity. Initial Value: 0
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const numb:number = 1
  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    } ).start();
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };

  const handleChange = (val: any) => {
    setValue(val);
  };

  const handleSubmit = (val: any) => {
    submit(value);
    //vaciamos TextInput
    setValue("");
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
      <Animated.View
        style={[
          styles.fadingContainer,
          {
            // Bind opacity to animated value
            opacity: fadeAnim
          }
        ]}
      >
        <Text style={styles.fadingText}>Fading View!</Text>
      </Animated.View>
        <View style={styles.buttonRow}>
          <Button title="Fade In View" onPress={fadeIn} />
          <Button title="Fade Out View" onPress={fadeOut} />
        </View>
      </SafeAreaView>
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
      <StatusBar style="auto" />
    </View>
  );
};

const mapStateToProps = (state: any) => {
  return { data: state.todos };
};

const mapDispatchToProps = (dispatch: any) => ({
  complete: (id: any) => dispatch(complete(id)),
  submit: (val: any) => dispatch(saveTodo(val)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
