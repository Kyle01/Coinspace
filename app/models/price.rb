class Price < ApplicationRecord
  validates :date, :btc_price, :e_price, :ltc_price, :btcc_price, presence: true

  def getCurrentPrice(coin)
  end

  def getPriceRange(coin, range)
  end
end
