const INITIAL_STATE ={
	qrcode:{},
	
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type){
		case 'modify_conteudoQR': {
			return { ...state, qrcode: action.payload}
		}
		default: {
			return state;
		}

	}
	return state;
}