class ChangeTableImprovements < ActiveRecord::Migration[6.0]
  def change
    change_table :improvements do |t|
      t.references :theme, null: false, foreign_key: true
    end
  end
end
