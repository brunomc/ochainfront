import React, { Component } from 'react';
import { Container, Content,Card,CardItem, Body, Button, Text, Form,Item as FormItem, Input, Label } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { View, Alert, StatusBar, Image, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { ScrollView } from 'react-native';
//Redux
import { connect } from 'react-redux';
//Actions
import { changeContentQR } from '../../actions/QRScanAction';
import styles from './styles'
import { metrics, fonts, colors } from '../../styles';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
const logoOChain = require('../../assets/images/logoOChain.png');

class Resultado extends Component<Props> {
  constructor(props) {
    super(props);
    
    this.state = {
      conteudoqr:[],
      nome:'',
      fabricacao:'',
      fabricante:'',
      tracker:'',
      origemv: '',
      fabricacaov:'',
      fabricantev:'',
      trackerv:''
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
        conteudoqr:'',
        origemv: 'Origem do Produto:',
        fabricacaov:'Data de Fabricação:',
        fabricantev:'Fabricante do Produto:',
        trackerv:'Tracker do Produto:'

      })

     }
     if(this.props.operation=="register"){ 

      this.setState({
        conteudoqr:[],
      nome:'',
      fabricacao:'',
      fabricante:'',
      tracker:'',
      origemv: '',
      fabricacaov:'',
      fabricantev:'',
      trackerv:''

      })
     }
    })
    .catch(res =>{alert(res);}); 
    
    if(this.props.operation=="register"){
      this.setState({
        conteudoqr:[],
        nome:'',
      fabricacao:'',
      fabricante:'',
      tracker:''
      });
    }
   if(this.props.operation=="read"){
      this.setState({
        conteudoqr: this.props.qrcode
      });
    }
    
  }
 
	render() {
    return (
			<Container style={styles.container}>
        <ScrollView>
          <Container style={styles.containerPrincipal}>
            <Image source={logoOChain} style={styles.imageLogoApp} resizeMode="contain" />
          </Container>
                <Card>
                    <CardItem header bordered>
                      <Text>{this.props.qrcode.nameProduct}</Text>
                    </CardItem>
                    <CardItem bordered>
                      <Body>
                        <Text>
                          Fabricante: {this.props.qrcode.manufacturer}
                        </Text>
                      </Body>
                    </CardItem>
                    <CardItem bordered>
                      <Body>
                        <Text>
                          Rastreamento do produto: {this.props.qrcode.tracker}
                        </Text>
                      </Body>
                    </CardItem>
                    <CardItem footer bordered>
                      <Text>Fabricado em {this.props.qrcode.dateFabrication}</Text>
                    </CardItem>
                </Card>
         </ScrollView>
      </Container>
		);
	
  }  
}	
const mapStateToProps = state => ({
  qrcode: state.QRScanReducer.qrcode,
});
export default connect(mapStateToProps,{changeContentQR})(Resultado);