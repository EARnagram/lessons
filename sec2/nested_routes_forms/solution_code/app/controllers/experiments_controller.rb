class ExperimentsController < ApplicationController

  def index
    @experiments = Experiment.all
  end

  def show
    @experiment = Experiment.find(params[:id])
    @scientist  = @experiment.scientist
    @logs       = @experiment.logs
  end

  def new
    @scientist = Scientist.find(params[:scientist_id])
    @experiment = @scientist.experiments.new
  end

  def create
    @scientist = Scientist.find(params[:scientist_id])
    @experiment = @scientist.experiments.new(experiment_params)
    @experiment.logs.new(log_params[:log_details])
    if @experiment.save
      redirect_to scientist_path(params[:scientist_id])
    else
      render new_scientist_experiments_path
    end
  end

  private

    def experiment_params
      params.require(:experiment).permit(:name, :summary, :budget)
    end

    def log_params
      params.require(:experiment).permit(log_details: [:subject_name, :weight, :treatments, :deceased, :comment])
    end
end
