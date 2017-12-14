Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  scope '/api' do
    get :records, to: 'records#index'
    post :records, to: 'records#create'
  end
end
