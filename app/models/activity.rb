class Activity < ApplicationRecord
    has_many :post_activities
    has_many :posts, through: :post_activities

    validates :name, presence: true 
end
