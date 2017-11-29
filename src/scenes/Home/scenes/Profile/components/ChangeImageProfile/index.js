import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
  Button,
  Modal
} from 'react-bootstrap';

import * as sessionSelectors from 'services/session/selectors';

import apiConfig from 'services/api/config';
import * as apiChangeImageProfile from 'scenes/Home/scenes/Profile/components/ChangeImageProfile/api'
import './styles.scss';

class MessageLog extends Component {

  state = { file: '', imagePreviewUrl: '' };

  _handleSubmit = () => {
    console.log('handle uploading-', this.state.file);
    let headers = new Headers();
    const accessToken = sessionSelectors.get().token;
    if (accessToken) {
      headers.append("x-auth", accessToken);
    }
    let form = new FormData(this.refs.myForm);
    form.append('myImage', this.state.file);
    fetch('http://localhost:4000/users/me/changeProfilePicture', {
      method: 'POST',
      body: form,
      headers: headers,
    }).then((res) => {
      console.log('res of fetch', res)
      this.props.handleClose();
    });

  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }

  render() {
    let { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }

    return (
      <Modal show={this.props.isChangintImgProfile} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Troca de imagem de perfil
        </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="previewComponent">
            <form>
              <input className="fileInput"
                type="file"
                onChange={(e) => this._handleImageChange(e)} />
            </form>
            <div className="imgPreview">
              {$imagePreview}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.handleClose}>Fechar</Button>
          <button
            className={'btn btn-primary'}
            onClick={this._handleSubmit}
          >
            Enviar
        </button>
        </Modal.Footer>
      </Modal>

    )
  }

  componentDidMount(prevProps) {
  }

  componentDidUpdate(prevProps, prevState) {
  }

}

const mapStateToProps = (state) => ({
  message: state.message
});

export default MessageLog;

