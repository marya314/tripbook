module Api
    module V1

        class UsersController < ApplicationController

            def index
                @users = User.all
                render json: @users
            end

            def show
                @user = User.find(params[:id])
                render json: @user
            end

            def user_params
                params.requre(:user).permit(:name, :email, :favorite_destinations)
            end

        end

    end
end
