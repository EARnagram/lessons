class Scientist < ActiveRecord::Base
  has_many :experiments, dependent: :destroy
end
