class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :house_id, :contractor_id, :name, :completion_date, :complete, :notes
  # attributes :contractor_params
  # belongs_to :house
  # binding.pry

  # def contractor_params
  #   id = object.id
  # end
end
