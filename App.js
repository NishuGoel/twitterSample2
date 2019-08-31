// import React, { Component } from 'react';
// import { Platform, StyleSheet, Text, View } from 'react-native';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
// });

// export default class App extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>Welcome to React Native!</Text>
//         <Text style={styles.instructions}>To get started, edit App.js</Text>
//         <Text style={styles.instructions}>{instructions}</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });


import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Container, Header, Body,Title,Content,Input,Item,Button } from 'native-base';
import * as Font  from "expo-font";
import {Ionicons} from '@expo/vector-icons';
export default class App extends React.Component  {
 state = {
   loading: true
 }
 async componentDidMount() {
   await Font.loadAsync({
     'Roboto': require('./node_modules/native-base/Fonts/Roboto.ttf'),
     'Roboto_medium': require('./node_modules/native-base/Fonts/Roboto_medium.ttf'),
     ...Ionicons.font,
   })
   this.setState({ loading: false })
 }
 render(){
   if (this.state.loading) {
     return (
       <View></View>
     );
   }
   return (
       <Container style={styles.content}>
     <Header>
       <Body>
         <Title style={styles.watchFaceContainer}>UI Garage Twitter</Title>
       </Body>
     </Header>
     <Content>
        {/* <View ><Text>Username:</Text></View>
         <Item rounded>
         <Input placeholder='Username' />
       </Item> */}
       <View style={styles.username}>
         <Text style={styles.space}>Username:</Text>
           <Item rounded>
           <Input placeholder='Username'/>
         </Item>
         </View>
       <View ><Text style={styles.space}>Password:</Text></View>
         <Item rounded>
         <Input secureTextEntry={true} placeholder='Password'/>
       </Item>
       <Button style={styles.space} primary onPress= {this.handleSubmit}><Text style={styles.button}> Submit </Text>
       </Button>
     </Content>
   </Container>
   );
 }
}
const styles = StyleSheet.create({
 watchFaceContainer:{
 color:"yellow",
 marginLeft:100,
 },
 content:{
  marginTop:30,
  marginRight:30,
  marginLeft: 30
 },
 username:{
   display:"flex",
 },
 space:{
  marginTop: 20
 },
 button:{
  color:"yellow",
   marginLeft:150,
 }
})