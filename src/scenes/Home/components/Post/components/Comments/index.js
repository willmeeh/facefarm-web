import React, { Component } from 'react';
import { Link, withRouter, Route, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux'

class Comments extends Component {
    render() {
        return (
            <div>
                <input className="form-control input-sm" type="text" placeholder="Digite um comentário" />
            </div>
        );
    }
}

const mapStateToProps = (state, teste) => {
    return {
        user: state.session.user
    }
};

export default Comments;
