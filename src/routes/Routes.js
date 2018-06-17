import React, { Component } from 'react';
import Principal from '../components/Principal';
import Resultado from '../components/Resultado';
import QRScan from '../components/QRScan';
import { Router , Scene } from 'react-native-router-flux';

export default props => (
	<Router>
		<Scene key="root">
		    <Scene key='principal' component={Principal} titleStyle={{color:'#ccab65'}} title="OChain - Security of Origin" hideNavBar={true} />
		    <Scene key='resultado' component={Resultado} titleStyle={{color:'#ccab65'}} title="OChain - Security of Origin" hideNavBar={false} />
		    <Scene key='QRScan' component={QRScan} title="OChain - Security of Origin" hideNavBar={false} />					
		</Scene>
	</Router>
);
