import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/main.css';

class Home extends React.Component {

  constructor() {
    super();
    this.loadInitialState();
    this.changeDeviceState = this.changeDeviceState.bind(this);
  }

  loadInitialState() {
    this.state = { device: "off",
                    };
  }

  changeDeviceState() {
    this.setState({
      device: "on",
    })
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.device === "off" ?
        <> 
          <div class="mx-5 mt-3 row no-gutter text-center">
            <div class="col-6 active-button py-2">
              Measure
            </div>
            <div class="col-6 inactive-button py-2">
              History
            </div>
          </div>
          <div class="my-3 mx-5 text-center" style={{ fontFamily: 'Poppins'}}>Device Status: OFF</div>

          <div class="mx-5 text-center" style={{ fontFamily: 'Poppins'}}>
            <img class="heartbeat" src="https://i.ibb.co/RjgJz70/Group-6894.png" />
          </div>

          <div class="mx-5">
            <div class="mt-5">
              Select your most recent activity:
              <div class="mt-3 text-left">
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                  <label class="form-check-label" for="flexRadioDefault1">
                    Sleeping
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                  <label class="form-check-label" for="flexRadioDefault2">
                    Sitting
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" defaultChecked />
                  <label class="form-check-label" for="flexRadioDefault2">
                    Walking
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" />
                  <label class="form-check-label" for="flexRadioDefault2">
                    Running
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault5" />
                  <label class="form-check-label" for="flexRadioDefault2">
                    Workout
                  </label>
                </div>
              </div>
            </div>
            <div class="submit-button mx-5 py-3 px-4 text-center" onClick={this.changeDeviceState}>Start</div>
          </div>  
          </> : "" }
          {this.state.device === "on" ?
        <> 
          <div class="mx-5 mt-3 row no-gutter text-center">
            <div class="col-6 active-button py-2">
              Measure
            </div>
            <div class="col-6 inactive-button py-2">
              History
            </div>
          </div>
          <div class="my-3 mx-5 text-center" style={{ fontFamily: 'Poppins'}}>Device Status: ON</div>

          <div class="mx-5 text-center bg-dark-heart py-4">
            <div class="bpm-style">72 BPM</div>
            <img class="mt-3 heartbeat-dark" src="https://i.ibb.co/rbXL1ct/Frame.png" />
          </div>

          <div class="my-3 mx-5 text-center">FITNESS STATUS: <b>GOOD</b></div> 

          <div class="text-center py-4">
            <img class="mt-3 line-chart" src="https://i.ibb.co/GMJdwyQ/Line-chart.png" />
          </div>
         
          </> : "" }
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


export default Home;
