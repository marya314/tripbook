module Api
    module V1

        class TripsController < ApplicationController

            def index
                @trips = Trip.all
                render json: @trips
            end

            def show
                @trip = Trip.find(params[:id])
                render json: @trip
            end

            private
            def trip_params
                params.require(:trip).permit(:name, :description, :start_date, :end_date)
            end

        end
    end
end
