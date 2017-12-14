class CreateRecords < ActiveRecord::Migration[5.1]
  def change
    create_table :records do |t|
      t.string :user_name
      t.string :score
      t.string :date
    end
  end
end
