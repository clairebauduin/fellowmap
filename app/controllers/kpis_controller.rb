class KpisController < ApplicationController
  before_action :set_theme, only: [:create, :destroy]
  before_action :set_kpis, only: [:create]
  before_action :set_roadmap, only: [:create, :destroy, :update]

  def create
    @new_kpi = Kpi.new(description: "Ton objectif business", theme_id: @kpis.last.theme_id)
    if @new_kpi.save!
      redirect_to(@roadmap)
      flash[:notice] = "Objectif crée"
    else
      redirect_to(@roadmap)
      flash[:notice] = "Impossible de créer l'objectif"
    end
  end

  def destroy
    @kpi.destroy
    if !@kpis.any?
      redirect_to(@roadmap)
      flash[:notice] = "Thème supprimé"
    else
      redirect_to(@roadmap)
      flash[:notice] = "Thème supprimé"
    end
  end

  def update
    @kpi = Kpi.find(params[:id])
    if @kpi.update(kpi_params)
      redirect_to(@roadmap)
      flash[:notice] = "Kpi modifié"
    else
      redirect_to(@roadmap)
      flash[:notice] = "Impossible d'éditer le Kpi"
    end
  end

  private

  def set_roadmap
    @roadmap = Roadmap.find(params[:roadmap_id])
  end

  def set_theme
    @theme = Theme.find(params[:theme_id])
  end

  def set_kpis
    @kpis = Kpi.where(theme_id: @theme.id)
  end

  def kpi_params
    params.require(:kpi).permit(:description, :theme_id)
  end
end
