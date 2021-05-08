import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/main.css';

class Profile extends React.Component {

  render() {
    return (
      <View style={styles.container}>
          
        <div class="profile-hero"></div>
        <div class="dp-holder"></div>

        <form class="user-dets mx-4">
          <div class="form-group">
            <label class="mx-1 px-2" style={{color: '#52BF9C'}}>Full Name</label>
            <input type="email" class="mb-3 mx-1 px-2" placeholder="First Name  Last Name" />
          </div>
          <div class="form-group">
            <label class="mx-1 px-2" style={{color: '#52BF9C'}}>Date of Birth</label>
            <input type="date" class="mb-3 mx-1 px-2" placeholder="dd/mm/yy" />
          </div>
          <div class="form-group">
            <label class="mx-1 px-2" style={{color: '#52BF9C'}}>Mobile Number</label>
            <input type="email" class="mb-3 mx-1 px-2" placeholder="+91 XXX XXXXXXX" />
          </div>
        </form>

        <div class="mx-5">
          <div class="submit-button mx-5 py-3 px-4 text-center">Log Out</div>
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


export default Profile;
