class CreateTransactions < ActiveRecord::Migration[5.2]
  def change
    create_table :transactions do |t|
      t.integer :userId, null:false
      t.string :coin, null:false
      t.float :price, null:false
      t.float :price, null:false
      t.boolean :buy?, null:false

      t.timestamps
    end
    add_index :transactions, :id, unique: true
  end

end
