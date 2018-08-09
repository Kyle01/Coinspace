class Transaction < ApplicationRecord
  validates :userId, :price, :buy, presence:true
  validate :coinValid?

  def coinValid?
    errors[:coin] << "Invalid asset" unless
    (:coin == "Bitcoin" ||
    :coin == "Litecoin" ||
    :coin == "Bitcoin Cash" ||
    :coin == "Ethereum")
  end
end
