get '/' do
  # Look in app/views/index.erb
  erb :index
end

post '/sams_fun_route' do
  cool_thing_to_insert = (params[:cool_thing].to_i * 10).to_s
  inserted_thing = CoolThing.where(thing: cool_thing_to_insert).first_or_create
  "<h1>GIANT DIV #{inserted_thing.thing}</h1>"
end