class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  before_action :login_user

  private

  def login_user
    redirect_to(:login) unless user
  end

  def user
    @user ||= session[:user_id] && User.find_by(id: session[:user_id])
  end

  def global_props
    {
      csrf: {
        csrf_param: request_forgery_protection_token,
        csrf_token: form_authenticity_token
      }
    }
  end
end
