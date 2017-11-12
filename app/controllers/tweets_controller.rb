class TweetsController < ApplicationController
  def index
    @tweets = Tweet.public_timeline.limit(100)
    render react_component: 'Timeline', props: global_props.merge(tweets: @tweets)
  end

  def create
    @tweet = user.tweets.build(new_tweet_params)
    if @tweet.save
      redirect_to :root
    else
      @tweets = Tweet.public_timeline.limit(100)
      render react_component: 'Timeline', props: global_props.merge(
        tweets: @tweets,
        new_tweet_errors: @tweet.errors.full_messages
      )
    end
  end

  private

  def new_tweet_params
    params.require(:tweet).permit(:tweet)
  end
end
