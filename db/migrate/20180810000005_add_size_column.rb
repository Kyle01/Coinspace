class AddSizeColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :transactions, :userId
    add_column :transactions, :user_id, :integer, null:false
    add_column :transactions, :size, :float, null:false
  end
end
