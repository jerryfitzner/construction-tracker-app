class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :house_id, :contractor_id, :name, :completion_date, :complete, :notes
end
