class CreateTrips < ActiveRecord::Migration[5.0]
  def change
    create_table :trips do |t|
      t.string :name
      t.integer :user_id
      t.date :start_date
      t.date :end_date
      t.string :description

      t.timestamps
    end
  end
end
