import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Login() {
  return (
    <View style={styles.container}>
      <TextInput style= {styles.input1} placeholder='User Name'/>
      <TextInput style= {styles.input2} placeholder='Password'/>
      <TouchableOpacity style={styles.btn}>
          <Text style={{textAlign:'center', fontSize:18, color:'#ffffff'}}>Login</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    justifyContent:'center',
    alignItems:'center'
  },
  input1:{
    marginTop:'40%',
    padding: 10,
    borderWidth: 1,
    width:'80%',
    borderRadius:50,
  },
  input2:{
    marginTop:'10%',
    padding: 10,
    borderWidth: 1,
    width:'80%',
    marginBottom:'10%',
    borderRadius:50,
  },
  btn:{
    backgroundColor:'blue',
    padding:5,
    width:'60%',
    height:45,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:50,

  }
})