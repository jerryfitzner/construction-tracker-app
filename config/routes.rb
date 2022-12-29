Rails.application.routes.draw do
  
  resources :houses, only: [:show, :index, :create]
  resources :projects
  resources :contractors, only: [:show, :index, :create]

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get "/me", to: "contractors#show"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
