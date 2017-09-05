import React, { Component } from 'react';
import { connect } from 'react-redux';

class LibraryList extends Component {
  render() {
    return;
  }
}

export default connect()(LibraryList);
//it calls the function connect .. connect returns another function..
//we then immediately call that function with LibraryList.

//why not simply connect(LibraryList)? :P
