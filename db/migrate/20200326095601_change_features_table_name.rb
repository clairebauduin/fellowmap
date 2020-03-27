class ChangeFeaturesTableName < ActiveRecord::Migration[6.0]
  def change
    rename_table :features, :improvements
  end
end
