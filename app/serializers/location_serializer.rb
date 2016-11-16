class LocationSerializer < ActiveModel::Serializer
  attributes :id, :name, :description
  has_many :trips, serializer: TripLocationSerializer
end
