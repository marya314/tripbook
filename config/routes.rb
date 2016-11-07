Rails.application.routes.draw do
    namespace :api do
        namespace :v1 do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :trips, only: [:index, :show]
  resources :users, only: [:index, :show]
  resources :activity, only: [:index, :show]
  resources :locations, only: [:index, :show]
  resources :post, only: [:index, :show]

  # get '/trips', to: 'trip#show'

    end
  end
end
