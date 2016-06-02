class Scientist < ActiveRecord::Base
  after_initialize :default_discipline

  has_many :experiments, dependent: :destroy

  validate :no_more_dr_oz

  validates :name, presence: true, uniqueness: true

  private

  def default_discipline
    self.discipline ||= "General Science"
  end

  def no_more_dr_oz
    if self.name == "Mehmet Oz"
      errors.add(:name, "- No more Dr. Oz, he's beneath even our standards.")
    end
  end
end
