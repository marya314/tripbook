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

            def new
                @location = Location.new
            end

            def create
                @location = Location.new(location_params)
                @location.trip << @location
                if @location.save
                    binding.pry
                    render json: @location
                else
                    render json: {success:false}
                end
            end

            private
            def location_params
                params.require(:location).permit(:name, :description, :trip_id)
            end

        end
    end
end
