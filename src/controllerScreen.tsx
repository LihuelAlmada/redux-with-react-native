import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import LoginScreen from "./components/screens/LoginScreen";
import HomeScreen from "./components/screens/HomeScreen";
import DetalleScreen from "./components/screens/DetalleScreen";

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Detalle: {
    screen: DetalleScreen
  },
  Login: {
    screen: LoginScreen
  },
}, {initialRouteName: 'Login'});

export default createAppContainer(AppNavigator);