class LogsController < ApplicationController

  def show
    @log = Log.find(params[:id])
    @logs = Log.where(subject_name: @log.subject_name)
    @experiment = @log.experiment
    @scientist = @log.experiment.scientist
  end
end
