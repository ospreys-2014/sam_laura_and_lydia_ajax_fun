class CoolThings < ActiveRecord::Migration
  def change
    create_table :cool_things do |t|
      t.string :thing
    end
  end
end
