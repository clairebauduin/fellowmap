class CreateFeatures < ActiveRecord::Migration[6.0]
  def change
    create_table :features do |t|
      t.references :column, null: false, foreign_key: true
      t.string :name
      t.text :description
      t.string :emoji

      t.timestamps
    end
  end
end
