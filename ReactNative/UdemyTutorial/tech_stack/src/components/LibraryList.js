import React, { Component } from 'react';
import { connect } from 'react-redux';

class LibraryList extends Component {
  render() {
    return;
  }
}

// function takes global state object (that sits in our Redux store)
// and proivde them as Props to our LibraryList.
const mapStateToProps = state => {
  console.log(state);
};

export default connect(mapStateToProps)(LibraryList);
//it calls the function connect .. connect returns another function..
//we then immediately call that function with LibraryList.

//why not simply connect(LibraryList)? :P
