class Post < ApplicationRecord
    belongs_to :trip
    has_many :post_activities
    has_many :activities, through: :post_activities
    has_many :photos
end
