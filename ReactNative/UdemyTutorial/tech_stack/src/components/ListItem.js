import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions'; // * - import all action creators as actions..

class ListItem extends Component {

  renderDescription() {
    const { library, selectedLibraryId } = this.props;

    if (library.id === selectedLibraryId) {
      return (
        <Text>{library.description}</Text>
      );
    }
  }

  render() {
    const { titleStyle } = styles;
    const { id, title } = this.props.library;
    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {title}
            </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

const mapStateToProps = state => {
  // anyName : state.selectedLibraryId because
  //SelectedReducer is wired up to the key selectedLibraryId in the index.js of reducers.
  return { selectedLibraryId: state.selectedLibraryId };
};

//first argument of connect is exclusively for mapStateToProps..
//second arg..pass actions to the ListItem component as Props.
export default connect(mapStateToProps, actions)(ListItem);
