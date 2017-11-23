import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'

import AddPost from 'scenes/Home/components/AddPost/index';

class TimeLine extends Component {
  
  render() {
    return (
      <div>
       <AddPost />
      </div>

    );
  }
}

export default TimeLine;