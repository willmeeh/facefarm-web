import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import './semantic/dist/semantic.min.css';

import { Button } from 'semantic-ui-react'
import { Menu } from 'semantic-ui-react'

class App extends Component {
  render() {
    const { activeItem } = this.state || {}
    

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Menu vertical>
        <Menu.Item>
          <Menu.Header>Products</Menu.Header>

          <Menu.Menu>
            <Menu.Item name='enterprise' active={activeItem === 'enterprise'} onClick={this.handleItemClick} />
            <Menu.Item name='consumer' active={activeItem === 'consumer'} onClick={this.handleItemClick} />
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>CMS Solutions</Menu.Header>

          <Menu.Menu>
            <Menu.Item name='rails' active={activeItem === 'rails'} onClick={this.handleItemClick} />
            <Menu.Item name='python' active={activeItem === 'python'} onClick={this.handleItemClick} />
            <Menu.Item name='php' active={activeItem === 'php'} onClick={this.handleItemClick} />
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Hosting</Menu.Header>

          <Menu.Menu>
            <Menu.Item name='shared' active={activeItem === 'shared'} onClick={this.handleItemClick} />
            <Menu.Item name='dedicated' active={activeItem === 'dedicated'} onClick={this.handleItemClick} />
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Support</Menu.Header>

          <Menu.Menu>
            <Menu.Item name='email' active={activeItem === 'email'} onClick={this.handleItemClick}>
              E-mail Support
            </Menu.Item>

            <Menu.Item name='faq' active={activeItem === 'faq'} onClick={this.handleItemClick}>
              FAQs
            </Menu.Item>
          </Menu.Menu>
        </Menu.Item>
      </Menu>
      </div>
    );
  }
}

export default App;
