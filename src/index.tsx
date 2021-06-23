import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import ListItem from "./components/ListItem";
import { connect } from "react-redux";
//import { Data } from "../types";
import { todos } from "./reducers";

const styles = StyleSheet.create({
  container: {
    margin: 20,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  list: {
    alignSelf: 'stretch',
  }
});
const App = ({todos}:any) => {
	return(
		<View style={styles.container}>
      <Text>Lista Productos</Text>
			<FlatList
        style={styles.list}
        data={todos}
        keyExtractor={x => String(x.id)}
        renderItem={({item}) =>
          <ListItem 
            onPress={() => {}} 
            desc={item.desc}

          />
          }
      />
			<StatusBar style="auto" />
		</View>
	)
}
const mapStateToProps = (state: any) => {
  console.log('state', state)
  return state
}

export default connect(mapStateToProps)(App)

