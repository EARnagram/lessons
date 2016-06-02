class LogsController < ApplicationController

  def new
    @experiment = Experiment.find(params[:experiment_id])
    @scientist = @experiment.scientist
    @log = @experiment.logs.new
  end

  def show
    @log = Log.find(params[:id])
    @experiment = @log.experiment
    @logs = @experiment.logs.where(subject_name: @log.subject_name)
    @scientist = @experiment.scientist
  end

  def create
    @experiment = Experiment.find(params[:experiment_id])
    @scientist = @experiment.scientist
    @log = @experiment.logs.new(log_params)
    if @log.save
      redirect_to scientist_experiment_path(@scientist, @experiment), notice: "Log was created."
    else
      render 'new'
    end
  end

  private

    def log_params
      params.require(:log).permit(:subject_name, :weight, :treatments, :deceased, :comment)
    end
end
