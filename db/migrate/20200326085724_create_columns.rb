class CreateColumns < ActiveRecord::Migration[6.0]
  def change
    create_table :columns do |t|
      t.references :roadmap, null: false, foreign_key: true
      t.string :temporality
      t.string :name
      t.text :description

      t.timestamps
    end
  end
end
