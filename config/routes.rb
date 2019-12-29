Rails.application.routes.draw do
  root "index#get"
  get 'helloworld' => 'search#helloworld'
end