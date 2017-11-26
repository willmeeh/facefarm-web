import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'

import AddPost from 'scenes/Home/components/AddPost/index';
import Posts from 'scenes/Home/components/Posts/index';

class TimeLine extends Component {

  render() {
    return (
      <div>
        <AddPost />
        <Posts usersIds={ {usersIds: [this.props.session.user._id]} } />
      </div>

    );
  }
}
const mapStateToProps = (state, teste) => {
  return {
    session: state.session
  }
};

export default withRouter(connect(mapStateToProps)(TimeLine));