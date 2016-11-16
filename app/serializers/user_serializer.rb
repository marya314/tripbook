class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :favorite_destinations
  has_many :trips 
end
