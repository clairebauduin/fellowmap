class ThemesController < ApplicationController
  before_action :set_roadmap, only: [:create, :destroy, :update]
  before_action :set_themes, only: [:create, :destroy]
  before_action :set_theme, only: [:destroy, :update]

  def create
    @theme = Theme.new(name: "yop", description: "yop", temporality: "yop", roadmap_id: @roadmap.id)
    if @theme.save
      @kpi = Kpi.new(description: "Ton objectif business", theme_id: @theme.id)
      @kpi.save
      @improvement = Improvement.new(name: "Amélioration", description: "Description de l'amélioration apportée",
                                     emoji: "🚀", theme_id: @theme.id)
      @improvement.save
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

  def update
    if @theme.update(theme_params)
      redirect_to(@roadmap)
    else
      redirect_to(@roadmap)
      flash[:notice] = "Impossible d'éditer l'objectif'"
    end
  end

  def set_roadmap
    @roadmap = Roadmap.find(params[:roadmap_id])
  end

  def set_theme
    @theme = Theme.find(params[:id])
  end

  def set_themes
    @themes = Theme.where(roadmap_id: @roadmap.id)
  end

  def theme_params
    params.require(:theme).permit(:temporality, :name, :description, :roadmap_id)
  end
end
