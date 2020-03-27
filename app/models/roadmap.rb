class Roadmap < ApplicationRecord
  belongs_to :user
  has_many :columns, dependent: :destroy
  validates :name, presence: true, length: { minimum: 3 }
end
