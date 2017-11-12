import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Button, Card, Message } from 'rebass';

import styled from 'styled-components';

import CsrfTag from './CsrfTag';
import ErrorMessages from './ErrorMessages';

const TextArea = styled.textarea`
  width: 90%;
  font-size: 16px;
  background-color: rgba(255,255,255,0.9);
  outline: none;
  border: 1px solid #ccc;
  margin: 5px 0px 2px 0px;
  box-shadow: 0px 0px 4px #ccc;
`

const TweetCard = styled(Card)`
  margin-bottom: 20px;
  padding: 20px;
`

const WhatsHappening = styled.h3`
  margin: 0px;
  font-size: 16px;
`

class NewTweet extends Component {
  render() {
    return (
      <div>
        <TweetCard>
          <WhatsHappening>What's Happening?</WhatsHappening>
          <ErrorMessages errors={this.props.errors} />
          <form action="/tweets" method="POST">
            <CsrfTag {...this.props.csrf} />
            <TextArea rows="3" cols="20" name="tweet[tweet]"></TextArea>
            <br />
            <Button type="submit">Twett!</Button>
          </form>
        </TweetCard>
      </div>
    );
  }
}

NewTweet.propTypes = {
  tweet: PropTypes.string,
  csrf: PropTypes.object.isRequired
};

export default NewTweet;
