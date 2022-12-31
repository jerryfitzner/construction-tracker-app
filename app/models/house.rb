class House < ApplicationRecord
  has_many :projects
  has_many :contractors, through: :projects
  validates :owner_first_name, presence: true
  validates :owner_last_name, presence: true
  validates :street, presence: true
  validates :city, presence: true
  validates :state, presence: true
  validates :zip, presence: true
end
