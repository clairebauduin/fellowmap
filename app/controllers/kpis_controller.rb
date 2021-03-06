class KpisController < ApplicationController
  before_action :set_theme, only: [:create, :destroy]
  before_action :set_kpis, only: [:create, :destroy]
  before_action :set_kpi, only: [:destroy, :update]
  before_action :set_roadmap, only: [:create, :destroy, :update]
  skip_before_action :verify_authenticity_token, raise: false
  respond_to :html, :js

  def create
    if @new_kpi.save
      respond_to do |format|
        format.js
      end
    else
      redirect_to(@roadmap)
      flash[:notice] = "Impossible de créer l'objectif"
    end
  end

  def destroy
    @kpi.destroy
    if !@kpis.any?
      redirect_to(@roadmap)
    else
      redirect_to(@roadmap)
    end
  end

  def update
    if @kpi.update(kpi_params)
      respond_to do |format|
        format.html
      end
    else
      redirect_to(@roadmap)
      flash[:notice] = "Impossible d'éditer l'objectif'"
    end
  end

  private

  def set_roadmap
    @roadmap = Roadmap.find(params[:roadmap_id])
  end

  def set_theme
    @theme = Theme.find(params[:theme_id])
  end

  def set_kpi
    @kpi = Kpi.find(params[:id])
  end

  def set_kpis
    @kpis = Kpi.where(theme_id: @theme.id)
  end

  def kpi_params
    params.require(:kpi).permit(:description, :theme_id)
  end
end
