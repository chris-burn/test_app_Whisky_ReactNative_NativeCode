import React from 'react';
import Realm from 'realm';
import WhiskiesScreen from './whiskyList.js'
import schemas from './realm.js';
import seeds from '../seeds.js';
// import Styles from './components/styles';
import { AppRegistry, StyleSheet, Text, View, Button, Image, TextInput, ActivityIndicator, ListView } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { TabNavigator } from 'react-navigation';


class SplashScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {realm: null};
  }

  static navigationOptions = {
    title: 'ScotWhiskyPal',
  };


  componentDidMount() {
   Realm.open({schema:[schemas.whiskySchema]})
   .then(realm => {
    realm.write(() => {
      let whiskies = Array.from(realm.objects('Whisky'))
      for (var whisky of seeds) {
        if (whiskies.length < seeds.length){
          realm.create('Whisky', whisky);
          this.setState({ realm: realm});
        }
        else
          this.setState({ realm: realm});
      }})
  }, (error) => {console.log(error)} )  
   Realm.close;

// feed objects from whisky db table to array to utilise objects
   // Realm.open({schema:[schemas.whiskySchema]})
   // .then(realm => {
   //  realm.write(() => {
   //   let whiskies = Array.from(realm.objects('Whisky'));
   //   console.log(whiskies);
   // })
   // }, (error) => {console.log(error)} )   
   // Realm.close;


// delete entries to whisky db table
  //  Realm.open({schema:[schemas.whiskySchema]})
  //  .then(realm => {
  //   realm.write(() => {
  //     let allWhiskies = realm.objects('Whisky');
  //     realm.delete(allWhiskies);
  //     this.setState({ realm: realm});
  //   })
  // }, (error) => {console.log(error)} )   
  //  Realm.close;
}

  render() {
    const { navigate } = this.props.navigation;
    
    // const info = this.state.realm
    //   ? 'Number of objects in this Realm: ' + this.state.realm.objects("Whisky")
    //     : 'Loading...'; 

    return (
     <View style={styles.container}>
     <Image source={{uri: 'https://www.scotchwhiskyexperience.co.uk/app_assets/frontend/stock/whisky_glass-37e2de97ad5529ed4ca927bf19836f1e.png'}}
            style={{padding: 100, width: 200, height: 200}}/>
     <Text></Text>
     <Text style={styles.titleText}>Slàinte!</Text>
     <Text></Text>
     <Button
     onPress={() => navigate('Whiskies')}
     title="View Whiskies"
     />
     <Button
     onPress={() => navigate('Collection', {user: 'Chris'})}
     title="My Collection"
     />
     <Button
     onPress={() => navigate('TasteWish')}
     title="Tastings & WishList"
     />
     <Button
     onPress={() => navigate('Distilleries')}
     title="Discover Distilleries"
     />
     </View>
     );
  }
}

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

class CollectionScreen extends React.Component {
  static navigationOptions = {
    title: 'My Collection',
  };

  render() {
    // The screen's current route is passed in to `props.navigation.state`
    const { params } = this.props.navigation.state;
    return (
      <View style={styles.container}>
        <Text>{params.user}'s Collection</Text>
      </View>
    );
  }
}

class DistilleriesScreen extends React.Component {
  static navigationOptions = {
    title: 'Distilleries',
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>List of Distilleries</Text>
      </View>
    );
  }
}

class Tastings extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
      <Text>List of Tastings</Text>
      <Button
      onPress={() => navigate('AddTasting')}
      title="Add Tasting"
      />
      </View>
      );
  }
}

class WishList extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
      <Text>Wishlist</Text>
      </View>
      );
  }
}

// Add tasting via form
class AddTastingScreen extends React.Component {
  constructor(props) {
      super(props);
      this.state = {text: ''};
    }
  static navigationOptions = {
    title: 'Add Tasting',
  }
  render(){
    const {params} = this.props.navigation.state;
    return (
      <View style={styles.container}>
        <Text>Add Tasting via Form (local storage)</Text>
        <TextInput
        style={{height: 40}}
        placeholder="Type here!"
        onChangeText={(text) => this.setState({text})}
        />
      </View>
    );
  }
}


// controls tabs
const TasteWishNavigator = TabNavigator({
  Taste: { screen: Tastings },
  Wish: { screen: WishList },
});

TasteWishNavigator.navigationOptions = {
  title: 'Tastings and Wishlist'
};

// stack nav controller
const Test_App = StackNavigator({
  Splash: { screen: SplashScreen },
  Whiskies: { screen: WhiskiesScreen },
  Collection: {screen: CollectionScreen },
  Distilleries: {screen: DistilleriesScreen },
  TasteWish: {screen: TasteWishNavigator },
  AddTasting: {screen: AddTastingScreen },
});

// common stylings
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightsteelblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default Test_App;

AppRegistry.registerComponent('Test_App', () => Test_App);