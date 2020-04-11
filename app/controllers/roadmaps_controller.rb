class RoadmapsController < ApplicationController
  before_action :set_roadmap, only: [:edit, :show, :update, :destroy]
  before_action :set_roadmaps, only: [:show, :new, :create, :edit, :update, :destroy]
  skip_before_action :authenticate_user!, only: [:show]

  def show
    @theme = Theme.new
    @themes = Theme.where(:roadmap_id.in?(current_user.roadmap_ids))
  end

  def new
    @roadmap = Roadmap.new
  end

  def create
    @roadmap = Roadmap.new(roadmap_params)
    @roadmap.user = current_user
    if @roadmap.save
      redirect_to(@roadmap)
      flash[:notice] = "Roadmap crée"
    else
      render :new
      flash[:notice] = "Impossible de créer la roadmap"
    end
  end

  def edit
  end

  def update
    if @roadmap.update(roadmap_params)
      redirect_to(@roadmap)
      flash[:notice] = "Roadmap modifiée"
    else
      render :edit
      flash[:notice] = "Impossible d'éditer la roadmap"
    end
  end

  def destroy
    @roadmap.destroy
    if !@roadmaps.any?
      redirect_to(new_roadmap_path)
      flash[:notice] = "Roadmap supprimée"
    else
      redirect_to(roadmap_path(@roadmaps.last.id))
      flash[:notice] = "Roadmap supprimée"
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
