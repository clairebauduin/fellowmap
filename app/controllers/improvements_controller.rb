class ImprovementsController < ApplicationController
  before_action :set_theme, only: [:create, :destroy]
  before_action :set_improvements, only: [:create, :destroy]
  before_action :set_improvement, only: [:destroy, :update]
  before_action :set_roadmap, only: [:create, :destroy, :update]

  def create
    @new_improvement = Improvement.new(name: "Amélioration", description: "Description de l'amélioration apportée", emoji: "🚀", theme_id: @theme.id)
    if @new_improvement.save!
      redirect_to(@roadmap)
      flash[:notice] = "Objectif crée"
    else
      redirect_to(@roadmap)
      flash[:notice] = "Impossible de créer l'objectif"
    end
  end

  def destroy
    @improvement.destroy
    if !@improvements.any?
      redirect_to(@roadmap)
      flash[:notice] = "Amélioration supprimée"
    else
      redirect_to(@roadmap)
      flash[:notice] = "Amélioration supprimée"
    end
  end

  def update
    if @improvement.update(improvement_params)
      redirect_to(@roadmap)
      flash[:notice] = "Amélioration modifiée"
    else
      redirect_to(@roadmap)
      flash[:notice] = "Impossible d'éditer l'amélioration"
    end
  end

  private

  def set_roadmap
    @roadmap = Roadmap.find(params[:roadmap_id])
  end

  def set_theme
    @theme = Theme.find(params[:theme_id])
  end

  def set_improvement
    @improvement = Improvement.find(params[:id])
  end

  def set_improvements
    @improvements = Improvement.where(theme_id: @theme.id)
  end

  def improvement_params
    params.require(:improvement).permit(:name, :description, :emoji, :theme_id)
  end
end
