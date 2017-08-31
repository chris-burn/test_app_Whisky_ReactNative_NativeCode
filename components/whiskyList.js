import React, { Component } from 'react';
import Realm from 'realm';
import schemas from './realm.js';
import { AppRegistry, ActivityIndicator, ListView, StyleSheet, Text, View } from 'react-native';


class WhiskiesScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  static navigationOptions = {
    title: 'Whiskies',
  };

  componentDidMount() {
    Realm.open({schema:[schemas.whiskySchema]})
      .then((realm) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(realm.objects('Whisky').sorted('distillery_bottler', false)),
        }, function() {
          // do something with new state
        });
      })
      .catch((error) => {
        console.error(error);
      });
      Realm.close;
  }

  render() {
    // The screen's current route is passed in to `props.navigation.state`
    const { params } = this.props.navigation.state;
    // failsafe
    if (this.state.isLoading) {
      return (
        <View style={styles.background}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={styles.background}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text style={styles.item}>{rowData.distillery_bottler}, {rowData.name}</Text> }
        />
      </View>
    );
  }


  
}

const styles = StyleSheet.create({
   background: {
     flex: 1,
     backgroundColor: 'lightsteelblue',
   },
   item: {
       padding: 10,
       fontSize: 18,
       height: 44,
    },
});

export default WhiskiesScreen;

AppRegistry.registerComponent('Test_App', () => Test_App);