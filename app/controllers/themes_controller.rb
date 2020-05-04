class ThemesController < ApplicationController
  before_action :set_roadmap, only: [:create, :destroy, :update]
  before_action :set_themes, only: [:create, :destroy]
  before_action :set_theme, only: [:destroy, :update]

  def create
    if @themes.count == 0
      @theme = Theme.new(name: "", description: "", temporality: "Court terme", roadmap_id: @roadmap.id)
    elsif @themes.count == 1
      @theme = Theme.new(name: "", description: "", temporality: "Moyen terme", roadmap_id: @roadmap.id)
    else
      @theme = Theme.new(name: "", description: "", temporality: "Long terme", roadmap_id: @roadmap.id)
    end
    @emojis = []
    Emoji.all.each do |emoji|
      @emojis << emoji.raw
    end
    if @theme.save
      @new_kpi = Kpi.new(description: "", theme_id: @theme.id)
      @new_kpi.save
      @new_improvement = Improvement.new(name: "", description: "",
                                     emoji: "🚀", theme_id: @theme.id)
      @new_improvement.save
      respond_to do |format|
        format.js
      end
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
      respond_to do |format|
        format.html
      end
      redirect_to(@roadmap)
    else
      redirect_to(@roadmap)
      flash[:notice] = "Impossible d'éditer l'objectif"
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
    params.require(:theme).permit(:temporality, :name, :description, :cover, :cover_cache, :roadmap_id)
  end
end
