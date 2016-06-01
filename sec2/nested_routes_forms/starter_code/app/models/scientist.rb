class Scientist < ActiveRecord::Base
  after_initialize :default_discipline

  validates :name, presence: true, uniqueness: true

  has_many :experiments, dependent: :destroy

  private

  def default_discipline
    self.discipline ||= "General Science"
  end
end
