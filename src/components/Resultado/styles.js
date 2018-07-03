import { StyleSheet } from 'react-native';
import { metrics, fonts, colors } from '../../styles';
export default StyleSheet.create({

	container:{
		backgroundColor: colors.primary,
		justifyContent: 'flex-start', 
	},
	containerPrincipal:{
		flex:1,
		alignItems: 'center',
		backgroundColor: '#000000',
		height: 300,
	},
	imageLogoApp:{
		width: 300,
		height: 300,
	}
});