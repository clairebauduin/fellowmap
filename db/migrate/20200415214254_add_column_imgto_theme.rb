class AddColumnImgtoTheme < ActiveRecord::Migration[6.0]
  def change
    add_column :themes, :cover, :string
  end
end
