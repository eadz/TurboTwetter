class UsersController < ApplicationController
  skip_before_action :login_user, only: [:new, :create]

  def show
    @profile = User.find_by(username: params[:username])
    @tweets = @profile.tweets.public_timeline.limit(100)
    render react_component: 'User', props: global_props.merge(user: @profile, tweets: @tweets)
  end

  def new
    @user = User.new
    render react_component: 'UserProfile', props: global_props.merge(user: @user)
  end

  def create
    @user = User.new(params.require(:user).permit(:username, :bio, :email, :location, :name))
    if @user.save
      log_in_user(@user)
    else
      render react_component: 'UserProfile', props: global_props.merge(user: @user, errors: @user.errors.full_messages)
    end
  end

  def edit
    render react_component: 'UserProfile', props: global_props.merge(user: user)
  end
end
