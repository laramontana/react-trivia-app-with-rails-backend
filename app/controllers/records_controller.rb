class RecordsController < ApplicationController

  def index
    render(
        status: 200,
        json: Record.all
      )
  end

  def create
    binding.pry
    @record = Record.new(record_params)
    render(
        status: 200,
        json: @record
      )

  end


  private
    def record_params
      params.permit(:user_name, :score, :date)
    end

end
