class RemoveQuestionMark < ActiveRecord::Migration[5.2]
  def change
    remove_column :transactions, :buy?
    add_column :transactions, :buy, :boolean, null: false
  end
end
