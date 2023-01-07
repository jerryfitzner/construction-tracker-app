# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Seeding data...🌱"


  contractor_one = Contractor.create(
    name: Faker::Name.name,
    specialty: "Framing",
    company: Faker::Company.name,
    city: Faker::Address.city,
    state: Faker::Address.state,
    username: "username1",
    password: "password",
    password_confirmation: "password"
  )

  contractor_two = Contractor.create(
    name: Faker::Name.name,
    specialty: "Paint",
    company: Faker::Company.name,
    city: Faker::Address.city,
    state: Faker::Address.state,
    username: "username2",
    password: "password",
    password_confirmation: "password"
  )

  contractor_three = Contractor.create(
    name: Faker::Name.name,
    specialty: "Windows",
    company: Faker::Company.name,
    city: Faker::Address.city,
    state: Faker::Address.state,
    username: "username3",
    password: "password",
    password_confirmation: "password"
  )



2.times do

  #Create a list of 6 houses
  house = House.create(
    owner_first_name: Faker::Name.first_name,
    owner_last_name: Faker::Name.last_name,
    street: Faker::Address.street_address,
    city: Faker::Address.city,
    state: Faker::Address.state,
    zip: Faker::Address.zip_code,
    image: '' 
  )

    Project.create(
      house_id: house.id, 
      contractor_id: contractor_one.id,
      name: "Frame House",
      completion_date: Faker::Date.between(from: Date.today, to: 1.year.from_now),
      complete: Faker::Boolean.boolean,
      notes: "Frame the house with wood, instead of steal."
    )

end

2.times do

  #Create a list of 6 houses
  house = House.create(
    owner_first_name: Faker::Name.first_name,
    owner_last_name: Faker::Name.last_name,
    street: Faker::Address.street_address,
    city: Faker::Address.city,
    state: Faker::Address.state,
    zip: Faker::Address.zip_code,
    image: '' 
  )

    Project.create(
      house_id: house.id, 
      contractor_id: contractor_two.id,
      name: "Paint House",
      completion_date: Faker::Date.between(from: Date.today, to: 1.year.from_now),
      complete: Faker::Boolean.boolean,
      notes: "Paint the entire house green."
    )

end

2.times do

  #Create a list of 6 houses
  house = House.create(
    owner_first_name: Faker::Name.first_name,
    owner_last_name: Faker::Name.last_name,
    street: Faker::Address.street_address,
    city: Faker::Address.city,
    state: Faker::Address.state,
    zip: Faker::Address.zip_code,
    image: '' 
  )

    Project.create(
      house_id: house.id, 
      contractor_id: contractor_three.id,
      name: "Insert Windows",
      completion_date: Faker::Date.between(from: Date.today, to: 1.year.from_now),
      complete: Faker::Boolean.boolean,
      notes: "Insert windows into the lower floor."
    )

end




puts "Done Seeding! 🌳🌳🌳" 