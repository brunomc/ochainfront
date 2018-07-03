const INITIAL_STATE ={
	qrcode:[],
	
};

export default (state = INITIAL_STATE, action) => {
	console.log("Payload",action.payload);
	switch (action.type){
		case 'modify_contentQR': {
			return { ...state, qrcode: action.payload}
		}
		default: {
			return state;
		}

	}
	return state;
}