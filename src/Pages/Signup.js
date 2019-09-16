import React, { Component } from 'react'

import {
  Text,
  View,
  StatusBar ,
  TouchableOpacity,
  Alert
} from 'react-native';
  
import Logo from '../components/Logo';
// import { createStackNavigator, createAppContainer } from 'react-navigation';
import InputText from '../components/InputText';
//styles
import styles from '../styles';
//redux stuffs
import {connect} from "react-redux";
import {compose} from "redux";
import { Field, reduxForm } from 'redux-form';

import {loginUser} from "../actions/index";

class Signup extends Component {
  
    onSubmit = (values) => {
       
        this.props.loginUser(values);
        this.props.navigation.navigate('Home')
       
      }
  
  renderTextInput = (field) => {
      const {meta: {touched, error}, label, secureTextEntry, maxLength, keyboardType, placeholder, input: {onChange, ...restInput}} = field;
      return (
          <View>
            <InputText
                onChangeText={onChange}
                maxLength={maxLength}
                placeholder={placeholder}
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry}
                label={label}
                {...restInput} />
          {(touched && error) && <Text style={styles.errorText}>{error}</Text>}
          </View>
      );
  }
  static navigationOptions = {
    header: null
  }
  render() {
  const { handleSubmit} = this.props;
  
  return(
    <View style={styles.container}>
      <Logo/>
      <Field
          name="handle"
          placeholder="handle"
          component={this.renderTextInput} />
      <Field
          name="email"
          placeholder="Email"
          component={this.renderTextInput} />
      <Field
          name="password"
          placeholder="Password"
          secureTextEntry={true}
          component={this.renderTextInput} />
      <TouchableOpacity style={styles.button} onPress={handleSubmit(this.onSubmit)}>
        <Text style={styles.buttonText}>SignUp</Text>
      </TouchableOpacity>
      <View style={styles.signupTextCont}>
        <Text style={styles.signupText}>Have an account already?</Text>
        <TouchableOpacity onPress={()=> this.props.navigation.navigate('Login')}><Text style={styles.signupButton}> Login</Text></TouchableOpacity>
      </View>
    </View>
    )
  }
}
const validate = (values) => {
    const errors = {};
    if(!values.handle) {
        errors.handle = "Handle is required"
    }
    if(!values.email) {
        errors.email = "Email is required"
    }
    if(!values.password) {
        errors.password = "Name is required"
    }
    return errors;
  };
  
  const mapStateToProps = (state) => ({
    user: state.user
  });
  
  const mapActionsToProps = {
    loginUser
  };
  
  
  export default compose(
  connect(mapStateToProps, mapActionsToProps),
  reduxForm({
    form: "signup",
    validate
  })
  )(Signup);
 
