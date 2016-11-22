require 'pry'

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
                #  binding.pry
                @trip = Trip.new(trip_params)
                if @trip.save
                    @trip.user = @current_user
                    render json: @trip
                else
                    render json: {success: false}
                end
            end

            private
            def trip_params
                params.require(:trip).permit(:name, :description, :start_date, :end_date)
            end

        end
    end
end
