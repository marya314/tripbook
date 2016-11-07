class User < ApplicationRecord
    has_many :trips

    validates :name, presence: true
end
