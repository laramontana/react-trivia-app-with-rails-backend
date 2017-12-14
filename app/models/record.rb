class Record < ApplicationRecord
  validates :user_name, presence: true
  validates :date, presence: true
  validates :score, presence: true
  
end
