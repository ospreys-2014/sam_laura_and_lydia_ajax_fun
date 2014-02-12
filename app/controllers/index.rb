get '/' do
  # Look in app/views/index.erb
  erb :index
end

post '/sams_fun_route' do
  p params[:cool_thing]
  "<h1>GIANT DIV</h1>"
end