Rails.application.routes.draw do

  # Auth
  get 'login', to: 'sessions#new', as: :login
  post 'login', to: 'sessions#create'
  get 'logout', to: 'sessions#destroy'

  # Users
  get 'signup', to: 'users#new'
  post 'signup', to: 'users#create'
  get '/settings', to: 'users#edit'
  get 'users/:username', to: 'users#show'

  # Tweets
  post 'tweets', to: 'tweets#create'



  root to: 'tweets#index'
end
