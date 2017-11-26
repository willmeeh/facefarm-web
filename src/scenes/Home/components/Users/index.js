import React, { Component } from 'react';
import { Link, withRouter, Route, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux'

import User from 'scenes/Home/components/User/index'

class Users extends Component {
    render() {
        return (
            <div>
                {this.props.users && this.props.users.map((user) => {
                    return <User key={user._id} {...user} />;
                })}
            </div>
        );
    }
}

const mapStateToProps = (state, teste) => {
    return {
        user: state.session.user
    }
};

export default Users;
