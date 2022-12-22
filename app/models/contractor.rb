class Contractor < ApplicationRecord
  has_many :projects
  has_many :houses, through: :projects
end
