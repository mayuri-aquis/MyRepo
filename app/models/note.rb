class Note < ActiveRecord::Base
	belongs_to :article, foreign_key: :thing_id
	validates_presence_of :note
	validates :note,
			length: { minimum: 15 }

	before_save { |a| puts a.errors.inspect + "hhhhhhhhhhhh" }
end
