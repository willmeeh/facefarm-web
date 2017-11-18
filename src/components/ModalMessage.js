import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
  Popover,
  Tooltip,
  Button,
  Modal,
  OverlayTrigger
} from 'react-bootstrap';

class ModalMessage extends Component {

  state = { showModal: true};

  handleClose = (e) => {
    e.preventDefault();
    this.setState({ showModal: false });
  }

  componentDidMount() {
    // setTimeout(() => {this.props.dispatch({type: 'REMOVE_MESSAGE'})}, 3500);
  }

  render() {
    return (
      <div>
        <Modal show={this.state.showModal} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.message.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.props.message.MSG}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Fechar</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
};

export default connect()(ModalMessage);
