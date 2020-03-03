/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  TextInput,
  Button
} from 'react-native';

import {
  
  Colors,
  
} from 'react-native/Libraries/NewAppScreen';



const App = () => {

  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    errors: {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  });

  const handleChange = (text, name) => {  
    setInputs({...inputs, [name]: text});
  }

  const handleSubmit = (e) => {
    setInputs({...inputs, name: inputs.name, email: inputs.email, password: inputs.password, confirmPassword: inputs.confirmPassword});
  }

  const disabled = inputs.name.length > 0 && inputs.email.length > 0 && inputs.password.length > 0 && inputs.confirmPassword.length ;

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View>
          <Text style={{textAlign: "center"}}>Sign Up</Text>
          
          <TextInput 
            name="name"
            placeholder="Name"
            onChangeText={(text)=>handleChange(text,'name')}
            value={inputs.name}
          />
          
          <TextInput 
            name = "email"
            placeholder="Email" 
            onChangeText={(text)=>handleChange(text,'email')}
            value={inputs.email}
          />
          <TextInput 
            name = "password"
            placeholder="Password"
            onChangeText={(text)=>handleChange(text,'password')}
            value={inputs.password}
          />

          <TextInput 
            name = "confirmPassword"
            placeholder="Confirm Password"
            onChangeText={(text)=>handleChange(text,'confirmPassword')}
            value={inputs.confirmPassword}
          />

          <Button
            title="Submit"
            onPress = {handleSubmit}
            disabled={!disabled}
          />

        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
