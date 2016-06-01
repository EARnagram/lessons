class Log < ActiveRecord::Base
  belongs_to :experiment

  validates :comment, length: {
    in: 7..600,
    too_short: "must have at least %{count} words",
    too_long: "must have at most %{count} words"
  }
end
