import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'

export default function NavBar() {

  const[name,setName]=useState("Yasiru");
  
  const update=()=>{
    setName("Yasiru");
  }

  return (
    <View>
     <Text style={styles.text}>{name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text:{
    color:'red',
    
  }
})


