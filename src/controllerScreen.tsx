import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import LoginScreen from "./components/screens/LoginScreen";
import HomeScreen from "./components/screens/HomeScreen";
import DetalleScreen from "./components/screens/DetalleScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Detalle: {
    screen: DetalleScreen
  },
  Login: {
    screen: LoginScreen
  },
}, {initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#fea',
      },
      headerTintColor: '#555',
      headerTitleStyle: {
        fontWeight: '900'
      }
    }
});

export default createAppContainer(AppNavigator);