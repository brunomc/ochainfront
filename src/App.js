/* Core */
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk'
import Routes from './routes/Routes';
import reducers from './reducers';
import {YellowBox} from 'react-native'
YellowBox.ignoreWarnings(['Warning: ...']);


// import styles from './styles';

const App = () => (
	<Provider store={createStore(reducers,{},applyMiddleware(ReduxThunk))}>
  		<Routes />
  	</Provider>
);

export default App;
