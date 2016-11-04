class CreatePostActivities < ActiveRecord::Migration[5.0]
  def change
    create_table :post_activities do |t|
      t.integer :activity_id
      t.integer :post_id

      t.timestamps
    end
  end
end
