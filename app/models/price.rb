class Price < ApplicationRecord
  validates :date, :btc_price, :e_price, :ltc_price, :btcc_price, presence: true

  attr_reader :date, :btc_price, :e_price, :ltc_price, :btcc_price

  #returns a price (float) based on the coin and date
  #Coin should be passed as case sensitive string
  #returns -1 if date is incorrect, -2 if coin incorrect
  def find_by_description(coin, date)
    price = Price.find_by(date: date)
    return -1 unless price
    case coin
    when "Bitcoin"
      return :btc_price
    when "Litecoin"
      return :ltc_price
    when "Ethereum"
      return :e_price
    when "Bitcoin Cash"
      return :btc_price
    else
      return -2
    end
  end

end
