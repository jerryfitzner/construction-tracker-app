class Contractor < ApplicationRecord
  has_secure_password
  has_many :projects
  has_many :houses, through: :projects

  validates :name, presence: true
  validates :specialty, presence: true
  validates :company, presence: true
  validates :city, presence: true
  validates :state, presence: true
  validates :username, presence: true, uniqueness: true
  validates :password_digest, presence: true
end
