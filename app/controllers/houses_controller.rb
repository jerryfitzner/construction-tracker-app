class HousesController < ApplicationController

  def index
    houses = House.all
    render json: houses, status: :ok
  end

  # def show
  #   house = House.find_by(id: params[:id])
  #   if house
  #   render json: house, status: :ok
  # end

  def create
    house = House.create(house_params)
    if house.valid?
      render json: house, status: :created
    else 
      render json: { error: house.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def house_params
    # binding.pry
    params.permit(:owner_first_name, :owner_last_name, :street, :city, :state, :zip, :image)
  end 

end
