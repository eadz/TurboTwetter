import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Card, Heading } from 'rebass';

import Layout from '../../components/Layout';

class User extends Component {
  render() {
    return (
      <Layout>
        <Card>
          <Heading>{this.props.user.username}</Heading>
          <p>Signed up: {this.props.user.created_at}</p>
        </Card>
      </Layout>
    );
  }
}

User.propTypes = {
  tweets: PropTypes.array.isRequired
};

export default User;
