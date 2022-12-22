class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :house_id, :contractor_id, :project_title, :completion_date
end
