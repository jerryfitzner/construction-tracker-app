class Project < ApplicationRecord
  belongs_to :house
  belongs_to :contractor
end
