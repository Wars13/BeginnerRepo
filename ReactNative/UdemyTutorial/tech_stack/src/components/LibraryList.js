import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';

class LibraryList extends Component {

  // componentWillMount - lifecycle method..
  // all we have to do is define it.
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    //when we create ListView, we have to tel what DataSource it has to use
    this.dataSource = ds.cloneWithRows(this.props.libraries);
  }

  // renderRow - arbitray method name
  //used to insturct ListView how to render the list with property renderRow=<method>
  renderRow() {
    
  }

  render() {
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = state => {
  return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);
