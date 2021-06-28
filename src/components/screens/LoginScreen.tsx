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

const LoginScreen = ({ navigation}:any) => {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Button 
        title="Open detalle"
        onPress={() => navigation.push('Home')}
      />
    </View>
  )
}

  export default LoginScreen;