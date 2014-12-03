class CreateGames < ActiveRecord::Migration
  def change
     create_table :games do |t|
      t.belongs_to :player #winner
      t.integer :time_taken
      t.string :complete
      t.timestamp
    end
  end
end
