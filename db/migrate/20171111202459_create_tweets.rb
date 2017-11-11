class CreateTweets < ActiveRecord::Migration[5.1]
  def change
    create_table :tweets do |t|
      t.references :user, foreign_key: true
      t.text :tweet
      t.string :tweet_type
      t.string :source
      t.integer :recipient_id
      t.integer :in_reply_to_status_id

      t.timestamps
    end
  end
end
