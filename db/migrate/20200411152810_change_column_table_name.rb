class ChangeColumnTableName < ActiveRecord::Migration[6.0]
  def change
    rename_table :columns, :themes
  end
end
