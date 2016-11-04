class CreateTripLocations < ActiveRecord::Migration[5.0]
  def change
    create_table :trip_locations do |t|
      t.integer :trip_id
      t.integer :location_id

      t.timestamps
    end
  end
end
