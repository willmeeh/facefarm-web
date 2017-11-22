import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
  Button,
  Modal
} from 'react-bootstrap';

class MessageLog extends Component {

  handleClose = (e) => {
    e.preventDefault();
    this.props.dispatch({type: 'REMOVE_MESSAGE'});
  }

  componentDidMount(prevProps) {
    if (this.props.message.currentMessage) {
      setTimeout(() => {
        if (this.props.message.currentMessage) {
          this.props.dispatch({type: 'REMOVE_MESSAGE'});
        }
      }, 3500);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.message.currentMessage) {
      setTimeout(() => {
        if (this.props.message.currentMessage) {
          this.props.dispatch({type: 'REMOVE_MESSAGE'});
        }
      }, 3500);
    }
  }

  render() {
    return (
      <Modal show={this.props.message.currentMessage ? true : false} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {this.props.message.currentMessage && this.props.message.currentMessage.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {this.props.message.currentMessage && this.props.message.currentMessage.MSG}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.handleClose}>Fechar</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => ({
  message: state.message
});

export default connect(mapStateToProps)(MessageLog);

