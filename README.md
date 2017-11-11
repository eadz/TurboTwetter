# README


## How this app was made

Fresh rails 5.1 app:

`rails new Twetter -d sqlite3 --webpack=react --skip-coffee`

add webpacker-react gem to your GemFile

`gem 'webpacker-react', "~> 0.3.2"`

run
`bundle`

`run ./bin/yarn add webpacker-react`

# Create models and controllers
User and Tweet model, session and tweet controllers

using `rails g model` and `rails g controller`
