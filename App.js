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
import { Container, Header, Body,Title,Content,Input,Item,Button, Thumbnail, Tab, Tabs, ScrollableTab } from 'native-base';
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
     {/* <Content>
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
     </Content> */}
    <Content>
      <View>
      <Thumbnail style={styles.space} large source={{uri:  'https://1.gravatar.com/avatar/1fbda2e908b67417796dd49920df93e6?s=256&d=identicon&r=G'}} />
      </View>
      <View style={styles.roww}>
        <Text style={styles.namespace} >Nishu Goel</Text>
        <Button style={styles.editBtn}><Text style={styles.editBtnText}>Edit Profile</Text></Button>
      </View>  
        <View>
        <Text>@DcoustaWilson</Text>
        </View>
        <View>
        <Text style={styles.space}>Bio:</Text>
        <Text>Practicing at UI Garage, IBM | Angular | VSO Volunteer</Text>
        </View>
        <View style={styles.roww}>
        <Thumbnail small source={{uri: 'https://png.pngtree.com/png-vector/20190115/ourmid/pngtree-vector-location-icon-png-image_317888.jpg'}} />
        <Text style={styles.leftmr}>Bengaluru, India</Text>
      </View>
       {/* <View style={styles.hrborder} /> */}

       <View style={styles.tabstyle} hasTabs/>
       <Tabs renderTabBar={()=> <ScrollableTab />}>
          <Tab heading="Tweets">
          <View style={styles.roww}><Thumbnail small source={{uri:  'https://1.gravatar.com/avatar/1fbda2e908b67417796dd49920df93e6?s=256&d=identicon&r=G'}} />
          <Text style={styles.leftmr}>Nishu Goel</Text>
          </View>  
            <View><Text>
            “Network-aware Preloading Strategy for Angular Lazy Loading” by @laco2net https://link.medium.com/2aS5L0NXAZ #angular #100DaysOfCode
            </Text></View>
            <View style={styles.roww}><Thumbnail small source={{uri: 'http://pngimg.com/uploads/ibm/ibm_PNG19653.png'}} />
            <Text style={styles.leftmr}>You and IBM India</Text>
            </View>
            <View><Text>
            You and IBM India @IBMIndiaJobs Ranjeetha Patil shares the importance of #skill building with the participants at the SheLeads meetup 🌈#SheLeadsWithIBM #TwitterTakeover @reerinsroy
            </Text></View>
          </Tab>
          <Tab heading="Replies">
          </Tab>
          <Tab heading="Media">
          </Tab>
          <Tab heading="Likes">
          </Tab>
          </Tabs>
    </Content>
   </Container>
   );
 }
}
const styles = StyleSheet.create({
 watchFaceContainer:{
 color:"white",
 marginLeft:100,
 fontSize: 20
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
 },
 editBtn:{
   marginTop: 20,
   borderColor: "blue",
   marginLeft: 70,
   width: 110
 },
 editBtnText:{
   paddingLeft: 25,
   color: "white",
 }, 
 namespace: {
  marginTop: 20,
  fontSize: 30
 },
 roww:{
  flexDirection: 'row'
 },
 leftmr:{
   marginTop: 8,
   marginLeft: 7,
   fontSize: 16,
   fontWeight: 'bold'
 },
 hrborder:{
  marginTop: 20,
  borderBottomColor: 'blue',
  borderBottomWidth: 2,
  width: '100%'
 },
 tabstyle:{
   marginTop: 20,
   width: '100%'
 }

})