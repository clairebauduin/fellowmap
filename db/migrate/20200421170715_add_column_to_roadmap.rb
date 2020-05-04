class AddColumnToRoadmap < ActiveRecord::Migration[6.0]
  def change
    add_column :roadmaps, :logo, :string
  end
end
