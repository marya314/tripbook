class Location < ApplicationRecord
    belongs_to :trip, optional: true

    validates :name, presence: true
end
