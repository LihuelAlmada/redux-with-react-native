import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import ListItem from "./components/ListItem";
import { connect } from "react-redux";
//import { Data } from "../types";
import { complete } from "./reducers/todos";

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
const App = ({data, complete }:any) => {
	return(
		<View style={styles.container}>
      <Text>Lista Productos</Text>
			<FlatList
        style={styles.list}
        data={data}
        keyExtractor={x => String(x.id)}
        renderItem={({item}) =>
          <ListItem 
            onPress={() => complete(item.id)} 
            desc={item.desc}
          />
          }
      />
			<StatusBar style="auto" />
		</View>
	)
}
const mapStateToProps = (state: any) => {
  return {data: state.todos}
}
const mapDispatchToProps = (dispatch: any) => ({
  complete: (id:any) => dispatch(complete(id))
})
export default connect(mapStateToProps, mapDispatchToProps)(App)

