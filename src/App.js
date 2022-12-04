import logo from './logo.svg';
import './App.css';
import { Form, Container } from 'react-bootstrap';

import BtnCopy from './BtnCopy';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';





class App extends Component {
  state = { email: 'sad@gmail.com', password: '1234' }

  copyToClipboard = (e) => {
    // this.refEmail.select();
    e.target.select();
    document.execCommand('copy');
    // This is just personal preference.
    // I prefer to not show the whole text area selected.
    e.target.focus();
    this.setState({ copySuccess: 'Copied!' });
  };


  render() {
    return (
      <Container>
        <BtnCopy value={this.state.email} />
        <br />
        <br />
        <br />
        <br />
        <Form.Label onClick={() => {
          navigator.clipboard.writeText("this.props.value");

        }}>Email </Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={this.state.email} ref={(textarea) => this.refEmail = textarea} onClick={this.copyToClipboard.bind(this)} />




        <Form.Label>Password</Form.Label>
        <Form.Control placeholder="Enter password" value={this.state.password} ref={(textarea) => this.refPassword = textarea } onClick={this.copyToClipboard.bind(this)} />
        <BtnCopy value={this.state.password} />



      </Container>
    );
  }
}
export default App;
