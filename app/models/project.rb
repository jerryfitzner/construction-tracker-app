class Project < ApplicationRecord
  belongs_to :houses
  belongs_to :contractor
end
