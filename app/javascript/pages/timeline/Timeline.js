import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Tweet from '../../components/Tweet';
import Layout from '../../components/Layout';

class Timeline extends Component {
  render() {
    return (
      <Layout>
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
  tweets: PropTypes.array.isRequired
};

export default Timeline;
