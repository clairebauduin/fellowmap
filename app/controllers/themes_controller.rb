class ThemesController < ApplicationController
  before_action :set_roadmap, only: [:create, :destroy]
  before_action :set_themes, only: [:create, :destroy]
  before_action :set_theme, only: [:destroy]

  def create
    @roadmap = Roadmap.find(params[:roadmap_id])
    @theme = Theme.new(name: "yop", description: "yop", temporality: "yop", roadmap_id: @roadmap.id)
    if @theme.save!
      redirect_to(@roadmap)
      flash[:notice] = "Colonne crée"
    else
      redirect_to(@roadmap)
      flash[:notice] = "Impossible de créer la colonne"
    end
  end

  def destroy
    @theme.destroy
    if !@themes.any?
      redirect_to(@roadmap)
      flash[:notice] = "Thème supprimé"
    else
      redirect_to(@roadmap)
      flash[:notice] = "Thème supprimé"
    end
  end

  def set_roadmap
    @roadmap = Roadmap.find(params[:roadmap_id])
  end

  def set_theme
    @theme = Theme.find(params[:id])
  end

  def set_themes
    @themes = Theme.where(:roadmap_id.in?(current_user.roadmap_ids))
  end

  def theme_params
    params.require(:theme).permit(:temporality, :name, :description, :roadmap_id)
  end
end
