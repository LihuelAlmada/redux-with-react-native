import React from "react";
import { StyleSheet, Text, Button, View} from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    height: 150,
    alignSelf: 'stretch',
    padding: 10,
    marginTop: 10,
  }
});

const DetalleScreen = ({ navigation}:any) => {
  return (
    <View style={styles.container}>
      <Text>DETALLE SCREEN</Text>
      <Button 
        title="logout"
        onPress={() => navigation.push('Login')}
      />
    </View>
  )
}

export default DetalleScreen;