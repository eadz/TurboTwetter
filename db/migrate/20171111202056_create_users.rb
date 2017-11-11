class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :username, index: true, unique: true
      t.string :name
      t.string :email
      t.string :bio
      t.string :location

      t.timestamps
    end
  end
end
