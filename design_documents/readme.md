# Welcome to Coinspace

Coinspace is a paper trading cryptocurrency exchange. Users can make an account and immediately begin making trades of Bitcoin, Bitcoin Cash, Ethereum and Litecoin. Trades are recorded and the value of the portfolio sum is tracked. The project is meant to be a working clone of coinbase.com without the transfer of coin or monies.

## Design
The Coinspace web app was designed and built from scratch in 10 days. The proposal was prepared to implement MVPS to achieve functionality.

## Technologies
* Backend:
  * The full stack project employs Ruby on Rails 5.2.0.
  * Databases are managed by PostgresSQL

* Frontend:
  * The front end and UI are implemented using React/Redux and JavaScript..
  * The back-end uses SQL queries for filtering data and front end uses VanillaDOM manipulation.
  * The webpage designing was done using css and scss and icons were used from coinbase.com

* Other technologies:
  * Jbuilder
  * AJAX
  * webpack
  * React DOM
  * React Router
  * React History
  * Recharts (documents can be found [here](http://recharts.org/))

* The site is hosted on heroku can be viewed [here](https://aa-coinspace.herokuapp.com/)

## Features

* Authenication
  * Members can log-in or sign-up
  * Demo access available for previewing
  * User sessions are back-end authenticated
  * Session tokens are maintained in the browser, and status is saved through refresh
* Portfolio
  * Users can view their portfolio and see their current coin amount for each of the four available coins
  ![portfolio_image](Portfolio_view.png)
  * Portfolio keeps a record of each transactions, including execution time, price, coin amount, and coin type.
  ![recent_transaction_image](recent_transactions.png)
* Trades
  * Users can implement trades in real time that are reflected in their portfolio.
  * Logged in users can buy coins at the current price or sell the coins in their portfolio.
  * Transactions can be retrieved and created, but cannot be deleted or edited.
* Coin overview  
  * Users can read about each of the coins available for purchase and see a detail of the price history for the last 30 days.

## Current challenges and future implementations:
  * Add live price detail using an API
    * Adding a API that write to the SQL will allow for live pricing and will not effect other systems.
  * Your suggestions and feedback are always welcome.
