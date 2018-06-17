import React, { Component } from 'react';
import {
  Alert,
  Linking
} from 'react-native';
import {Container,Text} from 'native-base';
import { CameraKitCameraScreen } from 'react-native-camera-kit';
//Redux
import { connect } from 'react-redux';
//Actions
import { changeConteudoQR } from '../../actions/QRScanAction';
import { Actions } from 'react-native-router-flux';

class QRScan extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      executed: false,
    }

    }

  onBottomButtonPressed(event) {
    const captureImages = JSON.stringify(event.captureImages);
    Alert.alert(
      `${event.type} button pressed`,
      `${captureImages}`,
      [
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: false }
    )
  }

  render() {
  
    return (
      <Container style={{flex:1,backgroundColor: '#fff799'}}>
        <CameraKitCameraScreen
          showFrame={true}
          scanBarcode={true}
          laserColor={"blue"}
          frameColor={"yellow"}
         
          //onReadCode={((event) => Alert.alert(`Qr code found ${event.nativeEvent.codeStringValue} `))}
          //onReadCode = {((event) => Linking.openURL(event.nativeEvent.codeStringValue).catch(err => console.error('Erro na leitura do QRCode', err)))}
          onReadCode = {
                          (event)=>{
                                    if(this.props.operation=="register") {
                                        Actions.resultado({operation:"register",conteudoqr:event.nativeEvent.codeStringValue});
                                    }else{
                                        Actions.resultado({operation:"read",conteudoqr:event.nativeEvent.codeStringValue});
                                    }                                     
                                      
                                    
                                   }
                       }
          hideControls={true} 
          offsetForScannerFrame = {50}  
          heightForScannerFrame = {600}  
          colorForScannerFrame={'blue'}
          style={{flex:1}}
        />
       </Container>
    );
  }
}
const mapStateToProps = state => ({
  conteudoQR: state.QRScanReducer.conteudoQR,
});
export default connect(mapStateToProps,{ changeConteudoQR })(QRScan);
