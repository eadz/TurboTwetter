import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Input, Button, Heading, Message } from 'rebass';

import Layout from '../../components/Layout';
import CsrfTag from '../../components/CsrfTag';

class NewSession extends Component {
  renderErrorMessages() {
    if(this.props.errors) {
      return this.props.errors.map((error, idx) => (
        <Message bg="red" size={1} key={idx}>{e}</Message>
      ))
    }
  }
  render() {
    return (
      <Layout>
        <Heading>Login</Heading>
        {this.renderErrorMessages()}
        <form action="/login" method="POST">
          <CsrfTag {...this.props.csrf} />
          <Input size={4} placeholder="username" name="username"/>

          <Button type="submit">Login</Button>
        </form>
      </Layout>
    );
  }
}

NewSession.propTypes = {
  errors: PropTypes.array
};

export default NewSession;
