import { StatusBar } from 'expo-status-bar';
import * as React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from "react-redux";
import { combineReducers, createStore } from 'redux';
import * as reducers from "./src/reducers";


const MiApp = () => {
  return(
    <View style={styles.container}>
      <Text>Open up Aqdwqwdqwdwqd app!</Text>
      <StatusBar style="auto" />
    </View>
  )
}

const store = createStore(combineReducers({
  ...reducers,
}))

export default function App() {
  return (
    <Provider store={store}>
      <MiApp />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
