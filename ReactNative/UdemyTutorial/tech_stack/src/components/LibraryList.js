import React, { Component } from 'react';
import { connect } from 'react-redux';

class LibraryList extends Component {
  render() {
    console.log(this.props); // expectation: it should have array of objects.. (libraries)
    return;
  }
}

// function takes global state object (that sits in our Redux store)
// and proivde them as Props to our LibraryList.
const mapStateToProps = state => {
  //objects returned from here will be shown as props to LibraryList component.
  return { libraries: state.libraries };
  //state.libraries is representation to our array of libraries set in LibraryReducer.
};

export default connect(mapStateToProps)(LibraryList);
//it calls the function connect .. connect returns another function..
//we then immediately call that function with LibraryList.

//why not simply connect(LibraryList)? :P
