class Game < ActiveRecord::Base
  # Remember to create a migration!
  has_many :gamings
  has_many :players, through :gamings
end
