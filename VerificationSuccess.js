import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import 'bootstrap/dist/css/bootstrap.min.css';

class VerificationSuccess extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <div class="success-icon"></div>
        
        <div class="info-message">Your account has been verified 
                 successfully !</div>

        <div class="land-one"></div>
        <div class="land-two"></div>

        <div class="lady"></div>
        
        <div class="submit-button mx-5 py-3 px-4 text-center">Done</div>
        
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


export default VerificationSuccess;
