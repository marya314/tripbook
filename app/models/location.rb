class Location < ApplicationRecord
    has_many :trip_locations
    has_many :trips, through: :trip_locations

    validates :name, presence: true
end
