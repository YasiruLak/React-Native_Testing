import { View, Text } from 'react-native'
import React from 'react'
import { NativeBaseProvider, Box, Button } from "native-base";

export default function HomePage() {
  return (
    <NativeBaseProvider>
      <Box alignItems="center">Hello world
      <Button onPress={() => console.log("hello world")} size="md" colorScheme="primary">Click Me To Login For Web</Button>
      </Box>
      
    </NativeBaseProvider>
  )
}