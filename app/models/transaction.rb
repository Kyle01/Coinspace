class Transaction < ApplicationRecord
  validates :user_id, :price, :size, :buy, presence:true
  validate :coinValid?

  def coinValid?
    return false unless
    (:coin == "Bitcoin" ||
    :coin == "Litecoin" ||
    :coin == "Bitcoin Cash" ||
    :coin == "Ethereum")
    return true
  end
end
