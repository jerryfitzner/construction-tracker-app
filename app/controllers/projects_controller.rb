class ProjectsController < ApplicationController
  # skip_before_action :authorized, only: [:update]

  def index
    project = Project.all
    render json: project, status: :ok
  end

  def create
    project = Project.create(project_params)
    if project.valid?
      render json: project, status: :created
    else
      render json: { error: project.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    project = Project.find_by(id: params[:id])
    user_id = session[:user_id]
    if project && project.contractor_id == user_id
      project.update(project_params)
      render json: project, status: :accepted 
    else
      render json: {error: "A project was not found"}, status: :not_found
    end

  end

  def destroy
    project = Project.find_by(id: params[:id])
    project.destroy
    head :no_content
  end

  private

  def project_params
    params.permit(:house_id, :contractor_id, :name, :completion_date, :complete, :notes)
  end
end
