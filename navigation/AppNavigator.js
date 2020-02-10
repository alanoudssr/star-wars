import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import ListScreen from '../screens/ListScreen';

const screens = {

  Home: {
    screen: HomeScreen,
    navigationOptions: { headerShown: false }

  },

  List: {
    screen: ListScreen,
  },

  Login: {
    screen: LoginScreen,

  },
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
