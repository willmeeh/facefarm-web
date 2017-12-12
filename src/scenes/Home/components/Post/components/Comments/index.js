import React, { Component } from 'react';
import { Link, withRouter, Route, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux'

import * as api from 'scenes/Home/components/Post/components/Comments/api'

class Comments extends Component {

    state = {
        texto: ''
    }

    

    handleChangetexto = (event) => { this.setState({ texto: event.taget.value});  }

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            if (this.state.texto)
                api.create(this.state.texto)
                .then((result) => {
                    console.log(result)
                })
        }
      }


    render() {
        return (
            <div>
                <input 
                    onChange={this.handleChangetexto}
                    className="form-control input-sm"
                    type="text"
                    placeholder="Digite um comentário"
                />
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
