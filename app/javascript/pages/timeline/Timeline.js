import React, { Component } from 'react';
import PropTypes from 'prop-types';

import NewTweet from '../../components/NewTweet';
import Tweet from '../../components/Tweet';
import Layout from '../../components/Layout';

class Timeline extends Component {
  render() {
    return (
      <Layout logged_in={this.props.logged_in} logged_in_user={this.props.logged_in_user}>
        <NewTweet csrf={this.props.csrf} errors={this.props.new_tweet_errors} />
        <div>
          {
            this.props.tweets.map((tweet, idx) => (
              <Tweet {...tweet} key={idx}/>
            ))
          }
        </div>
      </Layout>
    );
  }
}

Timeline.propTypes = {
  tweets: PropTypes.array.isRequired,
  new_tweet_errors: PropTypes.array
};

export default Timeline;
