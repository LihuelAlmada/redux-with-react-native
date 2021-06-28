import React from "react";
import { StyleSheet, Text, Button, View } from "react-native";
import ListItems from "../shared/ListItems";

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    height: 54,
    alignSelf: 'stretch',
    padding: 10,
    marginTop: 10,
    flex: 1,
  }
})

const HomeScreen = ({ navigation}:any) => {
  return (
    <View style={styles.container}>
      <ListItems/>
      <Text>HOME SCREEN</Text>
      <Button 
        title="Open detalle"
        onPress={() => navigation.push('Detalle')}
      />
    </View>
  )
}

export default HomeScreen;