class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  before_action :login_user

  private

  def login_user
    redirect_to(:login) unless user
  end

  def user
    @logged_in_user ||= session[:user_id] && User.find_by(id: session[:user_id])
  end

  def log_in_user(user)
    session[:user_id] = user.id
    redirect_to :root
  end

  def global_props
    {
      logged_in: user.present?,
      logged_in_user: user,
      csrf: {
        csrf_param: request_forgery_protection_token,
        csrf_token: form_authenticity_token
      }
    }
  end
end
