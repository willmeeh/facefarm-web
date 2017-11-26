import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'

import AddPost from 'scenes/Home/components/AddPost/index';
import Posts from 'scenes/Home/components/Posts/index';

class TimeLine extends Component {

  refreshTimeLine = () => {
    this.forceUpdate();
  }

  render() {
    return (
      <div>
        <AddPost refreshTimeLine={this.refreshTimeLine} />
        <Posts usersIds={ {usersIds: [this.props.session.user._id]} } refreshTimeLine={this.refreshTimeLine} />
      </div>

    );
  }
}
const mapStateToProps = (state) => {
  return {
    session: state.session
  }
};

export default withRouter(connect(mapStateToProps)(TimeLine));