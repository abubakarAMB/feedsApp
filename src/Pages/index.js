import React, { Component } from 'react'
import { createStackNavigator, createAppContainer } from "react-navigation"
import { Provider as PaperProvider } from 'react-native-paper'
import { withNavigation } from 'react-navigation';
// components
import Home from './Home';
import Profile from './Profile';
import Settings from './Settings';

class index extends Component {
  render() {
    return (
      <PaperProvider>
								<SecureContainer />
			</PaperProvider>
    )
  }
}

const AppNavigator = createStackNavigator({
  Home,
  Profile,
  Settings
}, {
	headerMode: 'none',
	navigationOptions: {
		headerVisible: false
	}
})
  
const SecureContainer = createAppContainer(AppNavigator);

export default withNavigation(index);