import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Card, Text } from 'rebass';

import styled from 'styled-components';

const TweetWrap = styled(Card)`
  margin-bottom: 1em;
`

const Username = styled.a`

`

class Tweet extends Component {
  render() {
    return (
      <TweetWrap p={3}>
        <Text><Username href={`/users/${this.props.username}`}>{this.props.username}</Username> {this.props.tweet}</Text>

      </TweetWrap>
    );
  }
}

Tweet.propTypes = {
  id: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired,
  tweet: PropTypes.string.isRequired
};

export default Tweet;
