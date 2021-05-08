import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/main.css';

class UserDetails extends React.Component {

  render() {
    return (
      <View style={styles.container}>
          
          <div class="left-ellipse"></div>
          <div class="right-ellipse"></div>
          <div class="mid-ellipse"></div>

          <div class="page-header-center text-center">User Details</div>

          <form class="container mt-4 mx-4">
            <div class="form-group">
              <label class="mx-1 px-2">Full Name</label>
              <input type="email" class="mb-3 mx-1 px-2" placeholder="First Name  Last Name" />
            </div>
            <div class="form-group">
              <label class="mx-1 px-2">Date of Birth</label>
              <input type="date" class="mb-3 mx-1 px-2" placeholder="dd/mm/yy" />
            </div>
            <div class="form-group">
              <label class="mx-1 px-2">Emergency Contact Name</label>
              <input type="email" class="mb-3 mx-1 px-2" placeholder="First Name  Last Name" />
            </div>
            <div class="form-group">
              <label class="mx-1 px-2">Emergency Contact Number</label>
              <input type="email" class="mb-3 mx-1 px-2" placeholder="+91 XXX XXXXXXX" />
            </div>
          </form>

          <div class="add-contact mx-5 p-2 text-center">Add more contacts</div>

          <div class="mx-5 mb-5 mt-3 row">
            <div class="col-6">
              <button class="p-2 w-100 outline-green text-center">Later</button>
            </div>
            <div class="col-6">
              <button class="p-2 w-100 solid-green text-center">Done</button>
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


export default UserDetails;
