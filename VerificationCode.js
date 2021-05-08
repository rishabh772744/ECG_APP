import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import 'bootstrap/dist/css/bootstrap.min.css';

class VerificationCode extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <div class="page-header green-head">Verification <br/>Code</div>
        <div class="verify">Please enter the verification code sent to <b>+91 635 8768123</b></div>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3D4E52',
    minHeight: '100vh',
    width: '100vw',
    overflow: 'hidden',
  },
});


export default VerificationCode;
