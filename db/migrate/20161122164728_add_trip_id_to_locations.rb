class AddTripIdToLocations < ActiveRecord::Migration[5.0]
  def change
    add_column :locations, :trip_id, :integer
  end
end
