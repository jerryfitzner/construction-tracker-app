class HouseSerializer < ActiveModel::Serializer
  attributes :id, :owner_first_name, :owner_last_name, :street, :city, :state, :zip, :image
end
