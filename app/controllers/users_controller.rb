class UsersController < ApplicationController
  def show
    @user = User.find_by(username: params[:username])
    render react_component: 'User', props: global_props.merge(user: @user)
  end

  def create; end
end
