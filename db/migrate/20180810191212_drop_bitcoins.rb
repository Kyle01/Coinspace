class DropBitcoins < ActiveRecord::Migration[5.2]
  def change
    drop_table :bitcoins
  end
end
