class TripSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :start_date, :end_date
  has_one :user
  has_many :locations, serializer: TripLocationSerializer
end
