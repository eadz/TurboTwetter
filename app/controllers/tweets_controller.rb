class TweetsController < ApplicationController
  def index
    @tweets = Tweet.public_timeline.limit(100)
    render react_component: 'Timeline', props: global_props.merge(tweets: @tweets)
  end

  def create; end
end
