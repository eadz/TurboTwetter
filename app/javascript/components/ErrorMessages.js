import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Message } from 'rebass';

class ErrorMessages extends Component {
  render() {
    if(this.props.errors) {
      return this.props.errors.map((error, idx) => (
        <Message bg="red" size={1} key={idx}>{error}</Message>
      ))
    }
    return null;
  }
}

export default ErrorMessages;
