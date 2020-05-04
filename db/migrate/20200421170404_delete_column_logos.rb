class DeleteColumnLogos < ActiveRecord::Migration[6.0]
  def change
    change_table :logos do |t|
      t.remove_references :roadmap
    end
  end
end
