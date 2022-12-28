class ContractorsController < ApplicationController
  before_action :authorization, only: [:show] 

  def create
    cont = Contractor.create(contractor_params)
    if cont.valid?
      session[:user_id] = cont.id
      render json: cont, status: :created
    else 
      render json: { error: cont.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def show
    # Return more information
    cont = Contractor.find_by(id: session[:user_id])
    render json: cont
  end

  private

  def authorization
    return render json: { error: "Unauthorized user" }, status: :unathorized unless session.include? user_id 
  end

  def contractor_params
    params.permit(:name, :specialty, :company, :city, :state, :username, :password_digest)
  end
end
