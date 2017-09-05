import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions'; // * - import all action creators as actions..


class ListItem extends Component {
  render() {
    const { titleStyle } = styles;
    console.log(this.props);
    
    return (
      <CardSection>
        <Text style={titleStyle}>
          {this.props.library.title}
        </Text>
      </CardSection>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

//first argument of connect is exclusively for mapStateToProps..
//second arg..pass actions to the ListItem component as Props.
export default connect(null, actions)(ListItem);
