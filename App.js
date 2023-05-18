import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View,TextInput, Button, TouchableOpacity } from 'react-native';
// import {buttons} from './screens/buttons'
import axios from 'axios';

export default function App() {


// useEffect(() => {
  


// },[final])



const array= ['gpi1oon','gpi1ooff']

const[ip,setIp]=useState("");
const[port,setPort]=useState("");
const[final,setFinal]=useState("")
const[signal,setSignal]=useState();
const[load,setLoad]=useState(0);
const[col,setCol]=useState("red");
const[status, setStatus]=useState("Connect")
const[flag1,setFlag1]= useState(0);
const[sw,setSw]=useState("red");



const view=()=>{
  return(
    <View style={{marginTop:20, display:'flex',flexDirection:'row', width:'100%', justifyContent:'space-around', marginStart:55}}>
      <View style={{flexDirection:'column',justifyContent:'space-around',  borderWidth: 1,
    borderRadius: 10, borderColor: "white", padding:10}}>
      <TouchableOpacity >
      <Button  color={sw} title='SWITCH 1'  onPress={()=>{

        if(!flag1){
          setSignal(array[0]);
          setFlag1(1);
          setSw('green')
          
        }
        else if(flag1){
          setSignal(array[1]);
          setFlag1(0);
          setSw('red')
          
        }
        axios.post(`http://${final}`, signal)
        .then(response => {
         console.log(response);
       }).catch((error) => console.log(error))

       axios.get(`http://${final}`)
       .then(response => {
         // Handle the response data
         console.log(response);
       })
       .catch(error => {
         // Handle any errors
         console.error(error);
       });
      }
    
      
    }



      
      
       />





      </TouchableOpacity>
      <TouchableOpacity style={{marginTop:10}}>
      <Button  title='SWITCH 2' />
      </TouchableOpacity>
      <TouchableOpacity style={{marginTop:10}}>
      <Button  title='SWITCH 3' />
      </TouchableOpacity>
      <TouchableOpacity style={{marginTop:10}}>
      <Button  title='SWITCH 4' />
      </TouchableOpacity>
      
      
      </View>
      <View style={{flexDirection:'column',justifyContent:'space-around',  borderWidth: 1,
    borderRadius: 10, borderColor: "white",padding:10}}>
      <TouchableOpacity >
      <Button  title='SWITCH 5' />
      </TouchableOpacity>
      <TouchableOpacity style={{marginTop:10}}>
      <Button  title='SWITCH 6' />
      </TouchableOpacity>
      <TouchableOpacity style={{marginTop:10}}>
      <Button  title='SWITCH 7' />
      </TouchableOpacity>
      <TouchableOpacity style={{marginTop:10}}>
      <Button  title='SWITCH 8' />
      </TouchableOpacity>
      
      </View>
      
     
    </View>
  )
}


const log= ()=>{
  let Final= ip.concat(":",port);
  // console.log(Final);
  setFinal(Final);
  setLoad(1)
  setCol('green')
  setStatus("Connected");
 
}
  return (
    <View style={styles.container}>


     <View style={styles.main}> 
      <TextInput style={styles.input1} inputMode='numeric' placeholder='Enter the IP Address:' placeholderTextColor='white' value={ip} onChangeText={(value)=>setIp(value)}></TextInput>
      <TextInput style={styles.input2} inputMode='numeric'  placeholder='Port Number:' placeholderTextColor='white'  value={port} onChangeText={(value)=>setPort(value)}></TextInput>
    </View>

    <View>
    <Button title={status} color={col} onPress={log}></Button>
    </View> 

    <View>
      {load==1? view(): null}
    </View>



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input1:{
    borderColor: "white",
    width: "60%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginRight:6,
    color:'white',
    marginBottom:10
    
  },
  input2:{
    borderColor: "white",
    width: "30%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    color:'white',
    marginBottom:10
  },
  main:{
    display:'flex',
    flexDirection:'row',
    
  }
});
