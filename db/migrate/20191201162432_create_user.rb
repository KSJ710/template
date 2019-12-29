class CreateUser < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :name
      t.integer :age
      t.date :birthday
      t.timestamps
    end
  end
end
