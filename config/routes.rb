Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  resources :roadmaps

  get '/user' => "roadmaps#new", :as => :user_root

end
