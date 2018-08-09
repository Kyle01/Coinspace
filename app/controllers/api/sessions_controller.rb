class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:username],params[:user][:password])

    if @user
      login(@user)
      render json: @user
    else
      render json: ['invalid credentails'], status: 422
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render json: { }
    else
      render json: ['no current user - 404'], status: 404
    end
  end
end
