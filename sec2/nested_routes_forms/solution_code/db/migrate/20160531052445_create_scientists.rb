class CreateScientists < ActiveRecord::Migration
  def change
    create_table :scientists do |t|
      t.string :name
      t.string :discipline
      t.boolean :spooky, default: true

      t.timestamps null: false
    end
  end
end
