import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function App() {

  const style = StyleSheet.create({
  
  })

  return (
    <View style={{flexDirection: "row-reverse"}} >
  
    <View style={{flex:2, backgroundColor: "red", justifyContent: "center", alignItems:"center", justifyContent:"center"}} >  
      <Text style={{color: "white"}}>
        Juan joel arango

      </Text>
      
    </View>

    <View style={{flex: 1, backgroundColor: "gray" , justifyContent:"center", alignItems:"center"}} >  
      <Text style={{color:"green"}} >
        Juan joel arango

      </Text>
      
    </View>
    </View>
    
  )
}


