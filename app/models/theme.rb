class Theme < ApplicationRecord
  belongs_to :roadmap
  has_many :improvements, dependent: :destroy
  has_many :kpis, dependent: :destroy
  has_one_attached :cover
  mount_uploader :cover, CoverUploader
end
