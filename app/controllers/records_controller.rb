class RecordsController < ApplicationController

  def index
    render(
        status: 200,
        json: Record.all
      )
  end

  def create
    record = Record.new(record_params)
    record.save ? (render json: record) : (render json: {message: record.errors}, status: 400)
  end

  private
    def record_params
      params.require(:record).permit(:user_name, :score, :date)
    end

end
