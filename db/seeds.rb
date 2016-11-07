# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


10.times do

#user seeds
user = User.create(name: Faker::Name.name, email: Faker::Internet.email, password_digest: 123, favorite_destinations: Faker::Address.city)

#activities seeds
activity = Activity.create(name: Faker::SlackEmoji.activity, description: Faker::Hipster.sentence, location: Faker::Pokemon.location, fun_level: Random.rand(1...10))

#location seeds
location = Location.create(name: Faker::Pokemon.location, description: Faker::SlackEmoji.travel_and_places)

#trip seeds
trip = Trip.create(name: Faker::Color.color_name, description: Faker::SlackEmoji.travel_and_places, start_date: Faker::Date.between(30.days.ago, 30.days.from_now), end_date: Faker::Date.forward(23))

#post seeds
post = Post.create

#photo seeds
photo = Photo.create

user.trips << trip
location.trips << trip
trip.locations << location
trip.posts << post
post.activities << activity
post.photos << photo

end
