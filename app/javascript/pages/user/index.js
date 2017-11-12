import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Card, Heading } from 'rebass';

import Layout from '../../components/Layout';
import Tweet from '../../components/Tweet';

class User extends Component {
  render() {
    return (
      <Layout logged_in={this.props.logged_in} logged_in_user={this.props.logged_in_user}>
        <Card>
          <Heading>{this.props.user.username}</Heading>
          <p>Signed up: {this.props.user.created_at}</p>
        </Card>
        <div>
          {this.props.tweets.map((tweet, idx) => (
            <Tweet {...tweet} key={idx} />
          ))}
        </div>
      </Layout>
    );
  }
}

User.propTypes = {
  tweets: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired
};

export default User;
