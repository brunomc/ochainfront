import React, { Component } from 'react';
import {
  Alert,
  View,
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native';
import BarcodeScreen from './BarcodeScreen';

export default class ReaderScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            codigoNota: undefined
        };
    }

  render() {
    if (this.state.codigoNota) {
        const codigoNotaScreen = this.state.codigoNota;
        return <codigoNotaScreen />;
    }
    return (
        <View style  = {styles.container}>
        <TouchableOpacity onPress={(() => this.setState({codigoNota : BarcodeScreen}))}>
            <Text style={styles.buttonText}>
              Voltar
            </Text>
          </TouchableOpacity>
        </View>
    );
  }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      // justifyContent: 'center',
      paddingTop: 60,
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    buttonText: {
      color: 'blue',
      marginBottom: 20,
      fontSize: 20
    }
  });


