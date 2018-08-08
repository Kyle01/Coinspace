### Frontend Routes ###

Our components are organized as follows:

* `Root`
  * `App`
    * `Navbar`
    * (Main component goes here)
    * `Footer`

The following routes, defined in App, will render components between Navbar and Footer

* `/`
  * `SessionForm`
* `/dashboard`
  * `SessionForm`
* `/login`
  * `SessionForm`
* `/signup`
  * `SessionForm`
* `/buy`
  * `TransactionForm`
* `/sell`
  * `TransactionForm`
* `/assets/bitcoin`
  * `CoinComponent`
* `/assets/ethereum`
  * `CoinComponent`
* `/assets/litecoin`
  * `CoinComponent`
* `/assets/bitcoincash`
  * `CoinComponent`
* `/accounts/:userId`
  * `SessionComponent`
