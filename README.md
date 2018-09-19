# Welcome to Coinspace

Coinspace is a paper trading cryptocurrency exchange. Users can make an account and immediately begin making trades of Bitcoin, Bitcoin Cash, Ethereum and Litecoin. Trades are recorded, and the value of the portfolio sum is tracked. The project is meant to be a working clone of coinbase.com without the transfer of coin or monies.

## Design
The Coinspace web app was designed and built from scratch in 10 days. The proposal was prepared to implement MVPS to achieve functionality.

## Technologies
* Backend:
  * The full stack project employs Ruby on Rails 5.2.0.
  * Databases are managed by PostgresSQL
  
  Displayed below is the `user_schema`: 
  
  ~~~~~
  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.float "btc_holdings", null: false
    t.float "e_holdings", null: false
    t.float "ltc_holdings", null: false
    t.float "bch_holdings", null: false
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end
  ~~~~~

* Frontend:
  * The front end and UI are implemented using React/Redux and JavaScript.
  * The back-end uses SQL queries for filtering data and front end uses VanillaDOM manipulation.
  * The webpage design was done using css and scss. Icons and logos were used from coinbase.com
  
  Below is the `App.jsx` React file describing the components and their paths: 
  
  ~~~~
  const App = () => (
  <div>
    <header>
      <NavbarContainer />
    </header>
    <Switch>
      <Route exact path ="/" component={HomePage}/>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={UserFormContainer} />
      <ProtectedRoute exact path="/dashboard" component={DashboardContainer} />
      <ProtectedRoute exact path="/buy/:coin" component={TradeContainer} />
      <ProtectedRoute exact path="/sell/:coin" component={TradeContainer} />
      <ProtectedRoute exact path="/account" component={AccountContainer} />
      <ProtectedRoute exact path="/assets/:coin" component={Coinsum} />
      <Route path="/*" component={NotFound}></Route>
    </Switch>
  </div>
  );
  ~~~~

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
  * Portfolio keeps a record of each transactions, including execution time, price, coin amount, and coin type
* Trades
  * Users can implement trades in real time that are reflected in their portfolio.
  * Logged in users can buy coins at the current price or sell the coins in their portfolio.
  * Transactions can be retrieved and created, but cannot be deleted or edited.
* Coin overview  
  * Users can read about each of the coins available for purchase and see a detail of the price history for the last 30 days.
  * The price array is created by the controller using the below code. In the future it would be possible to allow for a range to be passed instead of a fixed number, adding valuable functionality. 
  
  ~~~~
    def index
    prices = Price.first(30)
    @bitcoin_price_array = []
    @ethereum_price_array = []
    @litecoin_price_array = []
    @bitcoin_cash_price_array = []
    prices.each do |price|
      @bitcoin_price_array << price.btc_price
      @ethereum_price_array << price.e_price
      @litecoin_price_array << price.ltc_price
      @bitcoin_cash_price_array << price.btcc_price
    end
  end
  ~~~~

## Current challenges and future implementations:
  * Add live price detail using an API
    * Adding a API that write to the SQL will allow for live pricing and will not effect other systems.
  * Your suggestions and feedback are always welcome.
