class SessionsController < ApplicationController
  skip_before_action :login_user

  def new
    render react_component: 'NewSession', props: global_props
  end

  def create
    @user = User.find_by(username: params[:username])
    if @user
      session[:user_id] = @user.id
      redirect_to :root
    else
      render react_component: 'NewSession', props: global_props.merge(errors: ['User Not Found'])
    end
  end

  def destroy
    reset_session
    redirect_to :root
  end
end
