class Trip < ApplicationRecord
    belongs_to :user, optional: true
    has_many :locations
    has_many :posts

    validates :name, presence: true
end
