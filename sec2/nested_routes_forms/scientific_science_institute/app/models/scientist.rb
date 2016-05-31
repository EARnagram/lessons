class Scientist < ActiveRecord::Base
  after_initialize :default_spooky

  has_many :experiments, dependent: :destroy

  private

  def default_spooky
    self.spooky = true if self.spooky.nil?
  end
end
