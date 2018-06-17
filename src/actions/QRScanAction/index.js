import axios from 'axios';
export const changeConteudoQR = (conteudoQR ) => {
	//login via restful com axios
	return	{type:"modify_conteudoQR",payload:conteudoQR}
}
