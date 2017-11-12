import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Card, Heading, Button, Input } from 'rebass';

import Layout from '../../components/Layout';
import Tweet from '../../components/Tweet';

import CsrfTag from '../../components/CsrfTag';
import ErrorMessages from '../../components/ErrorMessages';

class UserProfile extends Component {
  render() {
    console.log(this.props);
    return (
      <Layout logged_in={this.props.logged_in} logged_in_user={this.props.logged_in_user}>
        <Card>
          <Heading>{this.props.logged_in ? "asd" : "Sign Up"}</Heading>
          <form action="/signup" method="POST">
            <CsrfTag {...this.props.csrf} />
            <div style={{width: '50%'}}>
              <ErrorMessages errors={this.props.errors} />
              <Input name="user[username]" placeholder="Username" defaultValue={this.props.user && this.props.user.username} />
              <Input name="user[name]" placeholder="Full Name" defaultValue={this.props.user && this.props.user.name} />
              <Input name="email" type="email" placeholder="Email" defaultValue={this.props.user && this.props.user.email} />
              <Input name="bio" placeholder="Bio" defaultValue={this.props.user && this.props.user.bio} />
              <Input name="location" placeholder="Location" defaultValue={this.props.user && this.props.user.location} />
            </div>

            <Button type="submit">Join Twetter!</Button>
          </form>
        </Card>
      </Layout>
    );
  }
}

UserProfile.propTypes = {
  user: PropTypes.object
};

export default UserProfile;
