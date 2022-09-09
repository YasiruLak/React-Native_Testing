import React from "react";
import {View,Text, Button} from "react-native";
import LoginBtn from "./components/LoginBtn";
import NavBar from "./components/NavBar";
import TextField from "./components/TextField";




function App(){
  return(
    <View>
      <Text>Hello Ijse</Text>
      <Button title="Hellow New One"/>
      <NavBar/>
      <LoginBtn/>
      <TextField/>
    </View>
  );
}

export default App;
