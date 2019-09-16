import React, { Component } from 'react'

import {
  StyleSheet,
  Image,
  Text,
  View
  } from 'react-native';
  

class Logo extends Component {
    render() {
        return (
        <View style={styles.container}>
           <Image style={{width:40, height:70}} source={require('../images/icon.png')}/>
           <Text style={styles.logoText}>
               Feeds App
           </Text>
        </View>
        )
    }
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent:'center',
    alignItems:'center'
  },
  logoText:{
      marginVertical:15,
      fontSize: 18,
      color:'blue',
      fontWeight:'200'
  }
});
export default Logo
