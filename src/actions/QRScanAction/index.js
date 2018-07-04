import axios from 'axios';
import { Actions } from 'react-native-router-flux';
export const changeContentQR = (contentQR ) => {
	
	try {
	  var qrProduct = JSON.parse(contentQR);
    } catch (e) {
      
    }
	console.log(qrProduct);
	return dispatch=>{
		if(qrProduct) {
			axios.get('https://ochain.herokuapp.com/api/data/product/'+qrProduct.id).then(res=>{
				getContentSuccess(res,dispatch);
			}).catch(res=>{
				console.log(res);
			});
		} else {
			getContentError({},dispatch);
		}
	}
}
const getContentSuccess =(res,dispatch) => {
	console.log(res.data);
	dispatch({type:'modify_contentQR',payload:res.data});
	Actions.resultado();
}
const getContentError =(res,dispatch) => {
	dispatch({type:'modify_contentQR',payload:{}});
	Actions.resultado();
}