import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/main.css';

class MobileVerification extends React.Component {

  render() {
    return (
      <View style={styles.container}>
          <div class="circle-three"></div>
          <div class="circle-two"></div>
          <div class="circle-one"></div>

          <div class="page-header">Mobile <br/>Verification</div>
          
          <div class="page-subtitle">Please enter your mobile number to verify your account</div>

          <div class="mt-4 mx-4">
            <input class="mb-2 mx-1 px-2" type="text" placeholder="Country Code"/>
            <input class="mb-2 mx-1 px-2" type="text" placeholder="Mobile Number"/>
          </div>

          
          <div class="my-5 text-center">
            <div class="arrowButton" onClick={() => this.props.navigation.navigate('user-details')}>
          </div>
          

          

          </div>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100vw',
    overflow: 'hidden',
    backgroundColor: '#fff',
    minHeight: '100vh',
  },
});


export default MobileVerification;
