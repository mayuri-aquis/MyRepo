class CreateNotes < ActiveRecord::Migration
  def change
    create_table :notes do |t|
			t.text :note
			t.integer :thing_id
 			t.string :thing_type
      t.timestamps null: false
    end
  end
end
