class ContractorsController < ApplicationController
  before_action :authorization, only: [:show] 

  def index
    cont = Contractor.all
    render json: cont, status: :ok
  end

  def create
    cont = Contractor.create(contractor_params)
    # binding.pry
    if cont.valid?
      session[:user_id] = cont.id
      render json: cont, status: :created
    else 
      render json: { error: cont.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def show
    # Return more information
    # binding.pry
    cont = Contractor.find_by(id: session[:user_id])
    render json: cont, status: :created
  end

  private

  def authorization
    return render json: { error: "Unauthorized user" }, status: :unauthorized unless session.include? :user_id 
  end

  def contractor_params
    # binding.pry
    params.permit(:name, :specialty, :company, :city, :state, :username, :password, :password_confirmation)
  end
end
