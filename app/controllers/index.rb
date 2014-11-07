get '/' do
  erb :index
end


post '/sams_fun_route' do
  # grab the data from the AJAX request and manipulate it in some way (multiply by 10)
  cool_thing_to_insert = (params[:cool_thing].to_i * 10).to_s
  # save that thing to the database or retrieve it if it's already there
  inserted = CoolThing.where(thing: cool_thing_to_insert).first_or_create
  # formulate some HTML with that thing and send the HTML as a response to the AJAX request
  "<h1>GIANT DIV #{inserted.thing}</h1>"
end

post '/michaels_fun_route' do
  # grab the data from the AJAX request and manipulate it in some way (multiply by 10)
  practical_thing = params[:michaels_thing]
  # save that thing to the database or retrieve it if it's already there
  inserted = CoolThing.where(thing: practical_thing).first_or_create
  # formulate some HTML with that thing and send the HTML as a response to the AJAX request

  "#{inserted.thing}"
end

post '/edwards_midnight_train' do
  # grab the data from the AJAX request and manipulate it in some way (multiply by 10)
  practical_thing = params[:edwards_thing]
  # save that thing to the database or retrieve it if it's already there
  inserted = CoolThing.where(thing: practical_thing).first_or_create
  # formulate some HTML with that thing and send the HTML as a response to the AJAX request

  "<audio controls><source src='#{inserted.thing}' type= 'audio/mp4'></audio>"
end
