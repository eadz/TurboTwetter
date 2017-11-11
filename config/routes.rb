Rails.application.routes.draw do
  # get 'tweets/index'
  #
  # get 'tweets/create'
  #
  # get 'session/new'
  #
  # get 'session/destroy'

  # TODO, use proper routing syntax
  get 'login', controller: :sessions, action: :new, as: :login
  post 'login', controller: :sessions, action: :create
  get 'logout', controller: :sessions, action: :destroy

  get 'users/:username', controller: :users, action: :show

  root to: 'tweets#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
