class Contractor < ApplicationRecord
  has_secure_password
  has_many :projects
  has_many :houses, through: :projects
end
