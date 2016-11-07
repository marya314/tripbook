module Api
    module V1

        class ActivitiesController < ApplicationController

            def index
                @activities = Activity.all
                render json: @activities
            end

            def show
                @activity = Activity.find(params[:id])
                render json: @activity
            end

            private
            def activity_params
                params.require(:activity).permit(:name, :description, :location, :fun_level)
            end

        end
    end
end
