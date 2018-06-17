import React, { Component } from 'react';
import { Container, Content,Card,CardItem, Body, Button, Text, Form,Item as FormItem, Input, Label } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { View, Alert, StatusBar, Image, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
//Redux
import { connect } from 'react-redux';
//Actions
import { changeConteudoQR } from '../../actions/QRScanAction';
import styles from './styles'
import { metrics, fonts, colors } from '../../styles';
import Icon from 'react-native-vector-icons/Ionicons';
const logoOChain = require('../../assets/images/logoOChain.png');

class Principal extends Component<Props> {
  constructor(props) {
    super(props);
    
    this.state = {
      conteudoqr:''
    };
  }
  componentWillMount(){
    if(this.props.operation=="register"){
      this.setState({
        conteudoqr:"Produto salvo...Tracker Mode ON"
      });
    }
     if(this.props.operation=="read"){
      this.setState({
        conteudoqr:this.props.conteudoqr
      });
    }
  }

	render() {
		return (
			<Container style={styles.container}>
        <Container style={styles.containerPrincipal}>
              <Image source={logoOChain} style={styles.imageLogoApp} resizeMode="contain" />
              <Button style={styles.buttonScan} onPress={()=>{Actions.QRScan({operation:"register"});}} rounded>
            <Text style={styles.textButtonLogin} uppercase={false}>Register Product</Text>
          </Button>
          <Button style={styles.buttonScan} onPress={()=>{Actions.QRScan({operation:"read"});}} rounded>
            <Text style={styles.textButtonLogin} uppercase={false}>Reader Product</Text>
          </Button>
        </Container>
       
      </Container>
		);
	}	
}	
const mapStateToProps = state => ({
  qrcode: state.QRScanReducer.qrcode,
});
export default connect(mapStateToProps,{})(Principal);