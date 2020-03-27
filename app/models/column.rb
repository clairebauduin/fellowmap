class Column < ApplicationRecord
  belongs_to :roadmap
  has_many :improvements, dependent: :destroy
  has_many :kpis, dependent: :destroy
end
