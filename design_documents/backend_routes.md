# Backend Routes

### HTML ###
* `GET/` `StaticPagesController#Root`

### API ###
* `users`
  * `POST/api/users` - sign up
* `Session`
  * `POST/api/session` - log in
  * `DELETE/api/session` - log out
* `transactions`
  * `GET api/portfolio/transactions` - get all for a user transactions
  * `GET api/portfolio/transaction/:id` - get specific transaction
  * `POST api/portfolio/transaction` - create transaction
* `bitcoin`
  * `GET api/bitcoin/price` - get the most recent price
  * `GET api/bitcoin/price/:range` - get a range of prices
* `litecoin`
  * `GET api/litecoin/price` - get the most recent price
  * `GET api/litecoin/price/:range` - get a range of prices
* `ethereum`
  * `GET api/ethereum/price` - get the most recent price
  * `GET api/ethereum/price/:range` - get a range of prices
* `bitcoincash`
  * `GET api/bitcoincash/price` - get the most recent price
  * `GET api/bitcoincash/price/:range` - get a range of prices
