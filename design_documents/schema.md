
# Schema #

## `Users` ##
column name     | data type   | details
-------------   |-------------| --------------------
id              | integer     | primary ID
username        | string      | not null, indexed, unique
password_digest | string      | not null
session_token   | string      | not null, indexed, unique
created_at      | datetime    | not null
updated_at      | datetime    | not null

* index on `id, unique: true`
* `portfolioId` references `portfolios`

## `Transactions` ##
column name     | data type   | details
-------------   |-------------| ---------------------
id              | Integer     | primary ID, indexed, unique
userId          | Integer     | foreign Id
coin            | String      | not null, verified string 
price           | float       | not null
size            | String      | not null
buy?            | boolean     | not null
created_at      | datetime    | not null
updated_at      | datetime    | not null

* index on `id, unique: true`

## `Bitcoin` ##
column name     | data type         | details
-------------   |-------------      | ---------------------
Price           | Price             | float
date            | datetime          | not null
created_at      | datetime          | not null
updated_at      | datetime          | not null

## `Litecoin` ##
column name     | data type         | details
-------------   |-------------      | ---------------------
Price           | Price             | float
date            | datetime          | not null
created_at      | datetime          | not null
updated_at      | datetime          | not null

## `Ethereum` ##
column name     | data type         | details
-------------   |-------------      | ---------------------
Price           | Price             | float
date            | datetime          | not null
created_at      | datetime          | not null
updated_at      | datetime          | not null

## `Bitcoin_Cash` ##
column name     | data type         | details
-------------   |-------------      | ---------------------
Price           | Price             | float
date            | datetime          | not null
created_at      | datetime          | not null
updated_at      | datetime          | not null
