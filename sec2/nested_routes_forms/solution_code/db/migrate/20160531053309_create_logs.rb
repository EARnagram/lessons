class CreateLogs < ActiveRecord::Migration
  def change
    create_table :logs do |t|
      t.string :subject_name
      t.boolean :deceased
      t.integer :weight
      t.integer :treatments
      t.string :comment

      t.timestamps null: false
    end
  end
end
