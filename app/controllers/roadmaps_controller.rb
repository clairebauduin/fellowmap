class RoadmapsController < ApplicationController
  before_action :set_roadmap, only: [:edit, :show, :update, :destroy]
  before_action :set_roadmaps, only: [:show, :new, :create, :edit, :update]
  skip_before_action :authenticate_user!, only: [:show]

  def show
  end

  def new
    @roadmap = Roadmap.new
  end

  def create
    @roadmap = Roadmap.new(roadmap_params)
    @roadmap.user = current_user
    if @roadmap.save
      render :show
    else
      render :new
    end
  end

  def edit
  end

  def update
    if @roadmap.update(roadmap_params)
      render :show
    else
      render :edit
    end
  end

  def destroy
    @roadmap.destroy

    @roadmap = Roadmap.find_by(user: current_user)
    if @roadmap
      redirect_to roadmap_path(@roadmap)
    else
      new_roadmap_path
    end
  end

  private

  def set_roadmap
    @roadmap = Roadmap.find(params[:id])
  end

  def set_roadmaps
    @roadmaps = Roadmap.all.where(user: current_user)
  end

  def roadmap_params
    params.require(:roadmap).permit(:name, :user)
  end
end
