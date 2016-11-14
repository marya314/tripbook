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

            def new
                @trip = Trip.new
            end

            def create
                @trip = Trip.new
                if trip.save
                    redirect_to trip_path(trip)
                else
                    render 'new'
                end
            end

            private
            def trip_params
                params.require(:trip).permit(:name, :description, :start_date, :end_date)
            end

        end
    end
end
