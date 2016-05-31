class CreateExperiments < ActiveRecord::Migration
  def change
    create_table :experiments do |t|
      t.string :name
      t.string :summary
      t.integer :budget

      t.timestamps null: false
    end
  end
end
