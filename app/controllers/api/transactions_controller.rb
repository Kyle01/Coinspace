class Api::TransactionsController < ApplicationController

  def create
    @transition = Transaction.new(transactions_params)

    if(@transition.save)
      render json: @transition, status: 201
    else
      render json: ['Error occured. Transaction failed'], status: 412
    end
  end

  def transactions_params
    params.require(:transition).permit(:userId, :coin, :price, :buy)
  end
end
