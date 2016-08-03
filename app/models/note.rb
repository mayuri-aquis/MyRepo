class Note < ActiveRecord::Base
	belongs_to :article, foreign_key: :thing_id
	validates :note,
			presence: true,
			length: { minimum: 15 }
end
