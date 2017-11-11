import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tweets extends Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    );
  }
}

Tweets.propTypes = {
  tweets: PropTypes.array.isRequired
};

export default Tweets;
