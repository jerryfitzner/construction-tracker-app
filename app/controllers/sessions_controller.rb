class SessionsController < ApplicationController

  def create
    user = Contractor.find_by(username: params[:username])
    # binding.pry
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user, status: :created
    else 
      render json: { error: " No user found " }, satus: :unathorized
    end
  end

  def destroy
    session.delete :user_id
    head :no_content
  end
end
