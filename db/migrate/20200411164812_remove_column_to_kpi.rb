class RemoveColumnToKpi < ActiveRecord::Migration[6.0]
  def change
    remove_column :kpis, :emoji
  end
end
