class Scientist < ActiveRecord::Base
  after_initialize :default_discipline

  has_many :experiments, dependent: :destroy

  private

  def default_discipline
    self.discipline ||= "General Science"
  end
end
