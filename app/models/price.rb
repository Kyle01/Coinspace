require 'net/http'
require 'json'


class Price < ApplicationRecord
  validates :date, :btc_price, :e_price, :ltc_price, :btcc_price, presence: true
  
  def self::doDaily
    today = Price.new()

    # Get Bitcoin price
    url = 'https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD'
    uri = URI(url)
    response = Net::HTTP.get(uri)
    response = JSON.parse(response)
    btcPrice = response["USD"]

    # Get Bitcoin Cash price
    url = 'https://min-api.cryptocompare.com/data/price?fsym=BCH&tsyms=USD'
    uri = URI(url)
    response = Net::HTTP.get(uri)
    response = JSON.parse(response)
    bchPrice = response["USD"]

    # Get Etherem price
    url = 'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD'
    uri = URI(url)
    response = Net::HTTP.get(uri)
    response = JSON.parse(response)
    ethPrice = response["USD"]

    # Get Litecoin price
    url = 'https://min-api.cryptocompare.com/data/price?fsym=LTC&tsyms=USD'
    uri = URI(url)
    response = Net::HTTP.get(uri)
    response = JSON.parse(response)
    ltcPrice = response["USD"]

    today.btc_price = btcPrice
    today.e_price = ethPrice
    today.btcc_price = bchPrice
    today.ltc_price = ltcPrice
    today.date = DateTime.now.to_date

    today.save
  end
end
