Rails.application.routes.draw do
  get 'tweets/index'

  get 'tweets/create'

  get 'session/new'

  get 'session/destroy'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
