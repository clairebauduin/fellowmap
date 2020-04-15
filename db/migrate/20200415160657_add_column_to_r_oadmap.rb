class AddColumnToROadmap < ActiveRecord::Migration[6.0]
  def change
    add_column :roadmaps, :vision, :text
  end
end
