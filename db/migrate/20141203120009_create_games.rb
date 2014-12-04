class CreateGames < ActiveRecord::Migration
  def change
     create_table :games do |t|
      t.belongs_to :player #winner
      t.float :time_taken
      t.boolean :complete
      t.timestamp
    end
  end
end
