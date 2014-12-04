set :protection, except: :session_hijacking

get '/' do
  # Look in app/views/index.erb
  erb :index
end

post '/play' do
  @p1 = Player.find_or_create_by_name(params[:p1])
  @p2 = Player.find_or_create_by_name(params[:p2])
  @game = Game.create(complete: false)
  @gaming1 = Gaming.create(game: @game, player: @p1)
  @gaming2 = Gaming.create(game: @game, player: @p2)
  erb :play
end

post '/finish' do
  @winner = params["winner"]
  @time_taken = params["time"]
  game = Game.find(params["game_id"].to_i)
  game.complete = true;
  game.player_id = Player.where(name: params["winner"]).first.id
  game.time_taken = params["time"].to_f
  game.save

  erb :finish
end
