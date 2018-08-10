class Api::TransactionsController < ApplicationController

  def create
    @transaction = Transaction.new(transactions_params)

    if(@transaction.save)
      render json: @transaction, status: 201
    else
      render json: ['Error occured. Transaction failed'], status: 412
    end
  end

  def show
    @transaction = Transaction.find(params[:id])
  end

  def transactions_params
    params.require(:transaction).permit(:user_id, :coin, :price, :buy, :size)
  end
end
