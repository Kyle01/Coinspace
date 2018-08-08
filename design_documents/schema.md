
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

* index on `username, unique: true`
* index on `session_token, unique: true`

## `Portfolio` ##
column name     | data type   | details
-------------   |-------------| ---------------------
id              | Integer     | primary ID, index, unique
userId          | String      | foreign Id
created_at      | datetime    | not null
updated_at      | datetime    | not null

* `userId` references `users`
* index on `id, unique: true`

## `Positions` ##
column name     | data type   | details
-------------   |-------------| ----------------
id              | Integer     | primary ID, indexed, unique
portfolioId     | Integer     | foreign Id
name            | String      | no null
size            | float       | no null
created_at      | datetime    | not null
updated_at      | datetime    | not null


* index on `id, unique: true`
* `portfolioId` references `portfolios`

## `Transactions` ##
column name     | data type   | details
-------------   |-------------| ---------------------
id              | Integer     | primary ID, indexed, unique
portfolioId     | Integer     | foreign Id
coinId          | String      | foreign Id
price           | float       | not null
size            | String      | not null
buy?            | boolean     | not null
timeStamps      | date        | not null
created_at      | datetime    | not null
updated_at      | datetime    | not null

* index on `id, unique: true`
* `portfolioId` references `portfolios`
* `coinId` references `Coins`

## `Coins` ##
column name     | data type         | details
-------------   |-------------      | ---------------------
id              | Integer           | primary ID
name            | String            | not null, indexed
Price           | Price             | custom data type(float, date)
historicalPrice | array(of prices)  | no null
created_at      | datetime          | not null
updated_at      | datetime          | not null

* index on `name, unique: true`
