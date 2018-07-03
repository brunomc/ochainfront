import axios from 'axios';
import { Actions } from 'react-native-router-flux';
export const changeContentQR = (contentQR ) => {
	return dispatch=>{
		axios.get('https://ochain.herokuapp.com/api/data/products').then(res=>{
			getContentSuccess(res,dispatch);
		}).catch(res=>{
			console.log(res);
		});
	}
}
const getContentSuccess =(res,dispatch) => {
	console.log(res.data);
	dispatch({type:'modify_contentQR',payload:res.data});
	Actions.resultado();
}
const getContentError =(res,dispatch) => {
	dispatch({type:'modify_contentQR',payload:[]});
	Actions.conta();
}