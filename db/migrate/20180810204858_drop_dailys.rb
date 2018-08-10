class DropDailys < ActiveRecord::Migration[5.2]
  def change
    drop_table :coins_daily
  end
end
