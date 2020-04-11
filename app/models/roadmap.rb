class Roadmap < ApplicationRecord
  belongs_to :user
  has_many :themes, dependent: :destroy
  validates :name, presence: true, length: { minimum: 3 }
end
