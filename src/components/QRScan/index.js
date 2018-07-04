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
import { changeContentQR } from '../../actions/QRScanAction';
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
  _readQR(contentQR){
      this.props.changeContentQR(contentQR);
      
     Actions.resultado({operation:"read"});
  }
  _registerProduct(contentQR){
    
    
  }

  render() {
  
    return (
        <CameraKitCameraScreen
          showFrame={true}
          scanBarcode={true}
          laserColor={"blue"}
          frameColor={"yellow"}
          offsetForScannerFrame={15} 
          heightForScannerFrame={400}   
          //onReadCode={((event) => Alert.alert(`Qr code found ${event.nativeEvent.codeStringValue} `))}
          //onReadCode = {((event) => Linking.openURL(event.nativeEvent.codeStringValue).catch(err => console.error('Erro na leitura do QRCode', err)))}
          onReadCode = {
                          (event)=>{

                                    if(this.props.operation == "register") {
                                       if (!this.state.executed) {
                                          this.setState({
                                            executed: true
                                          });
                                        }
                                        this._registerProduct(event.nativeEvent.codeStringValue);
                                      
                                    }else{
                                       if (!this.state.executed) {
                                        this.setState({
                                          executed: true
                                        });
                                      }
                                        this._readQR(event.nativeEvent.codeStringValue);
                                      
                                    }                                     
                                      
                                    
                                   }
                       }
        />
      );
  }
}
const mapStateToProps = state => ({
  qrcode: state.QRScanReducer.qrcode,
});
export default connect(mapStateToProps,{ changeContentQR })(QRScan);
