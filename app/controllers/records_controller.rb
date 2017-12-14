class RecordsController < ApplicationController

  def index
    render(
        status: 200,
        json: Record.all
      )
  end

end
