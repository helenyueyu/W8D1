class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      login!(@user)
      render 'api/users/show' 
    else
      render json: ['Invalid username or password'], status: 401
    end
  end


  # this is throwing a 404 error for some reason 
  def destroy      
    debugger 
    if current_user 
      logout!
      render json: {}
    else
      render json: ['whoops Helen'], status: 404 
    end
  end
end