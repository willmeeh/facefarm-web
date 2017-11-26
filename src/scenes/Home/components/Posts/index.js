import React, { Component } from 'react';
import { Link, withRouter, Route, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux'

import Post from 'scenes/Home/components/Post/index'
import * as postsApi from 'scenes/Home/components/Posts/api'

class Posts extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        console.log('this.props', this.props)
        
        postsApi.getPosts(this.props.usersIds).then((r) => {
            console.log('then', r)
            this.setState({
                posts: r.posts
            })
        }).catch((e) => {
            console.log('catch', e)
        })
    }

    
    componentWillReceiveProps(newProps) {
        postsApi.getPosts(newProps.usersIds).then((r) => {
            console.log('then', r)
            this.setState({
                posts: r.posts
            })
        }).catch((e) => {
            console.log('catch', e)
        })
    }

    render() {
        return (
            <div>
                
                {this.state.posts && this.state.posts.map((post) => {
                    {console.log('Posts props', this.props.refreshTimeLine)}
                    return <Post key={post._id} {...post} refreshTimeLine={this.props.refreshTimeLine} /> ;
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

export default Posts;