class Api::PricesController < ApplicationController

  def show
    @price = Price.last
  end

  def index
    prices = Price.last(30)
    @bitcoin_price_array = []
    @ethereum_price_array = []
    @litecoin_price_array = []
    @bitcoin_cash_price_array = []
    prices.each do |price|
      @bitcoin_price_array << price.btc_price
      @ethereum_price_array << price.e_price
      @litecoin_price_array << price.ltc_price
      @bitcoin_cash_price_array << price.btcc_price
    end
  end

  # def price_params
  #   params.require(:prices).permit(:date, :duration, :coin)
  # end
end
