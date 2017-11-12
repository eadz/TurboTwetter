import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Input, Button, Heading, Message } from 'rebass';

import Layout from '../../components/Layout';
import CsrfTag from '../../components/CsrfTag';

class NewSession extends Component {
  renderErrorMessages() {
    if(this.props.errors) {
      return this.props.errors.map((error, idx) => (
        <Message bg="red" size={1} key={idx}>{error}</Message>
      ))
    }
  }
  render() {
    return (
      <Layout logged_in={this.props.logged_in}>
        <Heading>Login</Heading>
        {this.renderErrorMessages()}
        <form action="/login" method="POST" data-remote="true">
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
