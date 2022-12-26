class CreateProjects < ActiveRecord::Migration[6.1]
  def change
    create_table :projects do |t|
      t.integer :house_id
      t.integer :contractor_id
      t.string :name
      t.date :completion_date
      t.boolean :complete

      t.timestamps
    end
  end
end
