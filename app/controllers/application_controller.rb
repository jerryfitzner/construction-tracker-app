class ApplicationController < ActionController::API
  include ActionController::Cookies
  # rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity

  # before_action :authorization

  # private

  # def authorization
  #   current_user = Contractor.find_by(id: session[:user_id])
  #   render json: {errors: ["Not Authorized"]}, status: :unauthorized unless current_user
  # end

  # def unprocessable_entity(exception)
  #   render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
  # end

end
