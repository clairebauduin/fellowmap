class RemoveTableImprovements < ActiveRecord::Migration[6.0]
  def change
    change_table :improvements do |t|
      t.remove_references :column
    end
  end
end
