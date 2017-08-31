import React, { Component } from 'react';
import Icon from  'react-native-vector-icons/MaterialIcons';

class CheckBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data
    };
  }

  componentWillReceiveProps(props) {
    this.setState({
      data: props.data
    });
  }

  render() {
    let iconName = this.state.data.completed ? 'check-box' : 'check-box-outline-blank';
    let color = this.props.color || 'black';

    return (
      <Icon.Button
        data={this.state.data}
        name={iconName}
        backgroundColor='white'
        color={color}
        underlayColor='white'
        size={20}
        iconStyle={{marginLeft: -10, marginRight: 0}}
        activeOpacity={1}
        borderRadius={5}
        onPress={this.props.onCheckBoxPressed} >
      </Icon.Button>
    );
  }
}

export default CheckBox;