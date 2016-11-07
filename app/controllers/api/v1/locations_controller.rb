module Api
    module V1

        class LocationsController < ApplicationController

            def index
                @locations = Location.all
                render json: @locations
            end

            def show
                @location = Location.find(params[:id])
                render json: @location
            end

            private
            def location_params
                params.require(:location).permit(:name, :description)
            end

        end
    end
end
