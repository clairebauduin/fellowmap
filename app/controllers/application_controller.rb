class ApplicationController < ActionController::Base
  before_action :authenticate_user!


  def after_sign_in_path_for(resource)
    @roadmap = Roadmap.find_by(user: current_user)
    if @roadmap
      roadmap_path(@roadmap)
    else
      stored_location_for(resource) || new_roadmap_path
    end
  end
end
