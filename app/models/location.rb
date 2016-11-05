class Location < ApplicationRecord
    has_many :trips, through: :trip_locations
end
