import React from "react";
import { StyleSheet, Text, Button, View } from "react-native";

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

const LoginScreen = ({ navigation}:any) => {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Button 
        title="Login"
        onPress={() => navigation.push('Home')}
      />
    </View>
  )
}

export default LoginScreen;