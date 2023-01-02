class Project < ApplicationRecord
  belongs_to :house
  belongs_to :contractor
  
  validates :house_id, presence: true, numericality: { only_integer: true }
  validates :contractor_id, presence: true, numericality: { only_integer: true }
  validates :name, presence: true
  validates :completion_date, presence: true
  validates :complete, inclusion: { in: [true, false] }
end
