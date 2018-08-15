class Api::TransactionsController < ApplicationController

  def create
    @transaction = Transaction.new(transactions_params)

    if(@transaction.save)
      @transaction.adjust_user_portfolio();
      render json: @transaction, status: 201
    else
      render json: ['Error occured. Transaction failed'], status: 412
    end
  end

  def show
    @transaction = Transaction.find(params[:id])
  end

  def index
    puts current_user
    @transactions = current_user.transactions
  end

  def transactions_params
    params.require(:transaction).permit(:user_id, :coin, :price, :buy, :size)
  end
end
