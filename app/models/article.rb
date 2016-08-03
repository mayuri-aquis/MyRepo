class Article < ActiveRecord::Base

	validates_presence_of :title
	validates :text,
			presence: true,
			length: { minimum: 15 }

	has_many :notes, foreign_key: :thing_id
	accepts_nested_attributes_for :notes, allow_destroy: :true

end
