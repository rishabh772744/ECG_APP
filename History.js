import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/main.css';

class History extends React.Component {

  render() {
    return (
      <View style={styles.container}>
          <div class="mx-5 mt-3 row no-gutter text-center">
            <div class="col-6 inactive-button py-2">
              Measure
            </div>
            <div class="col-6 active-button py-2">
              History
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


export default History;
