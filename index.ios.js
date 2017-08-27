/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
 
 'use strict';

 import './main';

 // import React from 'react';
 // import Realm from './components/realm.js';
 // // import Styles from './components/styles';
 // import { AppRegistry, StyleSheet, Text, View, Button, Image } from 'react-native';
 // import { StackNavigator } from 'react-navigation';
 // import {TabNavigator} from 'react-navigation';

 // class SplashScreen extends React.Component {
 //   static navigationOptions = {
 //     title: 'Welcome',
 //   };

 //   render() {
 //     const { navigate } = this.props.navigation;
 //     return (
 //      <View style={styles.container}>
 //      <Image source={{uri: 'https://www.scotchwhiskyexperience.co.uk/app_assets/frontend/stock/whisky_glass-37e2de97ad5529ed4ca927bf19836f1e.png'}}
 //             style={{width: 300, height: 300}}/>
 //      <Text></Text>
 //      <Text>Welcome to ScotWhiskyPal!</Text>
 //      <Button
 //      onPress={() => navigate('Whiskies', {user: 'Chris'})}
 //      title="View Whiskies"
 //      />
 //      <Button
 //      onPress={() => navigate('Collection', {user: 'Chris'})}
 //      title="My Collection"
 //      />
 //      <Button
 //      onPress={() => navigate('TasteWish', {user: 'Chris'})}
 //      title="Tastings & WishList"
 //      />
 //      <Button
 //      onPress={() => navigate('Distilleries', {user: 'Chris'})}
 //      title="Discover Distilleries"
 //      />
 //      </View>
 //      );
 //   }
 // }

 // class WhiskiesScreen extends React.Component {
 //   static navigationOptions = {
 //     title: 'View Whiskies',
 //   };
 //   render() {
 //     // The screen's current route is passed in to `props.navigation.state`
 //     const { params } = this.props.navigation.state;
 //     return (
 //       <View style={styles.container}>
 //         <Text>List of Whiskies</Text>
 //       </View>
 //     );
 //   }
 // }

 // class CollectionScreen extends React.Component {
 //   static navigationOptions = {
 //     title: 'My Collection',
 //   };
 //   render() {
 //     // The screen's current route is passed in to `props.navigation.state`
 //     const { params } = this.props.navigation.state;
 //     return (
 //       <View style={styles.container}>
 //         <Text>{params.user}'s Collection</Text>
 //       </View>
 //     );
 //   }
 // }

 // class DistilleriesScreen extends React.Component {
 //   static navigationOptions = {
 //     title: 'Distilleries',
 //   };
 //   render() {
 //     return (
 //       <View style={styles.container}>
 //         <Text>List of Distilleries</Text>
 //       </View>
 //     );
 //   }
 // }

 // class Tastings extends React.Component {
 //   render() {
 //     const { navigate } = this.props.navigation;
 //     return (
 //       <View style={styles.container}>
 //       <Text>List of Tastings</Text>
 //       <Button
 //       onPress={() => navigate('AddTasting', {user: 'Chris'})}
 //       title="Add Tasting"
 //       />
 //       </View>
 //       );
 //   }
 // }

 // class WishList extends React.Component {
 //   render() {
 //     const { navigate } = this.props.navigation;
 //     return (
 //       <View style={styles.container}>
 //       <Text>Wishlist</Text>
 //       <Button
 //       onPress={() => navigate('AddToWishList', {user: 'Chris'})}
 //       title="Add to Wishlist"
 //       />
 //       </View>
 //       );
 //   }
 // }

 // // Add tasting via form
 // class AddTastingScreen extends React.Component {
 //   static navigationOptions = {
 //     title: 'Add Tasting',
 //   }
 //   render(){
 //     const {params} = this.props.navigation.state;
 //     return (
 //       <View style={styles.container}>
 //         <Text>Add Tasting via Form</Text>
 //       </View>
 //     );
 //   }
 // }

 // // Add to WishList via form
 // class AddToWishListScreen extends React.Component {
 //   static navigationOptions = {
 //     title: 'Add to Wishlist',
 //   }
 //   render(){
 //     const {params} = this.props.navigation.state;
 //     return (
 //       <View style={styles.container}>
 //         <Text>Add To WishList via Form</Text>
 //       </View>
 //     );
 //   }
 // }

 // // controls tabs
 // const TasteWishNavigator = TabNavigator({
 //   Taste: { screen: Tastings },
 //   Wish: { screen: WishList },
 // });

 // TasteWishNavigator.navigationOptions = {
 //   title: 'Tastings and Wishlist'
 // };

 // // stack nav controller
 // const Test_App = StackNavigator({
 //   Splash: { screen: SplashScreen },
 //   Whiskies: { screen: WhiskiesScreen },
 //   Collection: {screen: CollectionScreen },
 //   Distilleries: {screen: DistilleriesScreen },
 //   TasteWish: {screen: TasteWishNavigator },
 //   AddTasting: {screen: AddTastingScreen },
 //   AddToWishList: {screen: AddToWishListScreen },
 // });

 // // common stylings
 // const styles = StyleSheet.create({
 //   container: {
 //     flex: 1,
 //     backgroundColor: 'lightblue',
 //     alignItems: 'center',
 //     justifyContent: 'center',
 //   },
 // });

 // export default Test_App;

 // AppRegistry.registerComponent('Test_App', () => Test_App);
