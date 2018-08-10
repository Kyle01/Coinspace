class CreateCoinsDailyTable < ActiveRecord::Migration[5.2]
  def change
    create_table :coins_daily do |t|
      t.date :date, null:false
      t.float :btc_price, null:false
      t.float :e_price, null:false
      t.float :ltc_price, null:false
      t.float :btcc_price, null:false
    end
    add_index :coins_daily, :date, unique: true
  end
end
