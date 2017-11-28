import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'

import AddPost from 'scenes/Home/components/AddPost/index';
import Posts from 'scenes/Home/components/Posts/index';

class TimeLine extends Component {

  refreshTimeLine = () => {
    this.forceUpdate();
  }

  getListUsers = () => {
    let usersIds = [];
    usersIds.push(this.props.session.user._id)
    if (this.props.session.listFollowing) {
      this.props.session.listFollowing.forEach((item) => {
        usersIds.push(item._id);
      });
    }
    return usersIds;
  }

  render() {
    return (
      <div>
        <AddPost refreshTimeLine={this.refreshTimeLine} />
        <Posts usersIds={this.getListUsers()} refreshTimeLine={this.refreshTimeLine} />
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