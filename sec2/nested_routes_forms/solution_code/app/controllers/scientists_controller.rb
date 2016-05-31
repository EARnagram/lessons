class ScientistsController < ApplicationController
  def index
    @scientists = Scientist.all
  end
end
