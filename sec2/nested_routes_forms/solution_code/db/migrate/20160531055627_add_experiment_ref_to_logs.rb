class AddExperimentRefToLogs < ActiveRecord::Migration
  def change
    add_reference :logs, :experiment, index: true, foreign_key: true
  end
end
