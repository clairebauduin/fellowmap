class ChangeTablesChildofColumn < ActiveRecord::Migration[6.0]
  def change
    change_table :kpis do |t|
      t.references :theme, null: false, foreign_key: true
      t.remove_references :column
    end
  end
end
