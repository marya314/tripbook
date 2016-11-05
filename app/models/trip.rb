class Trip < ApplicationRecord
    belongs_to :user
    has_many :locations, through: :trip_locations
    has_many :posts
end
