import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/main.css';

import { Backdrop } from "react-native-backdrop";

class EmergencyContacts extends React.Component {

  constructor() {
    super();
    this.loadInitialState();
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  loadInitialState() {
    this.state = { visible: false,
                    };
  }

  handleOpen() {
    this.setState({
      visible: true
    })
  }

  handleClose() {
    this.setState({
      visible: false
    })
  }

  render() {
    return (
      <>
        <View style={styles.container}>
          <div class="mx-5 mt-3 login-head">Emergency Contacts</div>


          <div class="mx-5 mt-3">
            <div class="p-3 mt-2 contact-card" onClick={this.handleOpen}>
              <div class="row">
                <div class="col-3">
                </div>
                <div class="col-9">
                  <span style={{color: '#52BF9C'}}><b>Add New</b></span>
                  <div class="mt-5">
                    Add New Contact
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-5">
              <div class="p-3 mt-2 contact-card">
                <div class="row">
                  <div class="col-3">
                  </div>
                  <div class="col-9">
                    <span style={{color: '52BF9C'}}><b>Aniruddh Vyas</b></span>
                    <div class="mt-5">
                      +91 986 7347256
                    </div>
                  </div>
                </div>
              </div>
              <div class="p-3 mt-2 contact-card">
                <div class="row">
                  <div class="col-3">
                  </div>
                  <div class="col-9">
                    <span style={{color: '52BF9C'}}><b>Neha Singh</b></span>
                    <div class="mt-5">
                      +91 986 7347256
                    </div>
                  </div>
                </div>
              </div>
              <div class="p-3 mt-2 contact-card">
                <div class="row">
                  <div class="col-3">
                  </div>
                  <div class="col-9">
                    <span style={{color: '52BF9C'}}><b>Siddharth Vyas</b></span>
                    <div class="mt-5">
                      +91 986 7347256
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </View>

        <Backdrop
          visible={this.state.visible}
          handleOpen={this.handleOpen}
          handleClose={this.handleClose}
          onClose={() => {}}
          swipeConfig={{
            velocityThreshold: 0.3,
            directionalOffsetThreshold: 80,
          }}
          animationConfig={{
            speed: 14,
            bounciness: 4,
          }}
          overlayColor="rgba(0,0,0,0.32)"
          backdropStyle={{
            backgroundColor: '#fff',
          }}>
          <View>
            <Text>Backdrop Content</Text>
          </View>
        </Backdrop>
      </>
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


export default EmergencyContacts;
