import React, { Component } from 'react';
import { Container, Content,Card,CardItem, Body, Button, Text, Form,Item as FormItem, Input, Label } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { View, Alert, StatusBar, Image, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { ScrollView } from 'react-native';
//Redux
import { connect } from 'react-redux';
//Actions
import { changeConteudoQR } from '../../actions/QRScanAction';
import styles from './styles'
import { metrics, fonts, colors } from '../../styles';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
const logoOChain = require('../../assets/images/logoOChain.png');

class Resultado extends Component<Props> {
  constructor(props) {
    super(props);
    
    this.state = {
      conteudoqr:'',
      nome:'',
      fabricacao:'',
      fabricante:'',
      tracker:''
    };
  }
  componentWillMount(){
   axios.get('http://10.4.216.149:3000/api/data/products')
    .then(res =>{
      console.log(res.data)
    if(this.props.operation=="read"){  
      this.setState({
        nome:res.data[0],
        fabricacao:res.data[1],
        fabricante:res.data[2],
        tracker:res.data[3],
        conteudoqr:''
      })
     }
    })
    .catch(res =>{alert(res);}); 
    
    if(this.props.operation=="register"){
      this.setState({
        conteudoqr:"Produto salvo...Tracker Mode ON",
        nome:'',
      fabricacao:'',
      fabricante:'',
      tracker:''
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
        <ScrollView>
        <Container style={styles.containerPrincipal}>
            <Image source={logoOChain} style={styles.imageLogoApp} resizeMode="contain" />
            <Card style={{height:100, width:300}}>
            <CardItem header>
              <Text>Panel of Operation Products</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  {this.state.conteudoqr}
                </Text>
                <Text>
                  <Text style={{fontWeight: 'bold' }}>Origem do Produto: </Text>{this.state.nome}
                </Text>
                <Text>
                  <Text style={{fontWeight: 'bold' }}>Data de Fabricação: </Text>{this.state.fabricacao}
                </Text>
                <Text>
                  <Text style={{fontWeight: 'bold' }}>Tracker do Produto: </Text>{this.state.tracker}
                </Text>
              </Body>
            </CardItem>
            
            <CardItem footer>
              <Text style={{fontWeight: 'bold' }}>Data de Leitura: </Text><Text>17/06/2018</Text>
            </CardItem>
         </Card> 
        </Container>
       </ScrollView>
      </Container>
		);
	}	
}	
const mapStateToProps = state => ({
  qrcode: state.QRScanReducer.qrcode,
});
export default connect(mapStateToProps,{})(Resultado);