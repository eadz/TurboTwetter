class TweetsController < ApplicationController
  def index
    render react_component: 'Tweets', props: { tweets: Tweet.public_timeline.all }
  end

  def create; end
end
