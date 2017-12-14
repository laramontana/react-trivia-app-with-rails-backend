# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Record.create(
    [
      { user_name: 'Liza', score: 400, date: '2017-12-14 10:00:00' },
      { user_name: 'Anton', score: 200, date: '2017-12-14 12:12:17' },
      { user_name: 'John', score: 300, date: '2017-12-14 14:31:17' }
    ]
  )
