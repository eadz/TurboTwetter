class Tweet < ApplicationRecord
  belongs_to :user

  scope :public_timeline, -> {
    where(tweet_type: nil).order('created_at desc').includes(:user)
  }

  validates :tweet, presence: true

  def serializable_hash(_)
    {
      id: id,
      tweet: tweet,
      username: user.username
    }
  end
end
