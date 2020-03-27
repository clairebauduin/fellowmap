class CreateKpis < ActiveRecord::Migration[6.0]
  def change
    create_table :kpis do |t|
      t.references :column, null: false, foreign_key: true
      t.string :emoji
      t.text :description

      t.timestamps
    end
  end
end
