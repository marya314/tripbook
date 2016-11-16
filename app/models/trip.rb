class Trip < ApplicationRecord
    belongs_to :user, optional: true
    has_many :trip_locations
    has_many :locations, through: :trip_locations
    has_many :posts

    validates :name, presence: true
end
