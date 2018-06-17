import React, { Component } from 'react';
import Principal from '../components/Principal';
import { createStackNavigator } from 'react-navigation';

const Router = createStackNavigator ({
	
	Principal: { screen: Principal },
	
});
export default Router; 