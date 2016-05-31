class ExperimentsController < ApplicationController

  def index
    @experiments = Experiment.all
  end

  def show
    @experiment = Experiment.find(params[:id])
    @scientist  = @experiment.scientist
    @logs       = @experiment.logs
  end

  private

    def experiment_params
      params.require(:experiment).permit(:name, :summary, :budget)
    end
end
