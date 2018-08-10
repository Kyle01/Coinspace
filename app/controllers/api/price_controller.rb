class Api::TransactionsController < ApplicationController

  def show
    @price = Price.find(params[:id]) || Price.last
  end

  def index
  end

end
