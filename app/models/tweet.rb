class Tweet < ApplicationRecord
  belongs_to :user

  scope :public_timeline, -> { order('created_at desc') }
end
