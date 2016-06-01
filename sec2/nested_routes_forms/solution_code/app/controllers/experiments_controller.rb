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
      render 'new'
    end
  end

  def edit
    @experiment = Experiment.find(params[:id])
  end

  def update
    @experiment = Experiment.find(params[:id])
    if @experiment.update_attributes(experiment_params)
      redirect_to scientist_path(@experiment.scientist_id)
    else
      render 'edit'
    end
  end

  def destroy
    @experiment = Experiment.find(params[:id])
    @experiment.destroy
    redirect_to experiments_path
  end

    def experiment_params
      params.require(:experiment).permit(:name, :summary, :budget)
    end

    def log_params
      params.require(:experiment).permit(log_details: [:subject_name, :weight, :treatments, :deceased, :comment])
    end
end
