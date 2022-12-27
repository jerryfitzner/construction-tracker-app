class CreateContractors < ActiveRecord::Migration[6.1]
  def change
    create_table :contractors do |t|
      t.string :name
      t.string :specialty
      t.string :company
      t.string :city
      t.string :state
      t.string :username
      t.string :password_digest

      t.timestamps
    end
  end
end
