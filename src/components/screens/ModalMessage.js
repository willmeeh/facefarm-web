import React, { Component } from 'react';

import {
  Popover,
  Tooltip,
  Button,
  Modal,
  OverlayTrigger
} from 'react-bootstrap';

class modalMessage extends Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false, titulo: '', coteudo: '' };
  }

  handleClose = (e) => {
    e.preventDefault();
    this.setState({ showModal: false });
  }

  componentWillReceiveProps(newProps) {
    this.setState({ titulo: newProps.titulo, coteudo: newProps.conteudo, showModal: newProps.showModal });
  }

  render() {
    return (
      <div>
        <Modal show={this.state.showModal} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.titulo}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.state.coteudo}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Fechar</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
};

export default modalMessage;
