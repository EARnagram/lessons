class ScientistsController < ApplicationController

  def index
    @scientists = Scientist.all
  end

  def show
    @scientist = Scientist.find(params[:id])
    @experiments = @scientist.experiments
  end

  def new
    @scientist = Scientist.new
  end

  def create
    @scientist = Scientist.new scientist_params
    if @scientist.save
      redirect_to scientists_path, notice: "Scientist was created."
    else
      render 'new'
    end
  end

  def edit
    @scientist = Scientist.find(params[:id])
  end

  def update
    @scientist = Scientist.find(params[:id])
    if @scientist.update_attributes(scientist_params)
      redirect_to scientist_path
    else
      render 'edit'
    end
  end

  def destroy
    @scientist = Scientist.find(params[:id])
    @scientist.destroy
    redirect_to scientists_path, alert: "Consider that scientist's medical license revoked!"
  end

  private

    def scientist_params
      params.require(:scientist).permit(:name, :discipline, :spooky)
    end

end
