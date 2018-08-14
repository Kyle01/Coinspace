class AddColumnsUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :btc_holdings, :float, null:false
    add_column :users, :e_holdings, :float, null:false
    add_column :users, :ltc_holdings, :float, null:false
    add_column :users, :bch_holdings, :float, null:false
  end
end
