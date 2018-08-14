class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render json: @user, status: 200
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = current_user
  end

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
