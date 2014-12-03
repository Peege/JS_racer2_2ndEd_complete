get '/' do
  # Look in app/views/index.erb
  erb :play
end

post '/play' do
  @p1 = Player.find_or_create_by_name(params[:p1])
  @p2 = Player.find_or_create_by_name(params[:p2])
  @game = Game.create(complete:'No')
  @gaming = Gaming.create(game: @game, player: @p1)
  @gaming = Gaming.create(game: @game, player: @p2)
  erb :play
end

post '/result' do

end