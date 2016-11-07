class AddPostIdToPhotos < ActiveRecord::Migration[5.0]
  def change
    add_column :photos, :post_id, :integer
  end
end
