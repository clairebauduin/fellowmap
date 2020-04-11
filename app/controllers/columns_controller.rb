class ColumnsController < ApplicationController
  before_action :set_roadmap, only: [:create, :destroy]
  before_action :set_columns, only: [:create, :destroy]
  before_action :set_column, only: [:destroy]

  def create
    @roadmap = Roadmap.find(params[:roadmap_id])
    @column = Column.new(name: "yop", description: "yop", temporality: "yop", roadmap_id: @roadmap.id)
    if @column.save!
      redirect_to(@roadmap)
      flash[:notice] = "Colonne crée"
    else
      redirect_to(@roadmap)
      flash[:notice] = "Impossible de créer la colonne"
    end
  end

  def destroy
    @column.destroy
    if !@columns.any?
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

  def set_column
    @column = Column.find(params[:id])
  end

  def set_columns
    @columns = Column.where(:roadmap_id.in?(current_user.roadmap_ids))
  end

  def column_params
    params.require(:column).permit(:temporality, :name, :description, :roadmap_id)
  end
end
