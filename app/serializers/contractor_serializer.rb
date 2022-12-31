class ContractorSerializer < ActiveModel::Serializer
  attributes :id, :name, :specialty, :company, :city, :state, :username, :password_digest
  
end
