class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:home]

  def home
    @roadmaps = Roadmap.all.where(user: current_user)
  end
end
