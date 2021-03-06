Rails.application.routes.draw do
    namespace :api do
        namespace :v1 do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :trips, only: [:index, :show, :new, :create]
  resources :users, only: [:index, :show, :new, :create]
  resources :activity, only: [:index, :show]
  resources :locations, only: [:index, :show, :new, :create]
  resources :post, only: [:index, :show]

  post '/login', to: "sessions#create"
  post '/signup', to: "users#create"

  # get '/trips', to: 'trip#show'

    end
  end
end
