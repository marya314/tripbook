module Api
    module V1

        class UsersController < ApplicationController
            skip_before_action :authenticate, only: :create

            def index
                @users = User.all
                render json: @users
            end

            def show
                @user = User.find(params[:id])
                render json: @user
            end

            def create
                user = User.new(user_params)
                # binding.pry
                if user.save
                    #  binding.pry
                    token = JWT.encode({id: user.id}, ENV["AUTH_SECRET_KEY"], 'HS256')
                    render json: {jwt: token, currentUserId: user.id, currentUserName: user.name}
                else
                    render json: {error: "could not authenticate this user"}
                end
            end

            private

            def user_params
                params.require(:user).permit(:name, :email, :password, :favorite_destinations)
            end

        end
    end
end
