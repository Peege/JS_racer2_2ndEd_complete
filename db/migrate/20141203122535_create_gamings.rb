class CreateGamings < ActiveRecord::Migration
  def change
    create_table :gamings do |t|
      t.belongs_to :player
      t.belongs_to :game
      t.timestamp
    end
  end
end
