class ContractorSerializer < ActiveModel::Serializer
  attributes :id, :name, :specialty, :company, :city, :state
end
