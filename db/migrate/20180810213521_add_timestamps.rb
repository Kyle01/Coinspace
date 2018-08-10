class AddTimestamps < ActiveRecord::Migration[5.2]
  def change
    add_timestamps(:prices)
  end
end
