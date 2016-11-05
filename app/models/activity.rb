class Activity < ApplicationRecord
    has_many :posts, through: :post_activities
end
