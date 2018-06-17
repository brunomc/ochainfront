import { StyleSheet } from 'react-native';
import { metrics, fonts, colors } from '../../styles';
export default StyleSheet.create({

	container:{
		
		backgroundColor: colors.primary,

	},
	containerPrincipal:{
		
		justifyContent: 'center',
		alignItems: 'center',
		
	},
	containerFooter:{
		flex: 1,
	},
	buttonFooter:{
		backgroundColor: colors.primary, 
		marginTop: 10,
	},
	textButtonFooter:{
		color: colors.secondary,
	},
	imageLogoApp:{
		width: 300,
		height: 300,
	},
	buttonScan:{
		backgroundColor: "#090F1C",
		width:200,
		height:80,
		marginTop: 5,
		alignItems: 'center',
		justifyContent: 'center',
		alignSelf: 'center',

	},
	textButtonLogin:{
		fontWeight: 'bold', 
	},

});