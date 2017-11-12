import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Input, Button, Heading, Message } from 'rebass';

import Layout from '../../components/Layout';
import CsrfTag from '../../components/CsrfTag';
import ErrorMessages from '../../components/ErrorMessages';

const SideBar = () => (
  <p>New to Twetter? <a href="/signup">Signup Here</a></p>
)

class NewSession extends Component {

  render() {
    return (
      <Layout sidebar={SideBar} logged_in={this.props.logged_in} logged_in_user={this.props.logged_in_user}>
        <Heading>Login</Heading>
        <ErrorMessages errors={this.props.errors} />
        <form action="/login" method="POST" data-remote="true">
          <CsrfTag {...this.props.csrf} />
          <Input placeholder="username" name="username" autoComplete="off" style={{margin: '10px', width: '200px'}} />
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
