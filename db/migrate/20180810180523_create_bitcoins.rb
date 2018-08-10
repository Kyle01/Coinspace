class CreateBitcoins < ActiveRecord::Migration[5.2]
  def change
    create_table :bitcoins do |t|
      t.date :date, null:false
      t.float :price, null:false

      t.timestamps
    end
  end
end
