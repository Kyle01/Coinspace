# Backend Routes

### HTML ###
* Get / StaticPagesController#Root

### API ###
* users
  * POST/api/users - sign up
* Session
  * POST/api/session - log in
  * DELETE/api/session - log out
* Portfolio
  * get api/portfolio - gets portfolio
* positions  
  * Get api/portfolio/positions - returns all positions
  * GET api/portfolio/position - get a position  
* trades
  * GET api/portfolio/transactions - get all transactions
  * GET api/portfolio/transaction(id) - get specific transaction
  * POST api/portfolio/transaction - create transaction
