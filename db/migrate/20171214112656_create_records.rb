class CreateRecords < ActiveRecord::Migration[5.1]
  def change
    create_table :records do |t|
      t.string :user_name
      t.integer :score
      t.datetime :date
    end
  end
end
