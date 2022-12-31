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

  private


end
