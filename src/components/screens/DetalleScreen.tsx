import React from "react";
import { StyleSheet, Text, Button, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    height: 54,
    alignSelf: 'stretch',
    padding: 10,
    marginTop: 10,
  }
})

const DetalleScreen = ({ navigation}:any) => {
  return (
    <View style={styles.container}>
      <Text>DETALLE SCREEN</Text>
      <Button 
        title="Open detalle"
        onPress={() => navigation.goBack()}
      />
    </View>
  )
}

export default DetalleScreen;