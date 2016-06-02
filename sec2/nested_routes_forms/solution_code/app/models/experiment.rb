class Experiment < ActiveRecord::Base
  belongs_to :scientist
  has_many   :logs, dependent: :destroy

  # needed for nested forms! allow_destroy is a method to make the
  # #destroy parent cascades to children
  accepts_nested_attributes_for :logs, allow_destroy: true
end
