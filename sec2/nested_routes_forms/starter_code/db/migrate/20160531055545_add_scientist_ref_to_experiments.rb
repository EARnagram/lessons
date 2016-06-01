class AddScientistRefToExperiments < ActiveRecord::Migration
  def change
    add_reference :experiments, :scientist, index: true, foreign_key: true
  end
end
