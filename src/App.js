import React, {Component} from 'react'
// import { StatusBar, View,} from 'react-native'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//redux 
import store from './reducers/store';
import {Provider} from 'react-redux';
// import Content from './components/counter.js';

// components
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Home from './Pages/Home';

export default class App extends Component {
	render() {
		return	(
			   <Provider store= {store}>
				   <AppContainer />
			   </Provider>
			
		)
	}
}

const AppNavigator = createStackNavigator(
	{
	  Home: Home,
	  Login: Login,
	  Signup: Signup
	},
	{
	  initialRouteName: 'Login',
	}
);
const AppContainer = createAppContainer(AppNavigator);